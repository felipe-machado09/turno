<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header card-header-primary card-header-icon">
            <div class="card-icon">
              <i class="material-icons">assignment</i>
            </div>
            <h4 class="card-title">
              {{ $t('global.table') }}
              <strong>{{ $t('pages.balance.title') }}</strong>
            </h4>
          </div>
          <div class="card-body">
            <router-link
              id="add-income-button"
              class="btn btn-primary"
              v-if="$can(xprops.permission_prefix + 'create')"
              :to="{ name: 'incomes.create' }"
            >
              <i class="material-icons">
                add
              </i>
              {{ $t('global.add_incomes') }}
            </router-link>
            <router-link
              id="add-expense-button"
              class="btn btn-primary"
              v-if="$can(xprops.permission_prefix + 'create')"
              :to="{ name: 'expenses.create' }"
            >
              <i class="material-icons">
                add
              </i>
              {{ $t('global.add_expenses') }}
            </router-link>
            <button
              type="button"
              class="btn btn-default"
              @click="fetchIndexData"
              :disabled="loading"
              :class="{ disabled: loading }"
            >
              <i class="material-icons" :class="{ 'fa-spin': loading }">
                refresh
              </i>
              {{ $t('global.refresh') }}
            </button>
          </div>
          <div class="card-body text-center" v-if="balance != null">
            <h3>{{ $t('global.your_balance_is') }} <b>$ {{ balance }} USD</b></h3>
            <h4>{{ $t('pages.expense.title_singular') }}: <b>$ {{ expenses }} USD</b></h4>
            <h4>{{ $t('pages.income.title_singular') }}: <b>$ {{ incomes }} USD</b></h4>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-md-12">
                <div class="table-overlay" v-show="loading">
                  <div class="table-overlay-container">
                    <material-spinner></material-spinner>
                    <span>Loading...</span>
                  </div>
                </div>
                <datatable
                  :columns="columns"
                  :data="data"
                  :total="total"
                  :query="query"
                  :xprops="xprops"
                  :HeaderSettings="false"
                  :pageSizeOptions="[10, 25, 50, 100]"
                >
                  <global-search :query="query" class="pull-left" />
                  <header-settings :columns="columns" class="pull-right" />
                </datatable>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import DatatableActions from '@components/Datatables/DatatableActions'
import TranslatedHeader from '@components/Datatables/TranslatedHeader'
import HeaderSettings from '@components/Datatables/HeaderSettings'
import GlobalSearch from '@components/Datatables/GlobalSearch'
import DatatableSingle from '@components/Datatables/DatatableSingle'
import DatatableEnum from '@components/Datatables/DatatableEnum'
import DatatablePictures from '@components/Datatables/DatatablePictures'
import DatatableCheckbox from '@components/Datatables/DatatableCheckbox'

export default {
  components: {
    GlobalSearch,
    HeaderSettings
  },
  data() {
    return {
      balance: null,
      incomes: null,
      expenses: null,
      columns: [
        {
          title: 'pages.transaction.fields.description',
          field: 'description',
          thComp: TranslatedHeader,
          sortable: true
        },
        {
          title: 'pages.transaction.fields.created_at',
          field: 'created_at',
          thComp: TranslatedHeader,
          sortable: true,
        },
        {
          title: 'pages.transaction.fields.type',
          field: 'type',
          thComp: TranslatedHeader,
          sortable: true,
          tdComp: DatatableEnum
        },
        {
          title: 'pages.transaction.fields.amount',
          field: 'amount',
          thComp: TranslatedHeader,
          sortable: true
        },
        // {
        //   title: 'global.actions',
        //   thComp: TranslatedHeader,
        //   tdComp: DatatableActions,
        //   visible: true,
        //   thClass: 'text-right',
        //   tdClass: 'text-right td-actions',
        //   colStyle: 'width: 150px;'
        // }
      ],
      query: { sort: 'id', order: 'desc', limit: 100, s: '' },
      xprops: {
        module: 'TransactionsIndex',
        route: 'balance',
        permission_prefix: 'transaction_'
      }
    }
  },
  beforeDestroy() {
    this.resetState()
  },
  computed: {
    ...mapGetters('TransactionsIndex', ['data', 'total', 'loading'])
  },
  watch: {
    query: {
      handler(query) {
        this.setQuery(query)
        this.fetchIndexData()
        this.fetchUserBalance()
      },
      deep: true
    }
  },
  methods: {
    ...mapActions('TransactionsIndex', [
      'fetchIndexData',
      'setQuery',
      'resetState'
    ]),
    fetchUserBalance() {
      axios.get('users/me').then(response => {
        this.balance = response.data.data.balance ?? 0
        this.expenses = response.data.data.expenses ?? 0
        this.incomes = response.data.data.incomes ?? 0
      })
    }
  }
}
</script>

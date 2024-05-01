<template>
  <div class="container-fluid">
    <form @submit.prevent="submitForm">
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header card-header-primary card-header-icon">
              <div class="card-icon">
                <i class="material-icons">edit</i>
              </div>
              <h4 class="card-title">
                {{ $t('global.edit') }}
                <strong>{{ $t('pages.income.title_singular') }}</strong>
              </h4>
            </div>
            <div class="card-body">
              <back-button></back-button>
            </div>
            <div class="card-body">
              <bootstrap-alert />
              <div class="row">
                <div class="col-md-12">
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.type,
                      'is-focused': activeField == 'type'
                    }"
                  >
                    <label class="bmd-label-floating required">{{
                      $t('pages.transaction.fields.type')
                    }}</label>
                    <v-select
                      name="type"
                      :key="'type-field'"
                      :value="entry.type"
                      :options="lists.type"
                      :reduce="entry => entry.value"
                      @input="updateType"
                      @search.focus="focusField('type')"
                      @search.blur="clearFocus"
                    />
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.amount,
                      'is-focused': activeField == 'amount'
                    }"
                  >
                    <label class="bmd-label-floating required">{{
                      $t('pages.transaction.fields.amount')
                    }}</label>
                    <input
                      class="form-control"
                      type="number"
                      step="0.01"
                      :value="entry.amount"
                      @input="updateAmount"
                      @focus="focusField('amount')"
                      @blur="clearFocus"
                      required
                    />
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.description,
                      'is-focused': activeField == 'description'
                    }"
                  >
                    <label class="bmd-label-floating required">{{
                      $t('pages.transaction.fields.description')
                    }}</label>
                    <textarea
                      class="form-control"
                      rows="5"
                      :value="entry.description"
                      @input="updateDescription"
                      @focus="focusField('description')"
                      @blur="clearFocus"
                      required
                    ></textarea>
                  </div>
                  <div class="form-group">
                    <label>{{
                      $t('pages.transaction.fields.check_image')
                    }}</label>
                    <attachment
                      :route="getRoute('transactions')"
                      :collection-name="'transaction_check_image'"
                      :media="entry.check_image"
                      :model-id="$route.params.id"
                      :max-file-size="2"
                      :component="'pictures'"
                      :accept="'image/*'"
                      @file-uploaded="insertCheckImageFile"
                      @file-removed="removeCheckImageFile"
                      :max-files="1"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="card-footer">
              <vue-button-spinner
                class="btn-primary"
                :status="status"
                :isLoading="loading"
                :disabled="loading"
              >
                {{ $t('global.save') }}
              </vue-button-spinner>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Attachment from '@components/Attachments/Attachment'

export default {
  components: {
    Attachment
  },
  data() {
    return {
      status: '',
      activeField: ''
    }
  },
  computed: {
    ...mapGetters('TransactionsSingle', ['entry', 'loading', 'lists'])
  },
  beforeDestroy() {
    this.resetState()
  },
  watch: {
    '$route.params.id': {
      immediate: true,
      handler() {
        this.resetState()
        this.fetchEditData(this.$route.params.id)
      }
    }
  },
  methods: {
    ...mapActions('TransactionsSingle', [
      'fetchEditData',
      'updateData',
      'resetState',
      'setUser',
      'setType',
      'setAmount',
      'setDescription',
      'insertCheckImageFile',
      'removeCheckImageFile',
      'setApproved'
    ]),
    updateUser(value) {
      this.setUser(value)
    },
    updateType(value) {
      this.setType(value)
    },
    updateAmount(e) {
      this.setAmount(e.target.value)
    },
    updateDescription(e) {
      this.setDescription(e.target.value)
    },
    updateApproved(e) {
      this.setApproved(e.target.checked)
    },
    getRoute(name) {
      return `${axios.defaults.baseURL}${name}/media`
    },
    submitForm() {
      this.updateData()
        .then(() => {
          this.$router.push({ name: 'incomes.index' })
          this.$eventHub.$emit('update-success')
        })
        .catch(error => {
          this.status = 'failed'
          _.delay(() => {
            this.status = ''
          }, 3000)
        })
    },
    focusField(name) {
      this.activeField = name
    },
    clearFocus() {
      this.activeField = ''
    }
  }
}
</script>

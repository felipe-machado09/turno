<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header card-header-primary card-header-icon">
            <div class="card-icon">
              <i class="material-icons">remove_red_eye</i>
            </div>
            <h4 class="card-title">
              {{ $t('global.view') }}
              <strong>{{ $t('pages.check.title_singular') }}</strong>
            </h4>
          </div>
          <div class="card-body">
            <back-button></back-button>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-md-12">
                <div class="table-responsive">
                  <div class="table">
                    <tbody>
                      <tr>
                        <td class="text-primary">
                          {{ $t('pages.transaction.fields.id') }}
                        </td>
                        <td>
                          {{ entry.id }}
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{ $t('pages.transaction.fields.user') }}
                        </td>
                        <td>
                          <datatable-single :row="entry" field="user.name">
                          </datatable-single>
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{ $t('pages.transaction.fields.type') }}
                        </td>
                        <td>
                          <datatable-enum :row="entry" field="type">
                          </datatable-enum>
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{ $t('pages.transaction.fields.amount') }}
                        </td>
                        <td>
                          {{ entry.amount }}
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{ $t('pages.transaction.fields.description') }}
                        </td>
                        <td>
                          {{ entry.description }}
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{ $t('pages.transaction.fields.check_image') }}
                        </td>
                        <td>
                          <datatable-pictures
                            :row="entry"
                            :field="'check_image'"
                          >
                          </datatable-pictures>
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{ $t('pages.transaction.fields.approved') }}
                        </td>
                        <td>
                          <datatable-checkbox :value="entry.approved">
                          </datatable-checkbox>
                        </td>
                      </tr>
                    </tbody>
                  </div>
                </div>
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
import DatatableSingle from '@components/Datatables/DatatableSingle'
import DatatableEnum from '@components/Datatables/DatatableEnum'
import DatatablePictures from '@components/Datatables/DatatablePictures'
import DatatableCheckbox from '@components/Datatables/DatatableCheckbox'

export default {
  components: {
    DatatableSingle,
    DatatableEnum,
    DatatablePictures,
    DatatableCheckbox
  },
  data() {
    return {}
  },
  beforeDestroy() {
    this.resetState()
  },
  computed: {
    ...mapGetters('TransactionsSingle', ['entry'])
  },
  watch: {
    '$route.params.id': {
      immediate: true,
      handler() {
        this.resetState()
        this.fetchShowData(this.$route.params.id)
      }
    }
  },
  methods: {
    ...mapActions('TransactionsSingle', ['fetchShowData', 'resetState'])
  }
}
</script>

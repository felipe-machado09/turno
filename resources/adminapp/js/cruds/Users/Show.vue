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
              <strong>{{ $t('pages.user.title_singular') }}</strong>
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
                          {{ $t('pages.user.fields.id') }}
                        </td>
                        <td>
                          {{ entry.id }}
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{ $t('pages.user.fields.name') }}
                        </td>
                        <td>
                          {{ entry.name }}
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{ $t('pages.user.fields.email') }}
                        </td>
                        <td>
                          {{ entry.email }}
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{ $t('pages.user.fields.email_verified_at') }}
                        </td>
                        <td>
                          {{ entry.email_verified_at }}
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{ $t('pages.user.fields.roles') }}
                        </td>
                        <td>
                          <datatable-list :row="entry" field="roles.title">
                          </datatable-list>
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{ $t('pages.user.fields.balance') }}
                        </td>
                        <td>
                          {{ entry.balance }}
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{ $t('pages.user.fields.is_admin') }}
                        </td>
                        <td>
                          <datatable-checkbox :value="entry.is_admin">
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
import DatatableList from '@components/Datatables/DatatableList'
import DatatableCheckbox from '@components/Datatables/DatatableCheckbox'

export default {
  components: {
    DatatableList,
    DatatableCheckbox
  },
  data() {
    return {}
  },
  beforeDestroy() {
    this.resetState()
  },
  computed: {
    ...mapGetters('UsersSingle', ['entry'])
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
    ...mapActions('UsersSingle', ['fetchShowData', 'resetState'])
  }
}
</script>

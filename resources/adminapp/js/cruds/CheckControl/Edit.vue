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
            <div class="card-body text-center">
              <img v-if="entry?.media[0]?.original_url" :src="entry?.media[0]?.original_url" height="450px">
              <h3>{{ $t('global.approve') }}?</h3>
              <span id="approve-button" class="btn btn-success" @click="updateApproved(true)">{{ $t('global.approve') }}</span>
              <span id="disapprove-button" class="btn btn-rose" @click="updateApproved(false)">{{ $t('global.disapprove') }}</span>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
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
      'resetState',
    ]),
    updateApproved(value) {
      axios.post('transactions/manage', {
        transaction_id: this.$route.params.id,
        action: value ? 'approve' : 'reject',
      }).then(response => {
        this.$router.push({ name: 'check.list' })
      })
    },
  }
}
</script>

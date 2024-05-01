function initialState() {
  return {
    entry: {
      id: null,
      user_id: null,
      type: null,
      amount: '',
      description: '',
      check_image: [],
      approved: false,
      created_at: '',
      updated_at: '',
      deleted_at: ''
    },
    lists: {
      user: [],
      type: []
    },
    loading: false
  }
}

const route = 'transactions'

const getters = {
  entry: state => state.entry,
  lists: state => state.lists,
  loading: state => state.loading
}

const actions = {
  storeData({ commit, state, dispatch }) {
    commit('setLoading', true)
    dispatch('Alert/resetState', null, { root: true })

    return new Promise((resolve, reject) => {
      let params = objectToFormData(state.entry, {
        indices: true,
        booleansAsIntegers: true
      })
      axios
        .post(route, params)
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          let message = error.response.data.message || error.message
          let errors = error.response.data.errors

          dispatch(
            'Alert/setAlert',
            { message: message, errors: errors, color: 'danger' },
            { root: true }
          )

          reject(error)
        })
        .finally(() => {
          commit('setLoading', false)
        })
    })
  },
  updateData({ commit, state, dispatch }) {
    commit('setLoading', true)
    dispatch('Alert/resetState', null, { root: true })

    return new Promise((resolve, reject) => {
      let params = objectToFormData(state.entry, {
        indices: true,
        booleansAsIntegers: true
      })
      params.set('_method', 'PUT')
      axios
        .post(`${route}/${state.entry.id}`, params)
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          let message = error.response.data.message || error.message
          let errors = error.response.data.errors

          dispatch(
            'Alert/setAlert',
            { message: message, errors: errors, color: 'danger' },
            { root: true }
          )

          reject(error)
        })
        .finally(() => {
          commit('setLoading', false)
        })
    })
  },
  setUser({ commit }, value) {
    commit('setUser', value)
  },
  setType({ commit }, value) {
    commit('setType', value)
  },
  setAmount({ commit }, value) {
    commit('setAmount', value)
  },
  setDescription({ commit }, value) {
    commit('setDescription', value)
  },
  insertCheckImageFile({ commit }, file) {
    commit('insertCheckImageFile', file)
  },
  removeCheckImageFile({ commit }, file) {
    commit('removeCheckImageFile', file)
  },
  setApproved({ commit }, value) {
    commit('setApproved', value)
  },
  setCreatedAt({ commit }, value) {
    commit('setCreatedAt', value)
  },
  setUpdatedAt({ commit }, value) {
    commit('setUpdatedAt', value)
  },
  setDeletedAt({ commit }, value) {
    commit('setDeletedAt', value)
  },
  fetchCreateData({ commit }) {
    axios.get(`${route}/create`).then(response => {
      commit('setLists', response.data.meta)
    })
  },
  fetchEditData({ commit, dispatch }, id) {
    axios.get(`${route}/${id}/edit`).then(response => {
      commit('setEntry', response.data.data)
      commit('setLists', response.data.meta)
    })
  },
  fetchShowData({ commit, dispatch }, id) {
    axios.get(`${route}/${id}`).then(response => {
      commit('setEntry', response.data.data)
    })
  },
  resetState({ commit }) {
    commit('resetState')
  }
}

const mutations = {
  setEntry(state, entry) {
    state.entry = entry
  },
  setUser(state, value) {
    state.entry.user_id = value
  },
  setType(state, value) {
    state.entry.type = value
  },
  setAmount(state, value) {
    state.entry.amount = value
  },
  setDescription(state, value) {
    state.entry.description = value
  },
  insertCheckImageFile(state, file) {
    state.entry.check_image.push(file)
  },
  removeCheckImageFile(state, file) {
    state.entry.check_image = state.entry.check_image.filter(item => {
      return item.id !== file.id
    })
  },
  setApproved(state, value) {
    state.entry.approved = value
  },
  setCreatedAt(state, value) {
    state.entry.created_at = value
  },
  setUpdatedAt(state, value) {
    state.entry.updated_at = value
  },
  setDeletedAt(state, value) {
    state.entry.deleted_at = value
  },
  setLists(state, lists) {
    state.lists = lists
  },
  setLoading(state, loading) {
    state.loading = loading
  },
  resetState(state) {
    state = Object.assign(state, initialState())
  }
}

export default {
  namespaced: true,
  state: initialState,
  getters,
  actions,
  mutations
}

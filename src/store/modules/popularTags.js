import popularTagsApi from '@/api/popularTags'

const state = {
  data: null,
  isLoading: false,
  error: null
}

export const mutationTypes = {
  getPopularTagsStart: '[PopularTags] Get PopularTags start',
  getPopularTagsSuccess: '[PopularTags] Get PopularTags success',
  getPopularTagsFailure: '[PopularTags] Get PopularTags failure'
}

export const actionTypes = {
  getPopularTags: '[PopularTags] Get PopularTags'
}

const mutations = {
  [mutationTypes.getPopularTagsStart](state) {
    state.isLoading = true
    state.data = null
  },
  [mutationTypes.getPopularTagsSuccess](state, payload) {
    state.isLoading = false
    state.data = payload
  },
  [mutationTypes.getPopularTagsFailure](state) {
    state.isLoading = false
  }
}

const actions = {
  [actionTypes.getPopularTags](context) {
    return new Promise(() => {
      context.commit(mutationTypes.getPopularTagsStart)
      popularTagsApi
        .getPopularTags()
        .then(tags => {
          context.commit(mutationTypes.getPopularTagsSuccess, tags)
        })
        .catch(() => {
          context.commit(mutationTypes.getPopularTagsFailure)
        })
    })
  }
}

export default {
  state,
  actions,
  mutations
}

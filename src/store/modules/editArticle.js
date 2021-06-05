import articleApi from '@/api/article'

const state = {
  isSubmitting: false,
  validationErrors: null,
  isLoading: false,
  article: null
}

export const mutationTypes = {
  updateArticleStart: '[updateArticle] update article Start',
  updateArticleSuccess: '[updateArticle] update article Success',
  updateArticleFailure: '[updateArticle] update article Failure',

  getArticleStart: '[getArticle] get article Start',
  getArticleSuccess: '[getArticle] get article Success',
  getArticleFailure: '[getArticle] get article Failure'
}

export const actionTypes = {
  getArticle: '[getArticle] get Article',
  updateArticle: '[updateArticle] update Article'
}

const mutations = {
  [mutationTypes.updateArticleStart](state) {
    state.isSubmitting = true
  },
  [mutationTypes.updateArticleSuccess](state) {
    state.isSubmitting = false
  },
  [mutationTypes.updateArticleFailure](state, payload) {
    state.isSubmitting = true
    state.validationErrors = payload
  },
  [mutationTypes.getArticleStart](state) {
    state.isLoading = true
  },
  [mutationTypes.getArticleSuccess](state, payload) {
    state.isLoading = false
    state.article = payload
  },
  [mutationTypes.getArticleFailure](state) {
    state.isLoading = false
  }
}

const actions = {
  [actionTypes.updateArticle](context, {slug, articleInput}) {
    return new Promise(resolve => {
      context.commit(mutationTypes.updateArticleStart)
      articleApi
        .updateArticle(slug, articleInput)
        .then(article => {
          context.commit(mutationTypes.updateArticleSuccess, article)
          resolve(article)
          console.log(article)
        })
        .catch(result => {
          context.commit(
            mutationTypes.updateArticleFailure,
            result.response.data.errors
          )
        })
    })
  },
  [actionTypes.getArticle](context, {slug}) {
    return new Promise(resolve => {
      context.commit(mutationTypes.getArticleStart)
      articleApi
        .getArticle(slug)
        .then(article => {
          context.commit(mutationTypes.getArticleSuccess, article)
          resolve(article)
        })
        .catch(() => {
          context.commit(mutationTypes.getArticleFailure)
        })
    })
  }
}

export default {
  state,
  actions,
  mutations
}

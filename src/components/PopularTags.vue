<template>
  <div>
    <McvLoading v-if='isLoading'/>
    <McvError v-if='error'/>
    <div class='sidebar' v-if='popularTags'>
      <p>Popular Tags</p>
      <div class='tag-list'>
        <routerLink v-for='tag in popularTags' :to="{name: 'tag', params: {slug: tag}}" :key="tag" class='tag-default tag-pill'>{{tag}}</routerLink>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import {actionTypes} from '@/store/modules/popularTags'
import McvLoading from '@/components/Loading'
import McvError from '@/components/Error'
export default {
  name: 'McvPopularTags',
  components: {McvError, McvLoading},
  computed: {
    ...mapState({
      isLoading: state => state.popularTags.isLoading,
      error: state => state.popularTags.error,
      popularTags: state => state.popularTags.data
    })
  },
  mounted() {
    this.$store.dispatch(actionTypes.getPopularTags)
  }
}
</script>

<style scoped>

</style>
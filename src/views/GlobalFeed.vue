<template>
  <div class='home-page'>
    <McvBanner/>
    <div class='container page'>
      <div class='row'>
        <div class='col-md-9'>
          <McvFeedToggler/>
          <McvFeed :apiUrl='apiUrl'/>
        </div>
        <div class='col-md-3'>
          <MvcPopularTags/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import McvFeed from '@/components/Feed'
import MvcPopularTags from '@/components/PopularTags'
import McvBanner from '@/components/Banner'
import McvFeedToggler from '@/components/FeedToggler'
export default {
  name: 'McvGlobalFeed',
  components: {McvBanner, MvcPopularTags, McvFeed, McvFeedToggler},
  data() {
    return {
      apiUrl: '/articles'
    }
  }
}
</script>

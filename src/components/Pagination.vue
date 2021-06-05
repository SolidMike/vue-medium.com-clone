<template>
  <ul class='pagination'>
    <li v-for='page in pages' :key='page' class='page-item' :class='{active: currentPage === page}'>
      <routerLink :to="{path: baseUrl, query: {page: page}}" class='page-link'>
        {{page}}
      </routerLink>
    </li>
  </ul>
</template>

<script>
import {range} from '@/helpers/utils'

export default {
  name: 'McvPagination',
  props: {
    total: {
      type: Number,
      required: true
    },
    limit: {
      type: Number,
      required: true
    },
    currentPage: {
      type: Number,
      required: true
    },
    baseUrl: {
      type: String,
      required: true
    }
  },
  computed: {
    pages() {
      const pagesCount = Math.ceil(this.total / this.limit)
      return range(1, pagesCount)
    }
  }
}
</script>

<style scoped>

</style>
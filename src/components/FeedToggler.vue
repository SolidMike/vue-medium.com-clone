<template>
  <div>
    <div class='feed-toggle'>
      <ul class='nav nav-pills outline-active'>
        <li class='nav-item' v-if='isLoggedIn'>
          <routerLink :to="{name: 'yourFeed'}" class='nav-link' :class="{active: routeName === 'yourFeed'}">Your Feed</routerLink>
        </li>
        <li class='nav-item'>
          <routerLink :to="{name: 'globalFeed'}" class='nav-link' :class="{active: routeName === 'globalFeed'}">Global Feed</routerLink>
        </li>
        <li class='nav-item' v-if='tagName'>
          <routerLink :to="{name: 'tag'}" class='nav-link' :class="{active: routeName === 'tag'}">
            <i class='ion-pound'></i>
            {{tagName}}</routerLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import {getterTypes} from '@/store/modules/auth'

export default {
  name: 'McvFeedToggler',
  props: {
    tagName: {
      type: String,
      required: false
    }
  },
  computed: {
    ...mapGetters({
        isLoggedIn: getterTypes.isLoggedIn
    }),
    routeName() {
      return this.$route.name
    }
  }
}
</script>

<style scoped>

</style>
<template>
  <nav class='navbar navbar-light'>
    <div class='container'>
      <routerLink class='navbar-brand' :to="{name: 'globalFeed'}">MediumClone</routerLink>
      <ul class='nav navbar-nav pull-xs-right'>
        <li class='nav-item'>
          <routerLink class='nav-link' :to="{name: 'globalFeed'}" active-class='active' exact>
            Home
          </routerLink>
        </li>
        <template v-if='isLoggedIn'>
          <li class='nav-item'>
            <routerLink class='nav-link' :to="{name: 'createArticle'}">
              <i class='ion-compose'></i> &nbsp;
              New Article
            </routerLink>
          </li>
          <li class='nav-item'>
            <routerLink class='nav-link' :to="{name: 'settings'}">
              <i class='ion-gear-a'></i> &nbsp;
              Settings
            </routerLink>
          </li>
          <li class='nav-item'>
            <routerLink class='nav-link' :to="{name: 'userProfile', params: {slug: currentUser.username}}">
              <img alt='' class='user-pic' :src='currentUser.image'>
              &nbsp;
              {{currentUser.username}}
            </routerLink>
          </li>
        </template>
        <template v-if='isAnonymous'>
          <li class='nav-item'>
            <routerLink class='nav-link' :to="{name: 'login'}">
              Sign in
            </routerLink>
          </li>
          <li class='nav-item'>
            <routerLink class='nav-link' :to="{name: 'register'}" active-class='active'>
              Sing up
            </routerLink>
          </li>
        </template>
      </ul>
    </div>
  </nav>
</template>

<script>
import {getterTypes} from '@/store/modules/auth'
import {mapGetters} from 'vuex'

export default {
  name: 'McvTopbar',

  computed: {
    ...mapGetters({
      currentUser: getterTypes.currentUser,
      isLoggedIn: getterTypes.isLoggedIn,
      isAnonymous: getterTypes.isAnonymous
    })
/*    ...mapState({
      currentUser: state => state.auth.currentUser,
      isLoggedIn: state => state.auth.isLoggedIn
    }),
    currentUser() {
      return this.$store.getters[getterTypes.currentUser]
    },
    isLoggedIn() {
      return this.$store.getters[getterTypes.isLoggedIn]
    },
    isAnonymous() {
      return this.$store.getters[getterTypes.isAnonymous]
    }*/
  }
}
</script>
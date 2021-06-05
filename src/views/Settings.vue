<template>
  <div>Settings Page</div>
</template>

<script>

import {mapState, mapGetters} from 'vuex'
import {getterTypes as authGetterTypes} from '@/store/modules/auth'

export default {
  name: 'McvSettings',
  computed: {
    ...mapState({
      isSubmitting: state => state.settings.isSubmitting,
      validationErrors: state => state.settings.validationErrors
    }),
    ...mapGetters({
      currentUser: authGetterTypes.currentUser
    })
  }
}
</script>

<style scoped>

</style>
 <template>
   <div class='auth-page'>
     <div class='container page'>
       <div class='row'>
         <div class='col-md-6 offset-md-3 col-xs-12'>
           <h1 class='text-xs-center'>Sign up</h1>
           <p class='text-xs-center'>
             <router-link :to="{name: 'login'}">Have an account?</router-link>
           </p>
           <McvValidationErrors v-if='validationErrors' :validationErrors='validationErrors'/>
           <form @submit.prevent='onSubmit' action=''>
             <fieldset class='form-group'><input v-model='username' type='text' placeholder='Username'
                                                 class='form-control form-control-lg'></fieldset>

             <fieldset class='form-group'><input v-model='email' type='text' placeholder='Email'
                                                 class='form-control form-control-lg'></fieldset>

             <fieldset class='form-group'><input v-model='password' type='text' placeholder='Password'
                                                 class='form-control form-control-lg'></fieldset>
             <button class='btb btn-lg btn-primary pull-xs-right' :disabled='isSubmitting'>Sign up</button>
           </form>
         </div>
       </div>
     </div>
   </div>
 </template>

 <script>
 import McvValidationErrors from '@/components/ValidationErrors'
 import {actionTypes} from '@/store/modules/auth'
 export default {
   name: 'Mcvregister',
   components: {
      McvValidationErrors
   },
   data () {
     return {
       email: '',
       username: '',
       password: ''
     }
   },
   computed: {
     isSubmitting() {
       return this.$store.state.auth.isSubmitting
     },
     validationErrors() {
       return this.$store.state.auth.validationErrors
     }
   },
   methods: {
     onSubmit() {
       console.log('submitted form')
       this.$store.dispatch(actionTypes.register, {email: this.email, username: this.username, password: this.password}).then(user => {console.log('successfully registered user', user)
       this.$router.push({name: 'globalFeed '})})
     },
   }
 }
 </script>
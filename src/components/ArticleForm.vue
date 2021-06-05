<template>
  <div class="editor-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-10 offset-md-1 col-xs-12">
          <McvValidationErrors v-if="errors" :validationErrors='errors'/>
          <form @submit.prevent="onSubmit">
            <fieldset class="form-group">
              <input
                type="text"
                placeholder="Article title"
                class="form-control form-control-lg"
                v-model="title"
              />
            </fieldset>

            <fieldset class="form-group">
              <input
                type="text"
                placeholder="Article description"
                class="form-control form-control-lg"
                v-model="description"
              />
            </fieldset>

            <fieldset class="form-group">
              <textarea
                placeholder="What is this article about?"
                class="form-control form-control-lg"
                v-model="body"
              ></textarea>
            </fieldset>

            <fieldset class="form-group">
              <textarea
                placeholder="Tags"
                class="form-control form-control-lg"
                v-model="tagList"
              ></textarea>
            </fieldset>

            <fieldset class="form-group">
              <button
                type="submit"
                class="btn btn-lg pull-xs-right btn-primary"
                :disabled="isSubmitting"
              >
                Publish Article
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import McvValidationErrors from '@/components/ValidationErrors'
export default {
  name: 'McvArticleForm',
  components: {McvValidationErrors},
  props: {
    initialValues: {
      type: Object,
      required: true
    },
    errors: {
      type: Object,
      required: false
    },
    isSubmitting: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      title: this.initialValues.title,
      description: this.initialValues.description,
      body: this.initialValues.body,
      tagList: this.initialValues.tagList.join(' ')
    }
  },
  methods: {
    onSubmit() {
      const form = {
        title: this.title,
        description: this.description,
        body: this.body,
        tagList: this.tagList.split(' ')
      }
      this.$emit('articleSubmit', form)
    }
  }
}
</script>

<style scoped></style>

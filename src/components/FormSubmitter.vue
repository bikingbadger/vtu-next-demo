<template>
  <form @submit.prevent="handleSubmitAsync">
    <input v-model="username" data-username />
    <input type="submit" />
  </form>

  <div v-if="showMessage" class="message">
    {{ message }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      showMessage: false,
    };
  },
  methods: {
    handleSubmit() {
      this.showMessage = true;
    },
    handleSubmitAsync() {
        console.log(this);
      return this.$http
        .get('/api/v1/register', {})
        .then(() => {
          this.showMessage = true;
        })
        .catch((e) => {
          throw Error('Something went wrong', e);
        });
    },
  },
  computed: {
    message() {
      return `Thank you for your submission, ${this.username}`;
    },
  },
};
</script>

<style></style>

<template>
  <form @submit.prevent="handleSubmit">
    <input data-username v-model="username" />
    <input type="submit" />
  </form>

</template>

<script>
export default {
    data() {
        return {
            username: '',
            message: ''
        }
    },
    methods: {
        handleSubmit() {
            this.message = `Thank you for your submission, ${this.username}`
        }
    }
};
</script>

<style></style>

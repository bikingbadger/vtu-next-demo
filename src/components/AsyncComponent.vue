<template>
  <div>I like async</div>
</template>

<script>
import axios from 'axios';

export default {
  created() {
    this.makeApiCall();
  },
  methods: {
    async makeApiCall() {
      console.log('Making an API call');
      await axios.get('https://jsonplaceholder.typicode.com/posts/1');
    },
  },
};
</script>
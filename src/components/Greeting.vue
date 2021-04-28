<template>
  <div>{{ greeting }}</div>
</template>

<script>
import { ref } from 'vue';
export default {
  name: 'Greeting',
  setup() {
    const greeting = ref('Vue and TDD');

    return {
      greeting,
    };
  },
};
</script>

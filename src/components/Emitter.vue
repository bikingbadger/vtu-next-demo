<template>
  <div></div>
</template>

<script>
export default {
  emits: ['myEvent'],
  setup(props, { emit }) {
    const emitEvent = () => {
      emit('myEvent', 'name', 'password');
    };

    return { emitEvent };
  },
};
</script>

<style></style>

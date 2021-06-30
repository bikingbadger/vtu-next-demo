<template>
  <div class="username">{{username}}</div>
  <div class="fullName">{{fullName}}</div>
  <button class="setName" @click="setName">Set Name</button>
</template>

<script>
import { useStore } from 'vuex'

export default {
    setup() {
        const store = useStore()
        return {
            username: store.state.username,
            fullName: store.getters.fullName,
            setName: store.commit('setName', {name: 'Hilton Meyer'})
        }
    }
}
</script>

<style>

</style>
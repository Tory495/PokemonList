<template>
  <main class="container">
    <h1>Pokemon</h1>
    <h2>
      <router-link :to="{path: 'Items'}" class="text-decoration-none">Items</router-link>
    </h2>
    <router-view/>
  </main>
</template>

<script>
export default {
  name: "Pokemon",

}
</script>

<style scoped>

</style>
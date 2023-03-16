<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-gradient mb-5 bg-dark" >
    <div class="container">
      <router-link class="text-warning-link"  :to="{ path: 'Index' }">Pokemon</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link :to="{ path: 'Items' }" class="nav-link">Items</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <main class="container">
    <router-view/>
  </main>
</template>

<script>
export default {
  name: "Pokemon",

}
</script>

<style scoped></style>
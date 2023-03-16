<template>
  <div class="row row-cols-1 row-cols-md-3 g-2">
    <div class="col" v-for="item in items">
      <div class="card mb-3 border-warning bg-dark text-warning">
        <div class="card-header d-flex justify-content-between align-items-center">
          <h3 class="text-capitalize">{{ item.name }}</h3>
          <img :src="item.sprites.default" class="img-thumbnail bg-dark border-warning" alt="...">
        </div>
        <div class="card-body">
          <h5>Cost {{ item.cost }}$</h5>
          <h5 v-if="item.fling_power">Fling power {{ item.fling_power }}</h5>
          <h5 v-else>Fling power is null</h5>
          <h5>Attributes</h5>
          <div v-for="itemAttribute in item.attributes">
            <p class="card-text">- {{ itemAttribute.name }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from '../../api'

export default {
  name: "Items",
  data() {
    return {
      items: []
    }
  },
  mounted() {
    this.loadItems()
  },
  methods: {
    loadItems() {
      for (let i = 1; i <= 20; i++) {
        api.get(`https://pokeapi.co/api/v2/item/${i}`)
          .then(response => {
            this.items.push(response.data)
            console.log(response)
          })
          .catch(error => {
            console.log(error)
          })
      }
    }
  }
}
</script>

<style scoped></style>
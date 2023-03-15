<template>

  <div class="row row-cols-1 row-cols-md-3 g-4">
    <div class="col" v-for="item in items">
      <div class="card">
        <div class="card-body">
          <img :src="item.sprites.default" class="" alt="...">
          <h5 class="card-title">Item name: {{ item.name }}</h5>
          <h5>Attributes:</h5>
          <div v-for="itemAttribute in item.attributes">
            <p class="card-text">- {{ itemAttribute.name }}</p>
          </div>
          <h5>Cost: {{ item.cost }}$</h5>
          <h5 v-if="item.fling_power">Fling power: {{ item.fling_power }}</h5>
          <h5 v-else>Fling power is null</h5>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import axios from "axios"

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
        axios.get(`https://pokeapi.co/api/v2/item/${i}`)
            .then(response => {
              this.items.push(response.data);
              console.log(response.data);
            })
            .catch(error => {
              console.log(error)
            })
      }

    }
  }
}
</script>

<style scoped>

</style>
<script setup>
import {ref} from 'vue'
import {NButton, NCard, NImage} from 'naive-ui';

defineProps({
  id: String,
  logo: String,
  name: String,
})

const count = ref(0)
</script>

<template>
  <n-card :key="id" class="card" hoverable>
    <n-image :src="logo" alt="Entreprise Logo" preview-disabled width="200"/>
    <h3>{{ name }}</h3>
    <router-link
        :to="'/entreprise/' + id"
    >
      <n-button>
        Details
      </n-button>
    </router-link>
  </n-card>
</template>

<style scoped>
.card {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
  width: calc(33.33% - 20px);
  text-align: center;
}

@media (max-width: 800px) {
  .card {
    width: calc(50% - 20px);
  }
}

@media (max-width: 600px) {
  .card {
    width: 100%;
  }
}
</style>

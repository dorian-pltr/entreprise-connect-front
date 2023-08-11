<template>
  <div>
    <n-input v-model="searchTerm" placeholder="Search entreprise by name" @input="handleSearch" />
    <div class="card-list">
      <n-card v-for="entreprise in filteredEntreprises" :key="entreprise.id" class="card" hoverable>
        <n-image :src="entreprise.logo" alt="Entreprise Logo" preview-disabled width="200"/>
      <h3>{{ entreprise.name }}</h3>
      <p>{{ entreprise.description }}</p>
        <router-link
            :to="'/entreprise/' + entreprise.id"
        >
          <n-button>
        Details
          </n-button>
        </router-link>
    </n-card>
    </div>
    <div class="pagination-container">
    <n-pagination
        v-model:page="currentPage"
        :page-count="totalPages"
        @change="handlePageChange"
    />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import {NButton, NCard, NImage, NInput, NPagination} from 'naive-ui';

export default {
  components: {
    NCard,
    NInput,
    NPagination,
    NButton,
    NImage
  },
  data() {
    return {
      searchTerm: '',
      currentPage: 1,
      entreprises: [],
      totalPages: 0,
    };
  },
  created() {
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/entreprises`).then(response => {
      this.entreprises = response.data.entreprises;
      this.totalPages = response.data.totalPages;
    }).catch(error => {
      console.error('Error when retrieving entreprises  :', error);
    });

  },
  computed: {
    filteredEntreprises() {
      return this.entreprises.filter(entreprise =>
          entreprise.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    },
    totalPages() {
      return this.totalPages;
    },
  },
  methods: {
    handlePageChange(newPage) {
      this.currentPage = newPage;
      axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/entreprises?page=${newPage}&name=${this.searchTerm}`).then(response => {
        this.entreprises = response.data.entreprises;
      }).catch(error => {
        console.error('Error when retrieving entreprises:', error);
      });
    },
    handleSearch(searchTerm) {
      axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/entreprises?name=${searchTerm}`).then(response => {
        this.entreprises = response.data.entreprises;
        this.totalPages = response.data.totalPages;
        this.searchTerm = searchTerm;
      }).catch(error => {
        console.error('Error when retrieving entreprises:', error);
      });
    },
  },
};
</script>

<style scoped>
.card-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.card {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
  width: calc(33.33% - 20px);
  text-align: center;
}

.pagination-container {
  display: flex;
  justify-content: center;
  margin: 20px 0 20px 0;
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
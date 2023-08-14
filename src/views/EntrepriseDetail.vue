<template xmlns="http://www.w3.org/1999/html">
  <div>
    <template v-if="entreprise">
      <n-card :title="entreprise.name">
        <n-image :src="entreprise.logo" alt="Entreprise Logo" width="200"/>
        <br>
        <template #header-extra>
          ID: {{ entreprise.id }}
        </template>
        <template v-if="entreprise.latitude && entreprise.longitude" #footer>
          <n-image :src="googleMapsImageUrl" alt="Google Maps"/>
          <br>
          X:{{ entreprise.latitude }} Y:{{ entreprise.longitude }}<br>
          {{ entreprise.address }}
        </template>
        <template #action>
          <router-link :to="{ name: 'Home' }">
            <n-button>
              Back to home
            </n-button>
          </router-link>
        </template>
      </n-card>
    </template>
    <template v-else>
      <n-image alt="Loading" src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"/>
    </template>
  </div>
</template>

<script>
import axios from "axios";
import {NButton, NCard, NImage} from "naive-ui";

export default {
  components: {
    NCard,
    NButton,
    NImage
  },
  data() {
    return {
      entreprise: null,
    };
  },
  created() {
    const entrepriseId = this.$route.params.id;
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/entreprise/${entrepriseId}`).then(response => {
      this.entreprise = response.data;
    }).catch(error => {
      console.error('Error when retrieving entreprise:', error);
    });
    console.log(this.entreprise)
  },
  computed: {
    googleMapsImageUrl() {
      const apiKey = import.meta.env.VITE_GMAPS_API_KEY;
      const coordinates = `${this.entreprise.latitude},${this.entreprise.longitude}`;
      const zoom = 15;
      return `https://maps.googleapis.com/maps/api/staticmap?center=${coordinates}&zoom=${zoom}&size=400x300&key=${apiKey}`;
    }
  }
};
</script>

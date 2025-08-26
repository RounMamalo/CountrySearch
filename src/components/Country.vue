<script setup>
import { reactive, defineProps, onMounted } from "vue";
import { RouterLink } from "vue-router";
const props = defineProps({
  country: Object,
  index: Number

});

const localCountry = reactive({
  flag: props.country.flag,
  name: props.country.name,
  population: props.country.population,
  region: props.country.region,
  capital: props.country.capital,
});

</script>

<template>
  <div class="main-card w-[20rem] h-[24rem] drop-shadow-md bg-white rounded-md">
    <a :href="`country/${index}`">
    <div class="top h-1/2 overflow-hidden rounded-t-lg">
      <img 
      :src="localCountry.flag"
      class="w-full h-full object-cover"
       />
    </div>
    <div class="bottom px-3 py-5 h-1/2">
      <h1
      class="text-lg font-bold"
      >{{ localCountry.name }}</h1>

      <div class="detail-card flex flex-col">
        <span>Population: {{ localCountry.population }}</span>
        <span> Region: {{ localCountry.region }} </span>
        <span> Capital: {{ localCountry.capital }} </span>
      </div>
    </div>
    </a>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from "vue";
import { useRoute } from "vue-router";
import Countries from "@/data.json";

const route = useRoute();
const countries = ref(Countries);
const idCountry = route.params.name;
const localCountry = computed(() => {
  return countries.value.find((country) => country.name === idCountry)
}) 
  
const country = reactive({
  flag: localCountry.value.flag,
  name: localCountry.value.name,
  nativeName: localCountry.value.nativeName,
  population: localCountry.value.population,
  region: localCountry.value.region,
  subRegion: localCountry.value.subregion,
  capital: localCountry.value.Kabul,
  domain: localCountry.value.topLevelDomain,
  currency: localCountry.value.currencies,
  languages: localCountry.value.languages,
});


</script>

<template>
  <div class="body min-w-full min-h-screen flex justify-center">
    <div class="main flex flex-col w-[80%]">
      <div class="buttons">
        <a href="/">Go Back</a>
      </div>
      <div class="main-container flex">
        <div class="flag-img w-1/2">
          <img 
          :src="country.flag"
          class="w-full h-full object-cover"
           />
        </div>
        <div class="information w-1/2">
          <div class="top">
            <h1>{{ country.name }}</h1>
          </div>
          <div class="bottom">
            <ul>
              <li>Native Name: {{ country.nativeName }}</li>
              <li>Population: {{ country.population }}</li>
              <li>Region: {{ country.region }}</li>
              <li>Sub Region: {{ country.subRegion }}</li>
              <li>Capital: {{ country.capital }}</li>
              <li>Top Level Doman: {{ country.domain[0] }}</li>
              <li>Currencies: {{ country.currency[0].code }}</li>
              <li>
                Languages:
                <ul>
                  <li v-for="language in country.languages">
                    {{ language.name }}
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

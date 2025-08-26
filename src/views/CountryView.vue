<script setup>
import { ref, reactive } from "vue";
import { useRoute } from "vue-router";
import Countries from "@/data.json";

const route = useRoute();
const countries = ref(Countries);
const idCountry = route.params.id;
const country = reactive({
  flag: countries.value[idCountry].flag,
  name: countries.value[idCountry].name,
  nativeName: countries.value[idCountry].nativeName,
  population: countries.value[idCountry].population,
  region: countries.value[idCountry].region,
  subRegion: countries.value[idCountry].subregion,
  capital: countries.value[idCountry].Kabul,
  domain: countries.value[idCountry].topLevelDomain[0],
  currency: countries.value[idCountry].currencies,
  languages: countries.value[idCountry].languages,
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
              <li>Top Level Doman: {{ country.domain }}</li>
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

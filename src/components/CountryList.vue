<script setup>
import { ref, reactive, defineProps, onMounted, watch, computed } from "vue";
import { RouterLink } from "vue-router";
import Countries from "@/data.json";
import axios from "axios";
import Country from "./Country.vue";

const countrySearch = ref('');
const props = defineProps({
  viewable: Number,
});
const state = reactive({
  countries: [],
});
state.countries = Countries;

const toggleSearch = computed(() => countrySearch.value.trim().length > 0);

const filteredCountry = computed(() => {
  const search = countrySearch.value.trim().toLowerCase();
  if(!search) return [];

  return state.countries.filter(country =>
    country.name.toLowerCase().includes(search)
  );
})


</script>

<template>
  <div class="main min-w-full flex justify-center py-5">
    <div class="container w-[80%] mt-10">
      <div class="filters">
        <input type="text" v-model="countrySearch" />
      </div>
      <div class="main-list grid grid-cols-4 gap-20">
        <Country
          v-if="!toggleSearch"
          v-for="(country, index) in state.countries.slice(
            0,
            viewable || state.countries.length
          )"
          :country="country"
          :index="index"
          :key="country.name"
        />

        <div
          v-else-if="toggleSearch"
          v-for="(country, index) in filteredCountry"
        >
        <Country 
          :country="country"
          :index="index"
          :key="country.name"
        />
        </div>
      </div>
    </div>
  </div>
</template>

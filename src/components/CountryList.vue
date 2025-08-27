<script setup>
import { ref, reactive, defineProps, onMounted, watch, computed } from "vue";
import { RouterLink } from "vue-router";
import Countries from "@/data.json";
import axios from "axios";
import Country from "./Country.vue";

const countrySearch = ref("");
const region = ref("");

const props = defineProps({
  viewable: Number,
});
const state = reactive({
  countries: [],
});
state.countries = Countries;

const toggleSearch = computed(() => countrySearch.value.trim().length > 0);
const toggleRegion = computed(() => {
  if (region.value.trim().length > 0) {
    return true;
  } else {
    return false;
  }
});

const filteredCountry = computed(() => {
  const search = countrySearch.value.trim().toLowerCase();
  if (!search) return [];

  return state.countries.filter((country) =>
    country.name.toLowerCase().includes(search)
  );
});

const filteredRegion = computed(() => {
  if (toggleRegion) {
    return state.countries.filter((country) =>
      country.region.includes(region.value)
    );
  } else {
    return [];
  }
});

const filteredRegionAndSearch = computed(() => {
  const search = countrySearch.value.trim().toLowerCase();
  if (toggleRegion && search) {
    const regionFilter = state.countries.filter((country) =>
      country.region.includes(region.value)
    );
    const searchFilter = regionFilter.filter((country) =>
      country.name.toLowerCase().includes(search)
    );
    return searchFilter;
  } else {
    return [];
  }
});

const clearRegionFilter = () => {
  region.value = "";
};
</script>

<template>
  <div class="main min-w-full flex justify-center py-5">
    <div class="container w-[80%] mt-10">
      <div class="filters flex justify-between mb-5">
        <input
          type="text"
          v-model="countrySearch"
          class="p-2 drop-shadow-md rounded-md"
        />
        <div class="drop-down-filter drop-shadow-md rounded-md">
          <button
            v-if="toggleRegion"
            class="p-2 drop-shadow-md rounded-md bg-red-500 mx-2 text-white"
            @click="clearRegionFilter"
          >
            Clear Filter
          </button>
          <select
            name="region"
            id="region"
            v-model="region"
            class="p-2 rounded-md"
          >
            <option value="" disabled selected hidden>Filter by Region</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
      </div>
      <div class="main-list grid grid-cols-4 gap-20">
        <!-- Origin Countries without Search and Region Filter -->
        <Country
          v-if="!toggleSearch && !toggleRegion"
          v-for="(country, index) in state.countries.slice(
            0,
            viewable || state.countries.length
          )"
          :country="country"
          :index="index"
          :key="country.name"
        />
        <!-- Countries with Search Filter -->
        <Country
          v-else-if="toggleSearch && !toggleRegion"
          v-for="(searchCountry, index) in filteredCountry"
          :country="searchCountry"
          :index="index"
          :key="searchCountry.name"
        />
        <!-- Countries with Region Filter -->
        <Country
          v-else-if="toggleRegion && !toggleSearch"
          v-for="regionCountry in filteredRegion"
          :country="regionCountry"
          :key="regionCountry.name"
        />
        <!-- Both Filter Activated -->
        <Country
          v-else-if="toggleRegion && toggleSearch"
          v-for="countrySearchAndRegion in filteredRegionAndSearch"
          :country="countrySearchAndRegion"
          :key="countrySearchAndRegion.name"
        />
      </div>
    </div>
  </div>
</template>

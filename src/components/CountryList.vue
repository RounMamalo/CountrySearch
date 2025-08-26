<script setup>
import { ref, reactive, defineProps, onMounted } from "vue";
import { RouterLink } from "vue-router";
import Countries from "@/data.json";
import axios from "axios";
import Country from "./Country.vue";

const props = defineProps({
  viewable: Number,
});
const state = reactive({
  countries: [],
});
state.countries = Countries;
</script>

<template>
  <div class="main min-w-full flex justify-center py-5">
    <div class="container w-[80%] mt-10">
      <div class="filters">
        
      </div>
      <div class="main-list grid grid-cols-4 gap-20">
        <Country
          v-for="(country, index) in state.countries.slice(
            0,
            viewable || state.countries.length
          )"
          :country="country"
          :index="index"
        />
      </div>
    </div>
  </div>
</template>

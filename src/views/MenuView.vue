<script setup>
import CountryList from "@/components/CountryList.vue";
</script>
<template>
  <div class="min-h-screen bg-gray-100">
    <CountryList :viewable="16" />
  </div>
</template>

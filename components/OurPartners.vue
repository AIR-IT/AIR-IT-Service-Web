<template>
    <div class="max-w-lg mx-auto">
     <h1 class="text-center"> TRUSTED BY </h1>
      <div class="flex flex-wrap justify-center">
        <div v-for="(client, index) in clients" :key="index" class="m-4">
          <img :src="client.logo" alt="Client Logo" class="w-32 h-32 object-contain">
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        clients: [
          { logo: '/logo.png' },
          { logo: '/logo.png' },
          { logo: '/logo.png' },
          // Add more client logos as needed
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  /* Add any additional styling here */
  </style>
  
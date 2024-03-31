<script>
export default {
  methods: {
    scrollToSection(selector) {
      this.$scrollTo(selector);
    },
    handleScroll() {
      // Adjust the scroll position threshold based on your needs
      this.isSticky = window.scrollY > 100; // Set to true when scrolling down by 100 pixels
    },
  },
  data() {
    return {
      isSticky: false,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
};
</script>

<template>
  <header>
    <div :class="{ 'sticky': isSticky }">
    <!-- <h1 class="text-3xl font-bold underline">Welcome to the homepage</h1> -->
    <div class=" mx-auto max-w-6xl items-center justify-between py-2 z-50 border-black">
      <div class="bg-white flex mx-auto ">
        <NuxtLink to="/">
          <!-- <p class="text-4xl text-gray-950 font-bold hover:text-blue-900">AIR IT SERVICE</p> -->
          <img src="/logo.png" alt="nuxtIcon" height="10px"/>
        </NuxtLink>
        <nav aria-label="Site Nav" class="gap-x-10 text-md font-medium flex flex-1 items-center justify-end">
        <NuxtLink @click="scrollToSection('#home')" class="text-gray-950 font-bold hover:text-blue-900" to="/">Home</NuxtLink>
        <!-- <NuxtLink @click="scrollToSection('#tentang')" class="text-gray-950 font-bold hover:text-blue-900" to="#tentang">Tentang Kami</NuxtLink> -->
        <NuxtLink @click="scrollToSection('#layanan')" class="text-gray-950 font-bold hover:text-blue-900" to="/#layanan">Layanan</NuxtLink>
        <NuxtLink @click="scrollToSection('#blog')" class="text-gray-950 font-bold hover:text-blue-900" to="/#blog">Blog</NuxtLink>
        <a @click="scrollToSection('#contact')" class="px-4 py-2 border-blue-800 !scroll-smooth border-2 rounded-md font-bold text-blue-800 bg-white focus:outline-none hover:bg-blue-800 hover:text-white"  href="/#contact">Kontak Kami</a>
        </nav>
        </div>
    </div>
  </div>
</header>
</template>

<style scoped>
/* Your styles for the navbar, including the sticky class */
nav {
  transition: background-color 0.3s ease; /* Add a smooth transition effect */
}

.sticky {
  position: fixed;
  top: 0;
  width: 100%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Optional: Add a subtle box shadow when sticky */
  background-color: #ffffff; /* Change to the desired background color when sticky */
  z-index: 1000; /* Adjust the z-index as needed */
}
</style>
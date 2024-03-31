<template>
  <div class="carousel">
    <div class="carousel-inner" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
      <div v-for="(item, index) in items" :key="index" class="carousel-item relative">
        <!-- Background Image -->

          <img :src="item.image" alt="Carousel Item" class="w-full h-[400px] object-cover">
  
          <!-- Content Overlay -->
          <div class="carousel-overlay absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center">
          <!-- Your carousel item content goes here -->
          <h3 class="text-5xl font-extrabold text-white text-center mb-4">{{ item.title }}</h3>
          <p class="text-xl text-white mb-4">{{ item.description }}</p>

          <!-- Add buttons or any other content here -->
          <button class="mx-2 my-2 px-8 py-4 text rounded text-white bg-blue-700 focus:outline-none hover:bg-blue-500"><a href="/about">Tentang Kami</a></button>
        </div>
      </div>
    </div>

    <div class="carousel-controls px-10">
      <button @click="prevSlide" class="btn btn-gray bg-blue-500 text-xl font-extrabold" :disabled="currentIndex === 0">
        &lt; 
      </button>
      <button @click="nextSlide" class="btn btn-gray bg-blue-500 text-xl font-extrabold" :disabled="currentIndex === items.length - 1">
        &gt;
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: 'AIR IT SERVICE',
          description: 'Layanan IT Support untuk Personal',
          image: '/slider1.webp',
        },
        {
          title: 'Layanan perbaikan cepat dan terjangkau',
          description: 'Kami berfokus pada solusi yang akan membuat produktivitas dapat berjalan dengan lancar',
          image: '/slider2.webp',
        },
        // Add more items as needed
      ],
      currentIndex: 0,
      autoSlideInterval: 1000,
      transitionDuration: 1000, // Adjust the duration of the fade transition in milliseconds
    };
  },
  methods: {
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.items.length;
    },
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
      },
      startAutoSlide() {
      this.autoSlideInterval = setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.items.length;
      }, 3000); // Adjust the interval for auto-sliding in milliseconds (e.g., 3000 for 3 seconds)
    },
    stopAutoSlide() {
      clearInterval(this.autoSlideInterval);
    },
  },
mounted() {
    this.startAutoSlide();
  },
};
</script>

<style scoped>
.carousel {
  position: relative;
  overflow: hidden;
}

.carousel-inner {
  display: flex;
  transition: transform 0.5s ease;
}

.carousel-item {
  flex: 0 0 100%;
  position: relative;
}

.carousel-overlay {
  background: rgba(0, 0, 0, 0.6); /* Adjust the overlay color and opacity as needed */
}

.carousel-controls {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.btn {
  cursor: pointer;
  padding: 8px 16px;
  border-radius: 4px;
}
</style>

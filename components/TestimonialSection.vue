<template>
<div class="">
    <div class="grid grid-cols-1 mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 ">
    <div v-for="(testimonial, index) in testimonials" :key="index" class="bg-white p-6 mb-4 shadow-md rounded-md">
      <div class="mb-4">
        <img :src="testimonial.avatar" alt="User Avatar" class="w-12 h-12 rounded-full inline-block mr-4">
        <div class="inline-block">
          <h3 class="text-lg font-bold">{{ testimonial.name }}</h3>
          <p class="text-gray-500">{{ testimonial.position }}</p>
        </div>
      </div>
      <p class="text-gray-700">{{ testimonial.comment }}</p>
    </div>
  </div>

</div>
</template>

<script>
export default {
  data() {
    return {
      testimonials: [
        {
          name: 'John Doe',
          position: 'CEO, Company XYZ',
          comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          avatar: 'path-to-avatar1.jpg',
        },
        {
          name: 'Jane Smith',
          position: 'Designer, ABC Agency',
          comment: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          avatar: 'path-to-avatar2.jpg',
            },
            {
          name: 'Jane Smith',
          position: 'Designer, ABC Agency',
          comment: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          avatar: 'path-to-avatar2.jpg',
        },
        // Add more testimonials as needed
      ],
    };
  },
};
</script>

<style scoped>
/* Add any additional styling here */
</style>

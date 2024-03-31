<template>
  <div class="max-w-2xl mx-auto">
    <h2 class="text-3xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>

    <div v-for="(faq, index) in faqs" :key="index" class="mb-6 border rounded-lg overflow-hidden">
      <div class="bg-blue-900 text-white p-4">
        <div class="flex items-start justify-between">
          <div class="flex-1">
            <h3 class="text-xl font-semibold">{{ faq.question }}</h3>
          </div>
          <button
            @click="toggleAnswer(index)"
            class="text-sm font-semibold bg-white text-blue-900 border border-blue-900 rounded-full px-4 py-2 focus:outline-none"
          >
            {{ faq.isOpen ? 'Hide Answer' : 'Show Answer' }}
          </button>
        </div>
      </div>
      <div v-if="faq.isOpen" class="p-4 bg-gray-100">
        <p class="text-gray-800">{{ faq.answer }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      faqs: [],
    };
  },
  methods: {
    toggleAnswer(index) {
      this.faqs[index].isOpen = !this.faqs[index].isOpen;
    },
    fetchData() {
      // Sample FAQ data
      this.faqs = [
        {
          question: 'What is your return policy?',
          answer: 'Our return policy allows for returns up to 30 days after purchase. To be eligible for a return, your item must be unused and in the same condition that you received it. It must also be in the original packaging.',
          isOpen: false,
        },
        {
          question: 'How can I track my order?',
          answer: 'Once your order has been shipped, you will receive an email with the tracking information. You can also log in to your account to check the status and tracking details of your order.',
          isOpen: false,
        },
        {
          question: 'Do you offer international shipping?',
          answer: 'Yes, we offer international shipping. Please note that customs duties and taxes may apply depending on your country. Contact our customer support for more information.',
          isOpen: false,
        },
        // Add more FAQ items as needed
      ];
    },
  },
  mounted() {
    this.fetchData();
  },
};
</script>

<style scoped>
/* Add any additional styling here */
</style>

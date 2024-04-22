<script setup>
import { services } from '../data/data'
</script>

<template>
	<div id="layanan" class="max-w-6xl mx-auto py-16">
		<div class="text-center py-5">
			<h1 class="font-bold text-4xl">Layanan Kami</h1>
			<p>Kami menawarkan berbagai macam layanan IT Support untuk personal</p>
		</div>
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			<!-- CARD SECTION -->
			<div v-for="service in services" :key="service.id" class="bg-white shadow-md">
				<img :src="service.img" alt="" class="w-full h-60 object-cover md:h-48 lg:h-60" />
				<div class="text-center py-4 px-4">
					<h4 class="font-bold text-lg md:text-xl lg:text-2xl hover:text-blue-800">{{ service.title }}</h4>
					<p class="text-sm md:text-base">{{ service.description }}</p>
				</div>
			</div>
		</div>
	</div>
</template>

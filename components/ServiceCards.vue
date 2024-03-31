<script setup>
import { services } from '../data/data'
</script>

<template>
	<div id="layanan" class="max-w-6xl mx-auto py-16">
		<div class="text-center py-5">
			<h1 class="font-bold text-4xl">Layanan Kami</h1>
			<p>Kami menawarkan berbagai macam layanan IT Support untuk personal</p>
		</div>
		<div class="grid grid-cols-3 space-x-3">
			<!-- CARD SECTION -->
			<div v-for="service in services" :key="service.id" class="bg-white shadow-md">
				<img :src="service.img" alt="" class="w-full h-60 object-cover" />
				<div class="text-center py-8 space-y-8 px-8">
					<h4 class="font-bold hover:text-blue-800">{{ service.title }}</h4>
					<p class="">{{ service.description }}</p>
				</div>
			</div>
		</div>
	</div>
</template>

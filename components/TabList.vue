<template>
	<div
		id="layanan2"
		class="flex flex-col md:flex-row w-full max-w-6xl mx-auto py-9"
	>
		<!-- Tab Buttons (Selector on the left for desktop, top for mobile) -->
		<div class="w-full md:w-1/4 border-b md:border-b-0 md:border-r">
			<div
				v-for="(tab, index) in tabs"
				:key="index"
				@click="selectTab(index)"
				:class="{
					'bg-blue-500 text-white': selectedTab === index,
					'text-gray-700 bg-white hover:bg-gray-100': selectedTab !== index,
				}"
				class="py-2 px-4 cursor-pointer text-left font-semibold border-b md:border-b-0"
			>
				{{ tab.label }}
			</div>
		</div>

		<!-- Tab Content (Display on the right for desktop, below for mobile) -->
		<div
			class="w-full md:w-3/4 p-6 bg-white border md:border-l-0 md:rounded shadow"
		>
			<transition name="fade" mode="out-in">
				<div v-html="tabs[selectedTab].content" :key="selectedTab"></div>
			</transition>
		</div>
	</div>
</template>

<script>
// Import data tabs dari file terpisah
import { tabsData } from "../data/data.js";

export default {
	data() {
		return {
			selectedTab: 0,
			tabs: tabsData, // Menggunakan data yang diimpor
		};
	},
	methods: {
		selectTab(index) {
			this.selectedTab = index;
		},
	},
};
</script>

<style scoped>
/* Transition CSS for fade effect */
.fade-enter-active,
.fade-leave-active {
	@apply transition-opacity duration-500;
}
.fade-enter-from,
.fade-leave-to {
	@apply opacity-0;
}
</style>

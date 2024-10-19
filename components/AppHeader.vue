<template>
	<header class="bg-gray-800 text-white">
		<div class="container mx-auto flex justify-between items-center p-4">
			<!-- Logo -->
			<div class="text-lg font-bold">
			<a href="#" class="text-white">My Logo</a>
			</div>

			<!-- Menu button for mobile -->
			<button id="menu-btn" class="md:hidden block focus:outline-none" @click="toggleMenu()">
			<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
			</svg>
			</button>

			<!-- Menu items -->
			<nav id="menu" class="hidden md:flex space-x-4">
			<a href="#" class="hover:text-gray-400">Home</a>
			<a href="#" class="hover:text-gray-400">About</a>
			<a href="#" class="hover:text-gray-400">Services</a>
			<a href="#" class="hover:text-gray-400">Contact</a>
			</nav>
		</div>

		<!-- Mobile Menu (hidden by default) -->
		<div v-if="isMenuOpen" id="mobile-menu" class="md:hidden bg-gray-800 text-white p-4">
			<a href="#" class="block py-2">Home</a>
			<a href="#" class="block py-2">About</a>
			<a href="#" class="block py-2">Services</a>
			<a href="#" class="block py-2">Contact</a>
		</div>
	</header>
</template>

<script lang="ts" setup>
	import { ref } from 'vue';

	// Toggle state for mobile menu
	const isMenuOpen = ref(false)

	// Function to toggle menu
	const toggleMenu = () => {
		isMenuOpen.value = !isMenuOpen.value
	}
</script>

<style>

</style>
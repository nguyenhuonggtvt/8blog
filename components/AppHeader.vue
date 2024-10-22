<template>
	<header class="bg-white shadow-md fixed w-full top-0 left-0 z-10">
		<nav class="">
			<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div class="flex justify-between h-16">
				<!-- Logo and Menu -->
				<div class="flex items-center">
					<a href="#" class="text-2xl font-bold text-gray-800">8BLOG</a>
				</div>

				<!-- Desktop Menu -->
				<div class="hidden md:flex space-x-8 items-center">
					<div class="relative group">
					<a href="#" class="text-gray-700 hover:text-purple-600">Home</a>
					</div>
					<div class="relative group">
					<a href="#" class="text-gray-700 hover:text-purple-600">About</a>
					</div>
					<div class="relative group">
					<a href="#" class="text-gray-700 hover:text-purple-600">Services</a>
					<!-- Submenu -->
					<div class="absolute left-0 top-full mt-1 hidden group-hover:block bg-white shadow-lg rounded-md">
						<a href="#" class="block px-4 py-2 text-gray-700 hover:bg-purple-100">Service 1</a>
						<a href="#" class="block px-4 py-2 text-gray-700 hover:bg-purple-100">Service 2</a>
					</div>
					</div>
				</div>

				<!-- User Icon or Login Button -->
				<div class="flex items-center space-x-4">
					<div class="hidden md:block">
					<!-- Assuming user is logged in -->
					<a href="#" class="text-gray-700 hover:text-purple-600">
						
						<font-awesome-icon :icon="['fas', 'user']" class="text-2xl" />
					</a>
					</div>

					<!-- Mobile Menu Button -->
					<div class="md:hidden">
					<button id="mobile-menu-toggle" class="text-gray-700 hover:text-purple-600 focus:outline-none" @click="toggleMenu()">
						<font-awesome-icon :icon="['fas', 'bars']" class="text-2xl" />
					</button>
					</div>
				</div>
				</div>
			</div>

			<!-- Mobile Menu -->
			<div id="mobile-menu" class="md:hidden bg-white shadow-lg" :class="{ hidden: !isMenuOpen }">
				<a href="#" class="block px-4 py-2 text-gray-700 hover:bg-purple-100">Home</a>
				<a href="#" class="block px-4 py-2 text-gray-700 hover:bg-purple-100">About</a>
				<a href="#" class="block px-4 py-2 text-gray-700 hover:bg-purple-100">Services</a>
				<div class="pl-4">
				<a href="#" class="block px-4 py-2 text-gray-700 hover:bg-purple-100">Service 1</a>
				<a href="#" class="block px-4 py-2 text-gray-700 hover:bg-purple-100">Service 2</a>
				</div>
			</div>
		</nav>
	</header>
</template>

<script lang="ts" setup>
	import { ref } from 'vue';
	
	const isMenuOpen = ref(false);
	const nav_items = [
		{
			title: 'Home',
			child: [],
		},
		{
			title: 'Tiếng Nhật',
			child: [],
		},
		{
			title: 'Lập Trình',
			child: [],
		},
		{
			title: 'Liên Hệ',
			child: [],
		},
	];

	// Function to toggle menu
	const toggleMenu = () => {
		isMenuOpen.value = !isMenuOpen.value;
	}
</script>

<style>

</style>
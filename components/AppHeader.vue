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
					<div v-for="(nav, index) in nav_items" :key="index" class="relative group">
						<a href="#" class="text-gray-700 hover:text-purple-600">{{ nav.title }}</a>
						<!-- Submenu -->
						<div v-if="nav.child.length" class="w-44 absolute left-0 top-full hidden group-hover:block bg-white shadow-lg rounded-md">
							<a v-for="(child_nav, index) in nav.child" :key="index" href="#" class="block px-4 py-2 text-gray-700 hover:bg-purple-100">{{ child_nav.title }}</a>
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
				<div v-for="(nav, index) in nav_items" :key="index">
					<a href="#" class="block px-4 py-2 text-gray-700 hover:bg-purple-100">{{ nav.title }}</a>
					<div v-if="nav.child.length" class="pl-4">
						<a v-for="(child_nav, index) in nav.child" :key="index" href="#" class="block px-4 py-2 text-gray-700 hover:bg-purple-100">{{ child_nav.title }}</a>
					</div>
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
			title: 'Tiếng nhật',
			child: [
				{
					title: 'Từ vựng',
					child: [],
				},
				{
					title: 'Ngữ pháp',
					child: [],
				},
			],
		},
		{
			title: 'Lập trình',
			child: [
				{
					title: 'Frontend',
					child: [],
				},
				{
					title: 'Backend',
					child: [],
				},
				{
					title: 'Database',
					child: [],
				},
			],
		},
		{
			title: 'Liên hệ',
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
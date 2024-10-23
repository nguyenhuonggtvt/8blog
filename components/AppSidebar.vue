<template>
	<aside class="bg-white p-4">
		<!-- Profile Section -->
		<div class="mb-6">
			<div class="flex items-center">
			<img src="/images/profile.png" alt="Author profile" class="w-12 h-12 rounded-full mr-4 object-cover">
			<div>
				<h2 class="text-lg font-semibold">Author Nickname</h2>
				<p class="text-sm text-gray-600">A short author bio goes here.</p>
			</div>
			</div>
		</div>

		<!-- Categories Section -->
		<div class="mb-6">
			<h3 class="text-lg font-semibold mb-2">Categories</h3>
			<ul class="list-disc list-inside text-gray-700">
			<li><a href="#" class="text-blue-500 hover:underline">Lập trình</a></li>
			<li><a href="#" class="text-blue-500 hover:underline">Tiếng Nhật</a></li>
			</ul>
		</div>

		<!-- Tags Section -->
		<div>
			<h3 class="text-lg font-semibold mb-2">Tags</h3>
			<div class="flex flex-wrap">
			<a href="#" class="bg-blue-100 text-blue-700 text-sm px-2 py-1 rounded-full mr-2 mb-2 hover:bg-blue-200">#vuejs</a>
			<a href="#" class="bg-blue-100 text-blue-700 text-sm px-2 py-1 rounded-full mr-2 mb-2 hover:bg-blue-200">#php</a>
			<a href="#" class="bg-blue-100 text-blue-700 text-sm px-2 py-1 rounded-full mr-2 mb-2 hover:bg-blue-200">#nguphapn5</a>
			<a href="#" class="bg-blue-100 text-blue-700 text-sm px-2 py-1 rounded-full mr-2 mb-2 hover:bg-blue-200">#phanbietnguphap</a>
			</div>
		</div>
	</aside>
</template>

<script lang="ts" setup>

</script>

<style>

</style>
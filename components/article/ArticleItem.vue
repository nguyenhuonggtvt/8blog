<template>
    <div class="group cursor-pointer bg-white">
        <div class="overflow-hidden rounded-md bg-gray-100 transition-all hover:scale-105 dark:bg-gray-800">
            <a class="relative block aspect-square" href="/post/14-architectural-design-ideas-for-spacious-interior">
                <img class="aspect-square object-cover" :src="article.image" alt="">
            </a>
        </div>
        <div class="p-4">
            <div class="flex gap-3">
                <a href="/category/design">
                    <span class="inline-block text-xs font-medium tracking-wider uppercase mt-5 text-blue-600">{{ article.categories[0] }}</span>
                </a>
                <a href="/category/lifestyle">
                    <span class="inline-block text-xs font-medium tracking-wider uppercase mt-5 text-purple-600">{{ article.categories[1] }}</span>
                </a>
            </div>
            <h2 class="text-lg font-semibold leading-snug tracking-tight mt-2 dark:text-white">
                <a href="/post/14-architectural-design-ideas-for-spacious-interior">
                    <span class="bg-gradient-to-r from-green-200 to-green-100 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px] dark:from-purple-800 dark:to-purple-900">{{ article.title }}</span>
                </a>
            </h2>
            <div class="">
                <p class="mt-2 line-clamp-3 text-sm text-gray-500 dark:text-gray-400">
                    <a href="/post/14-architectural-design-ideas-for-spacious-interior">{{ article.description }}</a>
                </p>
            </div>
            <div class="mt-3 flex items-center space-x-3 text-gray-500 dark:text-gray-400">
                <a href="/author/mario-sanchez">
                    <div class="flex items-center gap-3">
                        <div class="relative h-5 w-5 flex-shrink-0">
                            <img :src="article.author.profile_img" alt="">
                        </div>
                        <span class="truncate text-sm">{{ article.author.name }}</span>
                    </div>
                </a>
                <span class="text-xs text-gray-300 dark:text-gray-600">•</span>
                <time class="truncate text-sm" datetime="2022-10-21T06:05:00.000Z">{{ article.publish_date }}</time>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
	defineProps({
        article: Object,
        default: () => ({})
    });
</script>

<style>

</style>
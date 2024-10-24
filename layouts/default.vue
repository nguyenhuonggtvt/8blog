<template>
    <div class="bg-gray-100 pt-20 font-sans_nunito">
        <AppHeader />
        <div class="container flex gap-8 flex-col md:flex-row mx-auto max-w-screen-xl px-4 pb-20">
            <div class="w-full lg:w-3/4">
                <slot />
            </div>
            <div class="w-full lg:w-1/4">
                <AppSidebar />
            </div>
        </div>
        <AppFooter />
    </div>
</template>

<script setup>
    import { useCategoryStore } from '~/stores/category'

    const categoryStore = useCategoryStore()
    // if (!categoryStore.categories.length) {
        await categoryStore.fetchCategories()
    // }
</script>
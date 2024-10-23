<template>
    <div id="index_page">
        <!-- Login User -->
        <!-- <div class="container mx-auto flex justify-between items-center p-4">
            <p>Name: {{ userStore.name }}</p>
            <p>Logged In: {{ userStore.isLoggedIn }}</p>
            <button @click="userStore.login">Login</button>
            <button @click="userStore.logout">Logout</button>
        </div> -->

        <!-- List Item -->
        <div class="flex justify-between items-center">
            <div class="grid gap-4 md:grid-cols-2 lg:gap-6 xl:grid-cols-3 ">
                <!-- Item -->
                <ArticleItem v-for="(article, key) in articles" :key="key" :article="article"/>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import { useUserStore } from '@/stores/user'
    
    const userStore = useUserStore()

    const { data: articles } = await useFetch('/api/articles')

</script>

<style>

</style>
<template>
    <div id="index_page">
        <!-- Login User -->
        <div>
            <p>Name: {{ userStore.name }}</p>
            <p>Logged In: {{ userStore.isLoggedIn }}</p>
            <button @click="userStore.login">Login</button>
            <button @click="userStore.logout">Logout</button>
        </div>

        <!-- List Item -->
        <div class="container mx-auto flex justify-between items-center p-4">
            <div class="mt-10 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3 ">
                <!-- Item -->
                <ArticleItem v-for="(article, key) in articles" :key="key" :article="article"/>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import { useUserStore } from '@/stores/user'
    const userStore = useUserStore()

	const articles = [
        {
            title: "14 Architectural Design Ideas for a Spacious Interior",
            description: 'It is a cliche philosophical question, but it touches on something fundamental about how humans relate to the world around them.',
            image: 'https://static.vecteezy.com/system/resources/thumbnails/034/979/467/small_2x/ai-generated-beautiful-landscape-with-green-meadows-and-blue-sky-with-clouds-photo.jpg',
            author: {
                name: 'Mario Sanchez',
                profile_img: 'https://as1.ftcdn.net/v2/jpg/05/52/03/68/1000_F_552036876_1tlOoZo90nkcBnotqdoVgB8FBrSHwQBN.jpg',
            },
            categories: ['Design', 'Lifestyle'],
            publish_date: 'October 21, 2022',
        },
        {
            title: "Nguyen Van Huong",
            description: 'Noi dung mo ta.',
            image: 'https://as1.ftcdn.net/v2/jpg/05/52/03/68/1000_F_552036876_1tlOoZo90nkcBnotqdoVgB8FBrSHwQBN.jpg',
            author: {
                name: 'Nguyen Huong',
                profile_img: 'https://as1.ftcdn.net/v2/jpg/05/52/03/68/1000_F_552036876_1tlOoZo90nkcBnotqdoVgB8FBrSHwQBN.jpg',
            },
            categories: ['Thiet ke', 'Japanese'],
            publish_date: 'October 20, 2024',
        },
        {
            title: "14 Architectural Design Ideas for a Spacious Interior",
            description: 'It is a cliche philosophical question, but it touches on something fundamental about how humans relate to the world around them.',
            image: 'https://static.vecteezy.com/system/resources/thumbnails/034/979/467/small_2x/ai-generated-beautiful-landscape-with-green-meadows-and-blue-sky-with-clouds-photo.jpg',
            author: {
                name: 'Mario Sanchez',
                profile_img: 'https://as1.ftcdn.net/v2/jpg/05/52/03/68/1000_F_552036876_1tlOoZo90nkcBnotqdoVgB8FBrSHwQBN.jpg',
            },
            categories: ['Design', 'Lifestyle'],
            publish_date: 'October 21, 2022',
        },
        {
            title: "14 Architectural Design Ideas for a Spacious Interior",
            description: 'It is a cliche philosophical question, but it touches on something fundamental about how humans relate to the world around them.',
            image: 'https://static.vecteezy.com/system/resources/thumbnails/034/979/467/small_2x/ai-generated-beautiful-landscape-with-green-meadows-and-blue-sky-with-clouds-photo.jpg',
            author: {
                name: 'Mario Sanchez',
                profile_img: 'https://as1.ftcdn.net/v2/jpg/05/52/03/68/1000_F_552036876_1tlOoZo90nkcBnotqdoVgB8FBrSHwQBN.jpg',
            },
            categories: ['Design', 'Lifestyle'],
            publish_date: 'October 21, 2022',
        },
        {
            title: "14 Architectural Design Ideas for a Spacious Interior",
            description: 'It is a cliche philosophical question, but it touches on something fundamental about how humans relate to the world around them.',
            image: 'https://static.vecteezy.com/system/resources/thumbnails/034/979/467/small_2x/ai-generated-beautiful-landscape-with-green-meadows-and-blue-sky-with-clouds-photo.jpg',
            author: {
                name: 'Mario Sanchez',
                profile_img: 'https://as1.ftcdn.net/v2/jpg/05/52/03/68/1000_F_552036876_1tlOoZo90nkcBnotqdoVgB8FBrSHwQBN.jpg',
            },
            categories: ['Design', 'Lifestyle'],
            publish_date: 'October 21, 2022',
        },
    ];

</script>

<style>

</style>
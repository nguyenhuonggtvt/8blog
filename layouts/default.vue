<template>
    <div class="bg-gray-50 pt-20">
        <AppHeader />
        <div class="container flex gap-8 flex-col md:flex-row mx-auto max-w-screen-xl">
            <div class="w-full xl:w-3/4">
                <slot />
            </div>
            <div class="w-full xl:w-1/4">
                <AppSidebar />
            </div>
        </div>
        <AppFooter />
    </div>
</template>
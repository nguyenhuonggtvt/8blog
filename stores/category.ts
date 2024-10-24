// stores/category.ts
import { defineStore } from 'pinia'
import { ref, reactive } from 'vue'

export const useCategoryStore = defineStore('categories', () => {
    // State
    const categories = ref([])

    // Actions
    const fetchCategories = async () => {
        try {
            const { data } = useAsyncData('categories', async () => {
                return await $fetch('/api/categories')
            });

            if (data.value) {
                categories.value = data.value
            }
        } catch (error) {
            console.error('Error fetching category:', error)
        }
    }

    return { categories, fetchCategories }
})
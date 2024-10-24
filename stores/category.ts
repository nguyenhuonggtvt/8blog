// stores/category.ts
import { defineStore } from 'pinia'
import { ref, reactive } from 'vue'

export const useCategoryStore = defineStore('categories', () => {
    // State
    const categories = ref([])

    // Actions
    const fetchCategories = async () => {
        if (!categories.value.length && import.meta.server) {
            try {
                const { data } = await useAsyncData('categories', async () => {
                    return $fetch('/api/categories')
                });
    
                if (data.value) {
                    categories.value = data.value
                }
            } catch (error) {
                console.error('Error fetching category:', error)
            }
        }
    }

    return { categories, fetchCategories }
})
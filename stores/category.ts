// stores/category.ts
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCategoryStore = defineStore('categories', () => {
    // State
    const categories = ref([])

    // Actions
    const fetchCategories = async () => {
        try {
            categories.value = await $fetch('/api/categories')
        } catch (error) {
            console.error('Error fetching category:', error)
        }
    }

    return { categories, fetchCategories }
})
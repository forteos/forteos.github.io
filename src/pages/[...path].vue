<script setup>
import { RouterLink } from 'vue-router'
import { Button } from '@/components/ui/button'
import { useHead } from '@unhead/vue'

useHead({
  title: '404 - Forte',
})
</script>

<template>
  <div class="h-full flex flex-col gap-2 w-full text-center bg-gray-100">
    <div class="h-full flex flex-col bg-gray-100 w-full p-4 py-20 text-center">
      <h1 class="text-5xl md:text-6xl font-bold text-slate-900 mb-6">{{ $t('notFound.title') }}</h1>
      <p class="text-xl text-slate-500 mb-12 max-w-2xl mx-auto">
        {{ $t('notFound.desc') }}
      </p>
      <nav class="flex flex-col sm:flex-row gap-4 justify-center">
        <RouterLink to="/">
          <Button size="lg" class="bg-slate-900 hover:bg-slate-800">
            {{ $t('notFound.button') }}
          </Button>
        </RouterLink>
      </nav>
    </div>
    <div class="py-38"></div>
  </div>
</template>
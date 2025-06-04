<script setup>
import { RouterLink } from 'vue-router'
import { Button } from '@/components/ui/button'
import { IconDownload } from '@tabler/icons-vue'
import { useHead } from '@unhead/vue'

useHead({
  title: 'Home - Forte',
  prefix: 'og: http://ogp.me/ns# fb: http://ogp.me/ns/ fb# website: http://ogp.me/ns/website#',
  meta: [
    {
      name: "discription",
      content: "Improve, minimal",
    },
    {
      name: "og:discription",
      content: "ForteOS is Debian-based Linux distribution focused on performance, user experience.",
    },
    {
      name: "og:url",
      content: "https://forteos.github.io",
    },
    {
      name: "og:type",
      content: "website",
    },
    {
      name: "og:site_name",
      content: "ForteOS",
    },
    {
      name: "og:title",
      content: "Home",
    },
    {
      name: "og:discription",
      content: "ForteOS is Debian-based Linux distribution focused on performance, user experience.",
    },
  ],
})
</script>

<template>
  <div class="h-full flex flex-col gap-2 w-full text-center">
    <div class="h-auto flex flex-col bg-gray-100 w-full p-4 py-20 text-center">
      <h1 class="text-5xl md:text-6xl font-bold text-slate-900 mb-6">ForteOS</h1>
      <p class="text-xl md:text-2xl text-slate-600 mb-4 font-light">Improve, minimal</p>
      <p class="text-lg text-slate-500 mb-12 max-w-2xl mx-auto">
        {{ $t('index.hero.desc') }}
      </p>
      <nav class="flex flex-col sm:flex-row gap-4 justify-center">
        <RouterLink to="/downloads">
          <Button size="lg" class="bg-slate-900 hover:bg-slate-800">
            <IconDownload class="w-4 h-4 mr-1" />{{ $t('index.hero.download') }}
          </Button>
        </RouterLink>
        <a href="#features">
          <Button size="lg" variant="outline">
            {{ $t('index.hero.learnmore') }}
          </Button>
        </a>
      </nav>
    </div>
    <div class="bg-white p-3 w-full" id="features">
      <h2 class="text-4xl font-bold mb-5">{{ $t('index.features.title') }}</h2>
      <div class="grid grid-cols-2 gap-4 w-3/5 mx-auto">
        <div class="py-5 px-10 bg-gray-100 rounded-lg flex flex-col gap-2">
          <h3 class="text-2xl font-bold">{{ $t('index.features.minimal.title') }}</h3>
          <p class="text-gray-600">{{ $t('index.features.minimal.desc') }}</p>
        </div>
        <div class="py-5 px-10 bg-gray-100 rounded-lg flex flex-col gap-2">
          <h3 class="text-2xl font-bold">{{ $t('index.features.debianBased.title') }}</h3>
          <p class="text-gray-600">{{ $t('index.features.debianBased.desc') }}</p>
        </div>
        <div class="py-5 px-10 bg-gray-100 rounded-lg flex flex-col gap-2">
          <h3 class="text-2xl font-bold">{{ $t('index.features.modern.title') }}</h3>
          <p class="text-gray-600">{{ $t('index.features.modern.desc') }}</p>
        </div>
        <div class="py-5 px-10 bg-gray-100 rounded-lg flex flex-col gap-2">
          <h3 class="text-2xl font-bold">{{ $t('index.features.oss.title') }}</h3>
          <p class="text-gray-600">{{ $t('index.features.oss.desc') }}</p>
        </div>
      </div>
    </div>
    <div class="bg-white p-3 w-full" id="screenshot">
      <h2 class="text-4xl font-bold mb-5">{{ $t('index.screenshot') }}</h2>
      <div class="grid grid-cols-2 md:grid-cols-1 gap-2 w-2/5 mx-auto">
        <img src="../assets/images/forte-xfce.png" width="450" />
      </div>
    </div>
  </div>
</template>

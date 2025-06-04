<script setup>
import { Button } from '@/components/ui/button';
import { KdePlasmaIcon } from '@mkody/vue3-simple-icons';
import { useHead } from '@unhead/vue'
import { IconDownload } from '@tabler/icons-vue'
import forteXfce from "@/assets/images/forte-xfce.png"

const editionList = {
  version: '25.06',
  x86Version: '25.06',
  amd64:[
    {
      name: 'Plasma',
      screenshot: forteXfce,
      dl: null
    },
    {
      name: 'Xfce',
      screenshot: forteXfce,
      dl: null
    }
  ],
  i186:[
    {
      name: 'Xfce',
      screenshot: forteXfce,
      dl: null
    }
  ]
}

useHead({
  title: 'Download Forte - Forte',
  prefix: 'og: http://ogp.me/ns# fb: http://ogp.me/ns/ fb# article: http://ogp.me/ns/article#',
  meta: [
    {
      name: "discription",
      content: "You can download Forte from here...",
    },
    {
      name: "og:discription",
      content: "ForteOS is Debian-based Linux distribution focused on performance, user experience.",
    },
    {
      name: "og:url",
      content: "https://forteos.github.io/downloads",
    },
    {
      name: "og:type",
      content: "article",
    },
    {
      name: "og:site_name",
      content: "ForteOS",
    },
    {
      name: "og:title",
      content: "Download Forte",
    },
    {
      name: "og:discription",
      content: "You can download Forte from here...",
    },
  ],
})
</script>

<template>
  <div class="h-full flex flex-col gap-2 w-full text-center">
    <div class="h-auto flex flex-col bg-gray-100 w-full p-4 py-20 text-center">
      <h1 class="text-5xl md:text-6xl font-bold text-slate-900 mb-6">Downloads</h1>
      <p class="text-xl md:text-2xl text-slate-600 mb-4 font-light">{{ $t('downloads.desc') }}</p>
    </div>
    <div class="flex flex-col gap-2 bg-white p-3 w-full">
      <div>
        <h2 class="text-4xl font-bold mb-5">64bit</h2>
        <div class="flex gap-5 justify-center items-center">
          <div class="flex flex-col gap-2 bg-gray-100 p-5 text-center rounded-lg" v-for="edition in editionList.amd64">
            <div>
              <img :src="edition.screenshot" width="337" />
              <h3 class="text-lg font-bold">Forte {{ editionList.version }} ({{ edition.name }})</h3>              
            </div>
            <Button size="lg" class="bg-slate-900 hover:bg-slate-500 "><IconDownload class="w-4 h-4 mr-1" />{{ $t('downloads.download') }}</Button>
          </div>
        </div>
      </div>
      <div>
        <h2 class="text-4xl font-bold mb-5">32bit</h2>
        <div class="flex gap-5 justify-center items-center">
          <div class="flex flex-col gap-2 bg-gray-100 p-5 text-center rounded-lg" v-for="edition in editionList.i186">
            <div>
              <img :src="edition.screenshot" width="337" />
              <h3 class="text-lg font-bold">Forte {{ editionList.x86Version }} x86 ({{ edition.name }})</h3>              
            </div>
            <Button size="lg" class="bg-slate-900 hover:bg-slate-500 "><IconDownload class="w-4 h-4 mr-1" />{{ $t('downloads.download') }}</Button>
          </div>
        </div>
      </div>
      <h2 class="text-4xl font-bold mb-5">{{ $t('downloads.oldVersion') }}</h2>
      <p>{{ $t('downloads.oldVersionDesc') }}</p>
      <a href="https://sourceforge.net/projects/forteos/files/" class="text-blue-500 hover:text-blue-600" target="_blank" rel="noopener noreferer">{{ $t('downloads.gosf') }}</a>
    </div>
  </div>
</template>

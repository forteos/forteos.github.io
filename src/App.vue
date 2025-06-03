<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from '@/components/ui/navigation-menu'
import { useI18n } from "vue-i18n";

const { t } = useI18n() 

function setLang(lang) {
  localStorage.setItem('lang', lang);
  window.location.reload()
}
</script>

<template>
  <header class="p-2 px-5 flex items-center gap-2 rounded-lg">
    <RouterLink to="/"><h2 class="text-lg ">ForteOS</h2></RouterLink>
    <NavigationMenu class="ml-auto">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>{{ $t('nav.language') }}</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink @click="setLang('en')">English</NavigationMenuLink>
            <NavigationMenuLink @click="setLang('ja')">日本語</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <RouterLink to="/"><NavigationMenuLink>{{ $t('nav.home') }}</NavigationMenuLink></RouterLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <RouterLink to="/downloads"><NavigationMenuLink>{{ $t('nav.downloads') }}</NavigationMenuLink></RouterLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  </header>
  <main class="h-full w-full">
    <RouterView class="h-full w-full" />
  </main>
  <div class="h-auto flex flex-col bg-gray-100 text-gray-600 w-full p-4 py-10 gap-2 text-center">
    <div class="flex justify-center">
      <div class="grid grid-cols-2">
        <RouterLink to="/downloads" class="text-center">{{ $t('nav.downloads') }}</RouterLink>
        <a href="https://github.com/aoi-szmy/forte" target="_blank" rel="noopener noreferer" class="text-center">GitHub</a>
      </div>
    </div>
    <p class="text-sm">{{ $t('footer.linuxTrade') }}</p>
  </div>
</template>
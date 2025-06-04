import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import './style.css';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import { routes } from 'vue-router/auto-routes';
import { createHead } from '@unhead/vue/client';
 import { setupLayouts } from 'virtual:generated-layouts'

const router = createRouter({
  history: createWebHistory(),
  routes
})

const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem('lang') || 'en',
  fallbackLocale: 'ja',
  messages: {
    en: {
      index: {
        hero: {
          desc: 'ForteOS is Debian-based Linux distribution focused on performance, user experience.',
          download: 'Download',
          learnmore: 'Learn More'
        },
        features: {
          title: 'Features',
          minimal: {
            title: 'Space-Saving',
            desc: 'Forte only includes essential tools and software, allowing the image size to remain under 2GB.'
          },
          debianBased: {
            title: 'Debian-Based',
            desc: 'Forte is built on the stable version of Debian, enabling the use of Debian software.'
          },
          modern: {
            title: 'Modern',
            desc: 'ForteOS Xfce features a modern layout that rivals other editions while utilizing the lightweight desktop environment Xfce.'
          },
          oss: {
            title: 'Open Source',
            desc: 'Forte is open-source software released under the GPL v3 license. This allows you to build the source code as is or create a custom distribution based on the source code.'
          }
        },
        screenshot: 'Screenshot',
      },
      downloads: {
        download: 'Download',
        desc: 'You can download Forte from here...',
        oldVersion: 'Looking for an older release?',
        oldVersionDesc: 'Looking for files from an older release? Older versions can be found at SourceForge!',
        gosf: 'Go SourceForge'
      },
      nav: {
        language: 'Language',
        home: 'Home',
        downloads: 'Download'
      },
      footer: {
        linuxTrade: 'Linux® is the registered trademark of Linus Torvalds in the U.S. and other countries.'
      },
      notFound: {
        title: 'Not Found :(',
        desc: "I see you've lost your way, but don't worry, we have a link to get back :)",
        button: 'Return to Home'
      }
    },
    ja: {
      index: {
        hero: {
          desc: 'Forteは、パフォーマンスとユーザーエクスペリエンスに重点を置いたDebianベースのLinuxディストリビューションです。 ',
          download: 'ダウンロード',
          learnmore: '詳しく知る'
        },
        features: {
          title: '特徴',
          minimal: {
            title: '省スペース',
            desc: 'Forteは必須のツールやソフトウェアだけを含んでいるため、イメージのサイズが2GB未満に収まります。'
          },
          debianBased: {
            title: 'Debianベース',
            desc: 'ForteはDebianの安定版をベースに構築されているため、Debianのソフトウェアを利用することができます。'
          },
          modern: {
            title: 'モダン',
            desc: 'ForteOS Xfceは軽量なデスクトップ環境であるXfceを採用しながらも他のエディションに劣らないモダンなレイアウトを備えています。'
          },
          oss: {
            title: 'オープンソース',
            desc: 'ForteはGPL v3の下で公開されているオープンソースソフトウェアです。これにより、ソースコードをそのままビルドしたり、カスタマイズしたディストリビューションを作成することができます。'
          }
        },
        screenshot: 'スクリーンショット',
      },
      downloads: {
        download: 'ダウンロード',
        desc: 'Forteはここからダウンロードできます...',
        oldVersion: '古いリリースを探していますか？',
        oldVersionDesc: '古いリリースを探していますか？古いバージョンはSourceForgeで見つけることができます！',
        gosf: 'SourceForgeへ'
      },
      nav: {
        language: '言語',
        home: 'ホーム',
        downloads: 'ダウンロード'
      },
      footer: {
        linuxTrade: 'Linux® は、米国およびその他の国におけるLinus Torvaldsの登録商標です。 '
      },
      notFound: {
        title: 'お探しのページが見つかりませんでした :(',
        desc: "道に迷ってしまったようですが、ご安心ください。ホームに戻るためのボタンがここにあります :)",
        button: 'ホームに戻る'
      }
    }
  }
})

const head = createHead()
const app = createApp(App)

app.use(head);
app.use(router);
app.use(i18n);
app.mount('#app');
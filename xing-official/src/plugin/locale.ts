import { createI18n } from 'vue-i18n'
import en from '@/locales/en.json'
import cn from '@/locales/zh-cn.json'
import tw from '@/locales/zh-tw.json'
import vn from '@/locales/vn.json'

export type AvailableLocales = 'zh-tw' | 'en' | 'zh-cn' | 'vn'

const available = import.meta.env.VITE_LOCALES
const messages = {
  'zh-tw': tw,
  ...(available.includes('zh-cn') ? { 'zh-cn': cn } : {}),
  ...(available.includes('en') ? { en: en } : {}),
  ...(available.includes('vn') ? { vn: vn } : {}),
}
const urlParams = new URLSearchParams(window.location.search)

export const i18n = createI18n({
  legacy: false,
  locale: urlParams.get('l') || import.meta.env.VITE_DEFAULT_LOCALE || 'zh-tw',
  globalInjection: true,
  fallbackLocale: 'zh-tw',
  messages,
})

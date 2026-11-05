export const PROJECT_CATEGORIES = [
  { slug: 'sites', label: 'Сайты', en: 'Websites', icon: 'monitor', desc: 'Корпоративные сайты, лендинги и цифровые продукты' },
  { slug: 'business-cards', label: 'Визитки', en: 'Business cards', icon: 'contact', desc: 'Сайты-визитки и персональные страницы' },
  { slug: 'ecommerce', label: 'E-commerce', en: 'E-commerce', icon: 'shopping-bag', desc: 'Интернет-магазины и каталоги' },
  { slug: 'presentations', label: 'Презентации', en: 'Presentations', icon: 'presentation', desc: 'Коммерческие, корпоративные и визуальные презентации' },
  { slug: 'product-cards', label: 'Карточки товаров', en: 'Product cards', icon: 'gallery', desc: 'Визуалы и инфографика для маркетплейсов' },
  { slug: 'brandbook', label: 'Брендбук', en: 'Brandbook', icon: 'book-open', desc: 'Фирменный стиль и правила визуальной коммуникации' },
  { slug: 'logos', label: 'Логотипы', en: 'Logos', icon: 'pen-tool', desc: 'Логотипы и знаки' },
  { slug: 'other', label: 'Другие проекты', en: 'Other projects', icon: 'grid', desc: 'Эксперименты и проекты других направлений' },
] as const

export type ProjectCategory = typeof PROJECT_CATEGORIES[number]['slug']

export function categorySlug(value: string): ProjectCategory {
  const raw = (value || '').toLowerCase().trim()
  const match = PROJECT_CATEGORIES.find((c) => c.slug === raw || c.label.toLowerCase() === raw || c.en.toLowerCase() === raw)
  if (match) return match.slug

  // Compatibility mapping for projects saved with the previous category set.
  if (/business.?card|визитк|сайт.?визит/.test(raw)) return 'business-cards'
  if (/product.?card|карточк.*товар|инфографик|wildberries|ozon/.test(raw)) return 'product-cards'
  if (/presentation|презентац|pitch.?deck/.test(raw)) return 'presentations'
  if (/brand.?book|brandbook|брендбук|гайдлайн|фирменн.*стил/.test(raw)) return 'brandbook'
  if (/logo|логотип|знак/.test(raw)) return 'logos'
  if (/shop|e-?commerce|магазин|каталог/.test(raw)) return 'ecommerce'
  if (/landing|лендинг|web|website|сайт|digital|дизайн|campaign|кампан|pet day/.test(raw)) return 'sites'
  return 'other'
}

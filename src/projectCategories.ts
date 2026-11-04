export const PROJECT_CATEGORIES = [
  {
    "slug": "web-design",
    "label": "Веб-дизайн",
    "en": "Web design",
    "icon": "window",
    "desc": "Сайты, лендинги и цифровые продукты"
  },
  {
    "slug": "landing-pages",
    "label": "Лендинги",
    "en": "Landing pages",
    "icon": "layers",
    "desc": "Одностраничные сайты с фокусом на конверсию"
  },
  {
    "slug": "ecommerce",
    "label": "Интернет-магазины",
    "en": "E-commerce",
    "icon": "shopping-bag",
    "desc": "Каталоги, магазины и карточки товаров"
  },
  {
    "slug": "branding",
    "label": "Брендинг",
    "en": "Branding",
    "icon": "sparkles",
    "desc": "Айдентика и визуальные системы"
  },
  {
    "slug": "digital",
    "label": "Digital-проекты",
    "en": "Digital projects",
    "icon": "orbit",
    "desc": "Спецпроекты, кампании и digital-опыт"
  },
  {
    "slug": "other",
    "label": "Другое",
    "en": "Other",
    "icon": "grid",
    "desc": "Эксперименты и другие проекты"
  }
] as const
export type ProjectCategory = typeof PROJECT_CATEGORIES[number]['slug']
export function categorySlug(value: string): ProjectCategory {
 const raw=(value||'').toLowerCase()
 const match=PROJECT_CATEGORIES.find(c=>c.slug===raw||c.label.toLowerCase()===raw||c.en.toLowerCase()===raw)
 if(match)return match.slug
 if(/landing|лендинг/.test(raw))return 'landing-pages'
 if(/shop|e-?commerce|магазин|каталог/.test(raw))return 'ecommerce'
 if(/brand|айдентик/.test(raw))return 'branding'
 if(/campaign|digital|кампан|pet day/.test(raw))return 'digital'
 if(/web|сайт|design|дизайн/.test(raw))return 'web-design'
 return 'other'
}

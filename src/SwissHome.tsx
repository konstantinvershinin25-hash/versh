import React, { useMemo, useState } from 'react'
import './swiss-home.css'
import portrait from '../konstantin-portrait.jpg'

type Language = 'ru' | 'en'
type HomeProject = {
  id: string
  title: string
  type: string
  year: string
  image?: string
  onOpen: () => void
}

type Props = {
  language: Language
  onToggleLanguage: () => void
  projects: HomeProject[]
}

const copy = {
  ru: {
    role: 'НЕЗАВИСИМАЯ ДИЗАЙН-ПРАКТИКА / 2026',
    location: 'РАБОТАЮ С БИЗНЕСОМ В РОССИИ И ПО ВСЕМУ МИРУ',
    headline: <>ДИЗАЙН,<br />КОТОРЫЙ ДЕЛАЕТ<br /><span>БИЗНЕС СИЛЬНЕЕ.</span></>,
    intro: 'Создаю визуальные системы, цифровые продукты и коммуникации, которые помогают брендам выглядеть убедительно и говорить с аудиторией на одном языке.',
    discuss: 'ОБСУДИТЬ ПРОЕКТ',
    works: 'СМОТРЕТЬ РАБОТЫ',
    selected: '01 — КЕЙСЫ',
    aboutMeLabel: '02 — ОБО МНЕ',
    aboutMeTitle: <>КОНСТАНТИН<br /><span>ВЕРШИНИН.</span></>,
    aboutMeLead: 'Независимый дизайнер. Помогаю бизнесу находить свой визуальный язык и превращать идеи в цельные, продуманные решения.',
    aboutMeText: 'В дизайне с 2022 года. Работаю с брендингом, сайтами, digital-продуктами и визуальными коммуникациями. В каждом проекте для меня важны не только эстетика, но и задача бизнеса: понять её, выстроить логику и довести решение до результата.',
    aboutMeNote: '4+ ГОДА В ДИЗАЙНЕ · ОТ ИДЕИ ДО РЕАЛИЗАЦИИ',
    all: 'ВСЕ',
    web: 'WEB',
    branding: 'BRANDING',
    commerce: 'E-COMMERCE',
    other: 'OTHER',
    aboutLabel: '03 — ПОДХОД',
    aboutTitle: 'ДИЗАЙН С ЦЕЛЬЮ.',
    aboutText: 'Я помогаю бизнесу превращать идеи и задачи в понятные визуальные решения. В работе соединяю стратегическое мышление, внимание к деталям и функциональный дизайн.',
    aboutNote: 'ОТ ПЕРВОГО БРИФА ДО ГОТОВОГО РЕШЕНИЯ',
    servicesLabel: '04 — НАПРАВЛЕНИЯ',
    servicesTitle: 'ЧЕМ МОГУ БЫТЬ ПОЛЕЗЕН',
    services: [
      ['01', 'Брендинг и айдентика', 'Логотипы, фирменный стиль, визуальные системы и гайдлайны.'],
      ['02', 'Сайты и digital', 'Структура, UX/UI и дизайн сайтов для компаний и продуктов.'],
      ['03', 'E-commerce дизайн', 'Карточки товаров, контент для маркетплейсов и интернет-магазинов.'],
      ['04', 'Визуальные коммуникации', 'Презентации, рекламные материалы и графический дизайн.'],
    ],
    contactLabel: '05 — КОНТАКТ',
    contactTitle: <>ЕСТЬ ЗАДАЧА?<br /><em>ДАВАЙТЕ ОБСУДИМ.</em></>,
    email: 'НАПИСАТЬ НА ПОЧТУ',
    footer: 'НЕЗАВИСИМЫЙ ДИЗАЙНЕР',
    top: 'НАВЕРХ ↑',
    view: 'ОТКРЫТЬ КЕЙС',
  },
  en: {
    role: 'INDEPENDENT DESIGN PRACTICE / 2026',
    location: 'WORKING WITH BUSINESSES WORLDWIDE',
    headline: <>DESIGN THAT<br />MAKES YOUR<br /><span>BUSINESS STRONGER.</span></>,
    intro: 'I create visual systems, digital products and communications that help brands look confident and connect with their audience.',
    discuss: 'START A PROJECT',
    works: 'EXPLORE WORK',
    selected: '01 — CASE STUDIES',
    aboutMeLabel: '02 — ABOUT ME',
    aboutMeTitle: <>KONSTANTIN<br /><span>VERSHININ.</span></>,
    aboutMeLead: 'Independent designer. I help businesses find their visual language and turn ideas into thoughtful, cohesive solutions.',
    aboutMeText: 'Working in design since 2022. My practice spans branding, websites, digital products and visual communication. I care not only about aesthetics, but also about the purpose behind every project: understanding the challenge, building a clear approach and bringing the solution to life.',
    aboutMeNote: '4+ YEARS IN DESIGN · FROM IDEA TO DELIVERY',
    all: 'ALL',
    web: 'WEB',
    branding: 'BRANDING',
    commerce: 'E-COMMERCE',
    other: 'OTHER',
    aboutLabel: '03 — APPROACH',
    aboutTitle: 'DESIGN WITH INTENT.',
    aboutText: 'I help businesses turn ideas and challenges into clear visual solutions, combining strategic thinking, attention to detail and functional design.',
    aboutNote: 'FROM FIRST BRIEF TO FINAL DELIVERY',
    servicesLabel: '04 — SERVICES',
    servicesTitle: 'HOW I CAN HELP',
    services: [
      ['01', 'Branding & identity', 'Logos, visual identity, design systems and guidelines.'],
      ['02', 'Web & digital', 'Structure, UX/UI and website design for businesses and products.'],
      ['03', 'E-commerce design', 'Product cards, marketplace content and online store visuals.'],
      ['04', 'Visual communication', 'Presentations, advertising materials and graphic design.'],
    ],
    contactLabel: '05 — CONTACT',
    contactTitle: <>HAVE A PROJECT?<br /><em>LET’S TALK.</em></>,
    email: 'SEND AN EMAIL',
    footer: 'INDEPENDENT DESIGNER',
    top: 'BACK TO TOP ↑',
    view: 'VIEW CASE',
  },
} as const

function categoryOf(type: string): 'web' | 'branding' | 'commerce' | 'other' {
  const value = type.toLowerCase()
  if (value.includes('brand') || value.includes('logo') || value.includes('identity')) return 'branding'
  if (value.includes('commerce') || value.includes('market') || value.includes('e-commerce')) return 'commerce'
  if (value.includes('web') || value.includes('digital') || value.includes('ui') || value.includes('ux')) return 'web'
  return 'other'
}

export default function SwissHome({ language, onToggleLanguage, projects }: Props) {
  const t = copy[language]
  const [filter, setFilter] = useState('all')
  const visibleProjects = useMemo(
    () => filter === 'all' ? projects : projects.filter((project) => categoryOf(project.type) === filter),
    [filter, projects],
  )
  const filters = [
    ['all', t.all], ['web', t.web], ['branding', t.branding], ['commerce', t.commerce], ['other', t.other],
  ]

  return (
    <div className="swiss-home" id="swiss-home-top">
      <div className="swiss-wrap">
        <header className="swiss-nav">
          <a className="swiss-brand" href="/" aria-label="VERSH home">VERSH<sup>®</sup></a>
          <nav className="swiss-nav-links" aria-label="Main navigation">
            <a href="#swiss-work">{language === 'ru' ? 'РАБОТЫ' : 'WORK'}</a>
            <a href="#swiss-about">{language === 'ru' ? 'ОБО МНЕ' : 'ABOUT'}</a>
            <a href="#swiss-services">{language === 'ru' ? 'УСЛУГИ' : 'SERVICES'}</a>
            <a className="swiss-nav-cta" href="#swiss-contact"><span>{language === 'ru' ? 'СВЯЗАТЬСЯ' : 'CONTACT'}</span><b aria-hidden="true">↗</b></a>
            <button className="swiss-lang" type="button" onClick={onToggleLanguage}>{language === 'ru' ? 'RU / EN' : 'EN / RU'}</button>
          </nav>
        </header>
        <main>
          <section className="swiss-hero">
            <div className="swiss-hero-top">
              <div className="swiss-kicker">{t.role}<br />BRANDING / DIGITAL / E-COMMERCE</div>
              <div className="swiss-kicker swiss-hero-index">CHELYABINSK / WORLDWIDE<br />{language === 'ru' ? 'ОТКРЫТ К НОВЫМ ПРОЕКТАМ' : 'AVAILABLE FOR PROJECTS'}</div>
            </div>
            <h1>{t.headline}</h1>
            <div className="swiss-hero-bottom">
              <p>{t.intro}</p>
              <div className="swiss-actions">
                <a className="swiss-button primary" href="#swiss-contact">{t.discuss} <span>↗</span></a>
                <a className="swiss-button" href="#swiss-work">{t.works} <span>↓</span></a>
              </div>
            </div>
          </section>
        </main>
      </div>
      <hr className="swiss-rule" />
      <section className="swiss-section" id="swiss-about">
        <div className="swiss-wrap">
          <div className="swiss-section-head swiss-kicker"><span>{t.aboutMeLabel}</span><span>VERSH®</span></div>
          <div className="swiss-about-me">
            <div className="swiss-about-photo"><img src={portrait} alt="Константин Вершинин — независимый дизайнер" /></div>
            <div className="swiss-about-me-content">
              <h2>{t.aboutMeTitle}</h2>
              <p className="swiss-about-lead">{t.aboutMeLead}</p>
              <p className="swiss-about-description">{t.aboutMeText}</p>
              <div className="swiss-about-me-note">{t.aboutMeNote}</div>
            </div>
          </div>
        </div>
      </section>
      <hr className="swiss-rule" />
      <section className="swiss-section" id="swiss-work">
        <div className="swiss-wrap">
          <div className="swiss-section-head swiss-kicker"><span>{t.selected}</span><span>({String(projects.length).padStart(2, '0')})</span></div>
          <div className="swiss-filter-row" aria-label="Project categories">
            {filters.map(([key, label]) => <button key={key} type="button" className={`swiss-filter ${filter === key ? 'active' : ''}`} onClick={() => setFilter(key)}>{label}</button>)}
          </div>
          <div className="swiss-project-grid">
            {visibleProjects.map((project, index) => (
              <button className={`swiss-project swiss-project-${project.id}`} key={project.id} type="button" onClick={project.onOpen} aria-label={`${t.view}: ${project.title}`}>
                <div className="swiss-project-visual"><span className="swiss-project-index">{String(index + 1).padStart(2, '0')}</span><span className="swiss-project-open">{t.view} ↗</span>
                  {project.image ? <img src={project.image} alt={project.title} loading={index > 1 ? 'lazy' : 'eager'} /> : <div className="swiss-project-placeholder">VERSH® / SELECTED WORK</div>}
                </div>
                <div className="swiss-project-info">
                  <div><div className="swiss-project-name">{project.title}</div><div className="swiss-project-meta">{project.type}</div></div>
                  <div className="swiss-project-meta">{project.year}<span className="swiss-project-arrow"> ↗</span></div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>
      <hr className="swiss-rule" />
      <section className="swiss-section" id="swiss-approach">
        <div className="swiss-wrap">
          <div className="swiss-section-head swiss-kicker"><span>{t.aboutLabel}</span><span>VERSH®</span></div>
          <div className="swiss-about">
            <h2 className="swiss-section-title">{t.aboutTitle}</h2>
            <div className="swiss-about-copy"><p>{t.aboutText}</p><div className="swiss-about-note">{t.aboutNote}</div></div>
          </div>
        </div>
      </section>
      <hr className="swiss-rule" />
      <section className="swiss-section" id="swiss-services">
        <div className="swiss-wrap">
          <div className="swiss-section-head swiss-kicker"><span>{t.servicesLabel}</span><span>04</span></div>
          <h2 className="swiss-section-title">{t.servicesTitle}</h2>
          <div className="swiss-services">
            {t.services.map(([number, title, description]) => (
              <a className="swiss-service" href="#swiss-contact" key={number}>
                <span className="swiss-service-no">{number}</span>
                <div><h3>{title}</h3><p>{description}</p></div>
                <span className="swiss-service-arrow">↗</span>
              </a>
            ))}
          </div>
        </div>
      </section>
      <section className="swiss-contact" id="swiss-contact">
        <div className="swiss-wrap">
          <div className="swiss-kicker">{t.contactLabel}</div>
          <h2>{t.contactTitle}</h2>
          <div className="swiss-contact-bottom">
            <div className="swiss-contact-links"><a className="swiss-contact-mail" href="mailto:konstantinversh@icloud.com">konstantinversh@icloud.com ↗</a><a className="swiss-contact-mail" href="https://t.me/KV252525" target="_blank" rel="noreferrer">TELEGRAM @KV252525 ↗</a></div>
            <a className="swiss-button" href="mailto:konstantinversh@icloud.com?subject=VERSH%20%E2%80%94%20Project%20inquiry">{t.email}</a>
          </div>
        </div>
      </section>
      <footer className="swiss-wrap swiss-footer">
        <span>© 2026 VERSH®</span><span>{t.footer}</span><a href="#swiss-home-top" onClick={(event) => { event.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>{t.top}</a>
      </footer>
    </div>
  )
}

import React from 'react'
import './swiss-home.css'
import portrait from '../konstantin-portrait.jpg'

type Language = 'ru' | 'en'
type HomeProject = { id:string; title:string; type:string; year:string; image?:string; onOpen:()=>void }
type Props = { language:Language; onToggleLanguage:()=>void; projects:HomeProject[] }

const services = [
  ['▱','Дизайн сайтов','Лендинги, сайты-визитки и цифровые продукты'],
  ['⟳','Редизайн','Обновление и развитие существующих сайтов'],
  ['♧','Интернет-магазины','Каталоги и e-commerce решения'],
  ['▥','UX/UI консультации','Аудит интерфейсов и рекомендации'],
  ['▯','Адаптация','Дизайн для мобильных устройств'],
  ['⚙','Поддержка','Развитие и сопровождение проекта'],
]
const steps = ['Обсуждаем задачу','Готовлю концепцию','Создаю дизайн и вношу правки','Передаю проект и помогаю с запуском']

export default function SwissHome({language,onToggleLanguage,projects}:Props) {
 const ru=language==='ru'
 const t=(r:string,e:string)=>ru?r:e
 return <div className="swiss-home" id="swiss-home-top">
  <header className="neon-nav">
   <a className="neon-logo" href="#swiss-home-top">KV</a>
   <nav>
    <a href="#swiss-about">{t('Обо мне','About')}</a><a href="#swiss-work">{t('Кейсы','Work')}</a><a href="#swiss-services">{t('Услуги','Services')}</a><a href="#swiss-process">{t('Процесс','Process')}</a><a href="#swiss-process">{t('Отзывы','Reviews')}</a><a href="#swiss-contact">{t('Контакты','Contact')}</a>
   </nav>
   <div className="neon-nav-actions"><button className="neon-lang" onClick={onToggleLanguage}>{ru?'RU / EN':'EN / RU'}</button><a className="neon-outline" href="#swiss-contact">{t('Обсудить проект','Discuss project')} <span>→</span></a></div>
  </header>
  <main>
   <section className="neon-hero">
    <div className="neon-orbit neon-orbit-one"/><div className="neon-orbit neon-orbit-two"/>
    <div className="neon-hero-copy">
     <div className="neon-pill"><i/> {t('Веб-дизайнер','Web designer')}</div>
     <h1>{t('Создаю сайты,','I create websites,')}<br/>{t('которые','that')}<br/><em>{t('продают','convert')}</em></h1>
     <p>{t('Современный дизайн, продуманный UX и результат для вашего бизнеса','Modern design, thoughtful UX and results for your business')}</p>
     <div className="neon-hero-buttons"><a className="neon-button" href="#swiss-contact">{t('Обсудить проект','Discuss project')} <span>→</span></a><a className="neon-play" href="#swiss-work"><b>▶</b><span>{t('Посмотреть','Explore')}<br/>{t('кейсы','projects')}</span></a></div>
     <div className="neon-benefits"><span>ϟ <small>{t('Быстро и качественно','Fast & reliable')}</small></span><span>◇ <small>{t('С вниманием к деталям','Attention to detail')}</small></span><span>▥ <small>{t('Ориентирован на результат','Result focused')}</small></span></div>
    </div>
    <div className="neon-hero-person"><div className="neon-code-card">〈 / 〉</div><div className="neon-glass-card">DIGITAL<br/>EXPERIENCE</div><img src={portrait} alt="Константин Вершинин"/></div>
   </section>
   <section className="neon-work" id="swiss-work">
    <div className="neon-section-intro"><div className="neon-eyebrow">● {t('Кейсы','Selected work')}</div><h2>{t('Мои работы','My work')}</h2><p>{t('Реализую проекты в разных нишах: от лендингов до интернет-магазинов','Projects across different industries — from landing pages to online stores')}</p><a className="neon-outline" href="#swiss-work">{t('Все кейсы','All projects')} →</a></div>
    <div className="neon-projects">{projects.slice(0,3).map((project,i)=><button className="neon-project" key={project.id} onClick={project.onOpen}><div className="neon-project-image">{project.image?<img src={project.image} alt={project.title}/>:<span>KV / SELECTED WORK</span>}<small>{i===0?'WEB':i===1?'DIGITAL':'CAMPAIGN'}</small></div><strong>{project.title}</strong><span>{project.type} · {project.year}<b>↗</b></span></button>)}</div>
   </section>
   <section className="neon-about" id="swiss-about">
    <div className="neon-about-photo"><img src={portrait} alt="Константин Вершинин"/><span>{t('Делаю сайты с душой ♡','Designing with care ♡')}</span></div>
    <div className="neon-about-copy"><div className="neon-eyebrow">● {t('Обо мне','About me')}</div><h2>{t('Мне 25 лет.','I am 25.')}<br/>{t('Я веб-дизайнер','I am a web designer')}</h2><p>{t('Уже 3 года создаю сайты, которые помогают бизнесу расти. Люблю дизайн, технологии и эстетику в деталях.','Since 2022, I have been creating websites that help businesses grow. I love design, technology and thoughtful details.')}</p><a className="neon-outline" href="https://t.me/KV252525" target="_blank" rel="noreferrer">{t('Узнать больше','Get in touch')} →</a></div>
    <div className="neon-values"><div>♡ <span>{t('Делаю дизайн, который работает','Design that works')}</span></div><div>▱ <span>{t('Погружаюсь в ваш бизнес и задачи','Focused on your business')}</span></div><div>◇ <span>{t('Ценю качество и довожу до результата','Quality from start to finish')}</span></div></div>
   </section>
   <section className="neon-services" id="swiss-services"><div className="neon-section-intro"><div className="neon-eyebrow">● {t('Услуги','Services')}</div><h2>{t('Что я предлагаю?','What I offer')}</h2><p>{t('Полный цикл создания сайта от идеи до запуска','Full website creation, from idea to launch')}</p><a className="neon-button" href="#swiss-contact">{t('Обсудить проект','Discuss project')} →</a></div><div className="neon-service-grid">{services.map(([icon,title,desc])=><a href="#swiss-contact" className="neon-service" key={title}><b>{icon}</b><span><strong>{t(title,title)}</strong><small>{t(desc,desc)}</small></span></a>)}</div></section>
   <section className="neon-process" id="swiss-process"><div><div className="neon-eyebrow">● {t('Как мы работаем','How it works')}</div><h2>{t('Простой процесс','A simple process')}<br/>{t('от идеи до запуска','from idea to launch')}</h2></div><div className="neon-steps">{steps.map((step,i)=><div key={step}><b>{i+1}</b><span>{t(step, ['Discuss the brief','Prepare a concept','Design and refine','Deliver and launch'][i])}</span></div>)}</div></section>
   <section className="neon-cta" id="swiss-contact"><div><h2>{t('Давайте создадим','Let’s create')}<br/>{t('ваш идеальный сайт?','your ideal website?')}</h2><p>{t('Напишите мне — обсудим задачу, сроки и идеи','Message me to discuss your goals, timing and ideas')}</p></div><a className="neon-button" href="https://t.me/KV252525" target="_blank" rel="noreferrer">➤ {t('Написать в Telegram','Message on Telegram')} →</a><div className="neon-phone">➤</div></section>
  </main>
  <footer className="neon-footer"><a className="neon-logo" href="#swiss-home-top">KV</a><span>{t('Веб-дизайнер','Web designer')}</span><nav><a href="#swiss-about">{t('Обо мне','About')}</a><a href="#swiss-work">{t('Кейсы','Work')}</a><a href="#swiss-services">{t('Услуги','Services')}</a><a href="#swiss-process">{t('Процесс','Process')}</a><a href="#swiss-contact">{t('Контакты','Contact')}</a></nav><a href="https://t.me/KV252525">↗ Telegram</a><a href="mailto:konstantinversh@icloud.com">✉</a></footer>
 </div>
}

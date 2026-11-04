import React, { useEffect, useRef, useState } from 'react'
import './swiss-home.css'
import portrait from '../konstantin-portrait.jpg'

type Language = 'ru' | 'en'
type HomeProject = { id:string; title:string; type:string; category:string; year:string; image?:string; onOpen:()=>void }
type Props = { language:Language; onToggleLanguage:()=>void; projects:HomeProject[]; onOpenAll:()=>void; onOpenCategory:(slug:string)=>void }

const services = [
  ['monitor','Дизайн сайтов','Лендинги, сайты-визитки и цифровые продукты'],
  ['refresh','Редизайн','Обновление и развитие существующих сайтов'],
  ['bag','Интернет-магазины','Каталоги и e-commerce решения'],
  ['chart','UX/UI консультации','Аудит интерфейсов и рекомендации'],
  ['phone','Адаптация','Дизайн для мобильных устройств'],
  ['gear','Поддержка','Развитие и сопровождение проекта'],
]
const steps = ['Обсуждаем задачу','Готовлю концепцию','Создаю дизайн и вношу правки','Передаю проект и помогаю с запуском']

function ValueIcon({type}:{type:'spark'|'layers'|'target'}) {
 if(type==='spark') return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z"/></svg>
 if(type==='layers') return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 2 10 5-10 5L2 7l10-5Z"/><path d="m2 12 10 5 10-5M2 17l10 5 10-5"/></svg>
 return <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><path d="M12 2v3M12 19v3"/></svg>
}
function TelegramIcon(){return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21.4 3.2 18.2 20c-.2 1.2-.9 1.5-1.8 1l-5-3.7-2.4 2.3c-.3.3-.6.6-1.2.6l.4-5.1 9.3-8.4c.4-.4-.1-.6-.6-.3L5.4 13.6.5 12c-1.1-.3-1.1-1 .2-1.5L19.8 3c.9-.3 1.7.2 1.6.2Z" fill="currentColor"/></svg>}
function Icon({name}:{name:string}){const paths:Record<string,string>={bolt:'M13 2 4 13h6l-1 9 9-12h-6l1-8Z',diamond:'m12 2 9 6-9 14L3 8l9-6Zm-9 6h18M8 8l4 14 4-14M8 2l4 6 4-6',chart:'M4 19V9m8 10V4m8 15v-7M2 19h20',heart:'M20.8 8.8c0 5.2-8.8 11-8.8 11S3.2 14 3.2 8.8A4.7 4.7 0 0 1 12 6.1a4.7 4.7 0 0 1 8.8 2.7Z',monitor:'M3 4h18v13H3zM8 21h8m-4-4v4',refresh:'M20 7V3l-4 4m-12 10v4l4-4m-3-6a8 8 0 0 1 13-4l2 2M4 17l2 2a8 8 0 0 0 13-4',bag:'M4 8h16l-1 13H5L4 8Zm4 0V6a4 4 0 0 1 8 0v2',phone:'M7 2h10v20H7zM10 18h4',gear:'M12 3v3m0 12v3M3 12h3m12 0h3M5.6 5.6l2.1 2.1m8.6 8.6 2.1 2.1m0-12.8-2.1 2.1m-8.6 8.6-2.1 2.1M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z'};return <svg viewBox="0 0 24 24" aria-hidden="true"><path d={paths[name]||paths.diamond}/></svg>}
export default function SwissHome({language,onToggleLanguage,projects,onOpenAll,onOpenCategory}:Props) {
 const cursorRef=useRef<HTMLDivElement>(null)
 const [cursorActive,setCursorActive]=useState(false)
 useEffect(()=>{if(!window.matchMedia('(pointer:fine)').matches)return;const node=cursorRef.current;if(!node)return;const move=(e:PointerEvent)=>{node.style.transform='translate3d('+e.clientX+'px,'+e.clientY+'px,0) translate(-50%,-50%)';setCursorActive(Boolean((e.target as HTMLElement)?.closest('a,button,[role="button"]')))};window.addEventListener('pointermove',move);return()=>window.removeEventListener('pointermove',move)},[])
 const ru=language==='ru'
 const t=(r:string,e:string)=>ru?r:e
 return <div className="swiss-home" id="swiss-home-top"><div ref={cursorRef} className={`neon-cursor ${cursorActive ? "is-active" : ""}`}><span>VIEW</span></div>
  <header className="neon-nav">
   <a className="neon-logo" href="#swiss-home-top">KV</a>
   <nav>
    <a href="#swiss-about">{t('Обо мне','About')}</a><a onClick={onOpenAll}>{t('Кейсы','Work')}</a><a href="#swiss-services">{t('Услуги','Services')}</a><a href="#swiss-process">{t('Процесс','Process')}</a><a href="#swiss-process">{t('Отзывы','Reviews')}</a><a href="#swiss-contact">{t('Контакты','Contact')}</a>
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
     <div className="neon-benefits"><span><Icon name="bolt"/><small>{t('Быстро и качественно','Fast & reliable')}</small></span><span><Icon name="diamond"/><small>{t('С вниманием к деталям','Attention to detail')}</small></span><span><Icon name="chart"/><small>{t('Ориентирован на результат','Result focused')}</small></span></div>
    </div>
    <div className="neon-hero-person"><div className="neon-code-card">〈 / 〉</div><div className="neon-glass-card">DIGITAL<br/>EXPERIENCE</div><img src={portrait} alt="Константин Вершинин"/></div>
   </section>
   <section className="neon-work" id="swiss-work">
    <div className="neon-section-intro"><div className="neon-eyebrow">● {t('Кейсы','Selected work')}</div><h2>{t('Мои работы','My work')}</h2><p>{t('Реализую проекты в разных нишах: от лендингов до интернет-магазинов','Projects across different industries — from landing pages to online stores')}</p><button className="neon-outline" type="button" onClick={onOpenAll}>{t('Все кейсы','All projects')} <span>→</span></button></div>
    <div className="neon-projects">{projects.slice(0,3).map((project,i)=><button className="neon-project" key={project.id} onClick={project.onOpen}><div className="neon-project-image">{project.image?<img src={project.image} alt={project.title}/>:<span>KV / SELECTED WORK</span>}<small>{i===0?'WEB':i===1?'DIGITAL':'CAMPAIGN'}</small></div><strong>{project.title}</strong><span>{project.type} · {project.year}<b>↗</b></span></button>)}</div>
   </section>
   <section className="neon-about" id="swiss-about">
    <div className="neon-about-photo"><img src={portrait} alt="Константин Вершинин"/><span>{t('Делаю сайты с душой ♡','Designing with care ♡')}</span></div>
    <div className="neon-about-copy"><div className="neon-eyebrow">● {t('Обо мне','About me')}</div><h2>{t('Мне 25 лет.','I am 25.')}<br/>{t('Я веб-дизайнер','I am a web designer')}</h2><p>{t('Уже 3 года создаю сайты, которые помогают бизнесу расти. Люблю дизайн, технологии и эстетику в деталях.','Since 2022, I have been creating websites that help businesses grow. I love design, technology and thoughtful details.')}</p><a className="neon-outline" href="https://t.me/KV252525" target="_blank" rel="noreferrer">{t('Узнать больше','Get in touch')} →</a></div>
    <div className="neon-values"><div><b className="neon-value-icon"><ValueIcon type="spark"/></b><span>{t('Делаю дизайн, который работает','Design that works')}</span></div><div><b className="neon-value-icon"><ValueIcon type="layers"/></b><span>{t('Погружаюсь в ваш бизнес и задачи','Focused on your business')}</span></div><div><b className="neon-value-icon"><ValueIcon type="target"/></b><span>{t('Ценю качество и довожу до результата','Quality from start to finish')}</span></div></div></div>
   </section>
   <section className="neon-services" id="swiss-services"><div className="neon-section-intro"><div className="neon-eyebrow">● {t('Услуги','Services')}</div><h2>{t('Что я предлагаю?','What I offer')}</h2><p>{t('Полный цикл создания сайта от идеи до запуска','Full website creation, from idea to launch')}</p><a className="neon-button" href="#swiss-contact">{t('Обсудить проект','Discuss project')} →</a></div><div className="neon-service-grid">{services.map(([icon,title,desc],i)=><button type="button" onClick={()=>onOpenCategory(["web-design","web-design","ecommerce","web-design","landing-pages","other"][i])} className="neon-service" key={title}><b><Icon name={icon}/></b><span><strong>{t(title,title)}</strong><small>{t(desc,desc)}</small></span><span className="neon-service-arrow">↗</span></button>)}</div></section>
   <section className="neon-process" id="swiss-process"><div><div className="neon-eyebrow">● {t('Как мы работаем','How it works')}</div><h2>{t('Простой процесс','A simple process')}<br/>{t('от идеи до запуска','from idea to launch')}</h2></div><div className="neon-steps">{steps.map((step,i)=><div key={step}><b>{i+1}</b><span>{t(step, ['Discuss the brief','Prepare a concept','Design and refine','Deliver and launch'][i])}</span></div>)}</div></section>
   <section className="neon-cta" id="swiss-contact"><div><h2>{t('Давайте создадим','Let’s create')}<br/>{t('ваш идеальный сайт?','your ideal website?')}</h2><p>{t('Напишите мне — обсудим задачу, сроки и идеи','Message me to discuss your goals, timing and ideas')}</p></div><a className="neon-button" href="https://t.me/KV252525" target="_blank" rel="noreferrer"><TelegramIcon/> {t('Написать в Telegram','Message on Telegram')}</a><div className="neon-phone"><TelegramIcon/></div></section>
  </main>
  <footer className="neon-footer"><a className="neon-logo" href="#swiss-home-top">KV</a><span>{t('Веб-дизайнер','Web designer')}</span><nav><a href="#swiss-about">{t('Обо мне','About')}</a><a href="#swiss-work">{t('Кейсы','Work')}</a><a href="#swiss-services">{t('Услуги','Services')}</a><a href="#swiss-process">{t('Процесс','Process')}</a><a href="#swiss-contact">{t('Контакты','Contact')}</a></nav><a href="https://t.me/KV252525"><TelegramIcon/></a><a href="mailto:konstantinversh@icloud.com">✉</a></footer>
 </div>
}

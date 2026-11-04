import React, { useEffect, useRef, useState } from 'react'
import './swiss-home.css'
import heroPortrait from '../hero-portrait.png'
import aboutPortrait from '../about-portrait.png'

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
function Icon({name}:{name:string}){
 const paths:Record<string,string[]> = {
  monitor:['M3 4.5h18v13H3z','M8 21h8','M12 17.5V21','M7 8h4','M7 11h10'],
  refresh:['M20 7V3l-4 4','M20 7h-5','M4 17v4l4-4','M4 17h5','M5.2 10a7.5 7.5 0 0 1 12.5-4.5L20 7','M18.8 14a7.5 7.5 0 0 1-12.5 4.5L4 17'],
  bag:['M3 8h18l-1.5 13h-15L3 8Z','M8 9V6a4 4 0 0 1 8 0v3','M8 13v1','M16 13v1'],
  chart:['M4 19V9','M12 19V4','M20 19v-7','M2 21h20','M4 6l5-3 4 3 7-4'],
  phone:['M7 2.5h10v19H7z','M10 5.5h4','M10 18.5h4','M9 9h6v5H9z'],
  gear:['M12 3v2','M12 19v2','M3 12h2','M19 12h2','m5.6 5.6 1.4 1.4','m17 17 1.4 1.4','m18.4 5.6-1.4 1.4','m7 17-1.4 1.4','M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z']
 };
 return <svg viewBox="0 0 24 24" aria-hidden="true">{(paths[name]||paths.monitor).map((d,i)=><path key={i} d={d}/>)}</svg>
}
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
    <div className="neon-hero-person"><div className="neon-code-card">〈 / 〉</div><div className="neon-glass-card">DIGITAL<br/>EXPERIENCE</div><img src={heroPortrait} alt="Константин Вершинин"/></div>
   </section>
   <section className="neon-work" id="swiss-work">
    <div className="neon-section-intro"><div className="neon-eyebrow">● {t('Кейсы','Selected work')}</div><h2>{t('Мои работы','My work')}</h2><p>{t('Реализую проекты в разных нишах: от лендингов до интернет-магазинов','Projects across different industries — from landing pages to online stores')}</p><button className="neon-outline" type="button" onClick={onOpenAll}>{t('Все кейсы','All projects')} <span>→</span></button></div>
    <div className="neon-projects">{projects.slice(0,3).map((project,i)=><button className="neon-project" key={project.id} onClick={project.onOpen}><div className="neon-project-image">{project.image?<img src={project.image} alt={project.title}/>:<span>KV / SELECTED WORK</span>}<small>{i===0?'WEB':i===1?'DIGITAL':'CAMPAIGN'}</small></div><strong>{project.title}</strong><span>{project.type} · {project.year}<b>↗</b></span></button>)}</div>
   </section>
   <section className="neon-about" id="swiss-about">
    <div className="neon-about-photo"><img src={aboutPortrait} alt="Константин Вершинин"/><span>{t('Делаю сайты с душой ♡','Designing with care ♡')}</span></div>
    <div className="neon-about-copy"><div className="neon-eyebrow">● {t('Обо мне','About me')}</div><h2>{t('Мне 25 лет.','I am 25.')}<br/>{t('Я веб-дизайнер','I am a web designer')}</h2><p>{t('Уже 3 года создаю сайты, которые помогают бизнесу расти. Люблю дизайн, технологии и эстетику в деталях.','Since 2022, I have been creating websites that help businesses grow. I love design, technology and thoughtful details.')}</p><a className="neon-outline" href="https://t.me/KV252525" target="_blank" rel="noreferrer">{t('Узнать больше','Get in touch')} →</a></div>
     <div className="neon-values"><div><b className="neon-value-icon"><ValueIcon type="spark"/></b><span>{t('Делаю дизайн, который работает','Design that works')}</span></div><div><b className="neon-value-icon"><ValueIcon type="layers"/></b><span>{t('Погружаюсь в ваш бизнес и задачи','Focused on your business')}</span></div><div><b className="neon-value-icon"><ValueIcon type="target"/></b><span>{t('Ценю качество и довожу до результата','Quality from start to finish')}</span></div></div>
   </section>
   <section className="neon-services" id="swiss-services"><div className="neon-section-intro"><div className="neon-eyebrow">● {t('Услуги','Services')}</div><h2>{t('Что я предлагаю?','What I offer')}</h2><p>{t('Полный цикл создания сайта от идеи до запуска','Full website creation, from idea to launch')}</p><a className="neon-button" href="#swiss-contact">{t('Обсудить проект','Discuss project')} →</a></div><div className="neon-service-grid">{services.map(([icon,title,desc],i)=><button type="button" onClick={()=>onOpenCategory(["web-design","web-design","ecommerce","web-design","landing-pages","other"][i])} className="neon-service" key={title}><b><Icon name={icon}/></b><span><strong>{t(title,title)}</strong><small>{t(desc,desc)}</small></span><span className="neon-service-arrow">↗</span></button>)}</div></section>
   <section className="neon-process" id="swiss-process"><div><div className="neon-eyebrow">● {t('Как мы работаем','How it works')}</div><h2>{t('Простой процесс','A simple process')}<br/>{t('от идеи до запуска','from idea to launch')}</h2></div><div className="neon-steps">{steps.map((step,i)=><div key={step}><b>{i+1}</b><span>{t(step, ['Discuss the brief','Prepare a concept','Design and refine','Deliver and launch'][i])}</span></div>)}</div></section>
   <section className="neon-cta" id="swiss-contact"><div><h2>{t('Давайте создадим','Let’s create')}<br/>{t('ваш идеальный сайт?','your ideal website?')}</h2><p>{t('Напишите мне — обсудим задачу, сроки и идеи','Message me to discuss your goals, timing and ideas')}</p></div><a className="neon-button" href="https://t.me/KV252525" target="_blank" rel="noreferrer"><TelegramIcon/> {t('Написать в Telegram','Message on Telegram')}</a><div className="neon-phone"><TelegramIcon/></div></section>
  </main>
  <footer className="neon-footer"><a className="neon-logo" href="#swiss-home-top">KV</a><span>{t('Веб-дизайнер','Web designer')}</span><nav><a href="#swiss-about">{t('Обо мне','About')}</a><a href="#swiss-work">{t('Кейсы','Work')}</a><a href="#swiss-services">{t('Услуги','Services')}</a><a href="#swiss-process">{t('Процесс','Process')}</a><a href="#swiss-contact">{t('Контакты','Contact')}</a></nav><a href="https://t.me/KV252525"><TelegramIcon/></a><a href="mailto:konstantinversh@icloud.com">✉</a></footer>
 </div>
}

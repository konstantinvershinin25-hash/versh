import React, { useEffect, useRef, useState } from 'react'
import {PROJECT_CATEGORIES,categorySlug} from './projectCategories'
import './portfolio-pages.css'
type Item={id:string;title:string;type:string;category:string;year:string;image?:string;onOpen:()=>void}
type Props={language:'ru'|'en';mode:'all'|'category';category?:string;projects:Item[];onBack:()=>void}
export default function PortfolioPages({language,mode,category,projects,onBack}:Props){
 const cursorRef=useRef<HTMLDivElement>(null)
 const [cursorActive,setCursorActive]=useState(false)
 useEffect(()=>{
  if(!window.matchMedia('(pointer:fine)').matches)return
  const node=cursorRef.current
  if(!node)return
  const move=(event:PointerEvent)=>{
   node.style.transform=`translate3d(${event.clientX}px,${event.clientY}px,0) translate(-50%,-50%)`
   setCursorActive(Boolean((event.target as HTMLElement)?.closest('a,button,[role="button"]')))
  }
  window.addEventListener('pointermove',move)
  return()=>window.removeEventListener('pointermove',move)
 },[])
 const ru=language==='ru'
 const selected=PROJECT_CATEGORIES.find(c=>c.slug===category)
 const visible=mode==='category'?projects.filter(p=>categorySlug(p.category||p.type)===(category||'')):projects
 const title=mode==='category'?(ru?selected?.label:selected?.en):(ru?'Все проекты':'Selected work')
 return <div className="portfolio-page"><div ref={cursorRef} className={`portfolio-cursor ${cursorActive?'is-active':''}`} aria-hidden="true"><span>VIEW</span></div>
  <header className="portfolio-top"><button className="portfolio-wordmark" onClick={onBack}>VERSH<span>®</span></button><button className="portfolio-back" onClick={onBack}>← {ru?'На главную':'Home'}</button></header>
  <main className="portfolio-main">
   <div className="portfolio-kicker"><i/> {ru?'ПОРТФОЛИО / 2026':'PORTFOLIO / 2026'}</div>
   <div className="portfolio-heading"><div><h1>{title}</h1><p>{mode==='all'?(ru?'Избранные проекты и эксперименты в разных направлениях дизайна.':'Selected projects and experiments across design disciplines.'):(ru?selected?.desc:selected?.desc)}</p></div><span>{String(visible.length).padStart(2,'0')} {ru?'ПРОЕКТОВ':'PROJECTS'}</span></div>
   <nav className="portfolio-filters"><a className={mode==='all'?'active':''} href="?work=1">{ru?'Все':'All'}</a>{PROJECT_CATEGORIES.map(c=><a key={c.slug} className={mode==='category'&&category===c.slug?'active':''} href={'?category='+c.slug}>{ru?c.label:c.en}</a>)}</nav>
   {visible.length?<div className="portfolio-grid">{visible.map((p,i)=><button className="portfolio-card" key={p.id} onClick={p.onOpen}><div className="portfolio-image">{p.image?<img src={p.image} alt={p.title}/>:<div className="portfolio-placeholder"><span>VERSH®</span><small>{ru?'ИЗБРАННЫЙ ПРОЕКТ':'SELECTED PROJECT'}</small></div>}<span className="portfolio-view">VIEW <b>↗</b></span></div><div className="portfolio-meta"><div><small>{String(i+1).padStart(2,'0')} / {ru?(PROJECT_CATEGORIES.find(c=>c.slug===categorySlug(p.category||p.type))?.label||p.category):p.category}</small><h2>{p.title}</h2></div><span>{p.year}</span></div></button>)}</div>:<div className="portfolio-empty">{ru?'В этой категории пока нет проектов. Новые работы появятся здесь после публикации в CMS.':'No projects in this category yet. New work will appear here after publishing in CMS.'}</div>}
  </main><footer className="portfolio-bottom"><span>© 2026 VERSH®</span><a href="https://t.me/KV252525" target="_blank" rel="noreferrer">TELEGRAM ↗</a></footer>
 </div>
}

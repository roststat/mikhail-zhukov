"use client";
import Link from "next/link";
import { useState } from "react";

export default function Fason() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    ["Что означает аббревиатура FASE?","FASE — это авторское название функциональной модели человека. Модель описывает, как человек функционирует как система — внутри себя и внутри внешних систем: семья, команда, организация."],
    ["Это психологический тест?","Нет. FASE — не тест с баллами и не типология. Это динамическая модель, которая описывает функции, роли и взаимосвязи внутри личности. Результат — понимание конкретного человека, а не его условный «тип»."],
    ["Как применяется в бизнесе?","В бизнесе FASE помогает понять, какие роли органичны для конкретного человека, как выстроить коммуникацию в команде, почему человек не реализует свой потенциал и что нужно изменить."],
    ["Подходит ли методика для личных запросов?","Да. FASE отлично работает с запросами о самопознании, семейной динамике, отношениях, профессиональной ориентации — везде, где важно понять внутреннюю логику человека."],
    ["Чем FASE отличается от MBTI и соционики?","Типологии делят людей на категории. FASE описывает уникальный функциональный профиль каждого человека. Это более точный и гибкий инструмент, который учитывает контекст и динамику."],
    ["Нужна ли специальная подготовка?","Для клиентов — нет. Михаил работает с широкой аудиторией. Для специалистов, желающих применять методику, есть отдельные форматы обучения."],
  ];

  const areas = [
    {n:"I",t:"Личное",href:"/services/personal",items:["Самопознание и понимание своих функций","Семейная динамика и отношения","Психологические запросы","Профессиональная ориентация"]},
    {n:"II",t:"Бизнес",href:"/services/business",items:["Карьерное развитие","Понимание своей роли в бизнесе","Работа с финансовыми решениями","Личная эффективность руководителя"]},
    {n:"III",t:"Команды",href:"/services/teams",items:["Настройка коммуникации","Распределение ролей","Корпоративные проекты","Работа с большими организациями"]},
  ];

  return (
    <>
      <div className="page-header">
        <div className="wrap">
          <div style={{display:"flex",alignItems:"center",gap:"12px",marginBottom:"20px"}}>
            <div className="gold-rule"></div>
            <span className="tag">Авторская методика</span>
          </div>
          <h1 className="f-display" style={{fontSize:"clamp(60px,9vw,110px)",color:"#F7F5F0",fontWeight:300,lineHeight:.9,letterSpacing:"-.02em"}}>FASE</h1>
          <p className="f-display" style={{fontSize:"clamp(18px,2.5vw,28px)",color:"var(--gold)",fontStyle:"italic",marginTop:"14px"}}>Функциональная модель человека</p>
        </div>
      </div>

      <section className="section bg-warm">
        <div className="wrap">
          <div className="grid-2">
            <div>
              <span className="tag">Суть методики</span>
              <div className="gold-rule" style={{margin:"12px 0 32px"}}></div>
              <p style={{fontSize:"16px",color:"var(--text)",lineHeight:1.9,marginBottom:"18px"}}>FASE описывает человека как функциональную систему. Каждый человек выполняет определённые функции — внутри себя, в семье, в коллективе, в обществе. Методика позволяет увидеть, какие функции для него органичны, какие даются с трудом, и как это влияет на его жизнь.</p>
              <p style={{fontSize:"16px",color:"var(--text)",lineHeight:1.9,marginBottom:"18px"}}>Ключевая идея: человеком невозможно управлять напрямую через команды — но можно создавать ситуации, в которых он сам начинает вести себя нужным образом. Это принципиально другой подход к управлению, взаимодействию и развитию.</p>
              <p style={{fontSize:"16px",color:"var(--text)",lineHeight:1.9,marginBottom:"36px"}}>Методика создана на стыке психологии, системного мышления и многолетней практической работы с людьми из разных сфер — от частных клиентов до военных организаций.</p>
              <Link href="/contacts" className="btn btn-gold">Записаться на сессию</Link>
            </div>
            <div style={{display:"flex",flexDirection:"column",gap:"12px"}}>
              {[
                ["Точность","Методика описывает конкретного человека, а не статистический тип"],
                ["Практичность","Каждый вывод имеет прикладное значение — что делать с этим знанием"],
                ["Универсальность","Работает одинаково в личных, бизнес и командных контекстах"],
                ["Научность","Основана на исследованиях. Более 40 публикаций в научном сообществе"],
              ].map(([t, d]) => (
                <div key={t} style={{padding:"24px 28px",background:"var(--ink)",borderLeft:"3px solid var(--gold)"}}>
                  <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"20px",color:"var(--gold)",fontWeight:600,marginBottom:"8px"}}>{t}</div>
                  <div style={{fontSize:"14px",color:"rgba(247,245,240,.58)",lineHeight:1.7}}>{d}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="wrap">
          <div style={{textAlign:"center",marginBottom:"56px"}}>
            <span className="tag">Применение</span>
            <div className="gold-rule gold-rule-center" style={{margin:"12px auto 18px"}}></div>
            <h2 className="f-display" style={{fontSize:"clamp(28px,4vw,48px)",color:"var(--ink)"}}>Три сферы работы</h2>
          </div>
          <div className="grid-3">
            {areas.map((a) => (
              <div key={a.n} style={{padding:"36px",border:"1px solid var(--border)",position:"relative"}}>
                <div className="f-display" style={{position:"absolute",right:"16px",top:"8px",fontSize:"60px",fontWeight:300,color:"rgba(13,13,18,.04)",lineHeight:1}}>{a.n}</div>
                <h3 className="f-display" style={{fontSize:"28px",color:"var(--ink)",fontWeight:600,marginBottom:"20px"}}>{a.t}</h3>
                <ul style={{listStyle:"none",marginBottom:"28px"}}>
                  {a.items.map((i) => (
                    <li key={i} style={{display:"flex",alignItems:"flex-start",gap:"10px",fontSize:"14px",color:"var(--text-muted)",marginBottom:"10px"}}>
                      <span style={{color:"var(--gold)",flexShrink:0,marginTop:"2px"}}>▪</span>{i}
                    </li>
                  ))}
                </ul>
                <Link href={a.href} className="btn btn-outline" style={{fontSize:"12px",padding:"10px 24px"}}>Узнать больше</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-warm">
        <div className="wrap" style={{maxWidth:"820px"}}>
          <span className="tag">FAQ</span>
          <div className="gold-rule" style={{margin:"12px 0 40px"}}></div>
          <h2 className="f-display" style={{fontSize:"clamp(28px,4vw,44px)",color:"var(--ink)",marginBottom:"36px"}}>Часто задаваемые вопросы</h2>
          {faqs.map(([q, a], i) => (
            <div key={i} className={`faq-item${openFaq === i ? " open" : ""}`} onClick={() => setOpenFaq(openFaq === i ? null : i)}>
              <div className="faq-q">{q}<span className="faq-arrow">▾</span></div>
              <div className="faq-a">{a}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

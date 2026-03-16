"use client";
import { useState } from "react";

export default function Articles() {
  const [activeFilter, setActiveFilter] = useState("Все");

  const articles = [
    {tag:"Психология",title:"Как работает функциональная модель человека: введение в FASE",date:"12 марта 2026",min:"8 мин",desc:"Что такое FASE и как эта модель помогает понять себя и других — объясняем на примерах из практики."},
    {tag:"Бизнес",title:"Профайлинг в управлении командой: что видит профайлер",date:"5 марта 2026",min:"11 мин",desc:"Почему опытные руководители упускают ключевые вещи о своих людях — и как это исправить."},
    {tag:"Личное",title:"Профессиональная ориентация через профайлинг",date:"25 февраля 2026",min:"6 мин",desc:"Найти своё место без тестов с баллами — через глубокое понимание собственной функциональности."},
    {tag:"Наука",title:"Семантика поведения: как читать сигналы, которые люди не осознают",date:"18 февраля 2026",min:"15 мин",desc:"Научный взгляд на невербальные паттерны через призму функциональной модели."},
    {tag:"Команды",title:"Три типа коммуникативных сбоев в командах",date:"10 февраля 2026",min:"9 мин",desc:"Почему командообразование не работает без предварительного профайлинга участников."},
    {tag:"Личное",title:"Кризис среднего возраста: что говорит FASE-модель",date:"3 февраля 2026",min:"7 мин",desc:"Функциональный взгляд на переломные периоды жизни — без катастрофизации и без иллюзий."},
    {tag:"Бизнес",title:"Как профайлинг помогает выбрать правильного партнёра по бизнесу",date:"28 января 2026",min:"10 мин",desc:"Что ищет профайлер, когда смотрит на двух предпринимателей, которые думают о партнёрстве."},
    {tag:"Психология",title:"Почему люди не меняются: объяснение через функциональную модель",date:"20 января 2026",min:"8 мин",desc:"Самый частый вопрос в психологии — и честный ответ через призму FASE."},
    {tag:"Наука",title:"Профайлинг в корпоративном управлении: обзор мировых практик",date:"12 января 2026",min:"14 мин",desc:"Как профайлинг применяется в крупных организациях и что из этого работает."},
  ];

  const filters = ["Все","Психология","Бизнес","Личное","Команды","Наука"];
  const filtered = activeFilter === "Все" ? articles : articles.filter(a => a.tag === activeFilter);

  return (
    <>
      <div className="page-header">
        <div className="wrap">
          <div style={{display:"flex",alignItems:"center",gap:"12px",marginBottom:"22px"}}>
            <div className="gold-rule"></div>
            <span className="tag">Публикации</span>
          </div>
          <h1 className="page-h1 f-display">Статьи</h1>
        </div>
      </div>

      <section className="section bg-warm">
        <div className="wrap">
          <div style={{display:"flex",gap:"10px",marginBottom:"40px",flexWrap:"wrap"}}>
            {filters.map((f) => (
              <button key={f} className={`filter-btn${activeFilter === f ? " active" : ""}`} onClick={() => setActiveFilter(f)}>{f}</button>
            ))}
          </div>
          <div className="grid-3">
            {filtered.map((a) => (
              <div key={a.title} className="art-card">
                <div className="art-meta"><span className="tag">{a.tag}</span><span className="read-time">{a.min}</span></div>
                <div className="art-title">{a.title}</div>
                <p style={{fontSize:"14px",color:"var(--text-muted)",lineHeight:1.7,margin:"10px 0 16px"}}>{a.desc}</p>
                <div className="art-date">{a.date}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

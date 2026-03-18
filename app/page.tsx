"use client";
import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const ht = document.getElementById("hero-text");
    const hi = document.getElementById("hero-img");
    const sh = document.getElementById("scroll-hint");
    setTimeout(() => {
      if (ht) ht.classList.add("visible");
      if (hi) hi.classList.add("visible");
      if (sh) sh.classList.add("visible");
    }, 80);

    // Counters
    const els = document.querySelectorAll<HTMLElement>("[data-count]");
    if (els.length) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          const end = parseInt(el.dataset.count || "0");
          const suffix = el.dataset.suffix || "";
          let start = 0;
          const step = end / (1600 / 16);
          const timer = setInterval(() => {
            start += step;
            if (start >= end) { el.textContent = end + suffix; clearInterval(timer); }
            else el.textContent = Math.floor(start) + suffix;
          }, 16);
          observer.unobserve(el);
        });
      }, { threshold: 0.4 });
      els.forEach((el) => observer.observe(el));
    }
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="hero" id="hero-section">
        <div className="hero-bg"></div>
        <div className="hero-line"></div>
        <div className="wrap hero-content">
          <div className="grid-2" style={{alignItems:"center"}}>
            <div className="hero-text" id="hero-text">
              <div style={{display:"flex",alignItems:"center",gap:"12px",marginBottom:"30px"}}>
                <div className="gold-rule"></div>
                <span className="tag">Психолог-профайлер</span>
              </div>
              <h1 className="hero-h1 f-display">Михаил Жуков</h1>
              <div className="hero-sub">Профайлинг<br />и методика FASE</div>
              <p className="hero-desc">Автор и разработчик функциональной модели аффективной системы FASE. Помогаю людям, командам и организациям понять внутренние механизмы своей эмоциональной системы и использовать их осознанно.</p>
              <div className="hero-btns">
                <Link href="/fason" className="btn btn-gold">Методика FASE</Link>
                <Link href="/contacts" className="btn btn-outline-light">Записаться</Link>
              </div>
            </div>
            <div className="hero-img" id="hero-img">
              <div className="portrait">
                <div className="portrait-placeholder">
                  <div className="portrait-initial">М</div>
                  <div className="portrait-label">Фото автора</div>
                </div>
                <div className="corner corner-tr"></div>
                <div className="corner corner-bl"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-hint" id="scroll-hint">
          <div className="scroll-word">Scroll</div>
          <div className="scroll-line"></div>
        </div>
      </section>

      {/* FASE INTRO */}
      <section className="section bg-warm">
        <div className="wrap">
          <div className="grid-2">
            <div>
              <span className="tag">Авторская разработка</span>
              <div className="gold-rule" style={{margin:"12px 0 24px"}}></div>
              <h2 className="f-display" style={{fontSize:"clamp(34px,4.5vw,58px)",color:"var(--ink)",fontWeight:600,marginBottom:"22px",lineHeight:1.1}}>
                Что такое<br /><em style={{color:"var(--gold)",fontStyle:"italic"}}>методика FASE?</em>
              </h2>
              <p style={{fontSize:"16px",color:"var(--text-muted)",lineHeight:1.9,marginBottom:"18px"}}>FASE — функциональная модель аффективной системы. Это авторский инструмент диагностики и управления эмоциональными реакциями, разработанный Михаилом Жуковым.</p>
              <p style={{fontSize:"16px",color:"var(--text-muted)",lineHeight:1.9,marginBottom:"36px"}}>Она позволяет разложить «стихию чувств» на составляющие, увидеть закономерности и трансформировать непроизвольные реакции в осознанные стратегии.</p>
              <Link href="/fason" className="btn btn-outline">Узнать подробнее →</Link>
            </div>
            <div style={{display:"flex",flexDirection:"column",gap:"14px"}}>
              {[
                ["01","Диагностика","Авторский инструмент диагностики эмоциональных реакций — видеть закономерности там, где другие видят хаос."],
                ["02","Трансформация","Трансформировать непроизвольные реакции в осознанные стратегии поведения."],
                ["03","Управление","Управлять собой, отношениями и бизнес-процессами с точностью и осознанностью."],
              ].map(([num, title, text]) => (
                <div key={num} className="pillar">
                  <div className="pillar-num">{num}</div>
                  <div>
                    <div className="pillar-title">{title}</div>
                    <div className="pillar-text">{text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AUDIENCES */}
      <section className="section bg-surface">
        <div className="wrap">
          <div style={{textAlign:"center",marginBottom:"60px"}}>
            <span className="tag">Направления работы</span>
            <div className="gold-rule gold-rule-center" style={{margin:"12px auto 18px"}}></div>
            <h2 className="f-display" style={{fontSize:"clamp(30px,4vw,50px)",color:"var(--ink)"}}>Кому это нужно?</h2>
          </div>
          <div className="grid-3" style={{maxWidth:"960px",margin:"0 auto"}}>
            {[
              {href:"/services/individual",mark:"I",icon:"📖",tag:"Личное",title:"Людям",desc:"Тем, кто хочет перейти от выживания к зрелой ответственности в личной жизни — увидеть свои закономерности и трансформировать их."},
              {href:"/services/corporate",mark:"II",icon:"💼",tag:"Командам",title:"Командам",desc:"Тем, кому важно настроить внутреннюю коммуникацию и принимать решения без эмоциональных помех."},
              {href:"/services/corporate",mark:"III",icon:"🏢",tag:"Организациям",title:"Организациям",desc:"Стремящимся к системному развитию и устойчивости через понимание человеческого фактора."},
            ].map((c) => (
              <Link key={c.href} href={c.href} className="aud-card">
                <div className="aud-watermark">{c.mark}</div>
                <div className="aud-icon">{c.icon}</div>
                <div className="tag" style={{marginBottom:"10px"}}>{c.tag}</div>
                <div className="aud-title">{c.title}</div>
                <div className="aud-desc">{c.desc}</div>
                <div className="aud-more">Подробнее →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="section-sm bg-gold">
        <div className="wrap">
          <div className="grid-4">
            {[
              {count:"15",suffix:"+",label:"Лет исследований"},
              {count:"500",suffix:"+",label:"Участников лекций"},
              {count:"40",suffix:"+",label:"Научных публикаций"},
              {count:"3",suffix:"",label:"Сферы применения"},
            ].map((s) => (
              <div key={s.label} style={{textAlign:"center"}}>
                <div className="stat-num f-display" data-count={s.count} data-suffix={s.suffix}>0{s.suffix}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ARTICLES */}
      <section className="section bg-warm">
        <div className="wrap">
          <div style={{display:"flex",alignItems:"flex-end",justifyContent:"space-between",marginBottom:"48px",flexWrap:"wrap",gap:"16px"}}>
            <div>
              <span className="tag">Публикации</span>
              <div className="gold-rule" style={{margin:"10px 0 16px"}}></div>
              <h2 className="f-display" style={{fontSize:"clamp(28px,4vw,46px)",color:"var(--ink)"}}>Последние статьи</h2>
            </div>
            <Link href="/articles" className="btn btn-outline">Все статьи →</Link>
          </div>
          <div className="grid-3">
            {[
              {tag:"Психология",title:"Как работает функциональная модель человека: введение в FASE",date:"12 марта 2026",min:"8 мин"},
              {tag:"Бизнес",title:"Профайлинг в управлении командой: что видит профайлер и что скрыто от руководителя",date:"5 марта 2026",min:"11 мин"},
              {tag:"Личное",title:"Профессиональная ориентация через профайлинг: найти своё место без тестов",date:"25 февраля 2026",min:"6 мин"},
            ].map((a) => (
              <Link key={a.title} href="/articles" className="art-card">
                <div className="art-meta"><span className="tag">{a.tag}</span><span className="read-time">{a.min}</span></div>
                <div className="art-title">{a.title}</div>
                <div className="art-date">{a.date}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TELEGRAM */}
      <section className="section bg-dark">
        <div className="wrap">
          <div className="grid-2">
            <div>
              <span className="tag">Telegram-канал</span>
              <div className="gold-rule" style={{margin:"12px 0 24px"}}></div>
              <h2 className="f-display" style={{fontSize:"clamp(30px,4vw,50px)",color:"#F7F5F0",fontWeight:600,marginBottom:"18px"}}>
                Профайлинг<br /><em style={{color:"var(--gold)"}}>каждый день</em>
              </h2>
              <p style={{fontSize:"16px",color:"rgba(247,245,240,.52)",lineHeight:1.85,marginBottom:"34px",maxWidth:"380px"}}>Профессиональный контент в доступном формате. Разборы типажей, кейсы, наблюдения из практики. Канал, из которого не уходят.</p>
              <div style={{display:"flex",flexWrap:"wrap",gap:"14px"}}>
                <a href="https://t.me/mikhail_profiling" target="_blank" className="btn btn-gold">Подписаться</a>
                <Link href="/telegram" className="btn btn-outline-light">О канале</Link>
              </div>
            </div>
            <div>
              {[
                {date:"12 мар",text:"Почему умные люди принимают плохие решения? Разбираем через FASE-модель — где интеллект заканчивается и начинается функциональная слепота."},
                {date:"10 мар",text:"Три признака того, что в команде нарушена коммуникация — и почему стандартные тренинги по тимбилдингу здесь не помогут."},
                {date:"7 мар",text:"Профориентация без тестов: как профайлинг помогает найти своё место быстрее и точнее любого опросника."},
              ].map((p) => (
                <div key={p.date} className="tg-post">
                  <div className="tg-date">{p.date}</div>
                  <div className="tg-text">{p.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-sm bg-surface" style={{textAlign:"center"}}>
        <div className="wrap">
          <div className="gold-rule gold-rule-center" style={{marginBottom:"20px"}}></div>
          <h2 className="f-display" style={{fontSize:"clamp(30px,4vw,52px)",color:"var(--ink)",fontWeight:600,marginBottom:"18px"}}>Настроим систему на вас</h2>
          <p style={{fontSize:"16px",color:"var(--text-muted)",maxWidth:"480px",margin:"0 auto 36px",lineHeight:1.8}}>Мы не просто говорим об эмоциях. Мы настраиваем систему так, чтобы она работала на вас. Напишите — расскажу, чем могу помочь именно в вашей ситуации.</p>
          <Link href="/contacts" className="btn btn-gold">Связаться с Михаилом</Link>
        </div>
      </section>
    </>
  );
}

import Link from "next/link";

export const metadata = {
  title: "Об авторе — Михаил",
  description: "Учёный-исследователь с более чем 15-летним опытом изучения психологии личности и профайлинга. Автор авторской методики FASON.",
};

export default function About() {
  const timeline = [
    ["2008","Начало исследований в области психологии личности. Первые попытки создать функциональную модель человека."],
    ["2011","Разработка первой версии модели FASON. Начало практической работы с клиентами."],
    ["2014","Первые научные публикации на платформе P-17. Признание в профессиональном сообществе психологов."],
    ["2017","Оформление авторской методики FASON. Первые корпоративные проекты и работа с командами."],
    ["2020","Запуск Telegram-канала. Выход на широкую аудиторию с доступным профессиональным контентом."],
    ["2023","Проект ЮПрофайлер. Начало систематических лекций в специализированных организациях."],
    ["2026","Более 40 научных статей. Сотни участников программ. Три направления работы."],
  ];

  const achievements = [
    "Автор методики FASON",
    "Публикации на портале P-17",
    "Лекции в специализированных организациях",
    "Проект ЮПрофайлер",
    "Работа с военными и силовыми структурами",
  ];

  return (
    <>
      <div className="page-header">
        <div className="wrap">
          <div style={{display:"flex",alignItems:"center",gap:"12px",marginBottom:"22px"}}>
            <div className="gold-rule"></div>
            <span className="tag">Об авторе</span>
          </div>
          <h1 className="page-h1 f-display">Учёный.<br /><em style={{color:"var(--gold)"}}>Исследователь.</em><br />Профайлер.</h1>
        </div>
      </div>

      <section className="section bg-warm">
        <div className="wrap">
          <div className="grid-2">
            <div>
              <span className="tag">История</span>
              <div className="gold-rule" style={{margin:"12px 0 32px"}}></div>
              <p style={{fontSize:"17px",color:"var(--text)",lineHeight:1.9,marginBottom:"20px"}}>Михаил — учёный-исследователь с более чем 15-летним опытом изучения психологии личности и профайлинга. Автор авторской методики FASON — функциональной модели человека, которая объясняет, как каждый из нас устроен внутри и как взаимодействует с миром вокруг.</p>
              <p style={{fontSize:"17px",color:"var(--text)",lineHeight:1.9,marginBottom:"20px"}}>Его путь начался с глубокого академического интереса к тому, как работает личность — не на уровне симптомов и поведения, а на уровне функций и структуры. Это привело к многолетним исследованиям, десяткам публикаций в научном сообществе P-17 и созданию методики, которая сегодня применяется в личной работе, бизнесе и крупных организациях.</p>
              <p style={{fontSize:"17px",color:"var(--text)",lineHeight:1.9,marginBottom:"36px"}}>FASON — это не ещё один психологический тест. Это рабочий инструмент понимания: что движет конкретным человеком, как создать для него условия максимальной эффективности и что мешает ему реализовываться.</p>
              <div className="grid-3" style={{gap:"12px",marginTop:"8px"}}>
                <div className="mini-stat"><div className="mini-stat-num">40+</div><div className="mini-stat-label">Научных статей</div></div>
                <div className="mini-stat"><div className="mini-stat-num">15+</div><div className="mini-stat-label">Лет опыта</div></div>
                <div className="mini-stat"><div className="mini-stat-num">500+</div><div className="mini-stat-label">Участников</div></div>
              </div>
            </div>
            <div>
              <div className="portrait" style={{maxWidth:"380px",margin:"0 auto 32px"}}>
                <div className="portrait-placeholder">
                  <div className="portrait-initial">М</div>
                  <div className="portrait-label">Фото автора</div>
                </div>
                <div className="corner corner-tr"></div>
                <div className="corner corner-bl"></div>
              </div>
              <div style={{display:"flex",flexDirection:"column",gap:"10px"}}>
                {achievements.map((s) => (
                  <div key={s} style={{display:"flex",alignItems:"center",gap:"12px",fontSize:"14px",color:"var(--text-muted)"}}>
                    <div style={{width:"6px",height:"6px",background:"var(--gold)",borderRadius:"50%",flexShrink:0}}></div>
                    {s}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-dark">
        <div className="wrap">
          <span className="tag">Путь</span>
          <div className="gold-rule" style={{margin:"12px 0 48px"}}></div>
          <h2 className="f-display" style={{fontSize:"clamp(28px,3.5vw,46px)",color:"#F7F5F0",marginBottom:"56px"}}>Ключевые вехи</h2>
          <div style={{maxWidth:"720px"}}>
            <div className="timeline">
              {timeline.map(([year, event]) => (
                <div key={year} className="tl-item">
                  <div className="tl-dot"></div>
                  <div className="tl-year">{year}</div>
                  <div className="tl-event">{event}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-sm bg-surface" style={{textAlign:"center"}}>
        <div className="wrap">
          <h2 className="f-display" style={{fontSize:"clamp(28px,3.5vw,44px)",color:"var(--ink)",marginBottom:"18px"}}>Работаем вместе?</h2>
          <p style={{fontSize:"16px",color:"var(--text-muted)",marginBottom:"30px"}}>Напишите — расскажу, чем могу помочь именно в вашей ситуации.</p>
          <Link href="/contacts" className="btn btn-gold">Написать Михаилу</Link>
        </div>
      </section>
    </>
  );
}

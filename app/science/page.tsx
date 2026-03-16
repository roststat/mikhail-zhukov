export const metadata = { title: "Научные работы — Михаил" };

export default function Science() {
  const publications = [
    {y:"2025",t:"Функциональные роли личности в динамике малых групп",j:"Психология P-17",tags:["Личность","Группы"]},
    {y:"2024",t:"Профайлинг как инструмент управления коммуникативными процессами",j:"Прикладная психология",tags:["Управление","Коммуникация"]},
    {y:"2023",t:"FASE-модель: теоретические основания и практические приложения",j:"Психология P-17",tags:["FASE","Теория"]},
    {y:"2022",t:"Семантика поведения: к вопросу о невербальных маркерах функционального профиля",j:"Психологический журнал",tags:["Поведение","Невербальное"]},
    {y:"2021",t:"Корреляция функциональных профилей и профессиональной успешности",j:"Прикладная психология",tags:["Профориентация","Исследование"]},
    {y:"2020",t:"Структурная динамика личности в кризисных ситуациях",j:"Психология P-17",tags:["Кризис","Динамика"]},
    {y:"2019",t:"О природе функциональных ролей: к постановке проблемы",j:"Психология P-17",tags:["Теория","Роли"]},
    {y:"2018",t:"Межличностное взаимодействие через призму функциональной модели",j:"Прикладная психология",tags:["Взаимодействие"]},
  ];

  return (
    <>
      <div className="page-header">
        <div className="wrap">
          <div style={{display:"flex",alignItems:"center",gap:"12px",marginBottom:"22px"}}>
            <div className="gold-rule"></div>
            <span className="tag">Исследования</span>
          </div>
          <h1 className="page-h1 f-display">Научные работы</h1>
        </div>
      </div>

      <section className="section bg-warm">
        <div className="wrap">
          <div className="grid-5-3">
            <div>
              <span className="tag">Публикации P-17</span>
              <div className="gold-rule" style={{margin:"12px 0 32px"}}></div>
              {publications.map((p) => (
                <div key={p.t} className="pub-item">
                  <div className="pub-year">{p.y}</div>
                  <div>
                    <div className="pub-title">{p.t}</div>
                    <div className="pub-journal">{p.j}</div>
                    <div className="pub-tags">
                      {p.tags.map((tag) => (
                        <span key={tag} className="pub-tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
              <div style={{marginTop:"20px",textAlign:"center"}}>
                <a href="https://p-17.ru" target="_blank" className="btn btn-outline">Все публикации на P-17 →</a>
              </div>
            </div>
            <div>
              <div className="sticky-box">
                <div className="dark-card" style={{marginBottom:"16px"}}>
                  <span className="tag" style={{display:"block",marginBottom:"12px"}}>Проект</span>
                  <h3>ЮПрофайлер</h3>
                  <p>Образовательный проект по профайлингу. Обучение методике FASE, работа с молодыми специалистами, популяризация научного подхода к пониманию личности.</p>
                  <span className="btn btn-outline-light" style={{display:"block",textAlign:"center"}}>Подробнее</span>
                </div>
                <div className="quote">
                  <div className="quote-text">"Наука о человеке должна говорить с человеком на понятном языке — без потери точности."</div>
                  <div className="quote-attr">— Михаил</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

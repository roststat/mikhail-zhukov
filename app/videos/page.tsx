export const metadata = { title: "Видео — Михаил Жуков" };

export default function Videos() {
  const videos = [
    {tag:"Введение",title:"Что такое профайлинг — объяснение за 5 минут",dur:"5:12"},
    {tag:"Методика",title:"FASE-модель: три уровня анализа личности",dur:"18:40"},
    {tag:"Бизнес",title:"Как профайлинг применяется в управлении командой",dur:"24:15"},
    {tag:"Личное",title:"Профориентация без тестов — мастер-класс",dur:"31:00"},
    {tag:"Кейс",title:"Настройка коммуникации в организации за 3 месяца",dur:"22:33"},
    {tag:"Наука",title:"Семантика поведения: читаем людей правильно",dur:"41:20"},
    {tag:"Введение",title:"Пять мифов о профайлинге — разбираем популярные заблуждения",dur:"9:45"},
    {tag:"Бизнес",title:"Как принимать кадровые решения через профайлинг",dur:"16:28"},
    {tag:"Личное",title:"Когда идти к профайлеру: признаки, что пора разобраться в себе",dur:"12:00"},
  ];

  return (
    <>
      <div className="page-header">
        <div className="wrap">
          <div style={{display:"flex",alignItems:"center",gap:"12px",marginBottom:"22px"}}>
            <div className="gold-rule"></div>
            <span className="tag">Видеоматериалы</span>
          </div>
          <h1 className="page-h1 f-display">Видео</h1>
        </div>
      </div>

      <section className="section bg-warm">
        <div className="wrap">
          <div className="grid-3">
            {videos.map((v) => (
              <div key={v.title} className="vid-card">
                <div className="vid-thumb">
                  <div className="play-btn"><span className="play-icon">▶</span></div>
                  <div className="vid-dur">{v.dur}</div>
                </div>
                <div className="vid-body">
                  <span className="tag">{v.tag}</span>
                  <div className="vid-title">{v.title}</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{marginTop:"48px",textAlign:"center"}}>
            <p style={{fontSize:"14px",color:"var(--text-muted)",marginBottom:"20px"}}>Все видео также доступны на YouTube и Rutube</p>
            <div style={{display:"flex",justifyContent:"center",gap:"14px",flexWrap:"wrap"}}>
              <a href="https://youtube.com" target="_blank" className="btn btn-outline">YouTube →</a>
              <a href="https://rutube.ru" target="_blank" className="btn btn-outline">Rutube →</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

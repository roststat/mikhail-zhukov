export const metadata = { title: "Telegram — Михаил" };

export default function Telegram() {
  const posts = [
    {date:"12 мар 2026",text:"Почему умные люди принимают плохие решения?\n\nПотому что интеллект и функциональная осознанность — разные вещи. Можно знать всё про когнитивные искажения и при этом снова и снова попадать в один и тот же капкан.\n\nFASE-модель объясняет почему — и что с этим делать."},
    {date:"10 мар 2026",text:"Три признака того, что в команде нарушена коммуникация:\n\n▪ Люди согласны на совещании — и саботируют потом\n▪ «Договорились» — а через неделю выясняется, что поняли разное\n▪ Конфликты возникают там, где их «не должно быть»\n\nЭто не про личности. Это про функциональное несоответствие."},
    {date:"7 мар 2026",text:"Профориентация без тестов — возможно ли это?\n\nМожно. И часто точнее.\n\nТесты дают вам усреднённую категорию. Профайлинг даёт конкретный функциональный профиль — что именно даётся легко, что с натугой, и где ваша настоящая сила."},
    {date:"3 мар 2026",text:"Заметка из практики:\n\nЧеловек 10 лет считал себя интровертом. Избегал людей, объяснял это «характером».\n\nПри разборе оказалось: не интроверт. Человек с определённым функциональным профилем, которому просто не давали работать в своём режиме.\n\nРазница принципиальная."},
  ];

  return (
    <>
      <div className="page-header">
        <div className="wrap">
          <div style={{display:"flex",alignItems:"center",gap:"12px",marginBottom:"22px"}}>
            <div className="gold-rule"></div>
            <span className="tag">Канал</span>
          </div>
          <h1 className="page-h1 f-display">Telegram</h1>
          <p style={{fontSize:"17px",color:"rgba(247,245,240,.45)",marginTop:"20px",maxWidth:"500px",lineHeight:1.7}}>Профессиональный контент в доступном формате. Разборы, кейсы, наблюдения из практики.</p>
        </div>
      </div>

      <section className="section bg-warm">
        <div className="wrap">
          <div className="grid-5-3">
            <div>
              <span className="tag">Последние посты</span>
              <div className="gold-rule" style={{margin:"12px 0 32px"}}></div>
              {posts.map((p) => (
                <div key={p.date} className="tg-post" style={{background:"var(--surface)",borderColor:"var(--border)",borderLeftColor:"var(--gold)"}}>
                  <div className="tg-date" style={{color:"var(--gold)"}}>{p.date}</div>
                  <div className="tg-text" style={{color:"var(--text)",whiteSpace:"pre-line"}}>{p.text}</div>
                </div>
              ))}
            </div>
            <div>
              <div className="sticky-box">
                <div className="dark-card" style={{textAlign:"center",marginBottom:"16px"}}>
                  <div style={{fontSize:"52px",color:"var(--gold)",marginBottom:"14px"}}>✈</div>
                  <h3>Подписывайтесь</h3>
                  <p>Канал, из которого не уходят. Проверено статистикой просмотров.</p>
                  <a href="https://t.me/mikhail_profiling" target="_blank" className="btn btn-gold" style={{display:"block",textAlign:"center"}}>Открыть в Telegram</a>
                </div>
                <div style={{padding:"28px",background:"var(--surface)",border:"1px solid var(--border)",textAlign:"center"}}>
                  <p style={{fontSize:"12px",color:"var(--text-muted)",marginBottom:"14px",letterSpacing:".05em",textTransform:"uppercase"}}>QR-код для лекций</p>
                  <div style={{width:"110px",height:"110px",background:"var(--surface-warm)",margin:"0 auto",display:"flex",alignItems:"center",justifyContent:"center",border:"1.5px solid var(--border)"}}>
                    <span style={{fontSize:"12px",color:"var(--text-faint)"}}>QR</span>
                  </div>
                  <p style={{fontSize:"12px",color:"var(--text-faint)",marginTop:"10px"}}>Сканируйте на лекции</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

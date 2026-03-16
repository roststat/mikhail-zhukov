"use client";
import { useState } from "react";

export default function Contacts() {
  const [submitted, setSubmitted] = useState(false);

  const socials = [
    {label:"Telegram",icon:"✈",handle:"@mikhail_profiling",href:"https://t.me/mikhail_profiling",color:"#0088CC"},
    {label:"ВКонтакте",icon:"В",handle:"mikhail_profiling",href:"https://vk.com",color:"#4680C2"},
    {label:"YouTube",icon:"▶",handle:"@mikhail_profiling",href:"https://youtube.com",color:"#FF0000"},
    {label:"Rutube",icon:"R",handle:"mikhail_profiling",href:"https://rutube.ru",color:"#E22020"},
    {label:"Яндекс Дзен",icon:"Д",handle:"mikhail",href:"https://dzen.ru",color:"#FF6B00"},
  ];

  return (
    <>
      <div className="page-header">
        <div className="wrap">
          <div style={{display:"flex",alignItems:"center",gap:"12px",marginBottom:"22px"}}>
            <div className="gold-rule"></div>
            <span className="tag">Связаться</span>
          </div>
          <h1 className="page-h1 f-display">Контакты</h1>
        </div>
      </div>

      <section className="section bg-warm">
        <div className="wrap">
          <div className="grid-5-3">
            <div>
              <span className="tag">Форма обратной связи</span>
              <div className="gold-rule" style={{margin:"12px 0 32px"}}></div>

              {submitted ? (
                <div className="form-success show">
                  <div className="form-success-icon">✓</div>
                  <h3 className="f-display" style={{fontSize:"28px",color:"#F7F5F0",marginBottom:"10px"}}>Сообщение отправлено</h3>
                  <p style={{color:"rgba(247,245,240,.5)"}}>Михаил Жуков ответит в течение 24 часов.</p>
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
                  <div className="form-group">
                    <label className="form-label">Ваше имя *</label>
                    <input type="text" className="form-input" placeholder="Как к вам обращаться" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email или Telegram *</label>
                    <input type="text" className="form-input" placeholder="Как с вами связаться" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Тема обращения</label>
                    <select className="form-input form-select">
                      <option value="">Выберите тему</option>
                      <option>Личная консультация</option>
                      <option>Бизнес-запрос</option>
                      <option>Командный проект</option>
                      <option>Пригласить на лекцию</option>
                      <option>Другое</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Сообщение</label>
                    <textarea className="form-input form-textarea" placeholder="Расскажите о вашем запросе..."></textarea>
                  </div>
                  <button type="submit" className="btn btn-gold" style={{width:"100%",padding:"16px"}}>Отправить сообщение</button>
                  <p style={{fontSize:"12px",color:"var(--text-faint)",textAlign:"center",marginTop:"12px"}}>Отвечаю в течение 24 часов</p>
                </form>
              )}
            </div>
            <div>
              <div className="sticky-box">
                <span className="tag">Социальные сети</span>
                <div className="gold-rule" style={{margin:"12px 0 24px"}}></div>
                {socials.map((s) => (
                  <a key={s.label} href={s.href} target="_blank" className="social-row">
                    <div className="social-icon-box" style={{background:`${s.color}18`,border:`1px solid ${s.color}40`,color:s.color}}>{s.icon}</div>
                    <div>
                      <div className="social-name">{s.label}</div>
                      <div className="social-handle">{s.handle}</div>
                    </div>
                  </a>
                ))}
                <div className="quote" style={{marginTop:"20px"}}>
                  <div className="quote-text">"Для корпоративных проектов и приглашений на лекции — пишите с описанием организации и формата."</div>
                  <div className="quote-attr">— Михаил Жуков</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

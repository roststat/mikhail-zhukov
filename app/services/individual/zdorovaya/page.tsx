import Link from "next/link";

export const metadata = { title: 'Программа "Здоровая коммуникация" — Михаил Жуков' };

export default function ProgramZdorovaya() {
  return (
    <>
      <div className="page-header">
        <div className="wrap">
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "22px" }}>
            <div className="gold-rule"></div>
            <span className="tag">Индивидуальные программы · 03</span>
          </div>
          <h1 className="page-h1 f-display">ЗДОРОВАЯ<br /><em style={{ color: "var(--gold)", fontStyle: "italic" }}>КОММУНИКАЦИЯ</em></h1>
          <p style={{ fontSize: "18px", color: "rgba(247,245,240,.48)", marginTop: "20px", maxWidth: "520px", lineHeight: 1.7 }}>
            Навык управлять своим состоянием и взаимодействием через присутствие, а не контроль.
          </p>
        </div>
      </div>

      <section className="section bg-warm">
        <div className="wrap">
          <div className="grid-2">
            <div>
              <span className="tag">О программе</span>
              <div className="gold-rule" style={{ margin: "12px 0 24px" }}></div>
              <p style={{ fontSize: "16px", color: "var(--text-muted)", lineHeight: 1.9, marginBottom: "16px" }}>
                Навык управлять своим состоянием и взаимодействием через присутствие, а не контроль. Умение удерживать коммуникативное поле, быть в центре и слышать других даже в сложных диалогах.
              </p>

              <span className="tag">Формат</span>
              <div className="gold-rule" style={{ margin: "12px 0 20px" }}></div>
              {[
                "8 недель",
                "1 встреча в неделю (индивидуально или мини-группа до 5 человек)",
                "Работа с кейсами клиента и реальными переговорами",
              ].map((item) => (
                <div key={item} className="service-item">
                  <div className="service-dot"></div>
                  <div className="service-text">{item}</div>
                </div>
              ))}

              <div style={{ marginTop: "36px" }}>
                <span className="tag">Что вы получаете</span>
                <div className="gold-rule" style={{ margin: "12px 0 20px" }}></div>
                {[
                  "Спокойствие и ясность в общении — даже под давлением",
                  "Уверенность в своей роли без жёсткости и давления",
                  "Влияние без давления и контроля",
                  "Навык слышать себя и другого одновременно",
                  "Присутствие, за которым идут, а не подчиняются",
                ].map((item) => (
                  <div key={item} className="service-item">
                    <div className="service-dot"></div>
                    <div className="service-text">{item}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="dark-card" style={{ marginBottom: "16px" }}>
                <h3 style={{ marginBottom: "20px" }}>Стоимость</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "28px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid rgba(247,245,240,.1)", paddingBottom: "12px" }}>
                    <span style={{ color: "rgba(247,245,240,.7)" }}>Индивидуальный трек</span>
                    <span style={{ color: "var(--gold)", fontSize: "20px", fontWeight: 700 }}>79 000 ₽</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ color: "rgba(247,245,240,.7)" }}>В мини-группе</span>
                    <span style={{ color: "var(--gold)", fontSize: "20px", fontWeight: 700 }}>39 000 ₽ / чел.</span>
                  </div>
                </div>
                <Link href="/contacts" className="btn btn-gold" style={{ display: "block", textAlign: "center" }}>Записаться</Link>
              </div>
              <div className="quote">
                <div className="quote-text">"Я не даю готовых ответов — я создаю пространство, где возможны настоящие изменения."</div>
                <div className="quote-attr">— Михаил Жуков</div>
              </div>
              <div style={{ marginTop: "16px" }}>
                <Link href="/services/individual" style={{ color: "var(--gold)", fontSize: "14px", textDecoration: "none" }}>← Все индивидуальные программы</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

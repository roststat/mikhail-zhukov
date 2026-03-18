import Link from "next/link";

export const metadata = { title: "Индивидуальное сопровождение — Михаил Жуков" };

export default function ProgramSoprovozhdenie() {
  return (
    <>
      <div className="page-header">
        <div className="wrap">
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "22px" }}>
            <div className="gold-rule"></div>
            <span className="tag">Индивидуальные программы · 04</span>
          </div>
          <h1 className="page-h1 f-display">ИНДИВИДУАЛЬНОЕ<br /><em style={{ color: "var(--gold)", fontStyle: "italic" }}>СОПРОВОЖДЕНИЕ</em></h1>
          <p style={{ fontSize: "18px", color: "rgba(247,245,240,.48)", marginTop: "20px", maxWidth: "520px", lineHeight: 1.7 }}>
            Персональная калибровка по ситуации — точно, быстро, в реальности.
          </p>
        </div>
      </div>

      <section className="section bg-warm">
        <div className="wrap">
          <div className="grid-2">
            <div>
              <span className="tag">О сопровождении</span>
              <div className="gold-rule" style={{ margin: "12px 0 24px" }}></div>
              <p style={{ fontSize: "16px", color: "var(--text-muted)", lineHeight: 1.9, marginBottom: "16px" }}>
                Настройка внутреннего состояния, стратегии коммуникации, сценарные паттерны. Персональная калибровка по ситуации — точно, быстро, в реальности.
              </p>

              <span className="tag">Формат</span>
              <div className="gold-rule" style={{ margin: "12px 0 20px" }}></div>
              {[
                "1 встреча в неделю — 90 минут",
                "Поддержка в мессенджере",
                "Работа с жизненными ситуациями: семья, отношения, работа, бизнес",
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
                  "Устойчивость в сложных периодах",
                  "Глубокую работу с эмоциями и реакциями",
                  "Навигатор в реальности, где всё по-настоящему",
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
                    <span style={{ color: "rgba(247,245,240,.7)" }}>1 месяц</span>
                    <span style={{ color: "var(--gold)", fontSize: "20px", fontWeight: 700 }}>45 000 ₽</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ color: "rgba(247,245,240,.7)" }}>3 месяца</span>
                    <span style={{ color: "var(--gold)", fontSize: "20px", fontWeight: 700 }}>120 000 ₽</span>
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

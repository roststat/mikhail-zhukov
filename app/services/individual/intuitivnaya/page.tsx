import Link from "next/link";

export const metadata = { title: 'Программа "Интуитивная коммуникация" — Михаил Жуков' };

const otherPrograms = [
  { href: "/services/individual/kto-ya", num: "01", title: "«Кто я такой» | Solve et Coagula", price: "от 28 000 ₽" },
  { href: "/services/individual/zdorovaya", num: "03", title: "Здоровая коммуникация", price: "от 39 000 ₽" },
  { href: "/services/individual/soprovozhdenie", num: "04", title: "Индивидуальное сопровождение", price: "от 45 000 ₽" },
];

export default function ProgramIntuitivnaya() {
  return (
    <>
      <div className="page-header">
        <div className="wrap">
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "22px" }}>
            <div className="gold-rule"></div>
            <span className="tag">Индивидуальные программы · 02</span>
          </div>
          <h1 className="page-h1 f-display">ИНТУИТИВНАЯ<br /><em style={{ color: "var(--gold)", fontStyle: "italic" }}>КОММУНИКАЦИЯ</em></h1>
          <p style={{ fontSize: "18px", color: "rgba(247,245,240,.48)", marginTop: "20px", maxWidth: "520px", lineHeight: 1.7 }}>
            Развиваем невербальный канал восприятия и понимания.
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
                Развиваем невербальный канал восприятия и понимания. Учимся считывать человека без слов — через тело, состояние, внимание.
              </p>

              <span className="tag">Формат</span>
              <div className="gold-rule" style={{ margin: "12px 0 20px" }}></div>
              {[
                "4 недели / 8 индивидуальных встреч (2 в неделю)",
                "Теория + практика",
                "Эксперименты между сессиями",
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
                  "Общение становится живым и точным",
                  "Уходит усталость от «объяснять по сто раз»",
                  "Присутствие без напряжения и защиты",
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
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "28px" }}>
                  <span style={{ color: "rgba(247,245,240,.7)" }}>Индивидуальный трек</span>
                  <span style={{ color: "var(--gold)", fontSize: "20px", fontWeight: 700 }}>84 000 ₽</span>
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

      {/* ДРУГИЕ ПРОГРАММЫ */}
      <section className="section-sm bg-surface">
        <div className="wrap">
          <span className="tag">Другие программы</span>
          <div className="gold-rule" style={{ margin: "12px 0 28px" }}></div>
          <div className="grid-3">
            {otherPrograms.map((p) => (
              <Link key={p.href} href={p.href} style={{ textDecoration: "none" }}>
                <div className="pillar" style={{ padding: "20px 24px", cursor: "pointer" }}>
                  <div className="pillar-num">{p.num}</div>
                  <div style={{ flex: 1 }}>
                    <div className="pillar-title" style={{ marginBottom: "6px" }}>{p.title}</div>
                    <div style={{ color: "var(--gold)", fontSize: "14px", fontWeight: 600 }}>{p.price}</div>
                  </div>
                  <div style={{ color: "var(--gold)", fontSize: "18px" }}>→</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

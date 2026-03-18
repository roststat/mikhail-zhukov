import Link from "next/link";

export const metadata = { title: "Индивидуальные программы — Михаил Жуков" };

const programs = [
  {
    href: "/services/individual/kto-ya",
    num: "01",
    tag: "Самоидентификация",
    title: 'Программа "КТО Я ТАКОЙ" | Solve et Coagula',
    desc: "Разборка и сборка себя: через ощущения, реакции и сценарии.",
    format: "Индивидуальная консультация (90 мин) + письменный профайл-отчёт (9–12 стр.)",
    price: "от 28 000 ₽",
  },
  {
    href: "/services/individual/intuitivnaya",
    num: "02",
    tag: "Коммуникация",
    title: 'Программа "ИНТУИТИВНАЯ КОММУНИКАЦИЯ"',
    desc: "Развиваем невербальный канал восприятия и понимания.",
    format: "4 недели / 8 встреч (2 в неделю)",
    price: "84 000 ₽",
  },
  {
    href: "/services/individual/zdorovaya",
    num: "03",
    tag: "Коммуникация",
    title: 'Программа "ЗДОРОВАЯ КОММУНИКАЦИЯ"',
    desc: "Навык управлять своим состоянием и взаимодействием через присутствие, а не контроль.",
    format: "8 недель / 1 встреча в неделю",
    price: "от 39 000 ₽",
  },
  {
    href: "/services/individual/soprovozhdenie",
    num: "04",
    tag: "Сопровождение",
    title: "ИНДИВИДУАЛЬНОЕ СОПРОВОЖДЕНИЕ",
    desc: "Настройка внутреннего состояния, стратегии коммуникации, сценарные паттерны.",
    format: "1 встреча в неделю (90 мин) + поддержка в мессенджере",
    price: "от 45 000 ₽",
  },
];

export default function ServicesIndividual() {
  return (
    <>
      <div className="page-header">
        <div className="wrap">
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "22px" }}>
            <div className="gold-rule"></div>
            <span className="tag">Услуги · Личное</span>
          </div>
          <h1 className="page-h1 f-display">Индивидуальные<br />программы</h1>
          <p style={{ fontSize: "18px", color: "rgba(247,245,240,.48)", marginTop: "20px", maxWidth: "560px", lineHeight: 1.7 }}>
            Результат авторской практики на стыке психологии, телесной чувствительности и глубокой работы с эмоциями и коммуникацией.
          </p>
        </div>
      </div>

      <section className="section bg-warm">
        <div className="wrap">
          <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginBottom: "60px" }}>
            {programs.map((p) => (
              <Link key={p.href} href={p.href} style={{ textDecoration: "none" }}>
                <div className="pillar" style={{ padding: "28px 32px", cursor: "pointer", transition: "box-shadow .2s" }}>
                  <div className="pillar-num" style={{ fontSize: "28px", minWidth: "48px" }}>{p.num}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px" }}>
                      <span className="tag">{p.tag}</span>
                    </div>
                    <div className="pillar-title" style={{ fontSize: "18px", marginBottom: "8px" }}>{p.title}</div>
                    <div className="pillar-text" style={{ marginBottom: "10px" }}>{p.desc}</div>
                    <div style={{ display: "flex", gap: "24px", flexWrap: "wrap", fontSize: "13px", color: "var(--text-muted)" }}>
                      <span>📅 {p.format}</span>
                      <span style={{ color: "var(--gold)", fontWeight: 600 }}>{p.price}</span>
                    </div>
                  </div>
                  <div style={{ color: "var(--gold)", fontSize: "20px", alignSelf: "center" }}>→</div>
                </div>
              </Link>
            ))}
          </div>

          {/* Пакет */}
          <div className="dark-card">
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
              <div className="gold-rule"></div>
              <span className="tag">Выгодно</span>
            </div>
            <h2 className="f-display" style={{ fontSize: "clamp(22px,3vw,34px)", color: "#F7F5F0", marginBottom: "14px" }}>
              Пакет «Для себя»
            </h2>
            <p style={{ color: "rgba(247,245,240,.6)", lineHeight: 1.75, marginBottom: "16px" }}>
              Включает программу «Кто я такой» + «Интуитивная коммуникация».<br />
              Понимаете себя и возвращаете живой, точный контакт с другими. Больше не нужно защищаться или играть чужие роли.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "20px", flexWrap: "wrap", marginBottom: "24px" }}>
              <span style={{ textDecoration: "line-through", color: "rgba(247,245,240,.35)", fontSize: "15px" }}>92 000 ₽</span>
              <span style={{ color: "var(--gold)", fontSize: "24px", fontWeight: 700 }}>78 000 ₽</span>
              <span style={{ color: "rgba(247,245,240,.5)", fontSize: "13px" }}>скидка 15% — экономия 14 000 ₽</span>
            </div>
            <Link href="/contacts" className="btn btn-gold">Записаться на пакет</Link>
          </div>
        </div>
      </section>

      <section className="section-sm bg-surface" style={{ textAlign: "center" }}>
        <div className="wrap">
          <div className="gold-rule gold-rule-center" style={{ marginBottom: "20px" }}></div>
          <h2 className="f-display" style={{ fontSize: "clamp(24px,3.5vw,42px)", color: "var(--ink)", marginBottom: "16px" }}>
            Не знаете, с чего начать?
          </h2>
          <p style={{ fontSize: "16px", color: "var(--text-muted)", maxWidth: "420px", margin: "0 auto 32px", lineHeight: 1.8 }}>
            Расскажите о своей ситуации — подберём оптимальный формат.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contacts" className="btn btn-gold">Написать Михаилу</Link>
            <a href="https://t.me/Zhukov_MMAP" target="_blank" className="btn btn-outline">Telegram @Zhukov_MMAP</a>
          </div>
        </div>
      </section>
    </>
  );
}

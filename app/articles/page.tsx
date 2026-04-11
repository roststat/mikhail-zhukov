import Link from "next/link";

const articles = [
  { slug: "fase-model", tag: "Психология", title: "Как работает функциональная модель человека: введение в FASE", date: "12 марта 2026", min: "8 мин" },
  { slug: "profiling-team", tag: "Бизнес", title: "Профайлинг в управлении командой: что видит профайлер и что скрыто от руководителя", date: "5 марта 2026", min: "11 мин" },
  { slug: "career-profiling", tag: "Личное", title: "Профессиональная ориентация через профайлинг: найти своё место без тестов", date: "25 февраля 2026", min: "6 мин" },
];

export default function Articles() {
  return (
    <>
      <div className="page-header">
        <div className="wrap">
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "22px" }}>
            <div className="gold-rule"></div>
            <span className="tag">Публикации</span>
          </div>
          <h1 className="page-h1 f-display">Статьи</h1>
        </div>
      </div>

      <section className="section bg-warm">
        <div className="wrap">
          <div className="grid-3">
            {articles.map((a) => (
              <div key={a.slug} className="art-card">
                <div className="art-meta">
                  <span className="tag">{a.tag}</span>
                  <span className="read-time">{a.min}</span>
                </div>
                <div className="art-title">{a.title}</div>
                <div className="art-date">{a.date}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

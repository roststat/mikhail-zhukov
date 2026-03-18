import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { allPostsQuery } from "@/sanity/lib/queries";

export const revalidate = 60;

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("ru-RU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function Articles() {
  const articles = await client.fetch(allPostsQuery);

  const allCategories = ["Все", ...Array.from(
    new Set(articles.flatMap((a: any) => a.categories?.map((c: any) => c.title) ?? []))
  )] as string[];

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
          {articles.length === 0 ? (
            <p style={{ color: "var(--text-muted)", fontSize: "16px" }}>
              Статьи пока не добавлены. Добавьте их в{" "}
              <Link href="/studio" style={{ color: "var(--gold)" }}>Sanity Studio</Link>.
            </p>
          ) : (
            <div className="grid-3">
              {articles.map((a: any) => (
                <Link key={a._id} href={`/articles/${a.slug.current}`} className="art-card">
                  <div className="art-meta">
                    <span className="tag">{a.categories?.[0]?.title ?? "Статья"}</span>
                    {a.readTime && <span className="read-time">{a.readTime} мин</span>}
                  </div>
                  <div className="art-title">{a.title}</div>
                  {a.excerpt && (
                    <p style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: 1.7, margin: "10px 0 16px" }}>
                      {a.excerpt}
                    </p>
                  )}
                  {a.publishedAt && (
                    <div className="art-date">{formatDate(a.publishedAt)}</div>
                  )}
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

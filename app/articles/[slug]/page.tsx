import { notFound } from "next/navigation";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { postBySlugQuery, allPostsQuery } from "@/sanity/lib/queries";
import { PortableText } from "@portabletext/react";

export const revalidate = 60;

export async function generateStaticParams() {
  const posts = await client.fetch(allPostsQuery);
  return posts.map((post: any) => ({ slug: post.slug.current }));
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("ru-RU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = await client.fetch(postBySlugQuery, { slug });

  if (!article) notFound();

  return (
    <>
      <div className="page-header">
        <div className="wrap">
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "22px" }}>
            <div className="gold-rule"></div>
            <Link href="/articles" style={{ color: "var(--text-muted)", fontSize: "14px" }}>← Все статьи</Link>
          </div>
          <div style={{ display: "flex", gap: "10px", marginBottom: "16px", flexWrap: "wrap" }}>
            {article.categories?.map((c: any) => (
              <span key={c._id} className="tag">{c.title}</span>
            ))}
          </div>
          <h1 className="page-h1 f-display" style={{ maxWidth: "800px" }}>{article.title}</h1>
          <div style={{ display: "flex", gap: "20px", marginTop: "16px", color: "var(--text-muted)", fontSize: "14px" }}>
            {article.publishedAt && <span>{formatDate(article.publishedAt)}</span>}
            {article.readTime && <span>{article.readTime} мин чтения</span>}
          </div>
        </div>
      </div>

      <section className="section bg-warm">
        <div className="wrap">
          {article.excerpt && (
            <p style={{ fontSize: "18px", color: "var(--text)", lineHeight: 1.8, marginBottom: "40px", maxWidth: "720px", fontStyle: "italic" }}>
              {article.excerpt}
            </p>
          )}
          <div className="prose" style={{ maxWidth: "720px" }}>
            {article.body && <PortableText value={article.body} />}
          </div>
          <div style={{ marginTop: "60px", paddingTop: "32px", borderTop: "1px solid var(--border)" }}>
            <Link href="/articles" className="btn btn-outline">← Все статьи</Link>
          </div>
        </div>
      </section>
    </>
  );
}

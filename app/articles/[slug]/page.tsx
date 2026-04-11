import { notFound } from "next/navigation";
import Link from "next/link";

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  await params;
  notFound();
}

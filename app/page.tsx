import { readFileSync } from "fs";
import { join } from "path";
import MikhailSite from "@/components/MikhailSite";

export default function Home() {
  const html = readFileSync(
    join(process.cwd(), "mikhail-site.html"),
    "utf-8"
  );

  // Извлекаем CSS, body content и JS из HTML файла
  const styleMatch = html.match(/<style>([\s\S]*?)<\/style>/);
  const css = styleMatch ? styleMatch[1] : "";

  const bodyMatch = html.match(/<body>([\s\S]*?)<\/body>/);
  const bodyContent = bodyMatch ? bodyMatch[1] : "";

  const scriptMatch = html.match(/<script>([\s\S]*?)<\/script>/);
  const js = scriptMatch ? scriptMatch[1] : "";

  return <MikhailSite css={css} bodyContent={bodyContent} js={js} />;
}

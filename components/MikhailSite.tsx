"use client";

import { useEffect } from "react";

interface Props {
  css: string;
  bodyContent: string;
  js: string;
}

export default function MikhailSite({ css, bodyContent, js }: Props) {
  useEffect(() => {
    // Выполняем JS после монтирования компонента
    const script = document.createElement("script");
    script.text = js;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, [js]);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <div dangerouslySetInnerHTML={{ __html: bodyContent }} />
    </>
  );
}

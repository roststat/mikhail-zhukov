"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav id="nav" className={scrolled ? "scrolled" : ""}>
      <div className="wrap nav-inner">
        <Link href="/" className="logo">
          <div className="logo-box">М</div>
          <div>
            <div className="logo-text-main">Михаил Жуков</div>
            <div className="logo-text-sub">Профайлинг · FASE</div>
          </div>
        </Link>
        <div className="nav-links">
          <div className="nav-item">
            <Link href="/" className="nav-link">Главная</Link>
          </div>
          <div className="nav-item">
            <Link href="/about" className="nav-link">Об авторе</Link>
          </div>
          <div className="nav-item">
            <Link href="/fason" className="nav-link">Методика FASE</Link>
          </div>
          <div className="nav-item">
            <span className="nav-link" style={{cursor:"pointer"}}>Услуги <span className="arrow">▾</span></span>
            <div className="dropdown">
              <div className="dropdown-inner">
                <Link href="/services/individual" className="dropdown-link">Индивидуальные программы</Link>
                <Link href="/services/corporate" className="dropdown-link">Для бизнеса и команд</Link>
              </div>
            </div>
          </div>
          <div className="nav-item">
            <span className="nav-link" style={{cursor:"pointer"}}>Контент <span className="arrow">▾</span></span>
            <div className="dropdown">
              <div className="dropdown-inner">
                <Link href="/articles" className="dropdown-link">Статьи</Link>
                <Link href="/videos" className="dropdown-link">Видео</Link>
                <Link href="/cases" className="dropdown-link">Кейсы</Link>
                <Link href="/telegram" className="dropdown-link">Telegram</Link>
              </div>
            </div>
          </div>
          <div className="nav-item">
            <span className="nav-link" style={{cursor:"pointer"}}>Наука <span className="arrow">▾</span></span>
            <div className="dropdown">
              <div className="dropdown-inner">
                <Link href="/science" className="dropdown-link">Публикации</Link>
                <Link href="/science" className="dropdown-link">ЮПрофайлер</Link>
              </div>
            </div>
          </div>
          <Link href="/contacts" className="nav-cta btn">Записаться</Link>
        </div>
        <div className="burger" onClick={() => setMobileOpen(!mobileOpen)}>
          <div className="burger-line"></div>
          <div className="burger-line"></div>
          <div className="burger-line"></div>
        </div>
      </div>
      <div className="mobile-menu" style={{display: mobileOpen ? "block" : "none"}}>
        <Link href="/" className="mobile-link" onClick={() => setMobileOpen(false)}>Главная</Link>
        <Link href="/about" className="mobile-link" onClick={() => setMobileOpen(false)}>Об авторе</Link>
        <Link href="/fason" className="mobile-link" onClick={() => setMobileOpen(false)}>Методика FASE</Link>
        <Link href="/services/individual" className="mobile-link sub" onClick={() => setMobileOpen(false)}>— Индивидуальные программы</Link>
        <Link href="/services/corporate" className="mobile-link sub" onClick={() => setMobileOpen(false)}>— Для бизнеса и команд</Link>
        <Link href="/articles" className="mobile-link" onClick={() => setMobileOpen(false)}>Статьи</Link>
        <Link href="/videos" className="mobile-link" onClick={() => setMobileOpen(false)}>Видео</Link>
        <Link href="/cases" className="mobile-link" onClick={() => setMobileOpen(false)}>Кейсы</Link>
        <Link href="/telegram" className="mobile-link" onClick={() => setMobileOpen(false)}>Telegram</Link>
        <Link href="/science" className="mobile-link" onClick={() => setMobileOpen(false)}>Научные публикации</Link>
        <div style={{padding:"20px 24px"}}>
          <Link href="/contacts" className="btn btn-gold" style={{display:"block",textAlign:"center"}} onClick={() => setMobileOpen(false)}>Записаться на консультацию</Link>
        </div>
      </div>
    </nav>
  );
}

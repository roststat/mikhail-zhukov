import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="footer-main">
        <div className="wrap">
          <div className="grid-4" style={{gap:"48px"}}>
            <div style={{gridColumn:"span 1"}}>
              <div className="logo" style={{marginBottom:0}}>
                <div className="logo-box">М</div>
                <div>
                  <div className="footer-brand-name">Михаил Жуков</div>
                  <div className="footer-brand-sub">Профайлинг · FASE</div>
                </div>
              </div>
              <p className="footer-desc">Учёный-исследователь. Автор функциональной модели человека FASE. Эксперт по профайлингу личности и командной коммуникации.</p>
              <div className="footer-socials">
                <a href="https://t.me/mikhail_profiling" target="_blank" className="footer-social" title="Telegram">✈</a>
                <a href="https://vk.com" target="_blank" className="footer-social" title="ВКонтакте">В</a>
                <a href="https://youtube.com" target="_blank" className="footer-social" title="YouTube">▶</a>
                <a href="https://rutube.ru" target="_blank" className="footer-social" title="Rutube">R</a>
                <a href="https://dzen.ru" target="_blank" className="footer-social" title="Дзен">Д</a>
              </div>
            </div>
            <div>
              <div className="footer-col-title">Услуги</div>
              <Link href="/services/personal" className="footer-link">Для личного роста</Link>
              <Link href="/services/business" className="footer-link">Для бизнеса</Link>
              <Link href="/services/teams" className="footer-link">Для команд</Link>
              <Link href="/fason" className="footer-link">Методика FASE</Link>
            </div>
            <div>
              <div className="footer-col-title">Контент</div>
              <Link href="/articles" className="footer-link">Статьи</Link>
              <Link href="/videos" className="footer-link">Видео</Link>
              <Link href="/cases" className="footer-link">Кейсы</Link>
              <Link href="/telegram" className="footer-link">Telegram-канал</Link>
            </div>
            <div>
              <div className="footer-col-title">О проекте</div>
              <Link href="/about" className="footer-link">Об авторе</Link>
              <Link href="/science" className="footer-link">Научные публикации</Link>
              <Link href="/science" className="footer-link">ЮПрофайлер</Link>
              <Link href="/contacts" className="footer-link">Контакты</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bar">
        <div className="wrap footer-bar-inner">
          <p className="footer-copy">© 2026 Михаил Жуков. Все права защищены.</p>
          <p className="footer-copy">Авторская методика FASE — функциональная модель человека</p>
        </div>
      </div>
    </footer>
  );
}

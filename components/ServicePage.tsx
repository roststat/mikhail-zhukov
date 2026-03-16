import Link from "next/link";

interface Props {
  tag: string;
  title: string;
  subtitle: string;
  items: string[];
}

export default function ServicePage({ tag, title, subtitle, items }: Props) {
  return (
    <>
      <div className="page-header">
        <div className="wrap">
          <div style={{display:"flex",alignItems:"center",gap:"12px",marginBottom:"22px"}}>
            <div className="gold-rule"></div>
            <span className="tag">{tag}</span>
          </div>
          <h1 className="page-h1 f-display" dangerouslySetInnerHTML={{__html: title}} />
          <p style={{fontSize:"18px",color:"rgba(247,245,240,.48)",marginTop:"20px",maxWidth:"500px",lineHeight:1.7}}>{subtitle}</p>
        </div>
      </div>

      <section className="section bg-warm">
        <div className="wrap">
          <div className="grid-2">
            <div>
              <span className="tag">Форматы работы</span>
              <div className="gold-rule" style={{margin:"12px 0 32px"}}></div>
              {items.map((item) => (
                <div key={item} className="service-item">
                  <div className="service-dot"></div>
                  <div className="service-text">{item}</div>
                </div>
              ))}
            </div>
            <div>
              <div className="dark-card" style={{marginBottom:"16px"}}>
                <h3>Записаться на консультацию</h3>
                <p>Оставьте заявку — и Михаил свяжется с вами в течение 24 часов, чтобы обсудить ваш запрос и подобрать подходящий формат.</p>
                <Link href="/contacts" className="btn btn-gold" style={{display:"block",textAlign:"center"}}>Оставить заявку</Link>
              </div>
              <div className="quote">
                <div className="quote-text">"Профайлинг — это не про то, чтобы повесить на человека ярлык. Это про то, чтобы увидеть его настоящего."</div>
                <div className="quote-attr">— Михаил</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

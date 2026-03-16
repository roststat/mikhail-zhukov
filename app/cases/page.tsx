export const metadata = { title: "Кейсы — Михаил Жуков" };

export default function Cases() {
  const cases = [
    {tag:"Личное",accent:"#8B1A2B",title:"Человек, который всю жизнь делал не своё дело",excerpt:"Руководитель крупного отдела. Признанный. Уважаемый. И абсолютно несчастный. Разбираем через FASE-модель — что пошло не так и где был настоящий поворот в его истории."},
    {tag:"Команды",accent:"#C9A84C",title:"Команда, в которой все «любили» друг друга, но ничего не работало",excerpt:"Тёплые отношения, хорошие люди — и хронический провал дедлайнов. История о том, как неправильно распределённые функции убивают любую продуктивность."},
    {tag:"Бизнес",accent:"#1A3A5C",title:"Предприниматель, который не мог принять ни одного решения",excerpt:"Успешный бизнес, деньги, команда. И полный паралич при необходимости сделать выбор. Как FASE-анализ объяснил причину — и дал конкретный выход."},
    {tag:"Семья",accent:"#2C5F4A",title:"Семейный конфликт, который длился 8 лет",excerpt:"Казалось бы, обычное недопонимание между родителями и взрослыми детьми. Оказалось — столкновение несовместимых функциональных стилей."},
    {tag:"Бизнес",accent:"#5C3A1A",title:"Директор по продажам, который боялся продавать",excerpt:"Блестящие результаты в переговорах один на один — и провал на массовых презентациях. История о том, как функциональный профиль определяет стиль работы."},
    {tag:"Личное",accent:"#4A1A5C",title:"Когда \"всё хорошо\", но жить не хочется",excerpt:"Карьера, семья, здоровье — всё на месте. А ощущение пустоты никуда не уходит. История поиска функциональной точки опоры."},
  ];

  return (
    <>
      <div className="page-header">
        <div className="wrap">
          <div style={{display:"flex",alignItems:"center",gap:"12px",marginBottom:"22px"}}>
            <div className="gold-rule"></div>
            <span className="tag">Истории из практики</span>
          </div>
          <h1 className="page-h1 f-display">Кейсы</h1>
          <p style={{fontSize:"16px",color:"rgba(247,245,240,.4)",marginTop:"20px",maxWidth:"500px",lineHeight:1.7}}>Реальные истории, рассказанные в художественной форме. Имена, детали и названия изменены. Суть — сохранена.</p>
        </div>
      </div>

      <section className="section bg-warm">
        <div className="wrap">
          <div className="grid-2">
            {cases.map((c) => (
              <div key={c.title} className="case-card">
                <div className="case-accent" style={{background:c.accent}}></div>
                <div className="case-body">
                  <span className="tag">{c.tag}</span>
                  <div className="case-title">{c.title}</div>
                  <div className="case-excerpt">{c.excerpt}</div>
                  <div className="case-more">Читать историю →</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

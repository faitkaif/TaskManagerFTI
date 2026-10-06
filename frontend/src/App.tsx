import './App.css'

interface AppConfig {
  title: string
  subtitle: string
  currency: string
}

const config: AppConfig = {
  title: 'Expense Tracker',
  subtitle: 'Учёт личных расходов, категорий трат и контроль бюджета',
  currency: '₽',
}

export default function App() {
  return (
    <div className="tracker-layout">
      <header className="tracker-header">
        <div className="header-badge">Финансы & Бюджет</div>
        <h1 className="header-title">{config.title}</h1>
        <p className="header-subtitle">{config.subtitle}</p>
      </header>

      <main className="tracker-content">
        <section className="summary-cards" aria-label="Сводка бюджета">
          <div className="card stat-card">
            <span className="card-label">Текущий баланс</span>
            <span className="card-value">0 {config.currency}</span>
            <span className="card-hint">Период: Октябрь 2026</span>
          </div>

          <div className="card stat-card income">
            <span className="card-label">Доходы</span>
            <span className="card-value">+0 {config.currency}</span>
            <span className="card-hint">0 операций</span>
          </div>

          <div className="card stat-card expense">
            <span className="card-label">Расходы</span>
            <span className="card-value">-0 {config.currency}</span>
            <span className="card-hint">0 операций</span>
          </div>
        </section>

        <section className="card history-section" aria-labelledby="history-title">
          <div className="history-header">
            <h2 id="history-title" className="section-title">История транзакций</h2>
            <span className="items-counter">Всего записей: 0</span>
          </div>

          <div className="empty-history">
            <div className="empty-icon">📊</div>
            <p className="empty-text">Список расходов пока пуст</p>
            <p className="empty-description">
              Форма добавления операций, выбор категорий (продукты, жильё, транспорт) 
              и фильтрация по датам будут реализованы в следующей лабораторной работе.
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}

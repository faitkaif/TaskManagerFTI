import './App.css'

const appTitle: string = 'Task Tracker'

export default function App() {
  return (
    <main className="app">
      <header className="app-header">
        <h1 className="app-title">{appTitle}</h1>
        <p className="app-description">
          Личные задачи, сроки и прогресс.
        </p>
      </header>
      <section className="app-section" aria-labelledby="items-title">
        <h2 id="items-title" className="section-title">Мои задачи</h2>
        <div className="empty-state">
          <p className="empty-state-text">Здесь появится список ваших задач.</p>
          <span className="empty-state-hint">
            Раздел добавления, фильтрации и управления задачами появится в следующих лабораторных работах.
          </span>
        </div>
      </section>
    </main>
  )
}

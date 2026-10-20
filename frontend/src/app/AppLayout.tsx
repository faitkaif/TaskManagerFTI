import { NavLink, Outlet } from 'react-router'

export function AppLayout() {
  return (
    <div className="tracker-layout app">
      <header className="tracker-header">
        <div className="header-badge">Финансы & Бюджет</div>
        <p className="app-title">Expense Tracker</p>
        <p className="header-subtitle">Учёт личных расходов, категорий трат и контроль бюджета</p>
        <nav aria-label="Основная навигация" className="main-nav">
          <NavLink to="/transactions" end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Операции
          </NavLink>
          <NavLink to="/transactions/new" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Создать
          </NavLink>
        </nav>
      </header>
      <main className="tracker-content">
        <Outlet />
      </main>
    </div>
  )
}

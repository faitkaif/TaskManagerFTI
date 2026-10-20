import { Link } from 'react-router'

export function NewTransactionPage() {
  return (
    <section className="card new-transaction-card">
      <h1>Создание операции</h1>
      <p className="page-subtitle">Добавление новой записи о доходах или расходах</p>

      <div className="empty-history stub-content">
        <div className="empty-icon">📝</div>
        <p className="empty-text">Форма добавления операции находится в разработке</p>
        <p className="empty-description">
          Полноценная форма с вводом суммы, выбором типа операции (доход/расход), назначением
          категории и валидацией будет реализована в следующей лабораторной работе (ЛР 3).
        </p>
      </div>

      <div className="stub-actions">
        <Link to="/transactions" className="btn-secondary">← Вернуться к списку операций</Link>
      </div>
    </section>
  )
}

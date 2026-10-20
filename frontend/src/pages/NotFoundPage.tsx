import { Link } from 'react-router'

export function NotFoundPage() {
  return (
    <section className="card not-found-page">
      <div className="empty-icon">🔍</div>
      <h1>Страница не найдена</h1>
      <p className="empty-description">
        Запрошенный адрес не существует или был перемещён. Проверьте правильность введённого URL в адресной строке.
      </p>
      <div className="stub-actions">
        <Link to="/transactions" className="btn-primary">Перейти к списку операций</Link>
      </div>
    </section>
  )
}

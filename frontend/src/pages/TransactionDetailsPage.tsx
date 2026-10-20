import { Link, useParams } from 'react-router'
import { transactions } from '../data/transactions'

export function TransactionDetailsPage() {
  const { id } = useParams()
  const transaction = transactions.find((item) => item.id === id)

  if (!transaction) {
    return (
      <section className="card transaction-not-found">
        <h1>Операция не найдена</h1>
        <p>Запись с идентификатором <code>{id}</code> отсутствует или была удалена.</p>
        <Link to="/transactions" className="btn-secondary">← К списку операций</Link>
      </section>
    )
  }

  const isIncome = transaction.type === 'income'
  const typeLabel = isIncome ? 'Доход' : 'Расход'
  const formattedAmount = `${isIncome ? '+' : '-'}${transaction.amount.toLocaleString('ru-RU')} ₽`
  const paymentLabels = {
    card: 'Банковская карта',
    cash: 'Наличные',
    transfer: 'Банковский перевод',
  }

  return (
    <section className="card transaction-details-card">
      <div className="details-header">
        <span className={`transaction-type-badge ${transaction.type}`}>{typeLabel}</span>
        <span className="transaction-category-badge">{transaction.category}</span>
        <span className="details-id">ID: {transaction.id}</span>
      </div>

      <h1 className="details-title">{transaction.title}</h1>
      <p className="details-description">{transaction.description}</p>

      <div className="details-grid">
        <div className="details-item">
          <span className="details-label">Сумма операции:</span>
          <span className={`details-value amount ${transaction.type}`}>{formattedAmount}</span>
        </div>
        <div className="details-item">
          <span className="details-label">Тип операции:</span>
          <span className="details-value">{typeLabel}</span>
        </div>
        <div className="details-item">
          <span className="details-label">Категория:</span>
          <span className="details-value">{transaction.category}</span>
        </div>
        <div className="details-item">
          <span className="details-label">Дата проведения:</span>
          <span className="details-value">{transaction.date}</span>
        </div>
        <div className="details-item">
          <span className="details-label">Способ оплаты:</span>
          <span className="details-value">{paymentLabels[transaction.paymentMethod]}</span>
        </div>
      </div>

      <div className="details-actions">
        <Link to="/transactions" className="btn-secondary">← К списку операций</Link>
      </div>
    </section>
  )
}

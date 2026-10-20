import { Link } from 'react-router'
import type { Transaction } from '../types/transaction'

type TransactionCardProps = {
  transaction: Transaction
}

export function TransactionCard({ transaction }: TransactionCardProps) {
  const isIncome = transaction.type === 'income'
  const typeLabel = isIncome ? 'Доход' : 'Расход'
  const formattedAmount = `${isIncome ? '+' : '-'}${transaction.amount.toLocaleString('ru-RU')} ₽`

  return (
    <article className={`transaction-card ${transaction.type}`}>
      <div className="transaction-card-header">
        <span className={`transaction-type-badge ${transaction.type}`}>{typeLabel}</span>
        <span className="transaction-category-badge">{transaction.category}</span>
      </div>
      <h2 className="transaction-card-title">
        <Link to={`/transactions/${transaction.id}`}>{transaction.title}</Link>
      </h2>
      <p className="transaction-card-description">{transaction.description}</p>
      <div className="transaction-card-footer">
        <span className={`transaction-amount ${transaction.type}`}>{formattedAmount}</span>
        <span className="transaction-date">Дата: {transaction.date}</span>
      </div>
    </article>
  )
}

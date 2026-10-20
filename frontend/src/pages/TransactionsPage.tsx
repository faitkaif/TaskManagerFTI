import { Link } from 'react-router'
import { TransactionCard } from '../components/TransactionCard'
import { transactions } from '../data/transactions'

export function TransactionsPage() {
  return (
    <section className="transactions-page">
      <div className="page-header">
        <div>
          <h1>Мои операции</h1>
          <p className="page-subtitle">История доходов и расходов личного бюджета</p>
        </div>
        <Link to="/transactions/new" className="btn-primary">Добавить операцию</Link>
      </div>

      {transactions.length === 0 ? (
        <div className="card empty-state">
          <div className="empty-icon">📊</div>
          <p className="empty-text">Операций пока нет.</p>
          <p className="empty-description">Список транзакций пуст. Добавьте первую запись, чтобы начать учёт.</p>
        </div>
      ) : (
        <div className="task-list transaction-list">
          {transactions.map((transaction) => (
            <TransactionCard key={transaction.id} transaction={transaction} />
          ))}
        </div>
      )}
    </section>
  )
}

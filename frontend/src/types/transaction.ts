export type TransactionType = 'expense' | 'income'
export type PaymentMethod = 'card' | 'cash' | 'transfer'

export type Transaction = {
  id: string
  title: string
  description: string
  amount: number
  type: TransactionType
  category: string
  date: string
  paymentMethod: PaymentMethod
}

import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useTransactionStore = defineStore('transactions', () => {
  const transactions = ref([
    {
      id: crypto.randomUUID(),
      text: 'Sneakers',
      amount: 100,
      type: 'income'
    },
    {
      id: crypto.randomUUID(),
      text: 'Work',
      amount: 200,
      type: 'income'
    },
    {
      id: crypto.randomUUID(),
      text: 'Food',
      amount: -100,
      type: 'expense'
    },
    {
      id: crypto.randomUUID(),
      text: 'Cinema',
      amount: -200,
      type: 'expense'
    },
    {
      id: crypto.randomUUID(),
      text: 'Work',
      amount: 150,
      type: 'income'
    }
  ])

  const total = computed(() =>
    transactions.value.reduce((total, transaction) => total + transaction.amount, 0).toFixed(2)
  )

  const income = computed(() =>
    transactions.value
      .filter((transaction) => transaction.amount > 0)
      .reduce((total, transaction) => total + transaction.amount, 0)
      .toFixed(2)
  )

  const expenses = computed(() =>
    transactions.value
      .filter((transaction) => transaction.amount < 0)
      .reduce((total, transaction) => total + transaction.amount, 0)
      .toFixed(2)
  )

  function addTransaction(transaction) {
    transactions.value.push(transaction)
  }

  function deleteTransaction(id) {
    transactions.value = transactions.value.filter((transaction) => transaction.id !== id)
  }

  return { transactions, total, income, expenses, addTransaction, deleteTransaction }
})

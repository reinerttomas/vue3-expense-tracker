<template>
  <div class="mb-5">
    <h4 class="fs-6 text-secondary text-uppercase">History</h4>
    <ul class="list-group mb-3">
      <li
        class="list-group-item d-flex justify-content-between align-items-center"
        v-for="transaction in transactions"
        :key="transaction.id"
      >
        <p class="my-0">{{ transaction.text }}</p>
        <div>
          <span :class="[transaction.type === 'income' ? 'text-success' : 'text-danger']"
            >{{ transaction.type === 'expense' ? '-' : '' }} ${{
              Math.abs(transaction.amount)
            }}</span
          >
          <a class="text-danger mx-2" href="#" @click="handleDelete(transaction.id)">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-trash-fill"
              viewBox="0 0 16 16"
            >
              <path
                d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"
              ></path>
            </svg>
          </a>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useTransactionStore } from '@/stores/transactions'
import { storeToRefs } from 'pinia'

const transactionStore = useTransactionStore()

const { transactions } = storeToRefs(transactionStore)
const { deleteTransaction } = transactionStore

const handleDelete = (id) => {
  deleteTransaction(id)
}
</script>

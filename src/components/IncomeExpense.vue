<template>
  <div class="card text-center mb-5">
    <div class="row g-0">
      <div class="col-md-6">
        <div class="card-body p-4">
          <div class="d-flex flex-column">
            <h4 class="fs-4 text-uppercase m-1">Income</h4>
            <p class="fs-4 text-success m-0">+ ${{ income }}</p>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="card-body p-4">
          <div class="d-flex flex-column">
            <h4 class="fs-4 text-uppercase m-1">Expense</h4>
            <p class="fs-4 text-danger m-0">- ${{ Math.abs(expenses) }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useTransactionStore } from '@/stores/transactions'
import { storeToRefs } from 'pinia'

const transactionStore = useTransactionStore()

const { income, expenses } = storeToRefs(transactionStore)
</script>

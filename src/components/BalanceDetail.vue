<template>
  <div class="mb-5">
    <h4 class="fs-6 text-secondary text-uppercase mb-0">Your Balance</h4>
    <p class="fs-3">${{ total }}</p>
  </div>
</template>

<script setup>
import { useTransactionStore } from '@/stores/transactions'
import { storeToRefs } from 'pinia'

const transactionStore = useTransactionStore()

const { total } = storeToRefs(transactionStore)
</script>

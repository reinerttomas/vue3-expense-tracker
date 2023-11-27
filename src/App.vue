<template>
  <div class="container">
    <main>
      <div class="py-5">
        <TheHeader />
        <BalanceDetail />
        <IncomeExpense />
        <TransactionList />
        <TransactionAdd />
      </div>
    </main>
  </div>
</template>

<script setup>
import TheHeader from '@/components/TheHeader.vue'
import BalanceDetail from '@/components/BalanceDetail.vue'
import IncomeExpense from '@/components/IncomeExpense.vue'
import TransactionList from '@/components/TransactionList.vue'
import TransactionAdd from '@/components/TransactionAdd.vue'
</script>

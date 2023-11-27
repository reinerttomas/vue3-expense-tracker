<template>
  <div class="mb-4">
    <h4 class="fs-6 text-secondary text-uppercase">Add transaction</h4>

    <form @submit.prevent="handleSubmit">
      <div class="mb-3">
        <label for="text" class="form-label">Text</label>
        <input
          type="text"
          class="form-control"
          id="text"
          placeholder="Your text ..."
          required
          v-model="text"
        />
        <div class="invalid-feedback">Please enter a valid email address for shipping updates.</div>
      </div>
      <div class="mb-3">
        <label for="amount" class="form-label">Amount</label>
        <input
          type="number"
          class="form-control"
          id="amount"
          placeholder="Amount"
          required
          v-model="amount"
        />
        <div class="invalid-feedback">Please enter a valid email address for shipping updates.</div>
      </div>
      <button class="w-100 btn btn-primary btn-lg">Add transaction</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useTransactionStore } from '@/stores/transactions'

const transactionStore = useTransactionStore()

const text = ref('')
const amount = ref(null)

const handleSubmit = () => {
  transactionStore.addTransaction({
    id: crypto.randomUUID(),
    text: text.value,
    amount: amount.value
  })

  text.value = ''
  amount.value = null
}
</script>

<template>
  <q-page class="flex flex-center">
    <div
      class="q-gutter-md"
      style="width:700px; padding: 10px;"
    >
      <q-input
        outlined
        v-model="rfid"
        label="RFID"
      />
      <q-input
        outlined
        v-model="drugname"
        label="Drug Name"
      />
      <q-input
        outlined
        v-model="dosage"
        label="Dosage"
      />
      <q-input
        outlined
        v-model="amount"
        label="Amount"
      />
      <q-input
        outlined
        v-model="organization"
        label="Organization"
      />

      <div class="row">
        <div class="col">
          <p>Manufactured Date:</p>
          <q-date
            v-model="manufacture_date"
            today-btn
          />
        </div>
        <div class="col">
          <p>Expire Date:</p>
          <q-date
            v-model="exprie_date"
            today-btn
          />
        </div>
      </div>
      <q-btn
        color="primary"
        icon="done_outline"
        label="Add Batch"
        v-on:click="addBatch"
      />
      <q-btn
        color="red"
        icon="mail"
        label="Clear"
        v-on:click="clear"
      />
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'AddBatch',
  methods: {
    clear: function () {
      this.rfid = ''
      this.drugname = ''
      this.dosage = ''
      this.amount = ''
      this.organization = ''
      this.manufacture_date = ''
      this.exprie_date = ''
    },
    addBatch: function () {
      this.$axios.post(`/api/addbatch`, {
        rfid: this.rfid,
        drugname: this.drugname,
        dosage: this.dosage,
        amount: this.amount,
        organization: this.organization,
        manufacture_date: this.manufacture_date,
        exprie_date: this.exprie_date
      }).then((resp) => {
        console.log(resp)
        this.$q.notify({
          message: 'Batch added successfully',
          color: 'green'
        })
      }).catch(err => {
        console.log(err)
        this.$q.notify({
          message: 'Failed to add batch',
          color: 'red'
        })
      })
    }
  },
  data () {
    return {
      rfid: '',
      drugname: '',
      dosage: '',
      amount: '',
      organization: '',
      manufacture_date: '',
      exprie_date: ''
    }
  }
}
</script>

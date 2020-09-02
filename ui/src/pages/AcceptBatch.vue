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
      <q-select v-model="organization" :options="options" label="To Company" />

      <q-btn
        color="primary"
        icon="fas fa-check"
        label="Accept Batch"
        v-on:click="transportBatch"
      />
      <q-btn
        color="red"
        icon="clear"
        label="Cancel"
        v-on:click="clear"
      />
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'TransportBatch',
  data () {
    return {
      options: ['tople', 'hcl', 'aurora', 'axia'],
      organization: '',
      rfid: ''
    }
  },
  methods: {
    clear: function () {
      this.organization = null
      this.rfid = null
    },
    transportBatch: function () {
      this.$axios.post(`/api/deliverBatch`, {
        rfid: this.rfid,
        organization: this.organization
      }).then((resp) => {
        console.log(resp)
        this.$q.notify({
          message: 'Batch accepted',
          color: 'green'
        })
      }).catch(err => {
        console.log(err)
        this.$q.notify({
          message: 'Failed to accept batch',
          color: 'red'
        })
      })
    }
  }
}
</script>

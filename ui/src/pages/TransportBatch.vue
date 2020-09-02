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
        icon="fas fa-dolly-flatbed"
        label="Transport"
        v-on:click="transportBatch"
      />
      <q-btn
        color="red"
        icon="clear"
        label="Clear"
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
      options: ['kongez', 'hcl', 'medics', 'blc'],
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
      this.$axios.post(`/api/transportBatch`, {
        rfid: this.rfid,
        organization: this.organization
      }).then((resp) => {
        console.log(resp)
        this.$q.notify({
          message: 'Batch added to transportation queue successfully',
          color: 'green'
        })
      }).catch(err => {
        console.log(err)
        this.$q.notify({
          message: 'Failed to add batch to transportation queue',
          color: 'red'
        })
      })
    }
  }
}
</script>

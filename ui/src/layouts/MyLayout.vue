<template>
  <q-layout view="hHh lpR fFf">
    <q-header
      elevated
      class="bg-primary text-white"
    >
      <q-toolbar>
        <q-btn
          dense
          flat
          round
          icon="menu"
          @click="drawer = !drawer"
        />

        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg" />
          </q-avatar> BlockNCK
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="drawer"
      show-if-above
      :width="300"
      :breakpoint="500"
      bordered
      content-class="bg-grey-3"
    >
      <q-scroll-area class="fit">
        <q-list
          v-for="(menuItem, index) in menuList"
          :key="index"
        >

          <q-item
            clickable
            :active="menuItem.label === 'Outbox'"
            v-ripple
            :to='menuItem.to'
          >
            <q-item-section avatar>
              <q-icon :name="menuItem.icon" />
            </q-item-section>
            <q-item-section>
              {{ menuItem.label }}
            </q-item-section>
          </q-item>

          <q-separator v-if="menuItem.separator" />

        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
const menuList = [
  {
    icon: 'dashboard',
    label: 'Dashboard',
    separator: true,
    to: '/'
  },
  {
    icon: 'library_add',
    label: 'Add Batch',
    separator: false,
    to: '/addbatch'
  },
  {
    icon: 'fas fa-truck',
    label: 'Transfer',
    separator: true,
    to: '/transportbatch'
  },
  {
    icon: 'fas fa-clipboard-check',
    label: 'Accept Batches',
    separator: false,
    to: '/acceptbatch'
  },
  {
    icon: 'fas fa-truck-loading',
    label: 'Deliver',
    separator: true,
    to: '/deliverbatch'
  },
  {
    icon: 'assignment',
    label: 'View History',
    separator: true,
    to: '/viewbatch'
  },
  {
    icon: 'help',
    iconColor: 'primary',
    label: 'Help',
    separator: false,
    to: '/help'
  }
]

export default {
  data () {
    return {
      drawer: false,
      menuList
    }
  }
}
</script>

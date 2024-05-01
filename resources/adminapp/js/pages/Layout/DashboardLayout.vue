<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <event-hub></event-hub>
    <side-bar :sidebarLinks="sidebarLinks">
      <mobile-menu slot="content"></mobile-menu>
    </side-bar>

    <div class="main-panel">
      <top-navbar></top-navbar>
      <div class="content">
        <dashboard-content></dashboard-content>
      </div>
    </div>
  </div>
</template>

<script>
import DashboardContent from './Content.vue'
import TopNavbar from './TopNavbar.vue'
import MobileMenu from './MobileMenu.vue'

export default {
  components: {
    DashboardContent,
    TopNavbar,
    MobileMenu
  },
  data() {
    return {
      sidebarLinks: [
        {
          title: 'pages.balance.title',
          icon: 'account_balance',
          path: { name: 'balance' },
          gate: 'transaction_access',
        },
        {
          title: 'pages.income.title',
          icon: 'trending_up',
          path: { name: 'incomes.index' },
          gate: 'transaction_access',
        },
        {
          title: 'pages.expense.title',
          icon: 'trending_down',
          path: { name: 'expenses.index' },
          gate: 'transaction_access',
        },
        {
          title: 'pages.check.title',
          icon: 'receipt_long',
          path: { name: 'checks.index' },
          gate: 'transaction_access',
        },
        {
          title: 'pages.check.list',
          icon: 'check_box',
          path: { name: 'check.list' },
          gate: 'check_list',
        },
      ]
    }
  }
}
</script>

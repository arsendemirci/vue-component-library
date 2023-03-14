<template>
  <div class="app">
    <Sidebar />
    <router-view />
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
export default {
  components: {
    Sidebar,
  },
};
</script>

<style scoped lang="scss">
.app {
  display: flex;

  main {
    flex: 1 1 0;
    padding: 2rem;

    @media (max-width: 768px) {
      padding-left: 6rem;
    }
  }
}
</style>

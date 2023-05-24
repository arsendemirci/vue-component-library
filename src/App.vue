<template>
  <div class="app">
      <Sidebar />

    <div class="content">
        <header>
          <slot name="header"></slot>
        </header>
        <router-view />
     </div>
  </div>
</template>

<script>
import Sidebar from "@/components/brand/Sidebar.vue";
export default {
  components: {
    Sidebar,
  },
};
</script>

<style scoped lang="scss">

  .app {
    display: flex;
    flex-direction: row;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    background-color: #f5f5f5;
  main {
    flex: 1;
    @media (max-width: 768px) {
      padding-left: 6rem;
    }
  }
  .content{
    flex: 1;
    padding: 1rem;
    overflow-y: auto;
    background-color: #f5f5f5;
    transition: .2s ease-out;
  }
}
</style>

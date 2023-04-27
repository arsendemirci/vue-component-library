<template>
  <div class="app">
      <div class="sidebar">
      <Sidebar />
        </div>
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
.content {
  grid-area: content;
  padding: 20px;
  margin-right: 60px;
}
.sidebar {
  grid-area: sidebar;
}

  .app {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: 1fr 3fr;
    grid-template-areas:
    "sidebar content"
  }
  @media (max-width: 500px) {
    .app {
      grid-template-columns: 2fr 2fr;
      grid-template-areas:
      "content"
      "sidebar"
    }
  }

  /*.app {
  display: grid;

  main {
    flex: 1 1 0;
    padding: 2rem;

    @media (max-width: 768px) {
      padding-left: 6rem;
    }
  }
  header {
    h1,
    h3 {
      text-shadow: 1px 1px 3px rgb(255, 255, 255);
    }
    h1 {
      margin: 50px;
    }
    h3 {
      margin: 0;
    }
  }
} */
</style>

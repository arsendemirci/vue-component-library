<template>
 <aside :class="`${is_expanded && 'is_expanded'}`">
   <div class="logo">
     <img alt="Vue logo" src="@/assets/logo.svg"/>
   </div>
  <div class="menu-toggle-wrap">
    <button class="menu-toggle" @click="toggleMenu">
       <span class="material-icons">menu_open</span>
    </button>
  </div>

   <h3>Menu</h3>
   <div class="menu">
     <router-link to="/">
       <span class="material-icons">home</span>
       <span class="text">Home</span >
     </router-link>
     <router-link to="/about">
       <span class="material-icons">assignment</span>
       <span class="text">Forms</span >
     </router-link>
   </div>
 </aside>
</template>

<script setup>
import { ref } from 'vue'
const is_expanded = ref(false);

const toggleMenu = () => {
  is_expanded.value = !is_expanded.value;
}

</script>

<style scoped lang="scss">

aside{
  display: flex;
  flex-direction: column;
  width: calc(2rem + 32px);
  overflow: hidden;
  min-height: 100vh;
  padding: 1rem;
  background-color: var(--dark);
  color: var(--light);
  transition: .2s ease-out;

  .logo {
    margin-bottom: 1rem;

    img {
      width: 2rem;
    }
  }

  .menu-toggle-wrap{
    display: flex;
    justify-content: flex-end;
    margin-bottom: 1rem;

    position: relative;
    top: 0;
    transition: .2s ease-out;

    .menu-toggle{
      transition: .2s ease-out;
      transform: rotate(-180deg);

      .material-icons{
        font-size: 2rem;
        color: var(--light);
        transition: .2s ease-out;
      }
      &:hover{
        .material-icons{
          color: var(--primary);
        }
      }
    }
  }

  &.is_expanded{
   // width: var(--sidebar-width);  I couldn't get this to work
    width: 300px;

    .menu-toggle-wrap{
      top: -3rem;
      .menu-toggle{
        transform: rotate(360deg);
      }
    }
  }

  @media (max-width: 768px) {
     position: fixed;
     z-index: 999;
  }
  button{
    cursor: pointer;
    outline: none;
    appearance: none;
    border: none;
    background:none;
  }
}

</style>

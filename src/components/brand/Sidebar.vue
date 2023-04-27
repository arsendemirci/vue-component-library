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
     <router-link class="button" to="/">
       <span class="material-icons">home</span>
       <span class="text">Introduction</span>
     </router-link>
     <router-link class="button" to="/" @click="toggleSidebar">
       <span class="material-icons">view_quilt</span>
       <span class="text">Components</span>
       <span class="material-icons sidebar-toggle-btn" :class="{ 'sub-menu-clicked': isSidebarOpen }">arrow_drop_down</span>
     </router-link>
     <ul class="sub-menu" :class="{ 'open-sub-menu': isSidebarOpen }">
       <li class="sub-menu-header">FORM INPUTS</li>
       <li class="sub-menu-list">
         <router-link class="sub-menu-item" to="/buttons">File inputs</router-link>
         <router-link class="sub-menu-item" to="/forms">Forms</router-link>
         <router-link class="sub-menu-item" to="/selects">Selects</router-link>
       </li>
       <hr class="sub-menu-divider" aria-orientation="horizontal" role="separator" />
       <li class="sub-menu-header">NAVIGATION</li>
       <li class="sub-menu-list">
         <router-link class="sub-menu-item" to="/buttons">Footers</router-link>
         <router-link class="sub-menu-item" to="/forms">Tabs</router-link>
         <router-link class="sub-menu-item" to="/selects">Pagination</router-link>
       </li>
     </ul>


     <router-link class="button" to="/about">
       <span class="material-icons">assignment</span>
       <span class="text">Installation</span >
     </router-link>
   </div>
 </aside>
</template>

<script setup>
import { ref } from 'vue'
const is_expanded = ref(localStorage.getItem('is_expanded') === 'true');
const toggleMenu = () => {
  is_expanded.value = !is_expanded.value;
  localStorage.setItem('is_expanded', is_expanded.value);
}
const isSidebarOpen = ref(false);
const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
}


</script>

<style scoped lang="scss">

aside{
  position: fixed;
  display: flex;
  flex-direction: column;
  width: calc(2rem + 32px);
  overflow: hidden;
  min-height: 100vh;
  padding: 1rem;
  background-color: $dark-color;
  color: $light-color;
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
        color: $light-color;
        transition: .2s ease-out;
      }
      &:hover{
        .material-icons{
          color: $primary-color
        }
      }
    }
  }

  h3, .menu .text {
    opacity: 0;
    transition: .3s ease-out;
  }

  h3{
    color: $gray-color;
    font-size: .8rem;
    margin-bottom: .5rem;
    text-transform: uppercase;
  }

  .menu {
    margin: 0 -1rem;

    .button{
      position: relative;
      display:flex;
      align-items: center;
      text-decoration: none;
      padding: .5rem 1rem;
      transition: .2s ease-out;

      .material-icons{
        font-size: 2rem;
        color: $light-color;
        transition: .2s ease-out;
      }

      .text {
        color: $light-color;
        transition: .2s ease-out;
      }

      &:hover, &.router-link-exact-active{
        background-color: $dark-alt-color;

        .material-icons,.text {
          color: $primary-color;
        }
      }

      &.router-link-exact-active{
        border-right: 5px solid $primary-color;
      }
    }
    .sub-menu{
    display: none;
    }
  }

  &.is_expanded{
    width: $sidebar-width;
    .menu-toggle-wrap{
      top: -3rem;
      .menu-toggle{
        transform: rotate(360deg);
      }
    }

    h3, .menu .text {
      opacity: 1;
    }

    .button{
      .material-icons{
        margin-right: .5rem;

      }
    }
    .sidebar-toggle-btn {
      position: absolute;
      right: 0;
      background-color: transparent;
      border: none;
      outline: none;
      cursor: pointer;
      transition: .2s ease-out;

    }
    .sub-menu{
      transition: .2s ease-in-out;
      display: block;
      padding: 14px 6px 14px 58px;
      background-color:#25233e;
      .sub-menu-header{
        overflow: hidden;
        white-space: nowrap;
        font-size: .85rem;
        font-weight: bold;
      }
      .sub-menu-list{
        display: flex;
        flex-direction: column;
      }
      .sub-menu-item{
        color: $light-color;
        font-size: .80rem;
        padding: 5px 0;
        text-decoration: none;
      }
      .sub-menu-divider{
        opacity: $dark-alt-color;
        transition: inherit;
        border-width: thin 0 0 0;
        border-radius: 10px;
        margin: 8px 0 8px 0;

      }
      .sub-menu-item:hover{
        color:$primary-color;
      }
    }
    .open-sub-menu{
      visibility: hidden;
      height: 0;
      padding: 0;
      transition: all 0.21s cubic-bezier(0.5, 0, 0, 1.25);
      transform: scale(0) translateY(0);
      pointer-events: none;

    }
    .sub-menu-clicked{
      transition: all 0.21s cubic-bezier(0.5, 0, 0, 1.25);
      transform: rotate(180deg);
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

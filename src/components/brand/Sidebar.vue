<template>
 <aside :class="`${is_expanded && 'is_expanded'}`">
   <div class="logo">
     <img alt="Vue logo" src="@/assets/logo.svg"/>
   </div>
  <div class="menu-toggle-wrap">
    <button class="menu-toggle" @click="toggleMenu">
      <fa class="fa-icons" icon="arrow-right-to-bracket" />
    </button>
  </div>

   <h3>Menu</h3>
   <div class="menu">
     <router-link class="button" to="/">
       <fa class="fa-icons" icon="house" />
       <span class="text">Introduction</span>
     </router-link>
     <router-link class="button" to="/components" @click="toggleSidebar">
       <fa class="fa-icons" icon="bandage" />
       <span class="text">Components</span>
       <fa class="fa-icons sidebar-toggle-btn" :class="{ 'sub-menu-clicked': isSidebarOpen }" icon="arrow-up-short-wide" />
     </router-link>
     <ul class="sub-menu" :class="{ 'open-sub-menu': isSidebarOpen }">
       
      <li class="sub-menu-header">FORM INPUTS</li>
       
       <li class="sub-menu-list">
         <router-link class="sub-menu-item" to="/buttons">File inputs</router-link>
         <router-link class="sub-menu-item" to="/forms">Forms</router-link>
         <router-link class="sub-menu-item" to="/selects">Selects</router-link>
         <router-link class="sub-menu-item" to="/buttons">Buttons</router-link>
       </li>

       <hr class="sub-menu-divider" aria-orientation="horizontal" role="separator" />

       <li class="sub-menu-header">NAVIGATION</li>
       <li class="sub-menu-list">
         <router-link class="sub-menu-item" to="/buttons">Footers</router-link>
         <router-link class="sub-menu-item" to="/forms">Tabs</router-link>
         <router-link class="sub-menu-item" to="/selects">Pagination</router-link>
         <router-link class="sub-menu-item" to="/breadcrumbs">Breadcrumbs</router-link>
       </li>

       <hr class="sub-menu-divider" aria-orientation="horizontal" role="separator" />

       <li class="sub-menu-header">MODAL</li>
       <li class="sub-menu-list">
         <router-link class="sub-menu-item" to="/dialog">Dialog</router-link>
       </li>
     </ul>


     <router-link class="button" to="/about">
       <fa class="fa-icons" icon="download" />
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
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  width: calc(2rem + 32px);
  overflow: hidden;
  min-height: 100vh;
  padding: 1rem;
  background-color: palette-color-level(primary-dark, 100);
  color: palette-color-level(primary-light, 100);
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
      transform: rotate(-360deg);

      .fa-icons{
        font-size:  palette-font-size-level(9);
        color: palette-color-level(primary-light, 100);
        transition: .2s ease-out;
      }
      &:hover{
        .fa-icons{
          color: palette-color-level(primary, 100);
        }
      }
    }
  }

  h3, .menu .text {
    opacity: 0;
    transition: .3s ease-out;
  }

  h3{
    color: palette-color-level(grey, 30);
    font-size:  palette-font-size-level(3);
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

      .fa-icons{
        font-size:  palette-font-size-level(8);
        color: palette-color-level(primary-light, 100);
        transition: .2s ease-out;
      }

      .text {
        color: palette-color-level(primary-light, 100);
        transition: .2s ease-out;
      }

      &:hover, &.router-link-exact-active{
        background-color: palette-color-level(primary-dark-alt, 100);

        .fa-icons,.text {
          color: palette-color-level(primary, 100);
        }
      }

      &.router-link-exact-active{
        border-right: 5px solid palette-color-level(primary, 100);
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
        transform: rotate(180deg);
      }
    }

    h3, .menu .text {
      opacity: 1;
    }

    .button{
      .fa-icons{
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
      background-color:palette-color-level(grey, 40);
      .sub-menu-header{
        overflow: hidden;
        white-space: nowrap;
        font-size:  palette-font-size-level(4);
        font-weight: palette-font-weight-level(5);
      }
      .sub-menu-list{
        display: flex;
        flex-direction: column;
      }
      .sub-menu-item{
        color: palette-color-level(primary-light, 100);
        font-size:  palette-font-size-level(3);
        padding: 5px 0;
        text-decoration: none;
      }
      .sub-menu-divider{
        opacity: palette-color-level(primary-dark-alt, 100);
        transition: inherit;
        border-width: thin 0 0 0;
        border-radius: palette-radius-level(5);
        margin: 8px 0 8px 0;

      }
      .sub-menu-item:hover{
        color: palette-color-level(primary, 100);
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
     z-index: 1;
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

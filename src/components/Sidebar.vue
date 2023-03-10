<template>
 <aside :class="`${is_expanded && 'is_expanded'}`">
   <div class="logo">
     <img alt="Vue logo" src="@/assets/logo.svg"/>
   </div>
  <div class="menu-toggle-wrap">
    <button class="menu-toggle" @click="toggleMenu">
       <span class="material-icons">keyboard_double_arrow_right</span>
    </button>
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

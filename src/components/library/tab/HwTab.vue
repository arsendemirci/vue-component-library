<template>
  <div class="tabs" :class="{ verticalTabParent: vertical}">
    <div class="tab-container">
      <div class="left-arrow" v-if="scrollable && !vertical" @click="slideTabs('left')">
        <fa class="fa-icons arrow" icon="chevron-left" />
      </div>
      <!-- tabs -->
      <div class="tabs-header" :class="{ scrollable: scrollable, verticalTab: vertical }" ref="tabsRef">
      <div class="tab"
           v-for="(tab, index) in tabs" :key="index"
           :class="{active: tab.value === activeTab, disabled: tab.disabled, hiddenScroll: !scrollable, verticalTabWidth: vertical}"
            @click="clickHandler(tab)"
            @click.capture="activeTabHandler(tab|| props.tabs[0].value )"
      >

        <fa class="fa-icons" v-if="tab.icon" :icon="tab.icon" />
        <span>{{ tab.content }}</span>
      </div>
     </div>
      <div class="right-arrow active" v-if="scrollable && !vertical" @click="slideTabs('right')">
        <fa class="fa-icons arrow" icon="chevron-right" />
      </div>
    </div>

    <!-- content -->
    <div class="tabs-content">
      <slot name="content" :active="activeTab"/>
    </div>


  </div>
</template>

<script setup>
import {onMounted, ref} from 'vue'
const props = defineProps({
   tabs:{ type: Array, default: [], required: true },
   active:{ type: String, default: ''},
   scrollable:{ type: Boolean, default: false},
   vertical:{ type: Boolean, default: false},

})
const emit = defineEmits(['activeTab'])
// if active tab is not defined, set first tab as active
const activeTab = ref(props.active || props.tabs[0].value)
const tabsRef = ref(null);

// watch active tab
const clickHandler = tab =>{
  if(tab.disabled) return;
  activeTab.value = tab.value
}

const manageIcons = () => {
  const tabs = tabsRef.value;
  const leftArrow = tabs.previousElementSibling;
  const rightArrow = tabs.nextElementSibling;
  // when scroll to start disappear left arrow
  if(tabs.scrollLeft === 0){
    leftArrow.classList.remove('active');
  }else{
    leftArrow.classList.add('active');
  }
  // when scroll to end disappear right arrow
  let maxScrollValue = tabs.scrollWidth - tabs.clientWidth -1;
  if(tabs.scrollLeft >= maxScrollValue){
    rightArrow.classList.remove('active');
  }else{
    rightArrow.classList.add('active');
  }
}

// manuel scroll with arrow
const slideTabs = direction => {
  const tabs = tabsRef.value;
  if(direction === 'left'){
    tabs.scrollLeft -= 120;
    manageIcons();
  }else{
    tabs.scrollLeft += 120;
    manageIcons();
  }
}

// return active
const activeTabHandler = tab =>{
  if(!tab) tab = activeTab.value;
  emit('activeTab',tab.value || tab);
}
onMounted(()=>{
  activeTabHandler();
})


</script>

<style scoped lang="scss">
.tabs{
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: 0.3s box-shadow ease;
  &:hover { box-shadow: 0 2px 3px rgba(0, 0, 0, 0.23), 0 1px 1px rgba(0, 0, 0, 0.19); }
  &.verticalTabParent{
    display: flex;
    .tabs-content{
      flex: 1;
    }
  }
  .tab-container{
    position: relative;
  .tabs-header{
    display: flex;

    .tab{
      flex: 1;
      @include flex-display(flex, center, center);
      gap:  palette-space-level(10);
      height:  palette-space-level(50);
      background-color:palette-color-level(white, 100);
      cursor: pointer;
      border-left: 1px solid palette-color-level(primary-light, 100);
      border-bottom: 2px solid palette-color-level(primary-light, 100);
      transition: all .2s ease-in-out;
      padding:  palette-space-level(10);
      user-select: none;
      white-space: nowrap;
      &:hover{
        background-color:  palette-color-level(primary-light, 100);
        transition: all .2s ease-in-out;
        .fa-icons{
          transition: all .2s ease-in-out;
        }
      }
      &.active{
        background-color:  palette-color-level(primary-light, 100);
        border-bottom: 1px solid palette-color-level(primary, 100);
        color: palette-color-level(primary, 100);
        .fa-icons{
          color: palette-color-level(primary, 100);
        }
      }
      &.hiddenScroll{
        overflow: hidden;
      }
      &.disabled{
        opacity: .5;
        cursor: not-allowed;
        border-bottom: 2px solid palette-color-level(primary-light, 100);
        &:hover{
         opacity: .5;
         color: palette-color-level(black, 100);
         background-color: palette-color-level(white, 100);
          .fa-icons{
            color: palette-color-level(black, 100);
          }
        }
      }

      &.verticalTabWidth{
        padding:palette-space-level(20) palette-space-level(30);
      }
    }

    &.scrollable{
      overflow-x: scroll;
      // for all browser
      -ms-overflow-style: none;
      scrollbar-width: none;
      scroll-behavior: smooth;
    }
    &.scrollable::-webkit-scrollbar{
      display: none;
    }
    &.verticalScrollable{
      overflow-y: scroll;
      // for all browser
      -ms-overflow-style: none;
      scrollbar-width: none;
      scroll-behavior: smooth;
    }
    &.verticalScrollable::-webkit-scrollbar{
      display: none;
    }

    &.verticalTab{
      display: flex;
      flex-direction: column;
      .tab{
        border-left: 2px solid palette-color-level(primary-light, 100);
        border-bottom: 1px solid palette-color-level(primary-light, 100);
        &.active{
          border-left: 2px solid palette-color-level(primary, 100);
          border-bottom: 1px solid palette-color-level(primary, 100);
        }
      }
    }
  }

    .arrow{
      height:palette-space-level(20);
      width: palette-space-level(20);
      padding: palette-space-level(10);
      cursor: pointer;
    }
    .left-arrow,
    .right-arrow{
      position: absolute;
      top: 0;
      height: 100%;
      width: palette-space-level(60);
      @include flex-display(none, center, center);
      background-color: palette-color-level(white, 100);
      padding: 0 palette-space-level(10);
      transition: all .3s ease-in-out;
      &:hover{
        background-color: palette-color-level(primary-light, 100);
        transition: all .3s ease-in-out;
        .fa-icons{
          color: palette-color-level(primary, 100);
          transition: all .3s ease-in-out;
        }
      }
    }
    .right-arrow{
      right: 0;
      background: linear-gradient(to left, palette-color-level(white, 100) 50%, transparent);
      justify-content: flex-end;
    }
    .left-arrow{
      background: linear-gradient(to right, palette-color-level(white, 100) 50%, transparent);
    }
    .right-arrow.active,
    .left-arrow.active{
      display: flex;
    }
  }
  .tabs-content{
    background-color:palette-color-level(white, 100);
    padding: palette-space-level(40);
  }
}
</style>

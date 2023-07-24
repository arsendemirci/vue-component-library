<template lang="">
  <div class="view-container">
    <div class="view-head">
      <header>
        <div class="header-content">
          <TransitionGroup name="buttons">
            <div>
              <button
                v-if="state.toggle && $slots.template"
                type="button"
                @click="state.itemToggle = true"
                :class="{ activeItem: state.itemToggle }"
              >
                Template
              </button>
              <button
                v-if="state.toggle && $slots.script"
                type="button"
                @click="state.itemToggle = false"
                :class="{ activeItem: !state.itemToggle }"
              >
                Script
              </button>
              
            </div>
            <div class="center-item"></div>
            <button v-if="state.toggle" type="button" @click="copyClipBoard">
              <Transition name="icon" mode="out-in">
                <fa v-if="!state.check" :icon="['fas', 'copy']" />
                <fa v-else :icon="['fas', 'check']" />
              </Transition>
            </button>
          </TransitionGroup>
          <button type="button" @click="toggleWindow">
            <Transition name="icon" mode="out-in">
              <fa v-if="!state.toggle" :icon="['fas', 'code']" />
              <fa v-else :icon="['fas', 'chevron-up']" />
            </Transition>
          </button>
        </div>
      </header>
    </div>
    <div class="view-body">
      <Transition name="window" mode="out-in">
        <div class="view-window" v-if="state.toggle">
          <Transition name="item" mode="out-in">
            <div class="view-window-item" v-if="state.itemToggle">
              <div class="card-pre">
                <slot name="template"></slot>
              </div>
            </div>
            <div class="view-window-item" v-else>
              <div class="card-pre">
                <slot name="script"></slot>
              </div>
            </div>
          </Transition>
        </div>
      </Transition>
      <div class="view-content">
        <slot name="component"></slot>
      </div>
    </div>
  </div>
</template>
<script setup>
import { reactive, defineComponent, defineProps } from "vue";
import HwBreadcrumbs from "@lib/breadcrumbs/HwBreadcrumbs.vue";

defineComponent({
  components: { HwBreadcrumbs },
});

const props = defineProps({
  items: {
    type: Array,
    required: true,
  }
});

const state = reactive({
  toggle: false,
  itemToggle: true,
  check: false,
});

function toggleWindow() {
  state.toggle = !state.toggle;
}
function copyClipBoard(e) {
  let thisEl = e.target.closest('.view-container');
  let copyText = thisEl.getElementsByClassName("language-html")[0];
  let textArea = document.createElement("textarea");
  textArea.value = copyText.textContent;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("Copy");
  textArea.remove();
  state.check = true;
  setTimeout(() => (state.check = false), 2000);
}
</script>
<style scoped lang="scss">
.v-enter-active,
.v-leave-active {
  transition: all 0.5s;
  opacity: 1;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.item-enter-active {
  animation: item-rotate-in 0.3s ease-out forwards;
}

.item-leave-active {
  animation: item-rotate-out 0.3s ease-out forwards;
}

@keyframes item-rotate-in {
  from {
    transform: translateX(-1000px);
    opacity: 0;
  }

  to {
    transform: translateX(0px);
    opacity: 1;
  }
}

@keyframes item-rotate-out {
  from {
    transform: translateX(0px);
    opacity: 1;
  }

  to {
    transform: translateX(1000px);
    opacity: 0;
  }
}

.window-enter-active {
  animation: window-rotate-in 0.3s ease-in-out;
}

.window-leave-active {
  animation: window-rotate-out 0.3s ease-in-out;
}

@keyframes window-rotate-in {
  from {
    max-height: 0px;
    opacity: 0;
  }

  to {
    max-height: 500px;
    opacity: 1;
  }
}

@keyframes window-rotate-out {
  from {
    max-height: 500px;
    opacity: 1;
  }

  to {
    max-height: 0px;
    opacity: 0;
  }
}

.icon-enter-active {
  animation: icon-rotate-in 0.5s ease-out forwards;
}

.icon-leave-active {
  animation: icon-rotate-out 0.5s ease-out forwards;
}

@keyframes icon-rotate-in {
  from {
    transform: translateY(-10px);
    opacity: 0;
  }

  to {
    transform: translateY(0px);
    opacity: 1;
  }
}

@keyframes icon-rotate-out {
  from {
    transform: translateY(0px);
    opacity: 1;
  }

  to {
    transform: translateY(10px);
    opacity: 0;
  }
}

.view-container {
  border-radius: 4px;
  border-width: 0.8px;
  box-shadow: none;
  display: block;
  border-color: rgba(0, 0, 0, 0.12);
  border-style: solid;
  overflow: hidden !important;

  .view-head {
    min-height: 44px;

    header {
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      justify-content: space-between;
      width: min(100%, 100%);
      border-color: rgba(0, 0, 0, 0.12);
      border-width: 0.8px;
      border-style: solid;
      border-radius: 0;
      padding-right: 4px !important;
      padding-left: 4px !important;
      background-color: #f5f5f5 !important;
      color: #000 !important;

      .header-content {
        height: 44px;
        align-items: center;
        display: flex;
        flex: 0 0 auto;
        position: relative;
        transition: inherit;
        width: 100%;

        button {
          background: transparent;
          color: inherit;
          font-size: 12px;
          min-width: 50px;
          height: 28px;
          padding: 0 12px;
          align-items: center;
          border-radius: 4px;
          display: inline-grid;
          grid-template-areas: "prepend content append";
          grid-template-columns: max-content auto max-content;
          font-weight: 500;
          justify-content: center;
          letter-spacing: 0.0892857143em;
          line-height: normal;
          max-width: 100%;
          outline: none;
          position: relative;
          text-decoration: none;
          text-indent: 0.0892857143em;
          transition-property: box-shadow, transform, opacity, background;
          transition-duration: 0.28s;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          user-select: none;
          vertical-align: middle;
          flex-shrink: 0;
          border-style: solid;
          border-width: 0;
          cursor: pointer;

          &:hover {
            background: #e1e1e1;
          }
        }

        .activeItem {
          background: #b0b0b0;
          font-weight: 500;
        }

        .center-item {
          flex-grow: 1 !important;
        }
      }
    }
  }

  .view-body {
    display: flex;
    flex-direction: column;

    .view-window {
      line-height: 1.2;
      background-color: #1e293b;
      white-space: pre-wrap;
      color: #f1f5f9;
      max-height: 500px;
    }

    .view-content {
      padding: 8px !important;
      background-color: white;
    }
  }
}
.card-pre {
  margin-bottom: 20px;

  pre {
    line-height: 1.2;
    background-color: palette-color-level(primary-dark, 100);
    border-radius: palette-radius-level(3);
    white-space: pre-wrap;
    overflow: auto;
    color: palette-color-level(primary-light, 100);
  }

  code {
    display: inline;
    padding: 0;
    margin: 0;
    overflow: visible;
    word-wrap: normal;
    background-color: transparent;
    border: 0;
  }
}
</style>

<template>
  <div
      class="select-wrapper"
      :class="{ open: state.openList }"
      @click="onWrapperClick"
      tabindex="-1"
      @blur="onEscape"
      :id="state.wrapperId"
  >
    <div class="current" @click="onWrapperClick">
      <span
          :class="{ 'is-selected': !!state.selectedOption }"
          @click="onWrapperClick"
      >{{ selectedText }}</span
      ><i @click.stop="onClear" class="clear" v-if="state.selectedOption"
    >&times;</i
    >
    </div>
    <div class="list-wrapper" :class="{ 'show-up': state.openAbove }">
      <div v-if="props.search" class="search">
        <input
            @input="onSearchInput"
            type="text"
            :id="state.searchId"
            placeholder="Search"
            @blur="onEscape"
        />
      </div>
      <ul class="list" :class="{ 'search-list': props.search }">
        <li
            v-for="(opt, i) in optionsComp"
            :class="{ selected: isSelected(opt) }"
            :key="i + 1"
            :id="'ag__opt' + (i + 1)"
            class="option"
            @click.stop="
            () => {
              onSelectOption(opt);
            }
          "
        >
          <slot name="option" v-bind="opt">{{ opt["text"] }}</slot>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import {
  reactive,
  computed,
  defineProps,
  defineEmits,
  watch,
  onMounted,
} from "vue";
const props = defineProps({
  options: {
    type: Array,
    required: true,
  },
  placeholder: {
    type: String,
    default: "",
  },
  readValue: String,
  readText: String,
  search: Boolean,
  modelValue: [String, Number, Object],
});
const emit = defineEmits(["update:modelValue"]);
const searchId = "search_" + Math.floor(Math.random() * 100);
const wrapperId = "wrapper_" + Math.floor(Math.random() * 100);

onMounted(() => {
  //select list is hidden with opacity and it renders no matter state.openList is, so we need to set the position when mounted aswell.
  setListPosition();
});
const state = reactive({
  selectedOption: null,
  openList: false,
  immediateRan: false,
  searchVal: "",
  searchId: searchId,
  wrapperId: wrapperId,
  openAbove: false,
  isPrimitive: computed(() => {
    return (
        props.options &&
        props.options[0] &&
        !(
            typeof props.options[0] == "object" ||
            typeof props.options[0] == "function"
        )
    );
  }),
});
const selectedText = computed(() => {
  return state.selectedOption ? state.selectedOption.text : props.placeholder;
});
const optionsComp = computed(() => {
  let arr = props.options;
  if (arr.length) {
    arr = arr.map((item) => {
      return {
        value: state.isPrimitive ? item : item[props.readValue],
        text: state.isPrimitive ? item : item[props.readText],
      };
    });
    if (props.search && state.searchVal) {
      return arr.filter((item) =>
          item.text
              .toLocaleLowerCase("tr-TR")
              .includes(state.searchVal.toLocaleLowerCase("tr-TR"))
      );
    } else {
      return arr;
    }
  } else {
    return [];
  }
});
const modelPrimitive = computed(() => {
  return !(
      typeof props.modelValue == "object" || typeof props.modelValue == "function"
  );
});
function onSelectOption(opt) {
  state.selectedOption = { value: opt.value, text: opt.text };
  emitModel();
}
const onEscape = (e) => {
  if (
      !(
          e.relatedTarget &&
          (e.relatedTarget.id == state.searchId ||
              e.relatedTarget.id == state.wrapperId)
      )
  ) {
    state.openList = false;
  }
};
function isSelected(opt) {
  return state.selectedOption
      ? state.selectedOption.value == (state.isPrimitive ? opt : opt.value)
      : false;
}
const onWrapperClick = (e) => {
  if (e.target !== e.currentTarget) return;
  else {
    state.openList = !state.openList;
    if (state.openList && props.search) {
      document.getElementById(state.searchId).focus();
    }
  }
};
const onSearchInput = (e) => {
  state.searchVal = e.target.value;
};
const onClear = () => {
  state.selectedOption = null;
  emitModel();
};

const emitModel = () => {
  emit(
      "update:modelValue",
      modelPrimitive.value || state.isPrimitive
          ? state.selectedOption
              ? state.selectedOption.value
              : null
          : state.selectedOption
  );
  state.openList = false;
};
const setListPosition = () => {
  const element = document.getElementById(state.wrapperId);

  const elementRect = element.getBoundingClientRect();
  const spaceBelow = window.innerHeight - elementRect.bottom;
  if (spaceBelow < 300) {
    state.openAbove = true;
  } else {
    state.openAbove = false;
  }
};
watch(
    () => props.modelValue,
    (newValue) => {
      if (newValue) {
        let opt;
        if (newValue.value) {
          opt = optionsComp.value.find((x) => x.value == newValue.value);
        } else {
          opt = optionsComp.value.find((x) => x.value == newValue);
        }

        if (opt) {
          state.selectedOption = { value: opt.value, text: opt.text };
        } else {
          state.selectedOption = null;
        }
      } else {
        state.selectedOption = null;
      }
    },
    { immediate: true }
);
//watching wrapper elements space below to decide whether to show the list above or below the wrapper
watch(
    () => state.openList,
    (newValue) => {
      if (newValue) {
        setListPosition();
      }
    }
);
</script>

<style scoped lang="scss">
.select-wrapper {
  width: 260px;
  -webkit-tap-highlight-color: transparent;
  background-color: palette-color-level(white, 100);
  border-radius:   palette-radius-level(3);
  border: solid 1px palette-color-level(grey, 15);
  box-sizing: border-box;
  clear: both;
  cursor: pointer;
  display: block;
  float: left;
  font-family: inherit;
  font-size:  palette-font-size-level(5);
  font-weight:palette-font-weight-level(2);
  height: palette-space-level(42);
  line-height: 40px;
  outline: none;
  padding-left: palette-space-level(15);
  padding-right: palette-space-level(25);
  position: relative;
  text-align: left !important;
  transition: all 0.24s ease-in-out;
  user-select: none;
  white-space: nowrap;

  .current {
    @include flex-display(flex, center, space-between);
    flex-wrap: nowrap;
    gap: palette-space-level(2);

    .is-selected {
      font-weight: palette-font-weight-level(5);
    }
    .clear {
      width: 22px;
      height: 22px;
      border-radius: palette-radius-level(0);
      cursor: pointer;
      color: palette-color-level(grey, 20);
      font-size: palette-font-size-level(8);
      @include flex-display(flex, center, center);
      font-weight: palette-font-weight-level(5);
      transition: all 0.21s cubic-bezier(0.5, 0, 0, 1.25);
      &:hover {
        color: palette-color-level(white, 100);;
        background: palette-color-level(grey, 30);
      }
    }
  }

  &:after {
    border-bottom: 2px solid palette-color-level(grey, 20);;
    border-right: 2px solid palette-color-level(grey, 20);
    content: "";
    display: block;
    height: palette-space-level(5);
    margin-top: -4px;
    position: absolute;
    right: 12px;
    top: 50%;
    transform-origin: 66% 66%;
    transform: rotate(45deg);
    transition: all 0.15s ease-in-out;
    width: palette-space-level(5);
  }

  &.open {
    border-color: palette-color-level(primary, 100);
    box-shadow: 0 0 10px palette-color-level(primary, 100);

    .list-wrapper {
      opacity: 1;
      pointer-events: auto;
      transform: scale(1) translateY(0);
    }

    &:after {
      transform: rotate(-135deg);
    }
  }

  .list-wrapper {
    width: 100%;
    background-color: palette-color-level(white, 100);
    border-radius: palette-radius-level(3);
    box-shadow: 0 0 0 1px rgb(68 68 68 / 11%);
    box-sizing: border-box;
    opacity: 0;
    padding: 0;
    pointer-events: none;
    position: absolute;
    left: 0;
    transform-origin: 50% 0;
    transform: scale(0.75) translateY(-21px);
    opacity: 0.15s ease-out;
    transition: all 0.2s cubic-bezier(0.5, 0, 0, 1.25), opacity 0.15s ease-out;
    z-index: 9;
    color: palette-color-level(primary-alt, 100);
    -webkit-text-fill-color: palette-color-level(black, 100);
    &:not(.show-up) {
      top: 100%;
      margin-top: palette-space-level(5);
    }
    &.show-up {
      bottom: 100%;
      margin-bottom: palette-space-level(5);
    }
    .search {
      display: flex;
      padding: palette-space-level(10);
      input {
        padding: palette-space-level(3) palette-space-level(6);
        width: 100%;
        border: none;
        border-radius: palette-radius-level(3);
        height: palette-space-level(25);
        box-shadow: 0 0 2px rgba(255, 138, 13, 0.71);
        outline: none;
        transition: all 0.22s cubic-bezier(0.5, 0, 0, 1.25);
        &:focus {
          box-shadow: 0 0 5px rgb(255 139 13);
        }
      }
    }
  }
  .list {
    padding: 0;
    overflow: auto;
    max-height: palette-space-level(300);
    &.search-list {
      margin: 0 0 5px 0;
    }

    &:hover {
      color: palette-color-level(primary, 100);
    }

    &::-webkit-scrollbar {
      width: palette-space-level(18);
    }

    &::-webkit-scrollbar-track {
      background: transparent;
      border-radius:  palette-radius-level(2);
    }

    &::-webkit-scrollbar-thumb {
      border: 5px solid rgba(0, 0, 0, 0);
      background-clip: padding-box;
      border-radius: 9999px;
      box-shadow: inset 0 0 0 10px;
    }
  }

  .option {
    cursor: pointer;
    font-weight:  palette-font-weight-level(2);
    line-height: palette-space-level(40);
    list-style: none;
    min-height: palette-space-level(40);
    outline: none;
    padding-left: palette-space-level(5);
    padding-right: palette-space-level(29);
    text-align: left;
    transition: all 0.2s cubic-bezier(0.5, 0, 0, 1.25);
    border-radius: palette-radius-level(3);

    &:not(.disabled):not(.selected):hover {
      background-color: palette-color-level(primary, 100);
      padding-left: palette-space-level(14);
      -webkit-text-fill-color: palette-color-level(white, 100);
    }

    &.disabled {
      background-color: transparent;
      color: palette-color-level(grey, 20);
      cursor: default;
      -webkit-text-fill-color: palette-color-level(grey, 20);
    }

    &.selected {
      font-weight: palette-font-weight-level(5);
      padding-left: palette-space-level(14);
      background-color: palette-color-level(grey, 90);
    }
  }
}
</style>

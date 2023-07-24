<template lang="">
  <ol class="breadcrumb">
    <span v-if="$slots.prepend" class="prepend">
      <slot name="prepend"></slot>
    </span>
   
    <li
      v-for="(item, i) in state.items"
      class="breadcrumb-item"
      :class="{ active: item.active || !item.href }"
      :key="i + 1"
      :id="'bc__item' + (i + 1)"
      @click="routeTo(i)"
    >
    {{ item.name }}
    <template v-if=" i + 1 < state.items.length">
    
      <span v-if="!$slots.divider">{{ props?.divider }}</span>
      <i class="icon" v-else>
        <slot name="divider"></slot>
      </i>
    </template>
     
      
    </li>
  </ol>
</template>
<script setup>
import {
  reactive,
  defineProps,
  onMounted,
} from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
  divider: {
    default: "/",
    type: String,
    required: false,
  },
  dynamic: {
    default: false,
    type: Boolean,
    required: false,
  },
});
const state = reactive({
  items: props.items,
});


router.afterEach((to, from, failure) => {
 state.items = props?.dynamic === true ? to.meta.breadcrumb : props.items
})
onMounted(() => {
  props.items.filter((item) => {
    if (item.active) {
      router.push(item.href);
    }
  });

});
const routeTo = (pRouteTo) => {
  if (state.items[pRouteTo].href && !state.items[pRouteTo].active)
    router.push(state.items[pRouteTo].href);
};

</script>
<style scoped lang="scss">

ol {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  align-items: center;
  padding: 0.75rem 1rem;
  list-style: none;
  svg{
  margin-right: 10px;
}
.prepend{
  margin-right:10px ;
}
  .active {
    color: #6c757d;
    cursor: default;
  }
  li {
    color: black;
    cursor: pointer;
    span {
      display: inline-block;
      padding-right: 0.5rem;
      padding-left: 0.5rem;
      color: #6c757d;
    }
    .icon {
      display: inline-flex;
      align-items: center;
      font-feature-settings: "liga";
      height: 100%;
      justify-content: center;
      letter-spacing: normal;
      line-height: 1;
      position: relative;
      text-indent: 0;
      user-select: none;
      vertical-align: middle;
    }
  }
}

</style>

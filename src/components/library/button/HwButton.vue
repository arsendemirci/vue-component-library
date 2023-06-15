<template>
    <div class="button-wrapper" :class="[state.size, state.btnStyle, state.shape, (!(disableElevation || disabled) && state.btnStyle === 'primary') ? 'elevation' : '', disabled ? `disabled disabled-${state.btnStyle}` : `${state.btnStyle}-${state.btnColor}-color`]" @click="handleClick" @mouseup="mouseUpHandler">
      <div ref="contentDiv" class="button">
        <slot></slot>
      </div>
      <div class="click-animation-div" :class="[state.mouseDown ? 'click-animation' : '']"></div>
    </div>
</template>

<script setup>
import {
  defineProps,
  onBeforeMount,
  onMounted,
  onUpdated,
  ref,
  reactive,
} from "vue";
const props = defineProps({
  size: {
    type: String,
  },
  btnStyle: {
    type: String,
  },
  shape: {
    type: String,
  },
  btnColor: {
    type: String,
  },
  disableElevation: {
    type: Boolean
  },
  disabled: {
    type: Boolean
  },
  spacing: {
    type: Number
  },
  handler: {
    type: Function,
    required: true,
  },
});
const state = reactive({
  size: 'medium',
  btnStyle: 'primary',
  shape: 'flat',
  btnColor: 'default',
  spacing: 10,
  mouseDown: false,
})
const contentDiv = ref(null);

onBeforeMount(()=>{
  validateProps();
});
onMounted(()=>{
  adjustSpacing();
})
onUpdated(()=>{
  validateProps();
  adjustSpacing();
})
const validateProps = () => {
  if (['xsmall', 'small', 'medium', 'large', 'xlarge'].includes(props.size)) state.size = props.size;
  else {
    // Warn the developer if the property value is incorrect but don't warn if they don't send any values at all. No value means they want to use the default value.
    if(props.size !== undefined){ 
      console.warn(`[Vue Component Library Warn]: "${props.size}" is an incorrect "size" property. Size can only be one of these values: ['xsmall', 'small', 'medium', 'large', 'xlarge']`)
    }
  }

  if (['flat', 'round', 'circle'].includes(props.shape)) state.shape = props.shape;
  else {
    if(props.shape !== undefined){
      console.warn(`[Vue Component Library Warn]: "${props.shape}" is an incorrect "shape" property. Shape can only be one of these values: ['flat', 'round', 'circle']`)
    }
  }

  if (['primary', 'secondary', 'tertiary'].includes(props.btnStyle)) state.btnStyle = props.btnStyle;
  else {
    if(props.btnStyle !== undefined){
      console.warn(`[Vue Component Library Warn]: "${props.btnStyle}" is an incorrect "btnStyle" property. Button style can only be one of these values: ['primary', 'secondary', 'tertiary']`)
    }
  }

  if (['default', 'optional', 'danger', 'success', 'warning'].includes(props.btnColor)) state.btnColor = props.btnColor;
  else {
    if(props.btnColor !== undefined){
      console.warn(`[Vue Component Library Warn]: "${props.btnColor}" is an incorrect "btnColor" property. Button color can only be one of these values: ['default', 'optional', 'danger', 'success', 'warning']`)
    }
  }

  if(props.spacing) state.spacing = props.spacing;
}
const adjustSpacing = () => {
  const childNodes = contentDiv._value.children;
  // Reset margin values for reacting to changes in content elements
  childNodes[0].style.marginLeft = '0px'
  for(let i=1; i < childNodes.length; i++){
    childNodes[i].style.marginLeft = `${state.spacing}px`
  }
}
const handleClick = () => {
  if (props.disabled) return;
  props.handler();
}
const mouseUpHandler = (e) => {
  if(props.disabled) return;
  state.mouseDown = true;
  setTimeout(() => {
    state.mouseDown = false;
  }, 400);
}
</script>

<style scoped lang="scss">
.button-wrapper{
  position: relative;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  user-select: none;
  font-family: inherit;
  transition: all 500ms;
  .click-animation-div{
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0px;
    height: 0px;
    background-color: transparent;
    border-radius: 50%;
    transition: all 250ms;
  }
  .click-animation{
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
}
.button{
  display: flex;
  align-items: center;
  justify-content: center;
}
.primary{
  .click-animation{
    background-color: rgba($color: #ffffff, $alpha: 0.3) !important;
  }
}
.secondary{
  border: 1px solid;
}
// .tertiary{}
.elevation{
  box-shadow: 0px 2px 3px gray;
  -webkit-box-shadow: 0px 2px 3px gray;
  -moz-box-shadow: 0px 2px 3px gray;
  &:hover{
    box-shadow: 0px 3px 9px gray;
    -webkit-box-shadow: 0px 3px 9px gray;
    -moz-box-shadow: 0px 3px 9px gray;
  }
}
.disabled{
  color: #999999;
  transition: none;
  cursor: initial;
}
.disabled-primary{
    background-color: #dddddd;
  }
.disabled-secondary{
    background-color: transparent;
    border: 1px solid #999999;
  }
.disabled-tertiary{
    background-color: transparent;
  }
.xsmall{
  min-height: 24px;
  width: fit-content;
  padding: 5px 10px;
  font-size: 1rem;
}
.xsmall.circle{
  height: 32px;
  width: 32px;
  padding: 8px;
  font-size: 1rem;
}
.small{
  min-height: 30px;
  width: fit-content;
  padding: 7px 14px;
  font-size: 1.1rem;
}
.small.circle{
  height: 38px;
  width: 38px;
  padding: 10px;
  font-size: 1.2rem;
}
.medium{
  min-height: 36px;
  width: fit-content;
  padding: 9px 18px;
  font-size: 1.3rem;
}
.medium.circle{
  height: 44px;
  width: 44px;
  padding: 12px;
  font-size: 1.4rem;
}
.large{
  min-height: 42px;
  width: fit-content;
  padding: 11px 22px;
  font-size: 1.4rem;
}
.large.circle{
  height: 50px;
  width: 50px;
  padding: 14px;
  font-size: 1.6rem;
}
.xlarge{
  min-height: 48px;
  width: fit-content;
  padding: 13px 26px;
  font-size: 1.5rem;
}
.xlarge.circle{
  height: 56px;
  width: 56px;
  padding: 16px;
  font-size: 1.8rem;
}
.flat{
  border-radius: 4px;
  .click-animation{
    border-radius: 4px;
  }
}
.round{
  border-radius: 50em;
  .click-animation{
    border-radius: 50em;
  }
}
.circle{
  border-radius: 50%;
  .click-animation{
    border-radius: 50%;
  }
}
.primary-default-color{
  background-color: palette-color-level(primary, 100);
  color: #ffffff;
  &:hover{
    background-color: palette-color-level(orange, 10);
  }
}
.primary-optional-color{
  background-color: palette-color-level(blue, 40);
  color: #ffffff;
  &:hover{
    background-color: palette-color-level(blue, 50);
  }
}
.primary-success-color{
  background-color: #329031;
  color: #ffffff;
  &:hover{
    background-color: #327131;
  }
}
.primary-danger-color{
  background-color: palette-color-level(red, 30);
  color: #ffffff;
  &:hover{
    background-color: #c53231;
  }
}
.primary-warning-color{
  background-color: #eed202;
  color: #555;
  &:hover{
    background-color: #dec202;
  }
}

.secondary-default-color{
  background-color: transparent;
  color: palette-color-level(primary, 100);
  border-color: palette-color-level(orange, 10);
  &:hover{
    background-color: #fff8ef;
    border-color: #b46b39;
  }
  .click-animation{
    background-color: rgba($color: palette-color-level(primary, 100), $alpha: 0.3) !important;
  }
}
.secondary-optional-color{
  background-color: transparent;
  color: palette-color-level(blue, 40);
  border-color: palette-color-level(blue, 40);
  &:hover{
    background-color: #f1f1ff;
    border-color: palette-color-level(blue, 50);
  }
  .click-animation{
    background-color: rgba($color: palette-color-level(blue, 40), $alpha: 0.3) !important;
  }
}
.secondary-success-color{
  background-color: transparent;
  color: #329131;
  border-color: #32b531;
  &:hover{
    background-color: #f1fff1;
    border-color: #329131;
  }
  .click-animation{
    background-color: rgba($color: #329131, $alpha: 0.3) !important;
  }
}
.secondary-danger-color{
  background-color: transparent;
  color: palette-color-level(red, 30);
  border-color: palette-color-level(red, 30);
  &:hover{
    background-color: #fff1f1;
    border-color: #c53231;
  }
  .click-animation{
    background-color: rgba($color: palette-color-level(red, 30), $alpha: 0.3) !important;
  }
}
.secondary-warning-color{
  background-color: transparent;
  color: #eed202;
  border-color: #dec202;
  &:hover{
    background-color: #fffff1;
    border-color: #bea202;
  }
  .click-animation{
    background-color: rgba($color: #eed202, $alpha: 0.3) !important;
  }
}

.tertiary-default-color{
  background-color: transparent;
  color: palette-color-level(primary, 100);
  &:hover{
    background-color: #fff8ef;
  }
  .click-animation{
    background-color: rgba($color: palette-color-level(primary, 100), $alpha: 0.3) !important;
  }
}
.tertiary-optional-color{
  background-color: transparent;
  color: palette-color-level(blue, 40);
  &:hover{
    background-color: #f1f1ff;
  }
  .click-animation{
    background-color: rgba($color: palette-color-level(blue, 40), $alpha: 0.3) !important;
  }
}
.tertiary-success-color{
  background-color: transparent;
  color: #329131;
  &:hover{
    background-color: #f1fff1;
  }
  .click-animation{
    background-color: rgba($color: #329131, $alpha: 0.3) !important;
  }
}
.tertiary-danger-color{
  background-color: transparent;
  color: palette-color-level(red, 30);
  &:hover{
    background-color: #fff1f1;
  }
  .click-animation{
    background-color: rgba($color: palette-color-level(red, 30), $alpha: 0.3) !important;
  }
}
.tertiary-warning-color{
  background-color: transparent;
  color: #eed202;
  &:hover{
    background-color: #fffff1;
  }
  .click-animation{
    background-color: rgba($color: #eed202, $alpha: 0.3) !important;
  }
}
</style>
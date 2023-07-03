<template>
    <div class="button-wrapper" :class="[state.size, state.btnStyle, state.shape, (!(disableElevation || disabled) && state.btnStyle === 'primary') ? 'elevation' : '', disabled ? `disabled disabled-${state.btnStyle}` : `${state.btnStyle}-${state.btnColor}-color`]" @click="handleClick" @mouseup="mouseUpHandler" ref="btnRef">
      <div ref="contentDiv" class="button">
        <slot></slot>
      </div>
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
})
const contentDiv = ref(null);
const btnRef = ref(null);

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
  const rippleDiv = document.createElement("div")
  const clientRect = btnRef._value.getBoundingClientRect()
  const dia = Math.max(clientRect.width, clientRect.height)
  const rad = dia / 2
  rippleDiv.style.width = rippleDiv.style.height = `${dia}px`
  rippleDiv.style.top = `${Math.round(e.clientY - (clientRect.top + rad))}px`
  rippleDiv.style.left = `${Math.round(e.clientX - (clientRect.left + rad))}px`
  let animText = 'ripple-anim-sec-ter-'
  if(state.btnStyle === 'primary') rippleDiv.style.animation = 'ripple-anim-pri .4s linear'
  else {
    switch (state.btnColor) {
      case 'default':
        animText = animText.concat('def')
        break;
      case 'optional':
        animText = animText.concat('opt')
        break;
      case 'success':
        animText = animText.concat('suc')
        break;
      case 'warning':
        animText = animText.concat('war')
        break;
      case 'danger':
        animText = animText.concat('dan')
        break;
    
      default:
        break;
    }
    rippleDiv.style.animation = animText.concat(' .6s linear')
  }
  rippleDiv.classList.add("ripple")
  btnRef._value.appendChild(rippleDiv)
  setTimeout(() => {
    rippleDiv.remove()
  }, 600);
}
</script>

<style scoped lang="scss">
.button-wrapper{
  position: relative;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin: 10px;
  user-select: none;
  font-family: inherit;
  transition: all 300ms;
}
.button{
  display: flex;
  align-items: center;
  justify-content: center;
}
// .primary{}
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
  border-radius: palette-radius-level(2);
  width: fit-content;
}
.round{
  border-radius: 50em;
  width: fit-content;
}
.circle{
  border-radius: palette-radius-level(0);
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
}
.secondary-optional-color{
  background-color: transparent;
  color: palette-color-level(blue, 40);
  border-color: palette-color-level(blue, 40);
  &:hover{
    background-color: #f1f1ff;
    border-color: palette-color-level(blue, 50);
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
}
.secondary-danger-color{
  background-color: transparent;
  color: palette-color-level(red, 30);
  border-color: palette-color-level(red, 30);
  &:hover{
    background-color: #fff1f1;
    border-color: #c53231;
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
}

.tertiary-default-color{
  background-color: transparent;
  color: palette-color-level(primary, 100);
  &:hover{
    background-color: #fff8ef;
  }
}
.tertiary-optional-color{
  background-color: transparent;
  color: palette-color-level(blue, 40);
  &:hover{
    background-color: #f1f1ff;
  }
}
.tertiary-success-color{
  background-color: transparent;
  color: #329131;
  &:hover{
    background-color: #f1fff1;
  }
}
.tertiary-danger-color{
  background-color: transparent;
  color: palette-color-level(red, 30);
  &:hover{
    background-color: #fff1f1;
  }
}
.tertiary-warning-color{
  background-color: transparent;
  color: #eed202;
  &:hover{
    background-color: #fffff1;
  }
}
</style>
<style lang="scss">
@keyframes ripple-anim-pri {
    20%{
      background-color: rgba($color: #ffffff, $alpha: 0.3);
    }
    60%{
      background-color: rgba($color: #ffffff, $alpha: 0.15);
      transform: scale(1.1);
    }
    100%{
      background-color: transparent;
      transform: scale(1.2);
    }
  }
@keyframes ripple-anim-sec-ter-def {
    20%{
      background-color: rgba($color: palette-color-level(primary, 100), $alpha: 0.3);
    }
    60%{
      background-color: rgba($color: palette-color-level(primary, 100), $alpha: 0.15);
      transform: scale(1.1);
    }
    100%{
      background-color: transparent;
      transform: scale(1.2);
    }
  }
@keyframes ripple-anim-sec-ter-opt {
    20%{
      background-color: rgba($color: palette-color-level(blue, 40), $alpha: 0.3);
    }
    50%{
      background-color: rgba($color: palette-color-level(blue, 40), $alpha: 0.15);
      transform: scale(1.1);
    }
    100%{
      background-color: transparent;
      transform: scale(1.2);
    }
  }
@keyframes ripple-anim-sec-ter-dan {
    20%{
      background-color: rgba($color: palette-color-level(red, 30), $alpha: 0.3);
    }
    50%{
      background-color: rgba($color: palette-color-level(red, 30), $alpha: 0.15);
      transform: scale(1.1);
    }
    100%{
      background-color: transparent;
      transform: scale(1.2);
    }
  }
@keyframes ripple-anim-sec-ter-suc {
    20%{
      background-color: rgba($color: #329131, $alpha: 0.3);
    }
    50%{
      background-color: rgba($color: #329131, $alpha: 0.15);
      transform: scale(1.1);
    }
    100%{
      background-color: transparent;
      transform: scale(1.2);
    }
  }
@keyframes ripple-anim-sec-ter-war {
    20%{
      background-color: rgba($color: #eed202, $alpha: 0.3);
    }
    50%{
      background-color: rgba($color: #eed202, $alpha: 0.15);
      transform: scale(1.1);
    }
    100%{
      background-color: transparent;
      transform: scale(1.2);
    }
  }
  .ripple{
    position: absolute;
    background-color: transparent;
    border-radius: palette-radius-level(0);
    transform: scale(0);
  }
</style>
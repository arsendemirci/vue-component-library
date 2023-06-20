<template>
  <Transition name="card">
    <div class="card-wrapper">
      <div class="card-container">
        <div class="card-advanced">
          <Transition>
            <h1 v-if="$props.cardSectionVisibility.isHeader" class="header">
              {{ header }}
            </h1>
          </Transition>
          <Transition>
            <h1 v-if="$props.cardSectionVisibility.isTitle" class="title">
              {{ title }}
            </h1>
          </Transition>

          <Transition>
            <h1 v-if="$props.cardSectionVisibility.isSubtitle" class="subtitle">
              {{ subtitle }}
            </h1>
          </Transition>

          <Transition>
            <div
              v-if="$props.cardSectionVisibility.isImage"
              class="card-image-wrapper"
            >
              <img src="../../../assets/1000x300.png" alt="" />
            </div>
          </Transition>
          <Transition>
            <div
              v-if="$props.cardSectionVisibility.isContentText"
              class="card-content"
            >
              <p>
                {{ contentText }}
              </p>
            </div>
          </Transition>
          <div class="card-buttons">
            <Transition>
              <button
                v-if="$props.cardSectionVisibility.isButtonSave"
                class="hw-button orange"
              >
                Save
              </button>
            </Transition>
            <Transition>
              <button
                v-if="$props.cardSectionVisibility.isButtonCancel"
                class="hw-button gray"
              >
                Cancel
              </button>
            </Transition>
          </div>
          <div class="card-footer flex">
            <Transition>
              <div
                v-if="$props.cardSectionVisibility.isFooterText"
                class="footer-text-wrapper"
              >
                <p>{{ footerText }}</p>
              </div>
            </Transition>
            <hr
              v-if="$props.cardSectionVisibility.isAccordionText"
              class="hw-divider"
            />
            <Transition>
              <div v-if="$props.cardSectionVisibility.isAccordionText">
                <button
                  @click="state.accordionToggle = !state.accordionToggle"
                  class="button-mini"
                >
                  <i>↓</i>
                </button>
              </div>
            </Transition>
          </div>
          <Transition>
            <div
              v-if="
                $props.cardSectionVisibility.isAccordionText &&
                state.accordionToggle
              "
              class="card-accordion-wrapper ease"
            >
              <div>
                <p
                  v-if="
                    $props.cardSectionVisibility.isAccordionText &&
                    state.accordionToggle
                  "
                  class="accordion-text"
                >
                  {{ accordionText }}
                </p>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script lang="ts" setup>
import {
  reactive,
  computed,
  //defineProps, auto declaration with lang ts
  watch,
  onMounted,
  PropType,
} from "vue";
import "../../../stores/interface/CardSectionVisibility";

const props = defineProps({
  header: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  contentText: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
  footerText: {
    type: String,
    required: true,
  },
  accordionText: {
    type: String,
    required: true,
  },
  cardSectionVisibility: {
    type: Object as PropType<CardSectionVisibility>,
    required: true,
  },
});
const state = reactive({
  accordionToggle: false,
});
</script>

<style scoped lang="scss">
.v-enter-from {
  opacity: 0;
  transform: scale(0.9);
  max-height: 0;
}
.v-enter-to {
  opacity: 1;
  transform: scale(1);
  max-height: 400px;
}
.v-leave-from {
  max-height: 400px;
  opacity: 1;
}
.v-leave-to {
  max-height: 0;
  opacity: 0;
}
.v-leave-active {
  transition: all 0.5s ease;
}
.v-enter-active {
  transition: all 1s ease;
}

.ease-leave-to {
  opacity: 1;
  color: rgb(30, 135, 255);
}

.ease-enter-from {
  opacity: 0;
  transform: translateY(-60px);
}
.ease-enter-to {
  opacity: 1;
  transform: translateY(0);
}
.ease-enter-active,
.ease-leave-active {
  transition: all 0.5s ease;
}
.ease-leave-from {
  opacity: 1;
  transform: translateY(0px);
}
.ease-leave-to {
  opacity: 0;
  transform: translateY(-60px);
}

.flex {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.card-wrapper {
  margin-top: 10px;
  width: 350px;
  -webkit-tap-highlight-color: transparent;
  background-color: palette-color-level(white, 100);
  border-radius: palette-radius-level(5) palette-radius-level(5) 0 0;
  border: solid 1px palette-color-level(grey, 15);
  box-sizing: border-box;
  clear: both;
  //FIXME: display block not fit for card elements.(in one line may one ore more cards)
  //display: block
  font-family: inherit;
  font-size: palette-font-size-level(5);
  font-weight: palette-font-weight-level(5);
  line-height: 40px;
  padding: palette-space-level(15) palette-space-level(15) 0
    palette-space-level(15);
  position: static;
  text-align: left !important;
  user-select: none;
  white-space: normal;
  /* offset-x | offset-y | blur-radius | spread-radius | color */
  -webkit-box-shadow: -2px -1px 7.5px 3px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: -3px -2px 15px 7px rgba(0, 0, 0, 0.425);
  box-shadow: 0px -2px 7px 2px rgba(0, 0, 0, 0.35);
  .card-container {
    height: auto;
    p {
      line-height: palette-space-level(20);
      font-weight: palette-font-weight-level(3);
    }
    .card-advanced {
      .header {
        font-size: palette-font-size-level(10);
        font-weight: palette-font-weight-level(5);
        line-height: palette-space-level(40);
      }
      .title {
        font-size: palette-font-size-level(5);
        font-weight: palette-font-weight-level(5);
        line-height: palette-space-level(20);
      }
      .subtitle {
        color: gray;
        font-size: palette-font-size-level(2);
        font-weight: palette-font-weight-level(3);
        line-height: palette-space-level(20);
      }
      .card-image-wrapper {
        padding-bottom: palette-space-level(10);
        img {
          width: 100%;
        }
      }
      .card-buttons {
        padding-bottom: palette-space-level(10);
      }
    }
  }
  .hw-button {
    color: palette-color-level(white, 100);
    border: none;
    border-radius: palette-radius-level(5);
    width: 100%;
    height: 30px;
    cursor: pointer;
    //huawei color button
  }

  .hw-button.orange {
    background-color: palette-color-level(orange, 10);
  }
  .hw-button.gray {
    background-color: palette-color-level(grey, 20);
  }

  .card-footer {
    position: relative;
    padding-bottom: palette-space-level(5);
    p {
      font-weight: palette-font-weight-level(5);
    }
  }

  .hw-divider {
    position: absolute;
    bottom: -1px;
    left: -15px;
    width: 110%;
    border: 1.3px ridge rgba($color: #393939, $alpha: 0.2)
  }

  .card-accordion-wrapper {
    .accordion-text {
      font-size: palette-font-size-level(4);
      margin-top:palette-space-level(10) ;
      margin-bottom:palette-space-level(15) ;
      font-weight: palette-font-weight-level(3);
      line-height: palette-space-level(25);
    }
  }
}
</style>

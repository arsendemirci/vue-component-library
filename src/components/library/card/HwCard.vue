<template>
  <div class="card-wrapper">
    <div class="card-container">
      <div class="card-advanced">
        <h1 v-if="$props.cardSectionVisibility.isHeader" class="header">
          {{ header }}
        </h1>
        <h1 v-if="$props.cardSectionVisibility.isTitle" class="title">
          {{ title }}
        </h1>
        <h1 v-if="$props.cardSectionVisibility.isSubtitle" class="subtitle">
          {{ subtitle }}
        </h1>
        <div
          v-if="$props.cardSectionVisibility.isImage"
          class="card-image-wrapper"
        >
          <img src="../../../assets/1000x300.png" alt="" />
        </div>

        <div
          v-if="$props.cardSectionVisibility.isContentText"
          class="card-content"
        >
          <p>
            {{ contentText }}
          </p>
        </div>

        <div class="card-buttons">
          <button
            v-if="$props.cardSectionVisibility.isButtonSave"
            class="hw-button orange"
          >
            Save
          </button>
          <button
            v-if="$props.cardSectionVisibility.isButtonCancel"
            class="hw-button gray"
          >
            Cancel
          </button>
        </div>

        <div class="card-footer flex">
          <div
            v-if="$props.cardSectionVisibility.isFooterText"
            class="footer-text-wrapper"
          >
            <p>{{ footerText }}</p>
          </div>
          <div v-if="$props.cardSectionVisibility.isAccordionText">
            <button @click="state.accordionToggle = !state.accordionToggle" class="button-mini"><i>↓</i></button>
          </div>
        </div>
        <Transition>
          <div
          v-if="$props.cardSectionVisibility.isAccordionText && state.accordionToggle"
          class="card-accordion-wrapper"
          style="visibility: none"
          active
        >
          <hr class="hw-divider" />
          <p class="accordion-text">
            {{ accordionText }}
          </p>
        </div>
        </Transition>

      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  reactive,
  computed,
  //defineProps, auto declaration with lang ts
  // defineEmits, auto declaration with lang ts
  watch,
  onMounted,
  PropType,
} from "vue";
import "../../../stores/interface/CardSectionVisibility";

const props = defineProps({
  header: {
    type: String,
    required: true,
    //default:"Header"
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
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.flex {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.card-wrapper {
  margin-top: 10px;
  box-shadow: dark 1px 1px 1px;
  width: 350px;
  position: relative;
  -webkit-tap-highlight-color: transparent;
  background-color: palette-color-level(white, 100);
  border-radius: palette-radius-level(5);
  border: solid 1px palette-color-level(grey, 15);
  box-sizing: border-box;
  clear: both;
  //FIXME: display block not fit for card elements.(in one line may one ore more cards)
  //display: block
  font-family: inherit;
  font-size: palette-font-size-level(5);
  font-weight: palette-font-weight-level(5);
  line-height: 40px;
  padding: palette-space-level(15), palette-space-level(15);
  position: static;
  text-align: left !important;
  user-select: none;
  white-space: normal;

  .card-container {
    padding: palette-padding-level(10, 15);
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
      .card-buttons{
        padding-bottom: palette-space-level(20);
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
    p {
      font-weight: palette-font-weight-level(5);
    }
  }

  .hw-divider {
    margin: 0;
    width: 100%;
  }

  .card-accordion-wrapper {
    .accordion-text {
      font-size: palette-font-size-level(4);
      font-weight: palette-font-weight-level(3);
      line-height: palette-space-level(25);
    }
  }
}
</style>

<template>
  <div class="card-wrapper">
    <div class="card-container">
      <div class="card-default">
        <h3>{{ title }}</h3>
        <div class="card-default-content">
          <p>
            {{ contentText }}
          </p>
        </div>
      </div>
    </div>
  </div>

  <div class="card-wrapper">
    <div class="card-container">
      <div class="card-advanced">
        <h1 class="header">{{ header }}</h1>
        <h1 class="title">{{ title }}</h1>
        <h1 class="subtitle">{{ subtitle }}</h1>
        <div class="card-image-wrapper">
          <img src="../../../assets/1000x300.png" alt="" />
        </div>
        <button class="hw-button orange">Save</button>
        <button class="hw-button gray">Cancel</button>

        <div class="card-footer">
          <p>{{ footerText }}</p>
        </div>
        <!-- <div class="card-flex">
          <button class="button-mini flex-right"><i>🔽</i></button>
        </div> -->
        <div class="card-accordion-wrapper" style="visibility: none">
          <hr class="hw-divider" />
          <p class="accordion-text">
            {{ accordionText }}
          </p>
        </div>
      </div>
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
  header: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
  contentText: {
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
});
// const state = reactive({
//   title: "sd",
//   accordionToggle: false,
// });
</script>

<style scoped lang="scss">
.card-wrapper {
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
    padding-top: palette-space-level(20);
    padding-bottom: palette-space-level(10);
    p {
      font-weight: palette-font-weight-level(5);
    }
  }
  .card-flex {
    //one item one line flex
    display: flex;
    justify-content: flex-end;
    padding-bottom: palette-space-level(20);
  }

  .button-mini {
    width: 30px;
    height: 30px;
    border: solid palette-color-level(grey, 15);
    border-radius: palette-radius-level(5);
  }

  .hw-divider {
    margin: 0;
    width: 100%;
    height: 1px;
    background-color: #000;
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

<template>
  <div class="card-wrapper">
    <div class="card-container">
      <div class="card-advanced">
        <h1 class="header card-content">
          {{ header }}
        </h1>
        <h1 class="title card-content">
          {{ title }}
        </h1>

        <h1 class="subtitle card-content">
          {{ subtitle }}
        </h1>

        <div v-if="imagePath" class="card-image-wrapper card-content">
          <img :src="getImageUrl(imagePath)" :alt="getImageAlt()" />
        </div>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
const getImageUrl = (path) => {
  if (path) {
    return new URL(path, import.meta.url).href;
  } else return "";
};
const getImageAlt = () => {
  return props.imageAlt;
};
const props = defineProps({
  title: {
    type: String,
    required: false,
  },
  header: {
    type: String,
    required: false,
  },
  subtitle: {
    type: String,
    required: false,
  },
  imagePath: {
    type: String,
    required: false,
  },
  imagePath: {
    type: String,
    required: false,
  },
  imageAlt: {
    type: String,
    required: false,
  },
});
</script>

<style lang="scss" scoped>
.card-content {
  margin-bottom: palette-space-level(10);
}

.flex {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.card-container {
  line-height: 1.5em;
  position: relative;
  display: flex;
  flex-direction: column;
  -webkit-tap-highlight-color: transparent;
  background-color: palette-color-level(white, 100);
  border-radius: palette-radius-level(5);
  border: solid 1px palette-color-level(grey, 15);
  box-sizing: border-box;
  clear: both;
  margin-bottom: palette-space-level(50);
  font-family: inherit;
  font-size: palette-font-size-level(5);
  padding: palette-space-level(25);
  text-align: justify !important;
  user-select: none;
  white-space: normal;
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.35);
  -webkit-box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.35);
  -moz-box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.35);

  .card-advanced {
    .header {
      font-size: palette-font-size-level(10);
      font-weight: palette-font-weight-level(700);
    }
    .title {
      font-size: palette-font-size-level(5);
      font-weight: palette-font-weight-level(600);
    }
    .subtitle {
      color: gray;
      font-size: palette-font-size-level(2);
      font-weight: palette-font-weight-level(300);
    }
    .card-image-wrapper {
      img {
        width: 100%;
      }
    }
  }

  .hw-button.gray {
    background-color: palette-color-level(grey, 20);
  }

  .card-footer {
    padding: palette-space-level(5) 0;
  }
}
</style>


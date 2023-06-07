<template>
  <div class="wrapper" @click="checkboxIsHeadern">
    <h1 slot="header">Card Components</h1>
    <hr />
    <div>
      /* sections="{"header":value, "visibility":true}" */

      <div class="flex">
        <div class="cards-input">
          <hw-card
            type="simple"
            :header="header"
            :title="title"
            :subtitle="subtitle"
            :content-text="contentText"
            :footer-text="footerText"
            :accordion-text="accordionText"
            :card-section-visibility="cardSectionVisibility"
          ></hw-card>
        </div>
        <div class="visibility-inputs flex vertical">
          <label for="isHeader">
            <input
              type="checkbox"
              id="isHeader"
              name="isHeader"
              v-model="cardSectionVisibility.isHeader"
            />Header</label
          >

          <label for="isTitle"
            ><input
              type="checkbox"
              id="isTitle"
              name="isTitle"
              v-model="cardSectionVisibility.isTitle"
            />Title</label
          >

          <label for="isSubtitle"
            ><input
              type="checkbox"
              id="isSubtitle"
              name="isSubtitle"
              v-model="cardSectionVisibility.isSubtitle"
            />Subtitle</label
          >

          <label for="isImage"
            ><input
              type="checkbox"
              id="isImage"
              name="isImage"
              v-model="cardSectionVisibility.isImage"
            />Image</label
          >

          <label for="isContentText"
            ><input
              type="checkbox"
              id="isContentText"
              name="isContentText"
              v-model="cardSectionVisibility.isContentText"
            />ContentText</label
          >

          <label for="isButtonSave"
            ><input
              type="checkbox"
              id="isButtonSave"
              name="isButtonSave"
              v-model="cardSectionVisibility.isButtonSave"
            />ButtonSave</label
          >

          <label for="isButtonCancel">
            <input
              type="checkbox"
              id="isButtonCancel"
              name="isButtonCancel"
              v-model="cardSectionVisibility.isButtonCancel"
            />ButtonCancel</label
          >
        </div>
      </div>
    </div>
    <p>{{ cardSectionVisibility.header }}</p>
  </div>
</template>

<script>
import HwCard from "@lib/card/HwCard.vue";
export default (await import("vue")).defineComponent({
  data() {
    return {
      header: "Header",
      title: "Title",
      subtitle: "Subtitle",
      contentText:
        "Content lorem ipsum dolor sit amet consectetur adipisicing elit.            Nemo laudantium magnam, aut illum libero, harum enim quas magni vel            doloremque dolorus",
      footerText: "Here is footer text lorem ipsum dolor sit amet",
      accordionText:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus quibusdam voluptatum, voluptatibus.",
      cardSectionVisibility: {
        isHeader: true,
        isTitle: true,
        isSubtitle: true,
        isImage: true,
        isContentText: true,
        isButtonSave: true,
        isButtonCancel: true,
      },
    };
  },
  components: {
    HwCard,
  },
  methods: {
    checkboxIsHeadern() {
      this.checkboxIsHeader = true;
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.flex {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

.vertical {
  flex-direction: column;
  justify-content:space-evenly;
  
}
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: palette-space-level(35);
  font-size: large;
  header {
    h1,
    h3 {
      text-shadow: 1px 1px 3px rgb(255, 255, 255);
    }
    h1 {
      margin: palette-space-level(50);
    }
    h3 {
      margin: 0;
    }
  }
  > div {
    padding: palette-space-level(15) palette-space-level(20);
    flex-direction: column;
    background: palette-color-level(white, 100);
    border-radius: palette-radius-level(5);
    box-shadow: 0 0 6px rgba(190, 190, 190, 0.44);
    display: flex;
    gap: palette-space-level(20);
    background: floralwhite;
    width: 100%;
    max-width: 1000px;
    .v-model {
      .value {
        font-weight: palette-font-weight-level(5);
        font-size: large;
      }
    }

    .option {
      display: flex;

      &:hover {
        .option-value {
          border-color: palette-color-level(white, 100);
          border-width: palette-space-level(4);
        }
      }
      &-value {
        padding-right: palette-space-level(10);
        border-right: 1px solid palette-color-level(primary-alt, 100);
        transition: all 0.2s cubic-bezier(0.5, 0, 0, 1.25);
      }
      &-text {
        padding-left: palette-space-level(10);
      }
    }
  }
}
</style>

<template>
  <div class="wrapper" @click="checkboxIsHeadern">
    <h1 slot="header">Card Components</h1>
    <card-demo></card-demo>
    <hr />
    <div class="example1">
      <h2>Single Card</h2>
      <p>
        <p>This demo example showcases single card display</p>
      </p>
      <div class="flex container">
        <div class="cards-input card-wrapper">
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
        <div class="visibility-inputs flex vertical static-height">
          <label class="visibility-label" for="isHeader">
            <input
              class="visibility-input"
              type="checkbox"
              id="isHeader"
              name="isHeader"
              v-model="cardSectionVisibility.isHeader"
            />Header</label
          >

          <label class="visibility-label" for="isTitle"
            ><input
              class="visibility-input"
              type="checkbox"
              id="isTitle"
              name="isTitle"
              v-model="cardSectionVisibility.isTitle"
            />Title</label
          >

          <label class="visibility-label" for="isSubtitle"
            ><input
              class="visibility-input"
              type="checkbox"
              id="isSubtitle"
              name="isSubtitle"
              v-model="cardSectionVisibility.isSubtitle"
            />Subtitle</label
          >

          <label class="visibility-label" for="isImage"
            ><input
              class="visibility-input"
              type="checkbox"
              id="isImage"
              name="isImage"
              v-model="cardSectionVisibility.isImage"
            />Image</label
          >

          <label class="visibility-label" for="isContentText"
            ><input
              class="visibility-input"
              type="checkbox"
              id="isContentText"
              name="isContentText"
              v-model="cardSectionVisibility.isContentText"
            />ContentText</label
          >

          <label class="visibility-label" for="isButtonSave"
            ><input
              class="visibility-input"
              type="checkbox"
              id="isButtonSave"
              name="isButtonSave"
              v-model="cardSectionVisibility.isButtonSave"
            />ButtonSave</label
          >

          <label class="visibility-label" for="isButtonCancel">
            <input
              class="visibility-input"
              type="checkbox"
              id="isButtonCancel"
              name="isButtonCancel"
              v-model="cardSectionVisibility.isButtonCancel"
            />ButtonCancel</label
          >

          <label class="visibility-label" for="isFooterText">
            <input
              class="visibility-input"
              type="checkbox"
              id="isFooterText"
              name="isFooterText"
              v-model="cardSectionVisibility.isFooterText"
            />FooterText</label
          >

          <label class="visibility-label" for="isAccordionText">
            <input
              class="visibility-input"
              type="checkbox"
              id="isAccordionText"
              name="isAccordionText"
              v-model="cardSectionVisibility.isAccordionText"
            />AccordionText</label
          >
        </div>
      </div>
    </div>

    <div class="example2">
      <h2>Multiple Card</h2>
      <p>
        This demo example showcases multiple card display feature that allows you to view multiple cards at once in a visually appealing way.
      </p>
      <div class="flex container">
        <div class="card-wrapper">
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
        <div class="card-wrapper">
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
        <div class="card-wrapper">
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
      </div>
    </div>
  </div>
</template>

<script>
import HwCard from "@lib/card/HwCard.vue";
import CardDemo from "./CardDemo.vue";
export default (await import("vue")).defineComponent({
  data() {
    return {
      header: "Header",
      title: "Title",
      subtitle: "Subtitle",
      contentText:
        "Content lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo laudantium magnam, aut illum libero, harum enim quas magni vel doloremque dolorus",
      footerText: "Here is footer text",
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
        isFooterText: true,
        isAccordionText: true,
      },
    };
  },
  components: {
    HwCard,
    CardDemo,
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
.container{
  margin-top: palette-space-level(10);
  margin-bottom: palette-space-level(10);
}
.flex {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  .flex-example-2{
    flex: 1 0 21%; 
    }
}
.visibility-label {
  margin: palette-space-level(10) 0px;
}
.visibility-input {
  margin: 0px palette-space-level(5);
}
.visibility-inputs.static-height {
  height: 450px;
}
.vertical {
  flex-direction: column;
  justify-content: center;
  align-items: start;
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

<template>
  <div class="wrapper">
    <h1>Dialog Component</h1>

    <DialogDemo />

    <div>
      <h2>Default Dialog Component</h2>
      <p>
        Dialog components can provide some content and action input from user when needed. This is default dialog and
        centered on the page whit animation. Backdrop avaliable if needed. If you want to trigger open and close event,
        select use select boxes.
      </p>

      <div class="select-wrapper">
        <select class="select" name="positions" id="positions" @input="setSelected($event.target.value)">
          <option value="center">center</option>
          <option value="top">top</option>
          <option value="right">right</option>
          <option value="bottom">bottom</option>
          <option value="left">left</option>
        </select>

        <select class="select" name="sizes" id="sizes" @input="setSize($event.target.value)">
          <option value="xs">xs</option>
          <option value="sm">sm</option>
          <option value="md" selected>md</option>
          <option value="lg">lg</option>
          <option value="xl">xl</option>
        </select>

        <div class="checkbox-wrapper">
          <input class="checkbox-input" v-model="selectedBackdrop" type="checkbox" id="backdrop"
            name="selectedBackdrop" />
          <label for="backdrop">Backdrop</label>
        </div>

        <div class="checkbox-wrapper">
          <input class="checkbox-input" checked v-model="selectedAnimation" type="checkbox" id="animation"
            name="selectedAnimation" />
          <label for="animation">Animation</label>
        </div>

        <div class="checkbox-wrapper">
          <input class="checkbox-input" v-model="openEventFlag" type="checkbox" id="open" name="selectedOpenEvent" />
          <label for="open">Open Event</label>
        </div>

        <div class="checkbox-wrapper">
          <input class="checkbox-input" v-model="closeEventFlag" type="checkbox" id="close" name="selectedCloseEvent" />
          <label for="close">Close Event</label>
        </div>

      </div>

      <div class="showcase">
        <b>Events : </b>
        <p v-if="openEvent !== ''">{{ openEventData }}</p>
        <p v-if="closeEvent !== ''">{{ closeEventData }}</p>
      </div>

      <HwDialog @open="openEvent" @close="closeEvent" v-model:open="isOpen" :position="selectedPosition"
        :size="selectedSize" :animation="selectedAnimation" :backdrop="selectedBackdrop">

        <template v-slot:header></template>

        <template v-slot:content></template>

        <template v-slot:footer></template>

      </HwDialog>

      <button class="modal-button" @click="openModal">
        Open Dialog
      </button>
    </div>

    <div>
      <h2>Customize Dialog Component</h2>
      <p>
        Dialog components provided 3 sections. Header, content and footer sections supported with vue.js slots. You can
        set your customized templates with classes to modal. Here is the sample:
      </p>

      <HwDialog @open="openEvent" @close="closeEvent" v-model:open="isCustomOpen" :position="selectedPosition"
        :size="selectedSize" :animation="selectedAnimation" :backdrop="selectedBackdrop">

        <template v-slot:header>
          <h1 class="header-custom">Title Here!!</h1>
        </template>

        <template v-slot:content>
          <p class="content-custom">Content Here!!</p>

        </template>

        <template v-slot:footer>
          <a href="#" class="button-custom">Footer Here!!</a>
        </template>


      </HwDialog>

      <div class="card-pre">
        <pre>
          <code class="language-html"> 
            &lt;HwDialog @open="openEvent" @close="closeEvent" position="center" size="md" :backdrop="false" :animation="true"&gt; 

            &lt;template v-slot:header&gt; 
              &lt;h1 class="header-custom"&gt; Title Here!! &lt;/h1&gt; 
            &lt;/template&gt; 

            &lt;template v-slot:content&gt; 
              &lt;p class="content-custom"&gt; Content Here!! &lt;/p&gt; 
            &lt;/template&gt; 

            &lt;template v-slot:footer&gt; 
              &lt;a href="#" class="button-custom"&gt; Footer Here!! &lt;/a&gt; 
            &lt;/template&gt; 

            &lt;/HwDialog&gt; 
          </code>
        </pre>
      </div>

      <button class="modal-button" @click="openCustomModal">
        Open Customize Dialog
      </button>
    </div>
  </div>
</template>


<script>
import HwDialog from '../../components/library/dialog/HwDialog.vue';
import DialogDemo from './DialogDemo.vue';

export default {
  name: "Dialog",
  data() {
    return {
      isOpen: false,
      isCustomOpen: false,
      selectedPosition: "center",
      selectedSize: "md",
      openEventData: "",
      closeEventData: "",
      selectedBackdrop: false,
      selectedAnimation: true,
      openEventFlag: false,
      closeEventFlag: false
    };
  },

  methods: {
    openModal() {
      this.isOpen = !this.isOpen
    },

    openCustomModal() {
      this.isCustomOpen = !this.isCustomOpen
    },

    openEvent() {
      if (this.openEventFlag) {
        this.openEventData = 'Open event triggered!'
      }
    },
    closeEvent() {
      if (this.closeEventFlag) {
        this.closeEventData = 'Close event triggered!'
      }
    },
    setSelected(selectedValue) {
      this.selectedPosition = selectedValue
    },
    setSize(selectedSize) {
      this.selectedSize = selectedSize
    },
  },
  components: { HwDialog, DialogDemo }
}

</script>

<style lang="scss" scoped>
.header-custom {
  color: blue;
  font-size: 36px;
}

.content {
  color: green;
}

.content-custom {
  color: red;
}

.button-custom {
  color: blue;
}

.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: palette-space-level(35);
  font-size: large;

  header {
    h1 {
      margin: palette-space-level(50);
    }
  }

  >div {
    padding: palette-space-level(15) palette-space-level(20);
    flex-direction: column;
    background: palette-color-level(white, 100);
    border-radius: palette-radius-level(5);
    box-shadow: 0 0 6px rgba(190, 190, 190, 0.44);
    display: flex;
    gap: palette-space-level(20);
    background: floralwhite;
    width: 100%;
    max-width: palette-space-level(1000);

    .select-wrapper {
      display: flex;
      justify-content: space-around;

      .select {
        width: 20%;
        padding: palette-space-level(5);
        border-radius: palette-radius-level(2);
      }

      .checkbox-wrapper {
        display: flex;
        align-items: center;

        .checkbox-input {
          margin-right: palette-space-level(5);
        }
      }

    }

    .showcase {
      margin-top: palette-space-level(30);
      margin-bottom: palette-space-level(30);
    }

    .modal-button {
      width: palette-space(space-200);
      height: palette-space(space-40);
      border-radius: palette-radius-level(4);
      border: none;
      cursor: pointer;
      margin: auto;

      &:hover {
        color: palette-color-level(primary, 100);
        background-color: palette-color-level(grey, 70);
      }
    }

    .card-pre {
      margin-bottom: 20px;

      pre {
        line-height: 1.2;
        background-color: palette-color-level(primary-dark, 100);
        border-radius: palette-radius-level(3);
        white-space: pre-wrap;
        overflow: auto;
        color: palette-color-level(primary-light, 100);
      }

      code {
        display: inline;
        padding: 0;
        margin: 0;
        overflow: visible;
        word-wrap: normal;
        background-color: transparent;
        border: 0;
      }
    }
  }

  &:last-child {
    margin-bottom: palette-space-level(400);
  }
}
</style>
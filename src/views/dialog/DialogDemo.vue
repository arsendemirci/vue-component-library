<template>
  <div class="wrapper">
    <h1>Dialog Component</h1>

    <div class="container">
      <div class="card">
        <div class="card-body">
          <h2 class="card-title"><span>👀</span>Overview</h2>
          <p class="card-text">This project is actually a part of a vue3 component library project that is under
            development
            right now. hw-dialog is a custom component that takes advantage of many features of Vue3.</p>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <h2 class="card-title"><span>🔫</span>Getting Started</h2>
          <p class="card-text">For hw-dialog there are some props and their default values are avaliable. You can see the
            other values on props table. See the code example below:</p>
        </div>
      </div>
      <div class="card-pre">
        <pre>
        <code class="language-html"> 
          &lt;HwDialog 
          @open="openEvent" @close="closeEvent" position="center" size="md" :backdrop="false" :animation="true"
          &gt; 
          &lt;/HwDialog&gt; 
        </code>
     </pre>
      </div>
      <div class="card">
        <div class="card-body">
          <h2 class="card-title"><span>💣</span>Features</h2>
          <ul class="card-list">
            <li>Header, body and footer contents supported customization by slots</li>
            <li>Dialog on hover displays a scroller when content exceeds viewport</li>
            <li>Open and close animations</li>
            <li>Optional animation display</li>
            <li>Backdrop opacity and elevated design</li>
            <li>Positioning options</li>
            <li>Size options</li>
            <li>Open and close methods and events</li>
            <li>No close on backdrop click option</li>
          </ul>

        </div>
      </div>
      <h2 class="card-title"><span>💊</span>Props</h2>
      <table class="table">
        <thead>
          <tr>
            <th>Props</th>
            <th>Type</th>
            <th>Default</th>
            <th>Options</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>position</td>
            <td>String</td>
            <td>center</td>
            <td>center, top, right, bottom, left</td>
            <td>Position options for modal component</td>
          </tr>
          <tr>
            <td>size</td>
            <td>String</td>
            <td>md</td>
            <td>xs, sm, md, lg, xl</td>
            <td>Size options for modal component</td>

          </tr>
          <tr>
            <td>backdrop</td>
            <td>Boolean</td>
            <td>false</td>
            <td>true, false</td>
            <td>Backdrop flag for closing modal when outside click</td>
          </tr>
          <tr>
            <td>animation</td>
            <td>Boolean</td>
            <td>true</td>
            <td>true, false</td>
            <td>Animation flag for modal openning and closing</td>
          </tr>

        </tbody>
      </table>

      <h2 class="card-title"><span>🌱</span>Events</h2>
      <table class="table">
        <thead>
          <tr>
            <th>Events</th>
            <th>Type</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Open</td>
            <td>Click</td>
            <td>Open Event Triggered!</td>
          </tr>
          <tr>
            <td>Close</td>
            <td>Click</td>
            <td>Close Event Triggered!</td>
          </tr>
        </tbody>
      </table>
    </div>

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
  components: { HwDialog }
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

.container {
  max-width: palette-space-level(1000);
  margin: 0 auto;
  padding: palette-space-level(20);
}

h1 {
  font-size: palette-font-size-level(14);
  margin-bottom: palette-space-level(20);
}

.card {
  border: 1px solid palette-color-level(grey, 10);
  border-radius: palette-radius-level(3);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-bottom: palette-space-level(20);
  background-color: palette-color-level(white, 100);
  ;

  .card-text {
    padding: 8px;
  }
}

.card-body {
  padding: 20px;
}

.card-list {
  list-style-type: square;
  margin: 10px;
  padding: 1px 0 2px 25px;
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

h2 {
  font-size: palette-font-size-level(9);
  margin: 0;
}

table {
  border-collapse: collapse;
  width: 100%;
  max-width: 100%;
  margin-bottom: 20px;
  background-color: palette-color-level(white, 100);
}

th,
td {
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid palette-color-level(grey, 60);
}

th {
  background-color: palette-color-level(grey, 80);
  font-weight: palette-font-weight-level(5);
}
</style>
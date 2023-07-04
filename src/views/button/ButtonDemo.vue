<template>
  <div class="container">
    <h1>Button Component</h1>
    <div class="card">
      <div class="card-body">
        <h2 class="card-title"><span>👀</span>Overview</h2>
        <p class="card-text">HwButton is a custom button component that aims to be a use for variety of scenarios.</p>
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <h2 class="card-title"><span>🔫</span>Getting Started</h2>
        <p class="card-text">You can use this component by sending either the button text in a <b>&lt;p&gt;&lt;/p&gt;</b>
          element or an icon or both. This will result in the default version of the button. See the code example below:
        </p>
      </div>
      <div class="card-body">
        <div class="card-pre">
          <pre>
              <code class="language-html">
                <p style="color: gray;margin-left: 30px;">// Text Button</p>
                &lt;hw-button :handler="handleClick"&gt;
                &lt;p&gt;Click Me&lt;/p&gt;
                &lt;/hw-button&gt;
                
                <p style="color: gray;margin-left: 30px;">// Icon Button</p>
                &lt;hw-button :handler="handleClick"&gt;
                  &lt;fa icon="code"&gt;&lt;/fa&gt;
                &lt;/hw-button&gt;

                <p style="color: gray;margin-left: 30px;">// Both</p>
                &lt;hw-button :handler="handleClick"&gt;
                  &lt;p&gt;Click Me&lt;/p&gt;
                  &lt;fa icon="code"&gt;&lt;/fa&gt;
                &lt;/hw-button&gt;
              </code>
          </pre>
        </div>
      </div>
      <div class="card-body">
        <p class="card-text">Which would return these default buttons.</p>
        <div style="display:flex;align-items: center;justify-content: flex-start;">
          <hw-button :handler="handleClick">
            <p>Click Me</p>
          </hw-button>
          <hw-button :handler="handleClick">
            <fa icon="code"></fa>
          </hw-button>
          <hw-button :handler="handleClick">
            <p>Click Me</p>
            <fa icon="code"></fa>
          </hw-button>
          <div v-if="isVisibleHiddenDiv">Nice click 👍</div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <h2 class="card-title"><span>💣</span>Features</h2>
        <ul class="card-list">
          <li>3 different variants: primary, secondary and tertiary</li>
          <li>Hover, elevate and click transitions</li>
          <li>Can be disabled</li>
          <li>Rectangular and pill shapes for regular buttons with circle option for icon buttons</li>
          <li>Custom spacing for seperating button contents</li>
          <li>5 different sizes and color available</li>
        </ul>

      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <h2 class="card-title"><span>💊</span>Props</h2>
        <table class="table">
          <thead>
            <tr>
              <th>Props</th>
              <th>Type</th>
              <th>Default</th>
              <th>Values</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>size</td>
              <td>String</td>
              <td>medium</td>
              <td>xsmall, small, medium, large, xlarge</td>
              <td>Defines the size of a button.</td>
            </tr>
            <tr>
              <td>btnStyle</td>
              <td>String</td>
              <td>primary</td>
              <td>primary, secondary, tertiary</td>
              <td>Defines the look of a button.</td>




            </tr>
            <tr>
              <td>shape</td>
              <td>String</td>
              <td>flat</td>
              <td>flat, round, circle</td>
              <td>Defines the shape of a button.</td>
            </tr>
            <tr>
              <td>btnColor</td>
              <td>String</td>
              <td>default</td>
              <td>default, optional, success, warning, danger</td>
              <td>Defines the color of a button.</td>
            </tr>
            <tr>
              <td>disableElevation</td>
              <td>Boolean</td>
              <td>false</td>
              <td>true, false</td>
              <td>Disables elevation effect and transition of a button.</td>
            </tr>
            <tr>
              <td>disabled</td>
              <td>Boolean</td>
              <td>false</td>
              <td>true, false</td>
              <td>Disables a button. Disabled buttons can't be interacted in any way.</td>
            </tr>
            <tr>
              <td>spacing</td>
              <td>Number</td>
              <td>10</td>
              <td>-</td>
              <td>Defines the spacing of a buttons content elements(such as the text and an icon of a button) in pixels.
              </td>
            </tr>
            <tr>
              <td>handler</td>
              <td>Function</td>
              <td>-</td>
              <td>-</td>
              <td>(Required)Button functionality will be provided through handler prop.A button can be obtained without
                one
                but it will be decorative.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <h2>Size</h2>
        <p>There are 5 different sizes of button to go with all kinds of needs.</p>


        <div class="btn-container">
          <hw-button size="xsmall" :handler="logHandler">
            <p>xsmall</p>
          </hw-button>
          <hw-button size="small" :handler="logHandler">
            <p>small</p>
          </hw-button>
          <hw-button size="medium" :handler="logHandler">
            <p>medium</p>
          </hw-button>
          <hw-button size="large" :handler="logHandler">
            <p>large</p>
          </hw-button>
          <hw-button size="xlarge" :handler="logHandler">
            <p>xlarge</p>
          </hw-button>
        </div>

      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <h2>Button Style</h2>
        <p>3 different styles for separating buttons of varying importance.</p>

        <div class="btn-container">
          <hw-button size="medium" :handler="logHandler" btnStyle="primary">
            <p>primary</p>
          </hw-button>
          <hw-button size="medium" :handler="logHandler" btnStyle="secondary">
            <p>secondary</p>
          </hw-button>
          <hw-button size="medium" :handler="logHandler" btnStyle="tertiary">
            <p>tertiary</p>
          </hw-button>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <h2>Shape</h2>
        <p>Flat, round and circle shapes can be used. Circle is advised to be used with icons.</p>

        <div class="btn-container">
          <hw-button size="medium" :handler="logHandler" btnStyle="primary" shape="flat">
            <p>flat</p>
          </hw-button>
          <hw-button size="medium" :handler="logHandler" btnStyle="primary" shape="round">
            <p>round</p>
          </hw-button>
          <hw-button size="medium" :handler="logHandler" btnStyle="primary" shape="circle">
            <fa icon="download"></fa>
          </hw-button>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <h2>Button Color</h2>
        <p>5 options available.</p>
        <div class="btn-container">
          <hw-button :handler="logHandler" btnColor="default">
            <p>default</p>
          </hw-button>
          <hw-button :handler="logHandler" btnColor="optional">
            <p>optional</p>
          </hw-button>
          <hw-button :handler="logHandler" btnColor="danger">
            <p>danger</p>
          </hw-button>
          <hw-button :handler="logHandler" btnColor="warning">
            <p>warning</p>
          </hw-button>
          <hw-button :handler="logHandler" btnColor="success">
            <p>success</p>
          </hw-button>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <h2>Elevation</h2>
        <p>Applied by default. Can be disabled.</p>
        <div class="btn-container">
          <hw-button :handler="logHandler">
            <p>enabled</p>
          </hw-button>
          <hw-button :handler="logHandler" disableElevation>
            <p>disabled</p>
          </hw-button>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <h2>Disable</h2>
        <p>Button can be disabled.</p>
        <div class="btn-container">
          <hw-button :handler="logHandler">
            <p>normal</p>
          </hw-button>
          <hw-button :handler="logHandler" disabled>
            <p>disabled</p>
          </hw-button>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <h2>Spacing</h2>
        <p>You can customize button spacing between content items.</p>
        <div class="btn-container">
          <hw-button :handler="logHandler">
            <p>10px</p>
            <p>default</p>
          </hw-button>
          <hw-button :handler="logHandler" :spacing="30">
            <p>30px</p>
            <p>customized</p>
          </hw-button>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <h2>Handler</h2>
        <p>Function to be called after button is clicked.</p>
        <div class="btn-container">
          <hw-button :handler="handlerExample" v-if="showBtn">
            <p>Don't Click</p>
          </hw-button>
          <span v-if="!showBtn">Told you.</span>
        </div>
      </div>
    </div>
    <div class="card btn-generator">
      <div class="card-body">
        <h2>Button Generator</h2>
        <p>Change the values and see the outcome.</p>
        <div class="flex-row">
          <div class="flex-col" style="width: 300px;">
            <label>size: </label>
            <hw-select :options="sizeOptions" v-model="size"></hw-select>
            <br />
            <label>btnStyle: </label>
            <hw-select :options="styleOptions" v-model="btnStyle"></hw-select>
            <br />
            <label>shape: </label>
            <hw-select :options="shapeOptions" v-model="shape"></hw-select>
            <br />
            <label>btnColor: </label>
            <hw-select :options="colorOptions" v-model="btnColor"></hw-select>
          </div>
          <div class="flex-col" style="width: 300px;">
            <label>disableElevation: </label>
            <hw-select :options="booleanOptions" v-model="disableElevation"></hw-select>
            <br />
            <label>disabled: </label>
            <hw-select :options="booleanOptions" v-model="disabled"></hw-select>
            <br />
            <label>spacing: </label>
            <input v-model="spacing" />
            <br />
            <label>Button text: </label>
            <input v-model="btnText" />
          </div>
        </div>
      </div>
      <div class="card-body">
        <p>Copy the code below to start using your button now! (btw you need to send your handler to button and replace
          the icon with yours)</p>
      </div>
      <div class="card-body">
        <pre>
                <code class="language-html">
                    &lt;hw-button 
                    :handler="" 
                    size="{{ size }}" 
                    btnStyle="{{ btnStyle }}" 
                    shape="{{ shape }}"
                    btnColor="{{ btnColor }}"<span v-if="disableElevation === 'true'">
                    disableElevation </span><span v-if="disabled === 'true'">
                    disabled </span>
                    :spacing="{{ spacing }}"&gt;<span v-if="btnText !== ''">
                        &lt;p&gt;{{ btnText }}&lt;/p&gt;</span>
                        &lt;fa icon="sliders"&gt;&lt;/fa&gt;
                    &lt;/hw-button&gt;
                </code>
            </pre>
      </div>
      <div class="card-body">
        <div class="btn-container">
          <hw-button :handler="logHandler" :size="size" :btnStyle="btnStyle" :shape="shape" :btnColor="btnColor"
            :disableElevation="disableElevation === 'true' ? true : false" :disabled="disabled === 'true' ? true : false"
            :spacing="spacing">
            <p v-if="btnText !== ''">{{ btnText }}</p>
            <fa icon="sliders"></fa>
          </hw-button>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>

import HwButton from '@lib/button/HwButton.vue';
import HwSelect from "@lib/select/HwSelect.vue";

export default {
  name: 'ButtonView',
  data() {
    return {
      message: 'Hello World!',
      isVisibleHiddenDiv: false,
      showBtn: true,
      btnText: 'change me',
      size: 'medium',
      btnStyle: 'primary',
      shape: 'flat',
      btnColor: 'default',
      disableElevation: 'false',
      disabled: 'false',
      spacing: 10,
      sizeOptions: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
      shapeOptions: ['flat', 'round', 'circle'],
      styleOptions: ['primary', 'secondary', 'tertiary'],
      colorOptions: ['default', 'optional', 'danger', 'success', 'warning'],
      booleanOptions: ['true', 'false'],
    }
  },
  components: { HwButton, HwSelect },
  methods: {
    handleClick() {
      this.isVisibleHiddenDiv = !this.isVisibleHiddenDiv
    },
    logHandler() {
      console.log("Click successful.");
    },
    handlerExample() {
      this.showBtn = false;
      setTimeout(() => {
        this.showBtn = true;
      }, 5000);
    },
  }
}
</script>
  
<style lang="scss" scoped>
.container {
  max-width: 960px;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
}

h1 {
  font-size: palette-font-size-level(14);
  margin-bottom: 20px;
}

.card {
  border: 1px solid palette-color-level(grey, 10);
  border-radius: palette-radius-level(3);
  // box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  box-shadow: 0 0 6px rgba(190, 190, 190, 0.44);
  margin-bottom: 20px;
  background-color: palette-color-level(white, 100);
  ;

  .card-text {
    padding: 8px;
  }
}

.card-body {
  padding: 26px;


  >h2 {
    margin-bottom: 12px
  }

  >p {
    margin-bottom: 6px;
  }


}

.card-list {
  list-style-type: square;
  margin: 10px;
  padding: 1px 0 2px 25px;
}

.card-pre {
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

.btn-generator {
  input {
    width: 260px;
    height: 41px;
    padding-left: 15px;
    font-size: 16px;
    font-weight: bold;
    border-radius: palette-radius-level(3);
    border: 1px solid palette-color-level(grey, 15);
    box-shadow: none;
    transition: all 0.24s ease-in-out;

    &:focus {
      border-color: palette-color-level(primary, 100);
      box-shadow: 0 0 10px palette-color-level(primary, 100);
      outline: none;
    }
  }

  label {
    color: palette-color-level(primary, 100);
  }

  pre {
    background-color: palette-color-level(primary-dark, 100);
    color: palette-color-level(primary-light, 100);
    white-space: pre-wrap;
    border-radius: palette-radius-level(3);
  }
}

.flex-col {
  display: flex;
  flex-direction: column;
}

.flex-row {
  display: flex;
  flex-direction: row;
}
</style>
  
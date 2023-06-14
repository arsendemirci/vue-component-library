<template>
    <div class="container">
      <div class="card">
        <div class="card-body">
          <h2 class="card-title"><span>👀</span>Overview</h2>
          <p class="card-text">HwButton is a custom button component that aims to be a use for variety of scenarios.</p>
        </div>
      </div>
      <div class="card">
       <div class="card-body">
        <h2 class="card-title"><span>🔫</span>Getting Started</h2>
        <p class="card-text">You can use this component by sending either the button text in a <b>&lt;p&gt;&lt;/p&gt;</b> element or an icon or both. This will result in the default version of the button. See the code example below:</p>
       </div>
      <div class="card-body">
        <div class="card-pre">
<pre>
    <code class="language-html">
        &lt;hw-button :handler="handleClick"&gt;
            &lt;p&gt;Click Me&lt;/p&gt;
        &lt;/hw-button&gt;
    </code>
</pre>
      </div>
      </div>
       <div class="card-body">
        <p class="card-text">Which would return this simple button.</p>
        <div style="display:flex;align-items: center;justify-content: flex-start;">
            <hw-button :handler="handleClick"><p>Click Me</p></hw-button>
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
          <td>Defines the spacing of a buttons content elements(such as the text and an icon of a button) in pixels.</td>
        </tr>
        <tr>
          <td>handler</td>
          <td>Function</td>
          <td>-</td>
          <td>-</td>
          <td>(Required)Button functionality will be provided through handler prop.A button can be obtained without one but it will be decorative.</td>
        </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import HwButton from '@lib/button/HwButton.vue';
  export default {
    name: 'ButtonDemo',
    data() {
      return {
        message: 'Hello World!',
        isVisibleHiddenDiv: false,
      }
    },
    components:{HwButton},
    methods:{
        handleClick(){
            this.isVisibleHiddenDiv=!this.isVisibleHiddenDiv
        }
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
    border-radius:  palette-radius-level(3);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
    background-color: palette-color-level(white, 100);;
    .card-text{
      padding: 8px;
    }
  }
  
  .card-body {
    padding: 20px;
  }
  .card-list{
    list-style-type: square;
    margin: 10px;
    padding: 1px 0 2px 25px;
  }
  .card-pre{
    pre {
      line-height: 1.2;
      background-color: palette-color-level(primary-dark, 100);
      border-radius:  palette-radius-level(3);
      white-space: pre-wrap;
      overflow: auto;
      color:palette-color-level(primary-light, 100);
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
  
  th, td {
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid palette-color-level(grey, 60);
  }
  
  th {
    background-color: palette-color-level(grey, 80);
    font-weight: palette-font-weight-level(5);
  }
  
  </style>
  
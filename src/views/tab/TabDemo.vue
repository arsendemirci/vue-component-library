<template>
  <div class="container">
    <div class="card">
      <div class="card-body">
        <h2 class="card-title"><span>👀</span>Overview</h2>
        <p class="card-text">The package contains a Vue component to easily display some tabs and that package contains a lot of features </p>
      </div>
    </div>
    <div class="card">
     <div class="card-body">
      <h2 class="card-title"><span>🔫</span>Getting Started</h2>
      <p class="card-text">
        For hw-tab to work properly, you basically need to provide a set of tabs and there is activeTab property to get the active tab value, if you want to choose which tab will be active you have to use the active property and give it a valid value. See the code example below:</p>
     </div>
    </div>
    <div class="card-pre">
      <pre>
      <code class="language-html">
        &lt;hw-tab
            :tabs="basicTabs"
             @activeTab="activeTabHandler"&gt;
             active="tab2"&gt;

            &lt;template #content="{ active }"&gt;
                &lt;div  v-for="(tab) in basicTabs"&gt;
                    &lt;template v-if="active === tab.value"&gt;
                           &lt;p { tab.content } /p&gt;
                    &lt;/template&gt;
                &lt;/div &gt;
            &lt;/template&gt;

        &lt;/hw-tab&gt;

        &lt;div&gt;
               Model Value : &lt;span class="value"&gt;{{ friend }}&lt;/span&gt;
        &lt;/div&gt;

        &lt;script setup&gt;
        // to store the tabs
         const basicTabs = ref([
            { content:'Tab1', value:'tab1' },
            { content:'Tab2', value:'tab2' },
            { content:'Tab3', value:'tab3' },
            { content:'Tab4', value:'tab4'}
        ]);

     // to store the active tab value
        const activeTabValue = ref();

     // to get the active tab value
        const activeTabHandler = tab => {
          if (!tab) return;
            activeTabValue.value = tab
        }
        &lt;/script&gt;
      </code>
   </pre>
    </div>
    <div class="card">
      <div class="card-body">
        <h2 class="card-title"><span>💣</span>Features</h2>
        <ul class="card-list">
          <li>Two way data binding with v-model capability</li>
          <li>hw-tab basically works with an array of objects and this should include the content and value attribute</li>
          <li>Polished UX with CSS transitions on all UI events</li>
          <li>This component contains as optional four features vertical mode, Scrollable mode, tab with Icon, and Disabled mode</li>
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
        <th>Description</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>tabs</td>
        <td>Array</td>
        <td>[]</td>
        <td>(required) tab array to show tab</td>
      </tr>
      <tr>
        <td>active-tab</td>
        <td>function</td>
        <td>return active tab value</td>
        <td>(optional) to get active tab value</td>
      </tr>
      <tr>
        <td>active</td>
        <td>String</td>
        <td>Empty</td>
        <td>(optional) select the tab you want active</td>
      </tr>
      <tr>
        <td>vertical</td>
        <td>Boolean</td>
        <td>Empty</td>
        <td>(optional) for vertical mode</td>
      </tr>
      <tr>
        <td>disabled</td>
        <td>Boolean</td>
        <td>Empty</td>
        <td>(optional) for the tab you want to be disable, you need to add the disabled property and value to the tabs Array</td>
      </tr>
      <tr>
        <td>scrollable</td>
        <td>Boolean</td>
        <td>Empty</td>
        <td>(optional) for scrollable mode</td>
      </tr>
      <tr>
        <td>icon</td>
        <td>Boolean</td>
        <td>Empty</td>
        <td>(optional) for the tab you want to be icon, you need to add the value property to the tabs Array</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

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
   margin-bottom: 20px;
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

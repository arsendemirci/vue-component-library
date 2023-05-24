<template>
  <div class="container">
    <div class="card">
      <div class="card-body">
        <h2 class="card-title"><span>👀</span>Overview</h2>
        <p class="card-text">This project is actually a part of a vue3 component library project that is under development right now. ag-select is a custom component that takes advantage of many features of Vue3 and facilitates two way data binding with v-model.</p>
      </div>
    </div>
    <div class="card">
     <div class="card-body">
      <h2 class="card-title"><span>🔫</span>Getting Started</h2>
      <p class="card-text">For ag-select to work correctly basically you need to provide options array and a placeholder. See the code example below:</p>
     </div>
    </div>
    <div class="card-pre">
      <pre>
      <code class="language-html">
        &lt;hw-select
            :options="['Ross', 'Rachel', 'Chandler', 'Monica', 'Joey', 'Phoebe']" placeholder="Select a Friend"
            v-model="friend" &gt;
        &lt;/hw-select&gt;

        &lt;div&gt;
               Model Value : &lt;span class="value"&gt;{{ friend }}&lt;/span&gt;
        &lt;/div&gt;

        &lt;script&gt;
            export default {
                  data() {
                      return {
                            friend: ""
                      };
                  },
            };
        &lt;/script&gt;
      </code>
   </pre>
    </div>
    <div class="card">
      <div class="card-body">
        <h2 class="card-title"><span>💣</span>Features</h2>
        <ul class="card-list">
          <li>Two way data binding with v-model capability</li>
          <li>Works fine with either array of objects or array of strings and numbers</li>
          <li>Polished UX with CSS transitions on all UI events</li>
          <li>Automatically positions option list according to space available above or below the select wrapper</li>
          <li>  Optional search capabality</li>
          <li> Clear the state and model ✖️ button.</li>
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
        <td>options</td>
        <td>Array</td>
        <td>[]</td>
        <td>(required) Array of options to select from</td>
      </tr>
      <tr>
        <td>read-text</td>
        <td>String</td>
        <td>Empty</td>
        <td>(required if only options is array of objects) name of the property from options object array to be considered as option text</td>




      </tr>
      <tr>
        <td>read-value</td>
        <td>String</td>
        <td>Empty</td>
        <td>(required if only options is array of objects) name of the property from options object array to be considered as option value</td>
      </tr>
      <tr>
        <td>placeholder</td>
        <td>String</td>
        <td>Empty</td>
        <td>(optional) text for the placeholder</td>
      </tr>
      <tr>
        <td>search</td>
        <td>Boolean</td>
        <td>False</td>
        <td>(optional) toggle the search functionality</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'MyComponent',
  data() {
    return {
      message: 'Hello World!'
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
  font-weight: bold;
}

</style>

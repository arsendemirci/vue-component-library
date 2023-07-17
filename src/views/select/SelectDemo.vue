<template>
  <div class="wrapper">
    <h1 slot="header">Select Components</h1>
    <div class="container">
      <div class="card">
        <div class="card-body">
          <h2 class="card-title"><span>👀</span>Overview</h2>
          <p class="card-text">This project is actually a part of a vue3 component library project that is under
            development
            right now. hw-select is a custom component that takes advantage of many features of Vue3 and facilitates two
            way
            data binding with v-model.</p>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <h2 class="card-title"><span>🔫</span>Getting Started</h2>
          <p class="card-text">For hw-select to work correctly basically you need to provide options array and a
            placeholder. See the code example below:</p>
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
            <li> Optional search capabality</li>
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
            <td>(required if only options is array of objects) name of the property from options object array to be
              considered as option text</td>
          </tr>
          <tr>
            <td>read-value</td>
            <td>String</td>
            <td>Empty</td>
            <td>(required if only options is array of objects) name of the property from options object array to be
              considered as option value</td>
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
    <div>
      <h2>Primitive model example</h2>
      <p>
        You can output a primitive value while your list is still with key and
        values as in the example below:
      </p>
      <hw-select :options="languages" read-text="text" read-value="id" placeholder="Select Language"
        v-model="model1"></hw-select>
      <div class="v-model">
        Model Value : <span class="value">{{ model1 }}</span>
      </div>
    </div>
    <div>
      <h2>Object model example</h2>
      <p>
        If you need both key and value as an object binded to the component
        check this example:
      </p>
      <hw-select :options="languages" read-text="text" read-value="id" placeholder="Select Language"
        v-model="model2"></hw-select>
      <div class="v-model">
        Model Value : <span class="value">{{ model2 }}</span>
      </div>
    </div>
    <div>
      <h2>Select with search</h2>
      <p>
        Search functionality is optional you can enable it by just adding
        <b>search</b> attribute, see example below:
      </p>
      <hw-select :options="languages" read-text="text" read-value="id" placeholder="Select Language" search
        v-model="model3"></hw-select>
      <div class="v-model">
        Model Value : <span class="value">{{ model3 }}</span>
      </div>
    </div>
    <div>
      <h2>Select from array of strings</h2>
      <p>
        You can populate the select list with array of primitives instead of
        objects, your model output will be primitive automatically.
      </p>
      <hw-select :options="friends" placeholder="Select Friend" v-model="model4"></hw-select>
      <div class="v-model">
        Model Value : <span class="value">{{ model4 }}</span>
      </div>
    </div>
    <div>
      <h2>Select With Custom Template</h2>
      <p>
        you can use <b>option</b> slot to customize the select item with your
        own template, see the example:
      </p>
      <hw-select :options="languages" read-value="id" read-text="text" placeholder="Select Language"
        v-model="model5"><template #option="{ value, text }">
          <div class="option">
            <div class="option-value">{{ value }}</div>
            <div class="option-text">{{ text }}</div>
          </div>
        </template>
      </hw-select>
      <div class="v-model">
        Model Value : <span class="value">{{ model5 }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import HwSelect from "@lib/select/HwSelect.vue";
export default {
  name: "App",
  data() {
    return {
      friend: "",
      model1: 12,
      model2: { value: 1, text: "VueJS" },
      model3: { value: 3, text: "Angular" },
      model4: "",
      model5: null,
      languages: [
        { id: 1, text: "VueJS" },
        { id: 2, text: "ReactJS" },
        { id: 3, text: "Angular" },
        { id: 4, text: "JavaScript" },
        { id: 5, text: "Go" },
        { id: 6, text: "Java" },
        { id: 7, text: "Python" },
        { id: 8, text: "ASP.NET" },
        { id: 9, text: "C#" },
        { id: 10, text: "Perl" },
        { id: 11, text: "Swift" },
        { id: 12, text: "TypeScript" },
        { id: 13, text: "PHP" },
        { id: 14, text: "Kotlin" },
        { id: 15, text: "Ruby" },
        { id: 16, text: "Rust" },
      ],
      friends: ["Ross", "Rachel", "Chandler", "Monica", "Joey", "Phoebe"],
    };
  },
  components: {
    HwSelect
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
          border-width: palette-space-level(5);
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

.container {

  max-width: 960px;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;


  h1 {
    font-size: palette-font-size-level(14);
    margin-bottom: 20px;
  }

  .card {
    border: 1px solid palette-color-level(grey, 10);
    border-radius: palette-radius-level(3);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
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
}
</style>

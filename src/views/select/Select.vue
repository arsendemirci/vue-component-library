<template>
  <div class="wrapper">
    <h1 slot="header">Select Components</h1>
    <select-demo></select-demo>
    <div>
      <h2>Primitive model example</h2>
      <p>
        You can output a primitive value while your list is still with key and
        values as in the example below:
      </p>
      <hw-select
          :options="languages"
          read-text="text"
          read-value="id"
          placeholder="Select Language"
          v-model="model1"
      ></hw-select>
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
      <hw-select
          :options="languages"
          read-text="text"
          read-value="id"
          placeholder="Select Language"
          v-model="model2"
      ></hw-select>
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
      <hw-select
          :options="languages"
          read-text="text"
          read-value="id"
          placeholder="Select Language"
          search
          v-model="model3"
      ></hw-select>
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
      <hw-select
          :options="friends"
          placeholder="Select Friend"
          v-model="model4"
      ></hw-select>
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
      <hw-select
          :options="languages"
          read-value="id"
          read-text="text"
          placeholder="Select Language"
          v-model="model5"
      ><template #option="{ value, text }">
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
import SelectDemo from "./SelectDemo.vue";
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
    SelectDemo,
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
  > div {
    padding:palette-space-level(15) palette-space-level(20);
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

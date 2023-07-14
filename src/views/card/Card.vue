<template>
  <div class="wrapper">
    <h1 slot="header">Card Components</h1>
    <div class="container">
      <div class="card">
        <div class="card-body">
          <h2 class="card-title"><span>👀</span>Overview</h2>
          <p class="card-text">
            This page showcases the card future component that we created using
            Vue.js. The card future component is a responsive and customizable
            element that displays an image, a title, and a description. You can
            use it to highlight your products, services, or features on your
            website. You can also adjust the colors, fonts, and sizes of the
            card future component to suit your design preferences.
          </p>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <h2 class="card-title"><span>🔫</span>Getting Started</h2>
          <p class="card-text">
            For use ag-card you need basicly nothing. Just select fields what
            you desire and start to use the feature.
          </p>
        </div>
      </div>
      <div class="card-pre">
        <pre>
        <code class="language-html">
          &lt;hw-card
              v-model="friend" &gt;
          &lt;/hw-card&gt;
  
  
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
            <li>
              Works fine with either array of objects or array of strings and
              numbers
            </li>
            <li>Polished UX with CSS transitions on all UI events</li>
            <li>
              Automatically positions option list according to space available
              above or below the card wrapper
            </li>
            <li>Optional search capabality</li>
            <li>Clear the state and model ✖️ button.</li>
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
            <td>(required) Array of options to card from</td>
          </tr>
          <tr>
            <td>read-text</td>
            <td>String</td>
            <td>Empty</td>
            <td>
              (required if only options is array of objects) name of the
              property from options object array to be considered as option text
            </td>
          </tr>
          <tr>
            <td>read-value</td>
            <td>String</td>
            <td>Empty</td>
            <td>
              (required if only options is array of objects) name of the
              property from options object array to be considered as option
              value
            </td>
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
    <hr />

    <hw-card
      title="Title"
      header="Header"
      subtitle="Subtitle"
      image-path="../../../assets/300x300.png"
      image-alt="1000 x 300 cool image"
      style=""
    >
      <div class="card-dynamic-content">
        <hw-card-text>
          ipsum, dolor sit amet consectetur adipisicing elit. Deserunt quasi qui
          numquam exercitationem dolore nostrum libero doloremque fugiat nisi,
          officia praesentium fuga quisquam culpa et recusandae inventore
          accusamus non ab sapiente aliquid eius laboriosam. Quod voluptas
          adipisci ab ducimus at incidunt aspernatur magni alias architecto
          eligendi. Atque veniam esse iste.
        </hw-card-text>

        <hw-button> Save </hw-button>
      </div>
    </hw-card>
    
  </div>
</template>
<script>
import HwCard from "@lib/card/HwCard.vue";
import HwCardText from "../../components/library/card/HwCardText.vue";
import HwButton from "../../components/library/card/HwButton.vue";
export default (await import("vue")).defineComponent({
 
  components: {
    HwCard,
    HwCardText,
    HwButton,
  },
  methods: {},
});
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container {
  margin: palette-space-level(10) auto;
  max-width: 960px;
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
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  background-color: palette-color-level(white, 100);

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
  padding-left: 25px;
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

.flex {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  .flex-example-2 {
    flex: 1 0 21%;
  }
}

.visibility-label {
  margin: palette-space-level(10) 0;
}

.visibility-input {
  margin: 0 palette-space-level(5);
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


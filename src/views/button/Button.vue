<template>
    <div class="wrapper">
        <h1>Button Component</h1>
        <ButtonDemo></ButtonDemo>
        <div class="card">
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
        <div class="card">
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
        <div class="card">
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
        <div class="card">
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
        <div class="card">
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
        <div class="card">
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
        <div class="card">
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
        <div class="card">
            <h2>Handler</h2>
            <p>Function to be called after button is clicked.</p>
            <div class="btn-container">
                <hw-button :handler="handlerExample" v-if="showBtn">
                    <p>Don't Click</p>
                </hw-button>
                <span v-if="!showBtn">Told you.</span>
            </div>
        </div>
        <div class="card btn-generator">
            <h2>Button Generator</h2>
            <p>Change the values and see the outcome.</p>
            <label>size: </label>
            <hw-select :options="sizeOptions" v-model="size"></hw-select>
            <label>btnStyle: </label>
            <hw-select :options="styleOptions" v-model="btnStyle"></hw-select>
            <label>shape: </label>
            <hw-select :options="shapeOptions" v-model="shape"></hw-select>
            <label>btnColor: </label>
            <hw-select :options="colorOptions" v-model="btnColor"></hw-select>
            <label>disableElevation: </label>
            <hw-select :options="booleanOptions" v-model="disableElevation"></hw-select>
            <label>disabled: </label>
            <hw-select :options="booleanOptions" v-model="disabled"></hw-select>
            <label>spacing: </label>
            <input v-model="spacing"/>
            <label>Button text: </label>
            <input v-model="btnText"/>
            <p><b>Copy the code below to start using your button now!(btw you need to send your handler to button)</b></p>
            <pre>
                <code class="language-html">
                    &lt;hw-button 
                    :handler="" 
                    :size="{{ size }}" 
                    :btnStyle="{{ btnStyle }}" 
                    :shape="{{ shape }}"
                    :btnColor="{{ btnColor }}"<span v-if="disableElevation === 'true'">
                    disableElevation </span><span v-if="disabled === 'true'">
                    disabled </span>
                    :spacing="{{ spacing  }}"&gt;<span v-if="btnText !== ''">
                        &lt;p&gt;{{ btnText }}&lt;/p&gt;</span>
                        &lt;fa icon="sliders"&gt;&lt;/fa&gt;
                    &lt;/hw-button&gt;
                </code>
            </pre>
            <div class="btn-container">
                <hw-button :handler="logHandler" :size="size" :btnStyle="btnStyle" :shape="shape" :btnColor="btnColor" :disableElevation="disableElevation === 'true' ? true : false" :disabled="disabled === 'true' ? true : false" :spacing="spacing">
                    <p v-if="btnText !== ''">{{ btnText }}</p>
                    <fa icon="sliders"></fa>
                </hw-button>
                <span v-if="!showBtn">Told you.</span>
            </div>
        </div>
    </div>
</template>

<script>
import HwButton from '@lib/button/HwButton.vue';
import HwSelect from "@lib/select/HwSelect.vue";
import ButtonDemo from './ButtonDemo.vue';
export default {
    name:"ButtonView",
    components:{HwButton, HwSelect, ButtonDemo},
    data() {
    return {
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
      colorOptions:['default', 'optional', 'danger', 'success', 'warning'],
      booleanOptions: ['true', 'false'],
    };
  },
    methods: {
        logHandler(){
            console.log("Click successful.");
        },
        handlerExample(){
            this.showBtn = false;
            setTimeout(() => {
                this.showBtn = true;
            }, 5000);
        },
    }
}
</script>

<style lang="scss" scoped>
.wrapper{
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
  .card {
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
    // .v-model {
    //   .value {
    //     font-weight: palette-font-weight-level(5);
    //     font-size: large;
    //   }
    // }

    // .option {
    //   display: flex;

    //   &:hover {
    //     .option-value {
    //       border-color: palette-color-level(white, 100);
    //       border-width: palette-space-level(4);
    //     }
    //   }
    //   &-value {
    //     padding-right: palette-space-level(10);
    //     border-right: 1px solid palette-color-level(primary-alt, 100);
    //     transition: all 0.2s cubic-bezier(0.5, 0, 0, 1.25);
    //   }
    //   &-text {
    //     padding-left: palette-space-level(10);
    //   }
    // }
    .btn-container{
        background-color: white;
        border-radius: inherit;
        width: fit-content;
    }
  }
  .btn-generator{
    input{
        width: 260px;
        height: 30px;
        padding-left: 15px;
        font-size: 16px;
        font-weight: bold;
    }
    pre{
        background-color: palette-color-level(primary-dark, 100);
        color:palette-color-level(primary-light, 100);
        white-space: pre-wrap;
    }
  }
}
</style>
<template>
  <div class="wrapper">
    <h1>Dialog Component</h1>

    <DialogDemo />

    <div>
      <h2>Default Dialog Component</h2>
      <p>
        Dialog components can provide some content and action input from user when needed. This is default dialog and
        centered on the page whit animation.
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
          <input
            class="checkbox-input"
            v-model="selectedBackdrop"
            type="checkbox"
            id="backdrop"
            name="selectedBackdrop"
            :value="selectedBackdrop"
            />
          <label for="backdrop">Backdrop</label>
        </div>

        <div class="checkbox-wrapper">
          <input
            class="checkbox-input"
            checked
            v-model="selectedAnimation"
            type="checkbox"
            id="animation"
            name="selectedAnimation"
            :value="selectedAnimation"
            />
          <label for="animation">Animation</label>
        </div>
      </div>

      <HwDialog :position="selectedPosition" :size="selectedSize" :animation="selectedAnimation" :backdrop="selectedBackdrop">
        <template v-slot:header>Use Huawei's location service?</template>
        <template v-slot:content>Let Huawei help apps determine location. This means sending anonymous location data to
          Huawei, even when no apps are running. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quos
          et suscipit totam quis, provident delectus, eos laborum veniam accusantium corrupti animi doloremque sit quaerat
          sapiente iusto facere, aperiam dolorum.
          Atque, maxime deserunt error corporis, sequi fugiat dignissimos delectus, voluptatum deleniti aliquam
          praesentium ullam. Voluptate rem, deserunt nobis voluptatem ad dignissimos aspernatur eaque delectus sed
          eligendi, itaque voluptatibus doloremque neque!
          Itaque odio autem odit magni illum? Ipsum sapiente, aliquam id voluptatibus cumque odit molestiae sit corrupti
          quos, placeat quas tempore magni quibusdam quidem, dignissimos nulla ab asperiores illum reprehenderit minima.
        </template>

        <template v-slot:footer-agree>Agree</template>
        <template v-slot:footer-cancel>Cancel</template>

      </HwDialog>
    </div>
  </div>
</template>


<script>
import HwDialog from '../../components/library/select/HwDialog.vue';
import DialogDemo from './DialogDemo.vue';

export default {
  name: "Dialog",
  data() {
    return {
      selectedPosition: "center",
      selectedSize: "md",
      selectedBackdrop: false,
      selectedAnimation: true
    };
  },
  methods: {
    setSelected(selectedValue) {
      this.selectedPosition = selectedValue
    },

    setSize(selectedSize) {
      this.selectedSize = selectedSize
    },

    setBackdrop(event) {
      this.selectedBackdrop = event.target.value
      console.log(this.selectedBackdrop);
      // return this.selectedBackdrop
    },

    setAnimation(selectedAnimation) {
      this.selectedAnimation = selectedAnimation
      console.log(this.selectedAnimation);
    }
  },
  components: { HwDialog, DialogDemo }
}

</script>

<style lang="scss" scoped>
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
  }

  &:last-child {
    margin-bottom: palette-space-level(400);
  }
}</style>
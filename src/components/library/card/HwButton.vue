<template>
  <div class="card-buttons card-content">
    <Transition>
      <button class="hw-button orange"><slot>Ok</slot></button>
    </Transition>
  </div>
</template>

<style lang="scss" scoped>
.hw-button {
  margin-top: palette-space-level(10);

  color: palette-color-level(white, 100);
  border: none;
  border-radius: palette-radius-level(5);
  width: 100%;
  height: 30px;
  cursor: pointer;
}

.hw-button.orange {
  background-color: palette-color-level(orange, 10);
}
</style>

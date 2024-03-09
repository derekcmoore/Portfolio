<template>
  <div>
    <input
      type="checkbox"
      v-model="toggled"
      class="checkbox"
      id="checkbox"
      @change="toggle()"
    />
    <label for="checkbox" class="checkbox-label">
      <img :src="require(`@/assets/img/icons/moon.svg`)" alt="" class="moon" />
      <img :src="require(`@/assets/img/icons/sun.svg`)" alt="" class="sun" />
      <span class="ball"></span>
    </label>
  </div>
</template>

<script>
export default {
  name: "ToggleSlider",
  props: {
    is_toggled: Boolean,
  },
  computed: {},
  data() {
    return {
      toggled: this.is_toggled,
    };
  },
  components: {},
  created() {},
  destroyed() {},
  methods: {
    toggle() {
      this.$emit("toggle", this.toggled);
    },
  },
};
</script>

<style scoped lang="scss">
.checkbox {
  opacity: 0;
  position: absolute;
}

.checkbox-label {
  background-color: $grey;
  width: 50px;
  height: 26px;
  border-radius: 50px;
  position: relative;
  padding: 5px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

img {
  width: 15px;
  height: 15px;
  &.moon {
    filter: invert(71%) sepia(80%) saturate(1115%) hue-rotate(1deg)
      brightness(106%) contrast(89%);
  }

  &.sun {
    filter: invert(90%) sepia(20%) saturate(6399%) hue-rotate(342deg)
      brightness(98%) contrast(108%);
  }
}

.checkbox-label .ball {
  background-color: $white;
  width: 22px;
  height: 22px;
  position: absolute;
  left: 2px;
  top: 2px;
  border-radius: 50%;
  transition: transform 0.2s linear;
}

.checkbox:checked + .checkbox-label .ball {
  transform: translateX(24px);
}
</style>

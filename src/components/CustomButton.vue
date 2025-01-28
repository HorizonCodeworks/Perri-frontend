<template>
  <q-btn
    :label="label"
    :icon="icon"
    :color="color"
    :outline="outline"
    :to="to"
    class="custom-button"
  />
</template>

<script>
export default {
  name: "CustomButton",
  props: {
    label: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      default: null,
    },
    color: {
      type: String,
      default: "primary",
    },
    outline: {
      type: Boolean,
      default: true,
    },
    to: {
      type: [String, Object],
      default: null,
    },
  },
};
</script>

<style scoped>
.custom-button {
  margin: 10px;
  border-radius: 8px;
}
</style>

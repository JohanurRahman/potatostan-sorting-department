<template>
  <v-dialog v-model="show" max-width="540">
    <v-card>
      <div class="card-container">
        <button class="card-container__icon" @click.stop="show = false">
          <v-icon> mdi-close </v-icon>
        </button>
        <img class="mb-5" src="../assets/successful_check.svg" width="60" alt="">
        <h3 class="mb-2">Sorted Successfully</h3>
        <p class="mb-0">Your Score: {{ score }}</p>
      </div>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "SuccessfulDialog",
  props: {
    value: Boolean,
    score: {
      default: 0,
      required: false
    }
  },
  computed: {
    show: {
      get() {
        return this.value;
      },
      set(value) {
        this.resetData();
        this.$emit("input", value);
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.card-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  position: relative;
  &__icon {
    position: absolute;
    top: 8px;
    right: 15px;
    .v-icon::before {
      font-size: 18px;
    }
  }
}
</style>

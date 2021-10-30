<template>
  <v-dialog v-model="show" max-width="437px">
    <v-card>
      <div class="dialog-header">
        <h3 class="dialog-header__title">How many people?</h3>
        <button @click="closeDialog()">
          <v-icon class="dialog-header__icon"> mdi-close </v-icon>
        </button>
      </div>

      <v-divider class="dialog-divider"></v-divider>

      <div class="dialog-content">
        <p class="dialog-content__title">
          Enter a number of how many people you want to add to the list.
        </p>
        <input type="number" class="form-container__control" :class="{ 'input-error': validationError.show }"
            v-model="numberOfPeople" @keyup="validationError = validateInput($event.target.value)"/>

        <p v-if="validationError.show" class="error-message">
          {{ validationError.message }}
        </p>
      </div>

      <v-divider class="dialog-divider"></v-divider>

      <div class="dialog-actions">
        <v-btn class="button button--grey" v-ripple="false" @click="closeDialog()">
          Cancel
        </v-btn>
        <v-btn class="button button--color" v-ripple="false" @click="submit()">
          Start
        </v-btn>
      </div>
    </v-card>
  </v-dialog>
</template>

<script>
import validationMixin from "../mixins/validationMixin";

export default {
  name: "Dialog",
  mixins: [validationMixin],
  data: () => ({
    numberOfPeople: null,
    validationError: {
      show: false,
      message: null,
    },
  }),
  props: {
    value: Boolean,
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
  methods: {
    submit() {
      if (this.numberOfPeople === null || this.numberOfPeople === "") {
        this.validationError = this.constructValidationObj(true, "This field is required");
        return;
      }
      this.$emit("peopleCount", this.numberOfPeople);
      this.closeDialog();
    },
    resetData() {
      this.numberOfPeople = null;
      this.validationError = { show: false, message: null };
    },
    closeDialog() {
      this.show = false;
    }
  },
}
</script>

<style lang="scss">
@import "../scss/button";
@import "../scss/dialog";
@import "../scss/form";
</style>

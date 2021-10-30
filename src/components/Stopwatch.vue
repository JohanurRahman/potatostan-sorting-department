<template>
  <div id="stopwatch">
    <p>{{ formattedElapsedTime }}</p>
  </div>
</template>

<script>
export default {
  name: "Stopwatch",
  data: () => ({
    elapsedTime: 0,
    timer: undefined
  }),
  computed: {
    formattedElapsedTime() {
      const date = new Date(null);
      date.setSeconds(this.elapsedTime / 1000);
      const utc = date.toUTCString();
      return utc.substr(utc.indexOf(":") - 2, 8);
    },
  },
  methods: {
    start() {
      this.timer = setInterval(() => {
        this.elapsedTime += 1000;
      }, 1000);
    },
    stop() {
      clearInterval(this.timer);
    },
    reset() {
      this.elapsedTime = 0;
    },
  },
}
</script>

<style scoped>

</style>

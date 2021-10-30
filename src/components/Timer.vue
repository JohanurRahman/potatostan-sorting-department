<template>
  <div id="Timer">
    <p class="timer-title">{{ formattedElapsedTime }}</p>
  </div>
</template>

<script>
export default {
  name: "Timer",
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
      this.elapsedTime = 0;
      if (this.timer) {
        this.stop();
      }
      this.timer = setInterval(() => {
        this.elapsedTime += 1000;
      }, 1000);
    },
    stop() {
      clearInterval(this.timer);
    }
  },
}
</script>

<style scoped>
.timer-title {
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 0;
}
</style>

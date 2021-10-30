<template>
  <div id="notFound" class="not-found-container">
    <h1>No Records Found</h1>
    <p>Click 'Start Sorting' to generate data</p>
  </div>
</template>

<script>
export default {
  name: "NotFound"
}
</script>

<style lang="scss" scoped>
.not-found-container {
  display: flex ;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  h1 {
    font-size: 30px;
    color: rgba(10, 15, 20, 0.75);
    margin-bottom: 8px;
  }
  p {
    font-size: 14px;
  }
}
</style>

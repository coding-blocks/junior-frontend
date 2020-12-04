<template>
  <div class="s-50x50">
    <svg
      class="radial-progress orange"
      :data-progress="progress"
      x="0px"
      y="0px"
      viewBox="0 0 80 80"
    >
      <path class="track" d="M5,40a35,35 0 1,0 70,0a35,35 0 1,0 -70,0" />
      <path class="fill" d="M5,40a35,35 0 1,0 70,0a35,35 0 1,0 -70,0" />
    </svg>
  </div>
</template>

<script>
export default {
  props: ['progress'],
}
</script>

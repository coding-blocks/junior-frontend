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
  mounted: function () {
    var max = -219.99078369140625
    forEach(document.querySelectorAll('.radial-progress'), function (
      index,
      value
    ) {
      percent = value.getAttribute('data-progress')
      value
        .querySelector('.fill')
        .setAttribute(
          'style',
          'stroke-dashoffset: ' + ((100 - percent) / 100) * max
        )
    })
  },
  methods: {
    foreach(array, callback, scope) {
      for (var i = 0; i < array.length; i++) {
        callback.call(scope, i, array[i])
      }
    },
  },
}
</script>

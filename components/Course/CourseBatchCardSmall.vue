<template>
  <div class="card">
    <div class="row no-gutters justify-content-between align-items-center">
      <div class="br-20 bg-white all-center p-10">
        <img src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/python-purple.svg">
      </div>
      <div class="flex-1 t-align-r premium-tag side-tag side-tag--right">
        <div class="font-5">PREMIUM</div>
        <div class="heading-5 bold text-orange">Rs 149 / Class</div>
      </div>
    </div>
    <div class="mt-20">
      <div class="heading-4 bold">Introduction to python</div>
      <div class="mt-10 font-5 bold">Language: Hindi | Size: 01</div>
    </div>
    <button class="button-primary mt-30">Start Learning</button>
  </div>
</template>

<style scoped>
  .premium-card {
    background: linear-gradient(90deg, #4f33da, #6536de);
    color: white;
  }

  .premium-tag {
    display: none;
  }

  .premium-card > .premium-tag {
    display: block;
  }
</style>
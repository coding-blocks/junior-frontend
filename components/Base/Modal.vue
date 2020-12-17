<template>
  <transition name="Modal">
    <div class="modal-mask" @click="$emit('close')">
      <div class="modal-wrapper">
        <div class="modal-container" @click.stop="">
          <img src="https://minio.codingblocks.com/amoeba/close.svg" class="s-40x40 fa-window-close" @click="$emit('close')" />
          <div class="modal-content">
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<style>
.modal-mask {
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(51, 51, 51, 0.9);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  position: relative;
  width: 70%;
  /* min-height: 80%; */
  /* height: 100%; */
  /* max-height: 5000px;
  height: auto; */
  max-height: 80vh;
  margin: 20px auto;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  border-radius: 15px;

  display: flex;
  flex-direction: column;
}

.modal-content {
  overflow-y: auto;
  flex-grow: 1;
}

.fa-window-close {
  position: absolute;
  right: -0.8rem;
  top: -1rem;
  z-index: 1000;
  cursor: pointer;
}

@media(max-width: 576px) {
  .modal-container {
    width: 100vw;
    height: 100vh;
  }
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>


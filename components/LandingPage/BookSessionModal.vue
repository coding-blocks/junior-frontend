<template>
  <div class="p-5">
    <div 
      class="d-flex h-100 align-items-center justify-content-center"
      v-if="createBookingTask.lastResolved"
    >
      <div class="grey font-5 bold">
        Thanks for getting in touch!<br>
        We'll get back to you shortly!
      </div>
    </div>
    <div class="row" v-else>
      <div class="col-md-6 d-none d-md-block border-right t-align-c">
        <div>
          <img src="https://minio.cb.lk/public/logo.png" alt="Logo" style="height: 50px;" />
        </div>
        <div class="mt-5">
          <img src="https://minio.cb.lk/public/counselling.png" alt="Counselling Infographic">
        </div>
      </div>
      <div class="col-md-6 px-5">
        <div class="t-align-c heading-5 bold">
          Book Counselling Session
        </div>
        <div class="mt-5">
          <label class="grey font-5">Name</label>
          <div class="form-input-text bg-white mt-3">
            <input 
              v-model="name"
              type="text"
              placeholder="Enter Name"
            >
          </div>
        </div>
        <div class="mt-5">
          <label class="grey font-5">Mobile Number</label>
          <div class="form-input-text bg-white mt-3">
            <input 
              v-model="mobile"
              type="text"
              placeholder="Enter Mobile Number"
            >
          </div>
        </div>
        <div class="mt-5 d-flex justify-content-center justify-content-md-start">
          <button 
            class="button-primary"
            @click="createBookingTask.run()"
            :disabled="createBookingTask.isActive"
          >
            {{createBookingTask.isActive ? 'Submitting' : 'Book Session'}}
          </button>
        </div>
      </div>
    </div>
  </div>  
</template>
<script>
import Vue from 'vue';
import CounsellingBookingRepository from '@/repositories/counselling-bookings';

export default Vue.extend({
  data() {
    return {
      name: '',
      mobile: ''
    }
  },
  tasks(t) {
    return {
      createBookingTask: t(async function() {
        return CounsellingBookingRepository.create({
          name: this.name,
          mobile: this.mobile
        })
      })
    }
  }
})
</script>
<style scoped lang="scss">
.form-input-text {
  background: #f3f3f3;
  border: 1px solid #ECECEC;
  border-radius: 50px;
  padding: 0.75rem 3rem 0.75rem 2rem;

  & input {
    background: unset;
    border: unset;
    color: #08090c;
    width: 100%;
  }
}
</style>

<template>
  <VAsync 
    :task="fetchZoomCredsTask"
  >
    <template v-slot="{ value }">
      <iframe
        class="h-100 w-100"
        :srcdoc="`
          <html>
            <head> 
              <script src='http://localhost:8000/index.js'></script>
            </head>
            <body>
              <zoom-meeting 
                meetingnumber='${zoomMeeting.webinar_id}'
                signature='${value.signature.signature}'
                apikey='${value.zoomAccount.api_key}'
                username='${user.name}'
                useremail='${user.email}'
              />
            </body>
          </html>
        `"
      ></iframe>
    </template>
  </VAsync>
</template>
<script>
import Vue from 'vue';
import { mapState } from 'vuex';
import ZoomAccountRepository from '@/repositories/zoom-accounts';
import ZoomMeetingRepository from '@/repositories/zoom-meetings';
import VAsync from '@/components/Base/VAsync';
import { hash } from 'rsvp';

export default Vue.extend({
  props: {
    zoomMeeting: {
      type: Object,
      required: true
    }
  },
  components: {
    VAsync
  },
  computed: {
    ...mapState('session', ['user'])
  },
  tasks(t) {
    return {
      fetchZoomCredsTask: t(function *() {
        const zoomAccount = yield ZoomAccountRepository.fetchById(this.zoomMeeting.zoomAccountId);
        const signature = yield ZoomMeetingRepository.fetchMeetingSignature(this.zoomMeeting.id)

        return hash({
          zoomAccount,
          signature
        })
      })
    }
  }
})
</script>

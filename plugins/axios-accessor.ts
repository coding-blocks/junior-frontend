import { Plugin } from '@nuxt/types'
import QS from 'qs';
import { initializeAxios } from '~/utils/api'

const accessor: Plugin = ({ $axios }) => {
  $axios.interceptors.request.use(config => {
    config.paramsSerializer = params => {
      return QS.stringify(params, {
        arrayFormat: "brackets",
        encode: false
      });
    }

    return config
  })

  initializeAxios($axios)
}

export default accessor

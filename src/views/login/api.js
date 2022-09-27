import { request } from '@/utils'

export default {
  login: (data) => request.post('/auth/ldap', data, { noNeedToken: true }),
}

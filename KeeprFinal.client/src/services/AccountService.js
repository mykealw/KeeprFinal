import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import Pop from '../utils/Pop.js'
import { api } from './AxiosService'

class AccountService {
  async getAccount() {
    try {
      const res = await api.get('/account')
      AppState.account = res.data
    } catch (err) {
      logger.error('HAVE YOU STARTED YOUR SERVER YET???', err)
    }
  }

  async EditAccount(body) {
    try {
      const res = await api.put('/account', body)
      logger.log(res.data, "updated account&profile")
      AppState.account = res.data
    }
    catch (error) {
      logger.log(error);
      Pop.toast(error.message, "error");
    }
  }
}

export const accountService = new AccountService()

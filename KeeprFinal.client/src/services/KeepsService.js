import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import Pop from '../utils/Pop.js'
import { api } from './AxiosService'

class KeepsService {

    //GETS
    async getAllKeeps() {
        const res = await api.get('api/keeps')
        logger.log(res.data, "all keeps")
        AppState.keeps = res.data
    }

    async getKeepById(id) {
        const res = await api.get('api/keeps/' + id)
        logger.log(res.data, "got that keep")
        AppState.activeKeep = res.data
    }

    //Posts
    async createKeep(newKeep) {
        const res = await api.post('api/keeps/', newKeep)
        logger.log(res.data, "keep made")
        AppState.keeps.unshift(res.data)
    }

    //puts
    async editKeep(keepUpdate) {
        logger.log(keepUpdate, "what is coming in")
        const res = await api.put('api/keeps/' + keepUpdate.id, keepUpdate)
        logger.log(res.data, "update finished")
        let index = AppState.keeps.findIndex(k => k.id === res.data.id)
        if (index != -1) {
            AppState.keeps.splice(index, 1, res.data)
        }
        let index2 = AppState.myKeeps.findIndex(k => k.id === res.data.id)
        if (index2 != -1) {
            AppState.myKeeps.splice(index2, 1, res.data)
        }
        AppState.activeKeep = res.data
    }

    //deletes
    async deleteKeep(keepId) {
        const res = await api.delete('api/keeps/' + keepId)
        logger.log(res.data, "deleted keep")
        AppState.myKeeps.filter(k => k.id === keepId)
        AppState.keeps.filter(k => k.id === keepId)
    }
}

export const keepsService = new KeepsService()
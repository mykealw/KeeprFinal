import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import Pop from '../utils/Pop.js'
import { api } from './AxiosService'

class VaultKeepsService {
    //gets
    async getAllVaultKeeps(vaultId) {
        const res = await api.get('api/vaults/' + vaultId + '/keeps')
        logger.log(res.data, "here are the keeps")
        AppState.keeps = res.data
    }

    //posts
    async createVaultKeep(newVaultKeep) {
        logger.log(newVaultKeep, "new to be made")
        const res = await api.post('api/vaultkeeps', newVaultKeep)
        logger.log(res.data, "vaultkeep made")
        AppState.vaultKeeps.unshift(res.data)

    }

    //puts


    //deletes


}

export const vaultKeepsService = new VaultKeepsService()
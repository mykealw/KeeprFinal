import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import Pop from '../utils/Pop.js'
import { api } from './AxiosService'

class VaultsService {
    //gets
    async getVaultById(id) {
        const res = await api.get('api/vaults' + id)
        logger.log(res.data, "got vault")
        AppState.activeVault = res.data
    }

    //posts
    async createVault(newVault) {
        const res = await api.post('api/vaults' + newVault)
        logger.log(res.data, "new vault")
        AppState.activeVault = res.data
        AppState.vaults.unshift(res.data)
        AppState.myVaults.unshift(res.data)
    }

    //puts
    async editVault(vaultUpdate) {
        logger.log(vaultUpdate, "coming in")
        const res = await api.put('api/vaults/' + vaultUpdate.id)
        logger.log(res.data, "update")
        let index = AppState.vaults.findIndex(v => v.id === res.data.id)
        if (index != -1) {
            AppState.vaults.splice(index, 1, res.data)
        }
        let index2 = AppState.myVaults.findIndex(v => v.id === res.data.id)
        if (index != -1) {
            AppState.myVaults.splice(index2, 1, res.data)
        }
        AppState.activeVault = res.data
    }

    //deletes
    async deleteVault(vaultId) {
        const res = await api.delete('api/vaults/' + vaultId)
        logger.log(res.data, "deleted vault")
        AppState.vaults.filter(v => v.id === vaultId)
        AppState.myVaults.filter(v => v.id === vaultId)
    }
}

export const vaultsService = new VaultsService()
import { AppState } from "../AppState.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"


class ProfilesService {
    //gets
    async getProfile(profileId) {
        const res = await api.get('api/profiles/' + profileId)
        logger.log(res.data, "profile got")
        AppState.profile = res.data
    }

    async getProfileKeeps(profileId) {
        const res = await api.get('api/profiles/' + profileId + '/keeps')
        logger.log(res.data, "profiles keeps")
        AppState.myKeeps = res.data
    }

    async getProfileVaults(profileId) {
        const res = await api.get('api/profiles/' + profileId + '/vaults')
        logger.log(res.data, "profiles vaults")
        AppState.vaults = res.data
    }

    //posts

    //puts

    //deletes
}

export const profilesService = new ProfilesService()
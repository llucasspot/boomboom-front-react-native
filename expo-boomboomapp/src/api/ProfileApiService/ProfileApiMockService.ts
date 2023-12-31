import {singleton} from 'tsyringe';
import {user_helena, user_isabella, user_jessica, user_yohan} from "../../mocks/mokes";
import {CreateProfileBody, ProfileApiServiceI, StackProfileI} from "./ProfileApiServiceI";
import {v4 as uuidv4} from "uuid";

@singleton()
export class ProfileApiMockService implements ProfileApiServiceI {

    async createProfile(createProfileBody: CreateProfileBody) {
        return Promise.resolve(user_yohan)
    }

    async getProfile() {
        return Promise.resolve(user_yohan)
    }

    async getStackProfiles(): Promise<StackProfileI[]> {
        const stackProfiles = [user_isabella, user_helena, user_jessica]
        return Promise.resolve(stackProfiles.map(({user, songs}) => {
            return {
                user: {
                    ...user,
                    id: uuidv4()
                },
                songs
            }
        }))
    }
}

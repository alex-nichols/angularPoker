import { UserInfo } from "firebase";

export class UserProfile {
    displayName: string
    email: string
    emailVerified: boolean
    photoUrl: string
    uid: string
    providerData: UserInfo[]
}

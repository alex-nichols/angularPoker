import { UserInfo } from "firebase";

export class AppUser {
    displayName: string
    email: string
    emailVerified: boolean
    photoUrl: string
    uid: string
    providerData: UserInfo[]
}

import { Observable } from "rxjs/Observable";
import { tap } from "rxjs/operators";

const enableDebug = true

export const debug = (message: string) =>
    tap(next => {
        if (enableDebug) {
            console.log(message, next)
        }
    }, error => {
        if (enableDebug) {
            console.log('ERROR: ', message, error)
        }
    }, () => {
        if (enableDebug) {
            console.log(`${message} completed.`)
        }
    })


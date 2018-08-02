import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { environment } from "../../../environments/environment";

const enableDebug = environment.enableDebugObservables

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


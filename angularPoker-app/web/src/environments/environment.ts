// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyAavMpRtpxf0g-6U14iUrpM5QPFxbGZwIA",
    authDomain: "angularpoker-211901.firebaseapp.com",
    databaseURL: "https://angularpoker-211901.firebaseio.com",
    projectId: "angularpoker-211901",
    storageBucket: "",
    messagingSenderId: "1068850871948"
  },
  enableDebugObservables: true
};

# VIS Desktop

**VIS Desktop** is a tool for visualizing and exploring complex networks.

It is built with investigative reporting as its primary use case and utilizes the [Follow the Money](https://github.com/alephdata/followthemoney) data model, which seeks to provide a common language to describe the entities most commonly used in investigative reporting.

To get started, download the latest release [here](https://github.com/alephdata/visdesktop/releases).


### Packaging the app

In order to package the app locally run the following:
```
make install
npm run build
```
When the build is completed you should see a list of executables in the /dist directory.


### Notarizing the app

If you have not distributed a release with the Developer ID you plan to use, it is required to notarize the app first.  If not, users will see a warning message when they attempt to open the downloaded app. From Apple: "Beginning in macOS 10.14.5, all new or updated kernel extensions and all software from developers new to distributing with Developer ID must be notarized in order to run."

Prerequisites:
- an env file with the following:
  - APPLE_ID: a valid Apple Id
  - APPLE_APP_PASSWORD: an Apple app specific password (See https://support.apple.com/en-gb/HT204397)

Steps:
1. Add the following afterSign hook to the build config in package.json.  This will call the notarize script during the build process
```
"build": {
 ...
 "afterSign": "scripts/notarize.js",
```
2. Follow the above steps to package the app
3. If notarization is successful, you will receive a confirmation email and see the notarization confirmation message in the terminal

Useful resources:
https://medium.com/@TwitterArchiveEraser/notarize-electron-apps-7a5f988406db
https://kilianvalkhof.com/2019/electron/notarizing-your-electron-application/


### Distributing the app
In order to distribute a new release of the app do the following.

Prerequisites:
- notarization of the app (see above)
- a Developer ID Application certificate in your Keychain 
  - download an existing certificate from: https://developer.apple.com/account/resources/certificates/list or create a new one using xCode
  - add the certificate to your Keychain
  
Steps:
1. Run ```make release-{major|minor|patch}```.  This will draft a new tagged release with the bumped version number and upload the relevant files to Github
2. You should see the newly drafted release in the Releases section of the repo.  Edit as needed and publish to make the new release available for download.

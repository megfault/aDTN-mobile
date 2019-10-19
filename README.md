# aDTN-mobile
A wireless p2p messaging app built on the aDTN anonymization protocol.

This is a work in progress and not yet ready for usage.


# How to develop:

You will need `nodejs` and `yarn`. In the project root directory, execute `yarn install` to install project dependencies.

For the time being we can run a web mockup of the app on the development devices without installing the mobile SDKs and building the app. Install NativeScript's Playground and Preview apps from the app store of your mobile device, then run `tns preview`. Scan the resulting QR-Code with the Playground app. Your development computer will serve the app to your phone, loading the web mockup in the Preview app.

`tns` is the command to execute the NativeScript CLI. If you enter it without any parameters you get an overview of the available commands.

This project uses the Angular flavor of Nativescript. For detailed information please refer to the [Nativescript+Angular documentation](https://docs.nativescript.org/angular/start/introduction).
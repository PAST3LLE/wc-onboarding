# WALLETCONNECT ONBOARDING

See below for key notes on how to get up and running. The repo is setup minimally to get you up and running on creating a simple WalletConnect integrated UI.

## <u>KEY NOTES</u>
This repo is built on a forked template repo for creating TS ready library components in cjs and esm.
That means the main code you'll be touching (aka the "UI" for viewing the walletconnect changes) is inside the `~/example` folder.

### Installation steps:

I am skipping node installation steps as it's out of this scope, but [see here for NVM installation steps](https://heynode.com/tutorial/install-nodejs-locally-nvm/)

1. install `yarn`:
    Node.js >=16.10
    Corepack is included by default with all Node.js installs, but is currently opt-in. To enable it, run the following command:

    ```bash
    corepack enable
    ```
    
    Node.js <16.10
    Corepack isn't included with Node.js in versions before the 16.10; to address that, run:
    ```bash
    npm i -g corepack
    ```

2. install this repo
    ```bash
    git clone git@github.com:W3stside/wc-onboarding.git && cd wc-onboarding
    ```

3. install everything and start dev server
    ```bash
    yarn && yarn test:ui
    ```

*Note* You can run this app 2 ways:
1. from the root: `yarn test:ui`
OR
2. from `~/example`: `yarn start`

### While coding and whatnot
The dev server is managed by parcel meaning it supports Hot Module Reloading (HMR) - essentially it just means you don't have to refresh every time you make a change in the codebase, parcel checks for changes and does it for you.

Caveat: sometimes style changes to styled-components i.e `global.tsx` will not hot reload and requires a page refresh.

IF (it really shouldn't) setup/loading starts to take a longtime consider adding the `--lazy` flag to the `example/package.json` start script line like so:
```bash
# inside /example/package.json
"scripts": {
    ...
    "start": "parcel index.html --open --lazy",
    ...
}
...
```
    

### WalletConnect registration/setup steps
1. REACT DOCS: https://docs.walletconnect.com/2.0/web3modal/react/installation
2. WALLETCONNECT APK KEY: https://cloud.walletconnect.com/
3. MAKE ACCT AND SAVE PROJECT INFO

### Troubleshooting
1. "Permission denied" during `git clone` - you'll need to [add an SSH key to your machine and github account](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account)
2. (windows powershell/terminal only) cannot find git or yarn or any other thing - you'll need to download `git bash` ... [see here](https://git-scm.com/downloads)
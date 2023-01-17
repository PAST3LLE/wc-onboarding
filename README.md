# WALLETCONNECT ONBOARDING

See below for key notes on how to get up and running. The repo is setup minimally to get you up and running on creating a simple WalletConnect integrated UI.

### **Note
This repo is built on a forked template repo for creating TS ready library components in cjs and esm.
That means the main code you'll be touching (aka the "UI" for viewing the walletconnect changes) is inside the `~/example` folder.

## 1. <u>Setup</u>

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

## <u>2. Challenge</u>

The main challenge should be coded from the `main` branch. The goal is to setup our example app to display a "Connect wallet" (or similar) button via the `Web3Modal` library which allows us to connect to `MetaMask` (should already have this installed) and/or any other wallet that is either mobile QR code compatible or [part of the default WalletConnect Web3Modal options](https://explorer.walletconnect.com/).

If you get stuck or just want to start from an already setup example, checkout the `solution` branch.

Some tips:
1. the app is setup to use [`styled-components`](https://styled-components.com/docs) as a means of styling but you can just as easily use css files and import them.
2. it is running the latest [React](https://reactjs.org/) code so feel free to use the latest stuff.
3. the dev server is managed by parcel meaning it supports Hot Module Reloading (HMR) - essentially it just means you don't have to refresh every time you make a change in the codebase, parcel checks for changes and does it for you.
** Caveat: sometimes style changes to styled-components i.e `global.tsx` will not hot reload and requires a page refresh.
4. IF (it really shouldn't) setup/loading starts to take a longtime consider adding the `--lazy` flag to the `example/package.json` start script line like so:
```bash
# inside /example/package.json
"scripts": {
    ...
    "start": "parcel index.html --open --lazy",
    ...
}
...
```

## WalletConnect/Web3Modal Documentation if getting started from a clean project (`main` branch)
1. REACT DOCS: https://docs.walletconnect.com/2.0/web3modal/react/installation
2. WALLETCONNECT APK KEY: https://cloud.walletconnect.com/
    
    _Why get a key?_

    ```bash
    projectId (optional)
    Your project’s unique identifier that can be obtained at cloud.walletconnect.com. Providing this enables the following functionalities within Web3Modal: wallet and chain logos, optional walletconnect rpc, support for all wallets from explorer.walletconnect.com. Defaults to undefined
    ```

    Essentially it gives you nice defaults and doesn't require manually filling in the available wallets/chains/logs etc. For more info [see the documentation on configuration](https://docs.walletconnect.com/2.0/web3modal/configuration)

3. MAKE ACCT AND SAVE PROJECT INFO

## Troubleshooting
1. "Permission denied" during `git clone` - you'll need to [add an SSH key to your machine and github account](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account)
2. (windows powershell/terminal only) cannot find git or yarn or any other thing - you'll need to download `git bash` ... [see here](https://git-scm.com/downloads)
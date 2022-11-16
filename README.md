![box-img-readme](https://raw.githubusercontent.com/metamask/snap-box/master/box-img-readme.jpg)

# @metamask/snap-box

This repository is a starter template that combines the [TypeScript Template Snap](https://github.com/MetaMask/template-snap-monorepo) with a [Truffle Box](https://trufflesuite.com/boxes/), for developing and testing snaps that interact with smart contracts.

MetaMask Snaps is a system that allows anyone to safely expand the capabilities of MetaMask. A _snap_ is a program that we run in an isolated environment that can customize the wallet experience.

Truffle Boxes are helpful boilerplates that allow you to focus on what makes your dapp unique. In addition to Truffle, Truffle Boxes can contain other helpful modules, Solidity contracts & libraries, front-end views and more; all the way up to complete example dapps. This box makes it easy to deploy and test contracts with a local Ganache instance, which can be used to test transaction insight snaps or smart contract account snaps.

## Pre-requisites

To interact with (your) snaps, you will need to install [MetaMask Flask](https://metamask.io/flask/), a canary distribution for developers that provides access to upcoming features. You should install Flask in a separate browser profile from any existing MetaMask installation.

Before using this box, install Truffle and Ganache globally:

```shell
npm install -g truffle ganache
```

### Yarn v3

This box also requires Yarn `v3` or later. If you're using Node.js 16 or later you'll be able to enable it by running the following command:

```shell
corepack enable
```

Details on setting up Yarn with earlier versions of Node.js can be found [here](https://yarnpkg.com/getting-started/install).

## Installation

You can install this box with Truffle:

```shell
truffle unbox metamask/snap-box
```

Alternatively, you can clone the snap-box repository [using this GitHub template](https://github.com/MetaMask/snap-box/generate).

## Setup

You will need an Infura API key to fork the Ethereum blockchain in your local instance of Ganache. Copy the `.env.dist` file in `packages/truffle/` to a new file `.env` and update the `INFURA_PROJECT_ID` variable with your API key.

Then, you can take your Secret Recovery Phrase from MetaMask Flask and put it as the `MNEMONIC_PHRASE` in this same file. This will make your first Ethereum account as the deployer of the test contracts in Ganache and provide you with a balance for the first 10 accounts for local testing. _Remember, you should never share your Secret Recovery Phrase with anyone, and you should never use a Secret Recovery Phrase from any version of MetaMask that you use to custody real funds. This `.env` file is never and should never be uploaded to GitHub (it is explicitly excluded in `.gitignore`). This is only for testing locally with Ganache._

Then, setup the development environment from the main directory:

```shell
yarn install && yarn start
```

You are now ready to start modifying the packages to build your snap. You can put smart contracts in `packages/truffle/contracts` and modify the files in `packages/snap` and `packages/site`. Connect MetaMask to your local Ganache instance by going into your settings and changing the network to "Localhost 8545" (if you cannot see it, make sure to click Show test networks).

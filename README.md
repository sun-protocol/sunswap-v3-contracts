# SunSwap v3 Protocol

This repository contains the v3-core and v3-periphery smart contracts for the Sunswap V3 Protocol.

SunSwap V3 Core is the foundational contract library of SunSwap V3, a decentralized exchange built on the TRON blockchain.  
It introduces **concentrated liquidity**, allowing liquidity providers to allocate capital within specific price ranges rather than across the entire spectrum. This design improves capital efficiency and enables providers to earn higher returns in volatile ranges.  

The core contracts implement:
- **Liquidity management**: minting, burning, and collecting fees within chosen price intervals.  
- **Swap operations**: single-hop and multi-hop token swaps across pools.  
- **Dynamic fee tiers**: flexible fee structures that incentivize liquidity provision in different ranges.  

By combining concentrated liquidity with TRON’s high-performance infrastructure, SunSwap V3 Core delivers a more efficient and customizable AMM model, enhancing both trading execution and liquidity provider strategies.  

SunSwap V3 Periphery provides the higher-level contracts and interfaces that simplify interaction with the SunSwap V3 Core.  
While the Core contracts implement the fundamental AMM logic (liquidity management and swaps), the Periphery contracts are designed to make these operations more user-friendly and accessible.  

Key components include:
- **SwapRouter**: routes single-hop and multi-hop swaps across pools.  
- **NonfungiblePositionManager**: manages liquidity positions represented as NFTs, allowing minting, burning, and fee collection.  
- **Supporting utilities**: helper contracts and libraries for interacting with pools and managing approvals.  

Together, the Periphery contracts bridge the gap between low-level protocol logic and end-user applications, enabling wallets, dApps, and integrators to interact with SunSwap V3 efficiently and securely.

---

## SunSwap Core

This `v3-core` contains the core contracts of v3, namely v3Pool, which implements the liquidity management and swap operations of the v3 trading pool.

The `v3-core` also includes a factory contract responsible for managing and deploying v3Pools.

## SunSwap Periphery

The `v3-periphery` contains the `NonfungiblePositionManager` contract to manage the position nfts.

`NftPositionDescriptor` used to describe the nft with positon infomations.
`SwapRouter` provides interfaces related to token swaps.

---

## SunSwap V3 Deploments：

| contract                   | chain        | address                            |
| :------------------------- | :----------- | :--------------------------------- |
| Factory                    | TRON Mainnet | TThJt8zaJzJMhCEScH7zWKnp5buVZqys9x |
|                            | NILE Testnet | TUTGcsGDRScK1gsDPMELV2QZxeESWb1Gac |
| SwapRouter                 | TRON Mainnet | TQAvWQpT9H916GckwWDJNhYZvQMkuRL7PN |
|                            | NILE Testnet | TFkswj6rUfK3cQtFGzungCkNXxD2UCpEVD |
| NonfungiblePositionManager | TRON Mainnet | TLSWrv7eC1AZCXkRjpqMZUmvgd99cj7pPF |
|                            | NILE Testnet | TPQzqHbCzQfoVdAV6bLwGDos8Lk2UjXz2R |
| Quoter                     | TRON Mainnet | TLhZ48yfHygMLM2uZr87zJJusHjGen97gh |
|                            | NILE Testnet | TUcM2gkpWEJxBpkweLdVoRp6DAUsw2vWR6 |
| TickLens                   | TRON Mainnet | TBBjWiPHouzEx2QRjBzTw9EA8YjG43XiAi |
|                            | NILE Testnet | TXWuk11iagFK2qAWbBsP58A5ncU5L1LYq5 |

---

## SunSwap V3 tron deployment：

### compile

```sh
$ pnpm run compile
```

### deploy

```sh
$ pnpm run deploy-tron
```

---

## Community & Support

If you have questions about this project, find bugs, or would like to contribute, you can reach the team and community via:

- [Telegram](https://t.me/SunIO_Defi)
- [Twitter](https://twitter.com/defi_sunio)

Please follow official announcements from these channels for the latest information on deployments, upgrades, and security notices.
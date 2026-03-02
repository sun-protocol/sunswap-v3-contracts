# SunSwao v3

This repository contains the v3-core and v3-periphery smart contracts for the Sunswap V3 Protocol.

## SunSwap Core

This `v3-core` contains the core contracts of v3, namely v3Pool, which implements the liquidity management and swap operations of the v3 trading pool.

The `v3-core` also includes a factory contract responsible for managing and deploying v3Pools.

## SunSwap Periphery

The `v3-periphery` contains the `NonfungiblePositionManager` contract to manage the position nfts.

`NftPositionDescriptor` used to describe the nft with positon infomations.
`SwapRouter` provides interfaces related to token swaps.

## SunSwap V3 Deploments：

| contract                   | chain | address                            |
| :------------------------- | :---- | :--------------------------------- |
| Factory                    | TRON  | TThJt8zaJzJMhCEScH7zWKnp5buVZqys9x |
|                            | NILE  | TUTGcsGDRScK1gsDPMELV2QZxeESWb1Gac |
| SwapRouter                 | TRON  | TQAvWQpT9H916GckwWDJNhYZvQMkuRL7PN |
|                            | NILE  | TFkswj6rUfK3cQtFGzungCkNXxD2UCpEVD |
| NonfungiblePositionManager | TRON  | TLSWrv7eC1AZCXkRjpqMZUmvgd99cj7pPF |
|                            | NILE  | TPQzqHbCzQfoVdAV6bLwGDos8Lk2UjXz2R |
| Quoter                     | TRON  | TLhZ48yfHygMLM2uZr87zJJusHjGen97gh |
|                            | NILE  | TUcM2gkpWEJxBpkweLdVoRp6DAUsw2vWR6 |
| TickLens                   | TRON  | TBBjWiPHouzEx2QRjBzTw9EA8YjG43XiAi |
|                            | NILE  | TXWuk11iagFK2qAWbBsP58A5ncU5L1LYq5 |

## SunSwap V3 tron deployment：

### compile

```sh
$ pnpm run compile
```

### deploy

```sh
$ pnpm run deploy-tron
```

const { mainnet, nile } = require('../scripts/config.js');
let config = null;
var UniswapV3Factory = artifacts.require("./UniswapV3Factory");
var Quoter = artifacts.require('./Quoter');
var QuoterV2 = artifacts.require('./QuoterV2');
var Router = artifacts.require('./SwapRouter');
var NFTDescriptor = artifacts.require('./NFTDescriptor');
var NFTPositionDescriptor = artifacts.require('./NftPositionDescriptor');
var NFTPostionManager = artifacts.require('./NonfungiblePositionManager');

module.exports = async(deployer,network) => {
  if (network == 'mainnet'){
    config = mainnet;
  }else if(network == 'nile'){
    config = nile;
  }
  await deployer.deploy(UniswapV3Factory);
  const factory = await UniswapV3Factory.deployed();
  console.log("factory deployed at: ",factory.address);
  const poolhash = await factory.getPairHash();
  console.log("poolHash:",poolhash.toString());
};


// const weth9 = await deployer.deployWETH9();
// const factory = await deployer.deployFactory();
// const quoter = await deployer.deployQuoter(factory, weth9.address);
// const router = await deployer.deployRouter(factory, weth9.address);
// const nftDescriptorLibrary = await deployer.deployNFTDescriptorLibrary();
// const positionDescriptor = await deployer.deployPositionDescriptor(nftDescriptorLibrary.address, weth9.address);
// const positionManager = await deployer.deployNonfungiblePositionManager(factory, weth9.address, positionDescriptor.address);

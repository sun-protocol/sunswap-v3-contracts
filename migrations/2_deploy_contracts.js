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

  await deployer.deploy(Quoter,factory.address,config.WTRX);
  const quoter = await Quoter.deployed();
  console.log("Quoter deployed at: ",quoter.address);

  await deployer.deploy(Router,factory.address,config.WTRX);
  const router = await Router.deployed();
  console.log("Router deployed at: ",router.address);

  await deployer.deploy(NFTDescriptor);
  // const nftDescriptorLibrary = await NFTDescriptor.deployed();
  // console.log("NFTDescriptor deployed at: ",nftDescriptorLibrary.address);

  await deployer.link(NFTDescriptor,NFTPositionDescriptor);
  await deployer.deploy(NFTPositionDescriptor,config.WTRX);

  const nftPositionDescriptor = await NFTPositionDescriptor.deployed();

  await deployer.deploy(NFTPostionManager,factory.address,config.WTRX,nftPositionDescriptor.address);
  const nftPostionManager = await NFTPostionManager.deployed();
  console.log("NFTPostionManager deployed at: ",nftPostionManager.address);
};


// const weth9 = await deployer.deployWETH9();
// const factory = await deployer.deployFactory();
// const quoter = await deployer.deployQuoter(factory.address, weth9.address);
// const router = await deployer.deployRouter(factory.address, weth9.address);
// const nftDescriptorLibrary = await deployer.deployNFTDescriptorLibrary();
// const positionDescriptor = await deployer.deployPositionDescriptor(nftDescriptorLibrary.address, weth9.address);
// const positionManager = await deployer.deployNonfungiblePositionManager(factory.address, weth9.address, positionDescriptor.address);

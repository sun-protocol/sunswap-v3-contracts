const { mainnet, nile } = require('../scripts/config.js');
let config = null;
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
  // await deployer.deploy(UniswapV3Factory);
  // const factory = await UniswapV3Factory.deployed();
  // console.log("factory deployed at: ",factory);
  // const initcode = await factory.init_code();
  // console.log(initcode.toString());
  const factory = config.UniswapV3Factory;
  await deployer.deploy(Quoter,factory,config.WTRX);
  const quoter = await Quoter.deployed();
  console.log("Quoter deployed at: ",quoter.address);

  await deployer.deploy(Router,factory,config.WTRX);
  const router = await Router.deployed();
  console.log("Router deployed at: ",router.address);

  await deployer.deploy(NFTDescriptor);
  // const nftDescriptorLibrary = await NFTDescriptor.deployed();
  // console.log("NFTDescriptor deployed at: ",nftDescriptorLibrary.address);

  await deployer.link(NFTDescriptor,NFTPositionDescriptor);
  await deployer.deploy(NFTPositionDescriptor,config.WTRX);

  const nftPositionDescriptor = await NFTPositionDescriptor.deployed();

  await deployer.deploy(NFTPostionManager,factory,config.WTRX,nftPositionDescriptor.address);
  const nftPostionManager = await NFTPostionManager.deployed();
  console.log("NFTPostionManager deployed at: ",nftPostionManager.address);
};


// const weth9 = await deployer.deployWETH9();
// const factory = await deployer.deployFactory();
// const quoter = await deployer.deployQuoter(factory, weth9.address);
// const router = await deployer.deployRouter(factory, weth9.address);
// const nftDescriptorLibrary = await deployer.deployNFTDescriptorLibrary();
// const positionDescriptor = await deployer.deployPositionDescriptor(nftDescriptorLibrary.address, weth9.address);
// const positionManager = await deployer.deployNonfungiblePositionManager(factory, weth9.address, positionDescriptor.address);

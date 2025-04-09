const { mainnet, nile } = require('../scripts/config.js');
let config = null;
var TickLens = artifacts.require('./TickLens');
var Multicall = artifacts.require('./Multicall');
module.exports = async(deployer,network) => {
  if (network == 'mainnet'){
    config = mainnet;
  }else if(network == 'nile'){
    config = nile;
  }
  await deployer.deploy(TickLens);
  const lens = await TickLens.deployed();
  console.log("lens deployed at: ",lens.address);

  // await deployer.deploy(Multicall);
  // const multicall = await Multicall.deployed();
  // console.log("Multicall deployed at: ",multicall.address);

}

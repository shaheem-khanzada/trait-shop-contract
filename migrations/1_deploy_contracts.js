const TraitShop = artifacts.require("TraitShop");

module.exports = function(deployer, _network, accounts) {
  const apesTraitsAddress = '0x5e2f3b76cD5df52BBf4bcB9f50003bf769742dc9';
  const secretAddress = accounts[0];
  deployer.deploy(TraitShop, apesTraitsAddress, secretAddress);
};

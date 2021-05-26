const storageData = artifacts.require("storageData");

module.exports = function (deployer){
    deployer.deploy(storageData);
};
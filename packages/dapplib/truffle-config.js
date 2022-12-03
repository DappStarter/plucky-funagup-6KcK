require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea glove flee street name rebel stick slow guess process army giant'; 
let testAccounts = [
"0xe887fd718ba65dbf48ccc9ea4f2f349bd335666505e344da6e9209a761e53285",
"0x672ba08eb7d62bdd2465ec327fa4b080a57989d4ed9bcb6f0ea74ae7be84d9ac",
"0xb9204cb3455356923af074dfd789643e2cbc3a6499b55c6c8446ef3dea71ae0a",
"0x0b6fd2bb73d16047eedf9915f87ec5eb83a336831e07cc33f437c8b7a130fe98",
"0x422c5f964b19600d37b5d97fe174f161ca2d40ea293995df88045f680589c5b6",
"0x8c0258c78cd4f04acc546e32fa133441a7dd5ed8e7496b9487fe13ede064682d",
"0x4052b07f53bfe7944bccf76f98dd053c11eaf4c6d775fb36327ddc2c16e54755",
"0x306f69b3640d8dc7b35fa2557300c8c756335b86ad2d58f82cb8d0f49827317a",
"0xa1574cfb5291c50b2b28f47c07d131dc22fd1b26b519ac9b29fb5842636be8dc",
"0x6981400ee406f8751e5171e3fa00214be34a9d193a0abd6702f9c698d665ac17"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


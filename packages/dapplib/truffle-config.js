require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom glimpse flame sword stomach cruise pulse comic hard light army genius'; 
let testAccounts = [
"0xc26b81e7cccee98d27c0a732aeed00b08e0c2dbec326eb1cb7ab72ec87a70efb",
"0x9d0a18da4adcefa97b00990fb51cb63961ffc5797502cf0f64eeb376036e2b37",
"0x6df06d5a9fa5bc27bd04e11f082d9f2f17601aaef045da245792d3786318b815",
"0xa210e94e2dea036fce5510d331dcb03e9a2152afa93897f23615ccd6b1c74cb0",
"0x79730abeb0b719cfc179e767bf162171b4313193f8673764ff968cd0e493bf9e",
"0xfbd8750a6f99dbac5245b4ce0e5b188e86adf59ccb64983a91e0cc4f1e23bf1e",
"0xefed0c78c2d98773b44fdb33af374a377b49e6e70bfddb7faa3c9e76391e522c",
"0x3520d04afc00d81b42c110fcb2c016f282d7f1b7238621c7bff152781ded51f0",
"0x8622c1c50963ff2f771bd3a44e3c7750ff6945ac24642dae3881935d1573e21a",
"0xe38f0dc420af0c0858c8566a6df598df7f38eaba37eec63438a448fca8b10910"
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


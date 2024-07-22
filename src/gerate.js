const bitcoin = require('bitcoinjs-lib');
const bip39 = require('bip39');
const bip32 = require('bip32');


const mnemonic = bip39.generateMnemonic();
console.log('Mnemonic:', mnemonic);


const seed = bip39.mnemonicToSeedSync(mnemonic);
const root = bip32.fromSeed(seed);

const network = bitcoin.networks.bitcoin;


const path = "m/44'/0'/0'/0/0";
const keyPair = root.derivePath(path);


const { address } = bitcoin.payments.p2pkh({ pubkey: keyPair.publicKey, network });

console.log('Address:', address);
console.log('Private Key:', keyPair.toWIF()); 
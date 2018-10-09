// @flow
import type { EdgeCurrencyInfo } from 'edge-core-js'
import type { EngineCurrencyInfo } from '../engine/currencyEngine.js'
import type { BcoinCurrencyInfo } from '../utils/bcoinExtender/bcoinExtender.js'
import { imageServerUrl } from './constants.js'

const bcoinInfo: BcoinCurrencyInfo = {
  type: 'azart',
  magic: 0xb64ba1b1,
  formats: ['bip44', 'bip32'],
  keyPrefix: {
    privkey: 0x32,
    xpubkey: 0x0488b21e,
    xprivkey: 0x0488ade4,
    xpubkey58: 'xpub',
    xprivkey58: 'xprv',
    coinType: 5
  },
  addressPrefix: {
    pubkeyhash: 0x18,
    scripthash: 0x19
  }
}

const engineInfo: EngineCurrencyInfo = {
  network: 'azart',
  currencyCode: 'AZART',
  gapLimit: 10,
  maxFee: 100000,
  defaultFee: 10000,
  feeUpdateInterval: 60000,
  customFeeSettings: ['satPerByte'],
  simpleFeeSettings: {
    highFee: '300',
    lowFee: '100',
    standardFeeLow: '150',
    standardFeeHigh: '200',
    standardFeeLowAmount: '20000000',
    standardFeeHighAmount: '981000000'
  }
}

const currencyInfo: EdgeCurrencyInfo = {
  // Basic currency information:
  currencyCode: 'AZART',
  currencyName: 'Azart',
  pluginName: 'azart',
  denominations: [
    { name: 'AZART', multiplier: '100000000', symbol: 'A' },
    { name: 'mAZART', multiplier: '100000', symbol: 'mA' }
  ],

  // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  // !!!!!!!!!!!!!!! - About to be deprecated - !!!!!!!!!!!!!!!!!!!
  // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  walletTypes: ['wallet:azart', 'wallet:azart-bip44'],

  // Configuration options:
  defaultSettings: {
    customFeeSettings: ['satPerByte'],
    electrumServers: [
      'electrum://electrum.azartpay.com:50001'
    ],
    disableFetchingServers: false
  },
  metaTokens: [],

  // Explorers:
  addressExplorer: 'https://explorer.azartpay.com/address/%s',
  blockExplorer: 'https://explorer.azartpay.com/block/%s',
  transactionExplorer: 'https://explorer.azartpay.com/tx/%s',

  // Images:
  symbolImage: 'https://raw.githubusercontent.com/azartpay/azart/master/share/pixmaps/azart64.png', //`${imageServerUrl}/azart-logo-64.png`,
  symbolImageDarkMono: 'https://raw.githubusercontent.com/azartpay/azart/master/share/pixmaps/azart64.png' //`${imageServerUrl}/azart-logo-grey-64.png`
}

export const azart = { bcoinInfo, engineInfo, currencyInfo }

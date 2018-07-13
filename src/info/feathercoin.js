// @flow
import type { EdgeCurrencyInfo } from 'edge-core-js'

export const feathercoinInfo: EdgeCurrencyInfo = {
  // Basic currency information:
  currencyCode: 'FTC',
  currencyName: 'Feathercoin',
  pluginName: 'feathercoin',
  denominations: [
    { name: 'FTC', multiplier: '100000000', symbol: 'F' },
    { name: 'mFTC', multiplier: '100000', symbol: 'mF' }
  ],
  walletTypes: [
    'wallet:feathercoin-bip49',
    'wallet:feathercoin-bip44',
    'wallet:feathercoin'
  ],

  // Configuration options:
  defaultSettings: {
    forks: [],
    network: {
      type: 'feathercoin',
      magic: 0xd9b4bef9,
      keyPrefix: {
        privkey: 0x8e,
        xpubkey: 0x0488bc26,
        xprivkey: 0x0488daee,
        xpubkey58: 'xpub',
        xprivkey58: 'xprv',
        coinType: 8
      },
      addressPrefix: {
        pubkeyhash: 0x0e,
        scripthash: 0x05,
        witnesspubkeyhash: 0x06,
        witnessscripthash: 0x0a,
        bech32: 'fc'
      }
    },
    customFeeSettings: ['satPerByte'],
    gapLimit: 10,
    maxFee: 1000000,
    defaultFee: 1000,
    feeUpdateInterval: 60000,
    feeInfoServer: '',
    infoServer: '',
    simpleFeeSettings: {
      highFee: '1200',
      lowFee: '400',
      standardFeeLow: '600',
      standardFeeHigh: '800',
      standardFeeLowAmount: '2000000000',
      standardFeeHighAmount: '98100000000'
    },
    electrumServers: [
      'electrum://electrumx-ch-1.feathercoin.ch:50001',
      'electrum://electrumx-de-2.feathercoin.ch:50001',
      'electrum://electrumxftc.trezarcoin.com:50001',
      'electrum://electrum.feathercoin.network:50001'
    ]
  },
  metaTokens: [],

  // Explorers:
  addressExplorer: 'https://fsight.chain.tips/address/%s',
  blockExplorer: 'https://fsight.chain.tips/block/%s',
  transactionExplorer: 'https://fsight.chain.tips/tx/%s',

  // Images:
  symbolImage: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACXBIWXMAAAsTAAALEwEAmpwYAAABWWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS40LjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgpMwidZAAAVQElEQVRoBb1bCXhV1Z0/59x735IQRJBdsVKVjrhBFgS0TVsXkgBZ8NVRR+uM36d1ndrP2lrtTKq0ddTO1M+tYx3HcaniUxLEJMBHbVyBhNQV64L4FagsUTZJ8pZ775nf77x3n4+UQBKC5yPv3nvuOf9z/vtyLlIMUYvFYhZBxeNxLx9kcfEVjhq1bZwOyfHSlyOFlkcI6UeFUEL7OiGk3q2ltcMXeusXumfr+paWZP78vuDmjxnIvRzI4P2N3c+GZHFl9clKyplSyBlai9Mw71gh5VG27eCCJfnHhpcaf56b5nUHejZqId7GmDXad1cdNyz8do6A9fWqvLVVtba2upw62DZ4hMnRqVO1qK/3uXjxvHmTLN+pBtfqhBSznEgkpJQlfM8TXjolfN/fBQx3Ats9IERCCPBUyDCmDsffkVKpI20nJJRlgfO+SCZ6fCXF6yDAEkjD4vam5zZwHSHqVSy2TuYIkens9+9gEJbl5eVWQOnieQu+oTz/B1jxQiccGYONi1SiB7j5bwC519HfARH+QCp/i3SHf+5uL+yZPHmnIdKGDUeqyMStkW7XHhnSYrwnxQlS6GLMmYW/klAkKikB6WRiJxB/BqAfbHuh4S28E9iDjT1QffCq/21gCEOswFFC92eeFxvpWt6NWO8qbGwEOemmUx/h+Vmp5FIrar+5Kh4H5gNvx1dUhEfKglMAay4QPt8KOVMtyyYhuyH7D/m+urNj+eItgCyhUmog3O43wlmKGv0pm1NXq5W+Axw9UWtfuKlUBxa/Px3SDW82NkJ0cw3iF8utEWc31SC/rVsnY3nP8TjfZ9SE3aeee0lhxO6qRuc1lmPPyiDevVEo+bP2Fxqe5Jj8vfH5QC23mQMNCgAaizu28y4YlX+1w2GRTiQ2gwP/MaxnxMOtrY9CLzOL8wpxo9ga0eXzAJtRG84BHEPk4uJiR42d9E/ouhWEnkxDB6l6uLDQvqE1Ht8b7PFg6xwUYS7U0dGRLj6vbryy/MecUORs34chctOLfMu5qWNpfCMXMQuOHq3hl/ZxSwfbwEHf97LOpZWV47SILLQsdbll29Dv5Gpp2Re1LY1/0h+kD4hwAKCssvZEOJAGJxw9KZVMJJXWP25rabw3h2h5uR9Y64MiMOgB9aq8/Eu3VFZVdzmk67/A7SLs6a/ak3XQ6z8He+5rmT4RDibOmLvgBAButkPh42EttwPZS9a0NK4gwGBMX8APQz+QLg9BzI36lFVVn6W1egxIfw17+5tvyfkdSw+M9H4RDhDJiLFeASt8MizkJilUXVvzc2uz7w9FRwdKi31cYdm8ecdp157U3tLwUsmc2BSp3KVA+oR0smejr8V3OloaPw5w6L2Q6t0B0TTRjDFQln4CgIjsNiV1LZGdGouRwjQkgzVIf7fkgTqCSI5rzozFolCvH2nPfg3BzR9L5tSUr10W/0BpvwbIfgKVm4QI7w8zKi4ezvHB3Hz4Jv7N65CitdU8HjNt0t0Q44vcVDIFMf7emubGV0mEt1Y+ns4bf1hvaTBXrlxprHRpRfU8P62ftGznUvjiIjsUUtrzR366/v2n/7b+g86JJ05p913vfDDo657XPf7Tj95f8t5779EF7iPF+3AYYkACaPpZodQNDCbggm6kzlJEOjoe+mqQZYAj6hW9w6xza8eUVtQ+Ckv8PKzyafAOHsLXtJc2dJhdWl19DKne3rTkdSQi1zKMVZZzWWll7T+zP4sTb037EmHExhSDstraUVr5v3ZCYfi59B/amhYba4x3X4kIk7AZi1/vl1TVzU/bYo0dcr7P+NpzPRLcAmI2vAYRGC6T6mjeFF9xhdPe1PiE5/u/s2zwTYuFjO97i3YO4SDa0UlxI3RhCvR2i295NxOY2cRXoLMUYW4QS0pw9Q5sbgmSia+5qTQQRVAttMP94LXBNnOf+d29aZPBRYXFrbDYH4Si0QnKdX7Ktwg9c8wyg6jcjEdL5syfgvdXk5qQ5YUdS5duJLLZTWQgH55fxsQWRXhaZd2xJZW1f4SO/gTukNFUGloIRIOckszjE1RTil24buKW1s+YkSbB2hoaPoc3uY2RGOhyecncmjK81lmmCYNwQAGkc1fCBQ1HEtBR2LXjEQJqZVBxOBvTTDQSvLiq7tu20K8hb/429kBOe0CIXOV9bh/gr8c0Em3NmpbFm3kDNdAgmIny2poXP+W57ovgckhqeTVfg2l8Jxncc6YunhebBIJezLAR7X4MSJBiGX1i19A3Q/VMKKrhbn6AXHAlEJmIzVJXkWkqC8nJZ7jfCsTJHDIXabSwMlIo/hfPIss9vvODe6nVvZ7RBBGbUVF9EufhnaU6OzuN2VaeW4OkfQwyn/eZ9RBQx7x5BnveD3nL+nvCBbL/KS3rQfhQBREGNzVQtSwUDbYD79UYMo7ijYZ0WbiW4yjP81a0NzUsZmeWe7zNSWTXMNUMwrVDYgsgJsZEtUJacyUTgKth8g64z5kUj64hW80wkIbyJwt72jnzJ0BfX1COQxcInLQRO+zDwnMPLPGjWPZ0IA+rbETak5Zy4JK6sNWbuKVyWvUM5/lI0TZcXhePp0CeZ2jNIR3zZ86MRfnO6HBJVe3JYPPsNCoVWvpLOa8c9SNeh7qZDWJhuIwC21FLQqFwFRCgFeZS2Js0yomnW1AKOhXcPJpcB2spiRQCDPV/xMoHYYG71O992mhmbWjK95uRwvYAznR3ZGqa6TMjtZyNCCUECr9Z1L3blFBaD4exyhNjnZbHg/bT0ykWKTWwMJollG2z/nUT6lkgSGiOm07TWIEI0gPyEtb33vaWxoe473xR5nPQAiO8pmXJX4D5aicSRZVJncX3hotS+GfAQJDGqwEEmUj9UIuzcTsUqTOrqo7kwo5ljwKKID7V0mDrIdhRfjp9l/T1n0GMhca1cDCsNJC1gfyKtS2N15seqkW+KJvO3A+Li+Y9oL8GqeEaM/hWMRnA9TRQlau2sZN5J69D1rJ1p9Kq6llJHWqgPvm+noC4GDvRPtZ1Ebfb6VRiUdr2fquV/B/YLLzSEGVwFn4KhPiLttyLuafyXDTW9w5jKB3xLQi3loSDLp/CpEIV7E6NhXpMgt8Dnf0P+gYxyDekNFxPWUXtd7BOC+zRt/wR3iihxCk0kmgJiG4IScrqpNt9ueXa9ztO6Nisa4Jvkg7ud2PDFyEQ+iwvGuvfhqT4GJ7HBZePFmLv0QqR9jgAHaV9b6flyU8JJVD6/kHsc1ROjMHZsyFSy5RlD4efB0v1b0Dy8zOBvlUAYm/2U/acsF14HXCvwTOttYK4Iw4Bj7S+rL258U1yltFYnyvmvTAFQwIJCVY3t0BKIr6W42EbvJEQLfTJHVbI/5xz4r0ri+wcSMvqT2A8wNlaFP0c+E5aKAk38z1cv079hQWG+1DfUk7qm+j/NThNZI3lpVhD1X6CclIjAyTYl7+zyH1uK4uDt3HjHiz5GWDTNI5RwlLDM6Kl9zh79mTqyAjT+gTUnxcwTlPLY8PAkayLURMgQbQR5pluhmCgn0S/yhN+GNdnTR9kHv/CTjgMX+w+AiN1J/tBvIHtKVM/F5QIqANKx1hNixEK7hwHW2hSJloP1RVl4+LiObVnFhS4DxIsOSOlRl2MT6bxTiI5EL52r/RV6k1Liz/BaIWQwKfB0b9C7De7yeQSq8C+ljOy4W8uljZQDv6TWxHOu4eWGn/RobTGxjhRz5QSj2I/36UIbkgkJkJfJ7Jgj0bL6QE5y00nf+snnUXKs/+EGGAsEHwaRYdv7NKJKTIpTj+20F5gTi6gHkwsOHkomtISR5ZsWoTKDym6qjdgNkejDBIK8UB9hRhZk6EyIxjsg+RwPyHbTSaW265zuwq5TfCvJyN/JSlIlAUjROTnvuMdRSRJPPpuA3jgP8YtcRrcWwR/MCUyAQ7LPVnqD+8UoyMZuPW5wf1fJ6P3mfNdn5ZxmJnrqdN5PILWA3cahov40LetH7qW+wQ4PdszyT32otRZ0cJhd0L85iUtD0mDiaQGiyxjaoIQJBpwHWE8sha7FM6IdmTTqJGRosRIDuJxJK8DavWGSGYeHEknCHlE8dkxHH7rMtAWjzKKAKBH++oGnDbeBmQrIMbZ5F54dD+Jrr2dcFp17zQ17TTczcuBB7QXDs4GHm5hYRFsyFG+58Nc6U6srbaB3Tvpi5FWj+fYIGXk/QHavkTJiJ4xFHixHXUlR4bSP4QIzaI4czDsxi+k8i4GsjG4HxedZD25aGeSAnEDa8oDDi72s8mgZOWK0DisPBbETqF+slXxMwOM30iribz6xP3M7asrsIIGcVY6y86dd1xmsN5DBGAXb8WgY9kHosa1lqWIqlj6pRGii+Jc33Yc+FvvHhTWn4QsslrZf38LAAdqIPVkrBnGmM1eSG5S2W8q3oHvw+q6hJNb++GeeIyZXUjPnj+/CKpxN3Z+ZqZPZqIh2gkFz+d5H6F/LDzsAiQAJJRhOCQ9jaCHScFr/rbRPzZz681vQEzzMJifINKCc5jOQzcsuY55vnFLgL6ayQPaTKM7FM9MtLS/tQxHw+qLM1hG5YC060wB0MkAdg6fAc9EGchgfYgzrXUB/r4JxIkIFyKMFAiAODn9me15l7HmnVsbLw+xScbvGRj+bF6hx2t4NQgzhYJr4ICSvdFROHmHdduPi+LJA14Z6id9+Q7k9IppFbHRsPKFVFAwtAqbjiBeTWRGCQfxcxgiNZHhK+4RVtoWwjzU1R3oEIMBcfWq5c+vJ2z6ba59qA2BisGLB4FYYCZOF1EzEK8SLnkt2stOf7u07a3VqPLNTnYnKtD1Rmu2asD3htvguj9x6+jScbXXg3FNbU0Nr6C6/zFS8t8gLHwS3BPg8si90RF3Sl+cBP/KTyAQUbrvIKp8H1TaBAH/XEq/CwYZZSY1AQT7BHprpA8cHhJkud0NGzYQYQ9F+XND4chwMPPd7h6bXykInsrZpGxpVe2NoXD0rmRPz9spr2vW2ytWdNGA4C/whRRDTTFGgv57TL0PXFwmlH4eyKzAy/MRukF0TYqbQN8DMFQP0Opyoa+wEVmjNiUVtS+HC6Jnprt7ftXW0nALGWcHqSCOMRpTuvtnkLRTpYjOxaRFxcVLURw3k7lfirJc27T4edSPv8AB24vADUVuvQWCeSnepYCgC4m1PdenkVpGUT+jqvYfUoiRHWUnUsJKqrRIiWgiHYpEtEombVTjrBG7du0dKnEGA1mY9GdU1JyDxOjMVE8PsjFtpKgcakqu8Y9Nl1bVPYCy5lWpnu6X25sbytmHv4BiuBUSZzh2x0MPpVk0x4sX2Umfw3d0RbiFm9Nf4Pk4WGijMjBcFFdUIUUCGQu+vhPMynbgbyNmvWS71tOrlsf5bKQI18G23Hyo29JQtGBuqqdrEXLpfwRAgyeR0YGS+9p7EMj2wKB8ExWKS7gqKcZrtumiDz8kcqACqota8zMibh45utgLA4Smd+GAr9zyTYZ0Dri8AO+uBDVuAXK/gmG7E6Nvh97/HH83+1uP+n0WWTOZP4NtCFgMgVH6rYZhBLLdCJ/1/YQHPOj3TekzA59uCIYJlLkH2cv1UPSPfMudxbIK07NsxmJQ4kSMexwb/wTBymvKtpYhPGX8+wis8E9hqJ6BhFyQAfzV/AZ7ZPlXec5LoWikJNXd838wipdld2C4byjCDha9KOi+J++AGa8ORyInJBOJ29F1FZA1RgD3hru4glQyvrap4QV8VzlVp30X0dKYdDodQrHtbFSP/xu17lcw+m6cEK1yPt+4c/LkyYSxT9hK+5GFnYPLMYNoASOEcu1/c8KhEujuDs/3FhJWQAze5wbyAWzPWOyK2ovBtSeomqguXrq2efHj9JO5A/GsNHAOjjWfQtnxJViD7RDvuwHydkRNT8gx289G6fd4iPQ2JyxbX29ooAQYKnPeULZgbziymQvKLaXPh0u8DtWS+/KR3d+aOQKUVNY8PKv2QoruzrLK+Sbk5KFzdpIZV1ZVc11ZZV19AIifI5ZW1FzFr2uCPl65aP7zUN5ny8xiOrwB9rp5dt2FuqyqNogsuVQOJz7kGyQ+04CZzWnLox6jah8ZoYW1iFELrTO/g+Q4WmktlIejyXpO5MI0PjgVeHCHn2rLEsfAz+o/hw1pI2d5hmS+NtLiaXiYialE4t20b1/NhbK4HFxdKNqcMP28+ceXVtZsMJyuqH3XhGroJ3LBPcfl4m4QKyCY6T98P3SPRtpKK2PjII2ruUdY5+0z5iw4lcsGOPTewj7szn+Z0+fKmtMhFS2w3OOQ1q1HvfECfvFmxmZ0mRTsTUXC7d2XD37Q9wFBKTUUYxQAnwJnT8MnGqxMVrc3L3452Pv+FukTYQ4OJpZULJgmlX4OpdPjcBq3A87sGljop/PGMPE4LAhyjWyT9LNBIZ6fMaHo9zt8+zkBqrcNMXqsrWnJK8Geg0m9rwdEmIMDABRhlEmehE6XgtOMqO7BacG/d6yM784bdzgQ3+crPH6c5nW7t8KB3Aypk0D2PQR4Fx3o+DQf6YMinIeMy+J6QdS9D98tfx8BBj8fXofg4zaEbs8EQPNEjhw3vjd4N4Cr+fCb4/MNnnE7WvwCkjadLhOuJ+5q+5o3WuKdAWMOtka/ECaQfICllXWXQYIX0ipiUeG7/nKEcPd52zYuD0SOc4g8U7WioiLdyipKXycaKAAy8OFYBij5SAKMgjH6LmLwa3H6P5/VmlSi+zMUCuvXNjeYsJE1sPx1uXZfrd8IEwARCDbDj76UazE+/pdwtABHnUkg7q1CMfApyPvytuaGD/tatD/9pVULJkvtnwtOXoC4uBziK5L8HwBCPAZf98sAfv6e+gN3QAhnAe6jUwxK4I+vASNiiF8LKWoQ9W6MXY3dvYrCXYclvfXdyt0yqqvri95pIDf8UWe6yCrCKWbanYwvHooxdzZUZRaQLGJNLNXdnUZi8iwqrQ90LGt4lfsoz0SFA7YZg0GY6wXcpo4a61x63oKpwvYXgLs1SBOnkSPgPrjuinTmu4atKA10onMnZuCsByMzta4j0DcaYMahShJlWMg3nIK08l2Mex5EjPO41CyMwUB2YCeJ2Ym8DBrhvhbHZiJ7oyOLodNnAfgZQOpkjD2GNSweWSJN/HJVvKREoESL/9vED1vEZqSP7+FjMhTc9MtJr2ttpvKSWW2wXM3u1VwOFeEAlrGqLOD3FtkZFRXDhQgdDbHH/1WQo+HDR4DvYD/xlkmcBuyGW9kO0d/mOnpzr/8VE4SHtNY5aQoWHcz1/wHjt85Zng2L1QAAAABJRU5ErkJggg==',
  symbolImageDarkMono: 'data:image/png;base64,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'
}

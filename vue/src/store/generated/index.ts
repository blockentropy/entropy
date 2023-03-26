// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import BlockentropyEntropyEntropy from './blockentropy.entropy.entropy'
import BlockentropyEntropyMl from './blockentropy.entropy.ml'


export default { 
  BlockentropyEntropyEntropy: load(BlockentropyEntropyEntropy, 'blockentropy.entropy.entropy'),
  BlockentropyEntropyMl: load(BlockentropyEntropyMl, 'blockentropy.entropy.ml'),
  
}


function load(mod, fullns) {
    return function init(store) {        
        if (store.hasModule([fullns])) {
            throw new Error('Duplicate module name detected: '+ fullns)
        }else{
            store.registerModule([fullns], mod)
            store.subscribe((mutation) => {
                if (mutation.type == 'common/env/INITIALIZE_WS_COMPLETE') {
                    store.dispatch(fullns+ '/init', null, {
                        root: true
                    })
                }
            })
        }
    }
}
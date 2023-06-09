import { Client, registry, MissingWalletError } from 'blockentropy-entropy-client-ts'

import { Params } from "blockentropy-entropy-client-ts/blockentropy.entropy.ml/types"


export { Params };

function initClient(vuexGetters) {
	return new Client(vuexGetters['common/env/getEnv'], vuexGetters['common/wallet/signer'])
}

function mergeResults(value, next_values) {
	for (let prop of Object.keys(next_values)) {
		if (Array.isArray(next_values[prop])) {
			value[prop]=[...value[prop], ...next_values[prop]]
		}else{
			value[prop]=next_values[prop]
		}
	}
	return value
}

type Field = {
	name: string;
	type: unknown;
}
function getStructure(template) {
	let structure: {fields: Field[]} = { fields: [] }
	for (const [key, value] of Object.entries(template)) {
		let field = { name: key, type: typeof value }
		structure.fields.push(field)
	}
	return structure
}
const getDefaultState = () => {
	return {
				Params: {},
				
				_Structure: {
						Params: getStructure(Params.fromPartial({})),
						
		},
		_Registry: registry,
		_Subscriptions: new Set(),
	}
}

// initial state
const state = getDefaultState()

export default {
	namespaced: true,
	state,
	mutations: {
		RESET_STATE(state) {
			Object.assign(state, getDefaultState())
		},
		QUERY(state, { query, key, value }) {
			state[query][JSON.stringify(key)] = value
		},
		SUBSCRIBE(state, subscription) {
			state._Subscriptions.add(JSON.stringify(subscription))
		},
		UNSUBSCRIBE(state, subscription) {
			state._Subscriptions.delete(JSON.stringify(subscription))
		}
	},
	getters: {
				getParams: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.Params[JSON.stringify(params)] ?? {}
		},
				
		getTypeStructure: (state) => (type) => {
			return state._Structure[type].fields
		},
		getRegistry: (state) => {
			return state._Registry
		}
	},
	actions: {
		init({ dispatch, rootGetters }) {
			console.log('Vuex module: blockentropy.entropy.ml initialized!')
			if (rootGetters['common/env/client']) {
				rootGetters['common/env/client'].on('newblock', () => {
					dispatch('StoreUpdate')
				})
			}
		},
		resetState({ commit }) {
			commit('RESET_STATE')
		},
		unsubscribe({ commit }, subscription) {
			commit('UNSUBSCRIBE', subscription)
		},
		async StoreUpdate({ state, dispatch }) {
			state._Subscriptions.forEach(async (subscription) => {
				try {
					const sub=JSON.parse(subscription)
					await dispatch(sub.action, sub.payload)
				}catch(e) {
					throw new Error('Subscriptions: ' + e.message)
				}
			})
		},
		
		
		
		 		
		
		
		async QueryParams({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.BlockentropyEntropyMl.query.queryParams()).data
				
					
				commit('QUERY', { query: 'Params', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryParams', payload: { options: { all }, params: {...key},query }})
				return getters['getParams']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryParams API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		async sendMsgLanguage({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const result = await client.BlockentropyEntropyMl.tx.sendMsgLanguage({ value, fee: {amount: fee, gas: "200000"}, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgLanguage:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgLanguage:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgCtrl({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const result = await client.BlockentropyEntropyMl.tx.sendMsgCtrl({ value, fee: {amount: fee, gas: "200000"}, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCtrl:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgCtrl:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgGenerate({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const result = await client.BlockentropyEntropyMl.tx.sendMsgGenerate({ value, fee: {amount: fee, gas: "200000"}, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgGenerate:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgGenerate:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgInpaint({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const result = await client.BlockentropyEntropyMl.tx.sendMsgInpaint({ value, fee: {amount: fee, gas: "200000"}, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgInpaint:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgInpaint:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		
		async MsgLanguage({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.BlockentropyEntropyMl.tx.msgLanguage({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgLanguage:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgLanguage:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgCtrl({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.BlockentropyEntropyMl.tx.msgCtrl({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCtrl:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgCtrl:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgGenerate({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.BlockentropyEntropyMl.tx.msgGenerate({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgGenerate:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgGenerate:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgInpaint({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.BlockentropyEntropyMl.tx.msgInpaint({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgInpaint:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgInpaint:Create Could not create message: ' + e.message)
				}
			}
		},
		
	}
}

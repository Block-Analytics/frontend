import { defineStore } from 'pinia'
import { getBlocks } from '@/api/BlockService';
import { getTransactions } from '@/api/transactionService';

export const useblockchainDataStore = defineStore('blockchainData', {
    state: () => {
        return { 
            blockchain: {
                blocks: [],
                transactions: []
            },
            nav: ''
        }
    },
    getters: {
    },
    actions: {
        async fetchData() {
            const bc = await getBlocks()
            const blocksCount = bc.message.queryChain
            this.blockchain.blocks = blocksCount

            const tx = await getTransactions()
            const transactionsCount = tx.message.queryChain
            this.blockchain.transactions = transactionsCount
        },
        async setNav(nav: string) {
            this.nav = nav
        }
    },
    persist: true
})
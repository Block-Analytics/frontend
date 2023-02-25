import { writable } from 'svelte/store';

// persistent store
// const createWritableStore = (key: string, startValue: any) => {
//   const { subscribe, set } = writable(startValue);
  
//   return {
//     subscribe,
//     set,
//     useLocalStorage: () => {
//       const json = localStorage.getItem(key);
//       if (json) {
//         set(JSON.parse(json));
//       }
      
//       subscribe(current => {
//         localStorage.setItem(key, JSON.stringify(current));
//       });
//     }
//   };
// }



/*
    Normal storage
    USAGE:

	import state from '$lib/store/store';

    let val;
	state.subscribe((data) => {
		val = data.val;
	});

    state.update((currData) => {
		return {
			...currData,
			identifier: event.data.identifier
		}
    })

    state.set({
        val: true
    })

*/
const state = writable({
    blockchain: {
        blocks: [],
        transactions: []
    },
    nav: 'home'
})

export default state;
<script>
// @ts-nocheck

	import '../app.css';
	import NavBar from '$lib/components/navBar.svelte';
	import Loader from '$lib/components/loader.svelte';
	import { onMount } from 'svelte';
	import state from '$lib/store/store';

	const loading = false;

	let activeSection = null;
	state.subscribe((data) => {
		activeSection = data.nav;
	});

	onMount(() => {
		window.addEventListener(
			'scroll',
			function () {
				var offsetETH = document.getElementById('eth').offsetTop;
				var offsetAVAX = document.getElementById('avax').offsetTop;
				console.log(offsetETH);
				console.log(window.scrollY);

				//var offsetXTZ = document.querySelector<HTMLElement>('#xtz').offsetHeight;
				if (window.scrollY > offsetAVAX * 0.5) {
					state.update((data) => {
						data.nav = 'avax';
						return data;
					});
				} else if (window.scrollY > offsetETH * 0.5) {
					state.update((data) => {
						data.nav = 'eth';
						return data;
					});
				} else {
					state.update((data) => {
						data.nav = 'home';
						return data;
					});
				}
			},
			false
		);
	});
</script>

{#if !loading}
	<NavBar />
	<div class="content text-white z-10">
		<div class="flex flex-col">
			<slot />
		</div>
	</div>
{:else}
	<div class="h-screen flex justify-center items-center">
		<Loader />
	</div>
{/if}

<style lang="postcss">
	@font-face {
		font-family: 'Montserrat';
		font-weight: 400;
		src: local('Montserrat-Regular'), url('/fonts/Montserrat-Medium.ttf') format('truetype');
	}

	@font-face {
		font-family: 'Montserrat';
		font-weight: 300;
		src: local('Montserrat-Light'), url('/fonts/Montserrat-Light.ttf') format('truetype');
	}

	@font-face {
		font-family: 'Montserrat';
		font-weight: 200;
		src: local('Montserrat-Thin'), url('/fonts/Montserrat-Thin.ttf') format('truetype');
	}

	@font-face {
		font-family: 'Montserrat';
		font-weight: 500;
		src: local('Montserrat-Medium'), url('/fonts/Montserrat-Medium.ttf') format('truetype');
	}

	@font-face {
		font-family: 'Montserrat';
		font-weight: 600;
		src: local('Montserrat-SemiBold'), url('/fonts/Montserrat-SemiBold.ttf') format('truetype');
	}

	@font-face {
		font-family: 'Montserrat';
		font-weight: 800;
		src: local('Montserrat-Bold'), url('/fonts/Montserrat-Bold.ttf') format('truetype');
	}
	:global(body) {
		font-family: 'Montserrat', sans-serif;
		background-color: #090a0b;
	}
	
	:global(input:focus, select:focus, textarea:focus, button:focus) {
		outline: none;
	}
</style>

<script>
	import EthContent from '$lib/components/ethContent.svelte';
	import HomeContent from '$lib/components/homeContent.svelte';
	import HomeLogo from '$lib/components/homeLogo.svelte';
	import SpecialButton from '$lib/components/specialButton.svelte';
	import state from '$lib/store/store';

	let blockchains = null;
	let nav = null;
	state.subscribe((data) => {
		blockchains = data.blockchain;
		nav = data.nav;
	});
</script>

<div
	id="home"
	class="relative flex flex-col justify-center items-center gap-6 min-h-screen"
	style="background: radial-gradient(at 90% 30%, #0C150B 0%, #090A0B 50%) !important;"
>
	<HomeContent />

	<div class="relative">
		<HomeLogo />
	</div>
	<h1 class="text-4xl font-semibold w-[450px]">Explore. Discover. Connect.</h1>
	<p class="w-[450px]">
		Powerful tool allows you to easily view and search multiple blockchain networks all in one
		place. Real-time transaction data, detailed blockchain statistics, interactive charts and
		visualizations.
	</p>
	<SpecialButton>Get Started</SpecialButton>
</div>
<div
	id="eth"
	class="relative flex flex-col gap-4 min-h-screen w-full px-4 py-6 pl-32"
	style="background: radial-gradient(at 80% 40%, #0C150B 0%, #090A0B 40%) !important;"
>
	<EthContent />
	<div class="flex flex-row gap-4">
		<div class="flex flex-col h-28 w-1/6 rounded-lg bg-black/60 p-4 backdrop-blur-2xl">
			<h2 class="text-xs font-normal text-white/40">Transactions</h2>
			<h1 class="text-4xl font-semibold mx-auto my-auto">{123}</h1>
		</div>
		<div class="flex flex-col h-28 w-1/6 rounded-lg bg-black/60 p-4 backdrop-blur-2xl">
			<h2 class="text-xs font-normal text-white/40">Blocks</h2>
			<h1 class="text-4xl font-semibold mx-auto my-auto">{123}</h1>
		</div>
		<div class="flex flex-col h-28 w-1/6 rounded-lg bg-black/60 p-4 backdrop-blur-2xl">
			<h2 class="text-xs font-normal text-white/40">Supported protocols</h2>
			<h1 class="text-4xl font-semibold mx-auto my-auto">{5}</h1>
		</div>
		<div class="flex flex-col h-28 w-1/6 rounded-lg bg-black/60 p-4 backdrop-blur-2xl">
			<h2 class="text-xs font-normal text-white/40">Gas Price</h2>
			<h1 class="text-4xl font-semibold mx-auto my-auto">{456}</h1>
		</div>
		<div class="flex flex-col h-28 w-1/6 rounded-lg bg-black/60 p-4 backdrop-blur-2xl">
			<h2 class="text-xs font-normal text-white/40">Gas spent</h2>
			<h1 class="text-4xl font-semibold mx-auto my-auto">{456}</h1>
		</div>
		<div class="flex flex-col h-28 w-1/6 rounded-lg bg-black/60 p-4 backdrop-blur-2xl">
			<h2 class="text-xs font-normal text-white/40">Total Tokens</h2>
			<h1 class="text-4xl font-semibold mx-auto my-auto">{456}</h1>
		</div>
	</div>
	<div class="flex flex-row gap-4">
		<div class="flex flex-col h-auto w-1/2 rounded-lg bg-black/60 p-4 backdrop-blur-2xl">
			<h1 class="text-xs font-normal text-white/40">Transactions by time</h1>
			<div class="h-full">
				<!-- <Bar :data="data" :options="options" /> -->
			</div>
		</div>
		<div class="flex flex-col h-auto w-1/2 rounded-lg bg-black/60 p-4 backdrop-blur-2xl">
			<h1 class="text-xs font-normal text-white/40">Smart Contracts deployment</h1>
			<div class="h-full">
				<!-- <Bar :data="data" :options="options" /> -->
			</div>
		</div>
	</div>
	<div class="flex flex-row gap-4">
		<div class="flex flex-col w-3/4 rounded-lg bg-black/60 p-4 backdrop-blur-2xl">
			<h2 class="text-xs font-normal text-white/40">Latest transactions</h2>
			<table class=" my-3">
				<tr class="text-white/10 font-normal text-xs">
					<th>Block</th>
					<th>From</th>
					<th>To</th>
					<th>Value</th>
				</tr>
				<tr>
					<td>123</td>
					<td>0x123</td>
					<td>0x123</td>
					<td>123</td>
				</tr>
			</table>
		</div>
		<div class="flex flex-col h-full justify-between w-1/4">
			<div class="flex flex-col w-full rounded-lg bg-black/60 p-4 backdrop-blur-2xl mb-4">
				<h2 class="text-xs font-normal text-white/40">Latest Block</h2>
				<h1 class="text-4xl font-semibold mx-auto my-auto">{456}</h1>
			</div>
			<div class="flex flex-col w-full rounded-lg bg-black/60 p-4 backdrop-blur-2xl">
				<h2 class="text-xs font-normal text-white/40">Transactions in lastest block</h2>
				<h1 class="text-4xl font-semibold mx-auto my-auto">{456}</h1>
			</div>
		</div>
	</div>
</div>
<div
	id="avax">
</div>
<script>
	import { showThankYou } from '$lib/stores.js';
	import Rating from '$lib/components/rating.svelte';
	import ThankYou from '../lib/components/thankYou.svelte';
</script>

<div class="container">
	{#if $showThankYou}
		<ThankYou />
	{:else}
		<Rating />
	{/if}
</div>

<style>
	.container {
		height: 100vh;

		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
</style>

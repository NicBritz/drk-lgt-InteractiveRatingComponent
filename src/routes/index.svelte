<script>
	import { showThankYou } from '$lib/stores.js';
	import Rating from '$lib/components/Rating.svelte';
	import ThankYou from '../lib/components/ThankYou.svelte';
</script>

<section class="page-container">
	{#if $showThankYou}
		<ThankYou />
	{:else}
		<Rating />
	{/if}
</section>

<style>
	.page-container {
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
</style>

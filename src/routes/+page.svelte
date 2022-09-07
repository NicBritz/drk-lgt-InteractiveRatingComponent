<script>
	import Rating from '$lib/components/Rating.svelte';
	import ThankYou from '$lib/components/ThankYou.svelte';
	import { showThankYou } from '$lib/stores.js';
</script>

<svelte:head>
	<title>Frontend Mentor | Interactive rating component</title>
	<meta name="description" content="A Frontend Mentor project using SveteKit" />
</svelte:head>
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

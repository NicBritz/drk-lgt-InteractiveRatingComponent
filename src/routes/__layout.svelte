<script>
	import '$lib/styles/global.css';
	import Attribution from '$lib/components/Attribution.svelte';
</script>

<slot />

<footer>
	<Attribution />
</footer>

<style>
	footer {
		position: absolute;
		bottom: 0;
		width: 100%;
		text-align: center;
		color: var(--light-grey);
		padding-bottom: 1rem;
	}
</style>

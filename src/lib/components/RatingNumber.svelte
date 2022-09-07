<script>
	// @ts-nocheck

	import { rating } from '$lib/stores.js';

	export let value = '0';

	function updateRating() {
		rating.set(value);
	}
</script>

<button on:click={updateRating} class="rating-button" class:active={value === $rating}>
	{value}
</button>

<style>
	.rating-button {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 48px;
		height: 48px;
		background-color: var(--dark-blue);
		border-radius: 50%;
		color: var(--medium-grey);
		font-size: 16px;
		font-weight: 700;
		line-height: 24px;
		letter-spacing: 0.2px;
		transition: all 0.3s ease-in-out;
		border-style: none;
	}

	.rating-button:hover {
		cursor: pointer;
		background-color: var(--orange);
		color: var(--pure-white);
	}

	.active {
		background-color: var(--medium-grey);
		color: var(--pure-white);
	}

	@media (max-width: 375px) {
		.rating-button {
			width: 42px;
			height: 42px;
		}
	}
</style>

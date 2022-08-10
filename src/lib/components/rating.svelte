<script>
	import RatingNum from './RatingNum.svelte';
	import { showThankYou, rating } from '$lib/stores.js';

	let valid = true;

	function submitRating() {
		if (!$rating > 0) {
			valid = false;
			return;
		}

		showThankYou.set(true);
	}
</script>

<div class="card">
	<!-- Star icon -->
	<div class="star-container">
		<img src="/icon-star.svg" alt="star icon" />
	</div>
	<!-- heading text -->
	<h1 class="heading">How did we do?</h1>

	<!-- description text -->
	<p class="description">
		Please let us know how we did with your support request. All feedback is appreciated to help us
		improve our offering!
	</p>
	<!-- ratings -->
	<div class="rating-container">
		<RatingNum value="1" />
		<RatingNum value="2" />
		<RatingNum value="3" />
		<RatingNum value="4" />
		<RatingNum value="5" />
	</div>
	<!-- submit button -->
	<button on:click={submitRating}> Submit </button>

	{#if !valid}
		<p class="invalid">Please select a rating :)</p>
	{/if}
</div>

<style>
	.card {
		border-radius: 30px;
		max-width: 412px;
		margin: 24px;
		background-image: var(--black-gradient);
	}

	.star-container {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 48px;
		height: 48px;
		background-color: var(--dark-blue);
		border-radius: 50%;
		margin: 32px;
	}

	.star-container img {
		width: 16px;
		height: 16px;
	}

	.heading {
		line-height: 36px;
		font-size: 28px;
		font-weight: 700;
		color: var(--pure-white);
		margin: 0 32px 32px 32px;
	}

	.description {
		line-height: 24px;
		font-size: 15px;
		font-weight: 400;
		color: var(--light-grey);
		margin: 0 32px 32px 32px;
	}

	.rating-container {
		display: flex;
		justify-content: space-between;
		max-width: 341px;
		margin: 0 32px 32px 32px;
	}

	button {
		width: 83%;
		height: 45px;
		background-color: var(--orange);
		border-radius: 22.5px;
		border: none;
		text-transform: uppercase;
		color: var(--pure-white);
		font-size: 15px;
		font-weight: 700;
		letter-spacing: 2px;
		line-height: 19px;
		margin: 0 32px 32px 32px;
		transition: all 0.2s ease-in-out;
	}

	button:hover {
		cursor: pointer;
		background-color: var(--pure-white);
		color: var(--orange);
	}

	.invalid {
		color: var(--orange);
		text-align: center;
		font-size: 12px;
		font-weight: 400;
		margin: -16px 32px 16px 32px;
	}

	@media (max-width: 375px) {
		.card {
			max-width: 100%;
			margin: 24px;
		}
		.star-container {
			margin: 24px 0 0 24px;
			width: 40px;
			height: 40px;
		}

		.star-container img {
			width: 14px;
			height: 14px;
		}
		.heading {
			margin: 16px 24px 0 24px;
			font-size: 24px;
			line-height: 30px;
		}
		.description {
			margin: 10px 24px 24px 24px;
			font-size: 14px;
			line-height: 22px;
		}
		.rating-container {
			max-width: 100%;
			margin: 0 24px;
		}
		button {
			max-width: 100%;
			margin: 24px 24px 32px 24px;
		}
	}
</style>

<script>
	import RatingNumber from './RatingNumber.svelte';
	import { showThankYou, rating } from '$lib/stores.js';

	let valid = true;

	function submitRating() {
		//validate before submitting
		if (!$rating > 0) {
			valid = false;
			return;
		}

		showThankYou.set(true);
	}
</script>

<div class="rating-card">
	<!-- star icon -->
	<div class="rating-card__star-icon-container">
		<img src="/icon-star.svg" alt="star icon" />
	</div>

	<!-- CTA heading text -->
	<h1 class="rating-card__cta-heading">How did we do?</h1>

	<!-- CTA description text -->
	<p class="rating-card__cta-description">
		Please let us know how we did with your support request. All feedback is appreciated to help us
		improve our offering!
	</p>

	<!-- ratings -->
	<div class="rating-card__ratings-container">
		<RatingNumber value="1" />
		<RatingNumber value="2" />
		<RatingNumber value="3" />
		<RatingNumber value="4" />
		<RatingNumber value="5" />
	</div>

	<!-- submit button -->
	<button on:click={submitRating}> Submit </button>

	<!-- validation error -->
	{#if !valid}
		<p class="rating-card__invalid">Please select a rating :)</p>
	{/if}
</div>

<style>
	.rating-card {
		border-radius: 30px;
		max-width: 412px;
		margin: 24px;
		background-image: var(--black-gradient);
	}

	.rating-card__star-icon-container {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 48px;
		height: 48px;
		background-color: var(--dark-blue);
		border-radius: 50%;
		margin: 32px;
	}

	.rating-card__star-icon-container img {
		width: 16px;
		height: 16px;
	}

	.rating-card__cta-heading {
		line-height: 36px;
		font-size: 28px;
		font-weight: 700;
		color: var(--pure-white);
		margin: 0 32px 32px 32px;
	}

	.rating-card__cta-description {
		line-height: 24px;
		color: var(--light-grey);
		margin: 0 32px 32px 32px;
	}

	.rating-card__ratings-container {
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

	.rating-card__invalid {
		color: var(--orange);
		text-align: center;
		font-size: 12px;
		margin: -16px 32px 16px 32px;
	}
	/* media queries for smaller screens */
	@media (max-width: 375px) {
		.rating-card {
			max-width: 100%;
			margin: 24px;
		}
		.rating-card__star-icon-container {
			margin: 24px 0 0 24px;
			width: 40px;
			height: 40px;
		}

		.rating-card__star-icon-container img {
			width: 14px;
			height: 14px;
		}
		.rating-card__cta-heading {
			margin: 16px 24px 0 24px;
			font-size: 24px;
			line-height: 30px;
		}
		.rating-card__cta-description {
			margin: 10px 24px 24px 24px;
			font-size: 14px;
			line-height: 22px;
		}
		.rating-card__ratings-container {
			max-width: 100%;
			margin: 0 24px;
		}
		button {
			max-width: 100%;
			margin: 24px 24px 32px 24px;
		}
	}
</style>

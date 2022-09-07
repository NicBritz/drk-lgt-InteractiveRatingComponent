<script>
	import { rating, showThankYou } from '$lib/stores.js';

	import { onMount } from 'svelte';

	// removes the component after 5 seconds
	onMount(() => {
		setTimeout(() => {
			rating.set(0);
			showThankYou.set(false);
		}, 5000);
	});
</script>

<div class="thankyou-card">
	<!-- icon -->
	<img src="/illustration-thank-you.svg" alt="thank you icon" />

	<div class="thankyou-card__selected-rating">
		<p>You selected {$rating} of 5</p>
	</div>

	<!-- heading text -->
	<h1 class="thankyou-card__heading">Thank You!</h1>

	<p class="thankyou-card__description">
		We appreciate you taking the time to give a rating. If you ever need more support, don’t
		hesitate to get in touch!
	</p>
</div>

<style>
	.thankyou-card {
		border-radius: 30px;
		max-width: 412px;
		background-image: var(--black-gradient);
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.thankyou-card img {
		width: 162px;
		height: auto;
		margin-top: 45px;
	}
	.thankyou-card__selected-rating {
		background-color: var(--dark-blue);
		border-radius: 22.5px;
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 32px 0;
		padding: 5px 20px;
	}

	.thankyou-card__selected-rating p {
		text-align: center;
		font-size: 15px;
		font-weight: 400;
		color: var(--orange);
		line-height: 24px;
	}

	.thankyou-card__heading {
		line-height: 36px;
		font-size: 28px;
		font-weight: 700;
		color: var(--pure-white);
		margin: 0 32px 32px 32px;
	}

	.thankyou-card__description {
		text-align: center;
		line-height: 24px;
		font-size: 15px;
		font-weight: 400;
		color: var(--light-grey);
		margin: 0 32px 32px 32px;
		max-width: 341px;
	}

	@media (max-width: 375px) {
		.thankyou-card {
			max-width: 100%;
			margin: 24px;
		}

		.thankyou-card img {
			width: 144px;
			height: auto;
			margin: 34px 0 24px 0;
		}

		.thankyou-card__selected-rating {
			padding: 5px 12px;
			margin: 0;
		}

		.thankyou-card__selected-rating p {
			font-size: 14px;
			line-height: 22px;
		}

		.thankyou-card__heading {
			font-size: 24px;
			line-height: 30px;
			margin: 24px 24px 17px 24px;
		}

		.thankyou-card__description {
			margin: 0 24px 37px 24px;
			font-size: 14px;
			line-height: 22px;
		}
	}
</style>

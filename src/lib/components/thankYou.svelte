<script>
	import { rating } from '$lib/stores.js';
</script>

<div class="card">
	<!-- icon -->
	<img src="/illustration-thank-you.svg" alt="thank you icon" />
	<div class="select-rating-container">
		<p class="selected-rating-txt">You selected {$rating} of 5</p>
	</div>

	<!-- heading text -->
	<h1 class="thank-you-heading">Thank You!</h1>

	<p class="description">
		We appreciate you taking the time to give a rating. If you ever need more support, don’t
		hesitate to get in touch!
	</p>
</div>

<style>
	.card {
		border-radius: 30px;
		max-width: 412px;
		background-image: var(--black-gradient);
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.select-rating-container {
		background-color: var(--dark-blue);

		border-radius: 22.5px;
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 32px 0;
	}

	.selected-rating-txt {
		text-align: center;
		font-size: 15px;
		font-weight: 400;
		color: var(--orange);
		line-height: 24px;
	}

	img {
		width: 162px;
		height: auto;
		margin-top: 45px;
	}

	.thank-you-heading {
		line-height: 36px;
		font-size: 28px;
		font-weight: 700;
		color: var(--pure-white);
		margin: 0 32px 32px 32px;
	}

	.description {
		text-align: center;
		line-height: 24px;
		font-size: 15px;
		font-weight: 400;
		color: var(--light-grey);
		margin: 0 32px 32px 32px;
		max-width: 341px;
	}

	@media (max-width: 375px) {
		.card {
			max-width: 100%;
			margin: 24px;
		}

		img {
			width: 144px;
			height: auto;
			margin: 34px 0 24px 0;
		}

		.select-rating-container {
			padding: 5px 12px;
			margin: 0;
		}

		.selected-rating-txt {
			font-size: 14px;
			line-height: 22px;
		}

		.thank-you-heading {
			font-size: 24px;
			line-height: 30px;
			margin: 24px 24px 17px 24px;
		}

		.description {
			margin: 0 24px 37px 24px;
			font-size: 14px;
			line-height: 22px;
		}
	}
</style>

import { n as noop, a as safe_not_equal, c as create_ssr_component, b as subscribe, e as escape, v as validate_component } from "../../_app/immutable/chunks/index-09a0a7f1.js";
const subscriber_queue = [];
function writable(value, start = noop) {
  let stop;
  const subscribers = /* @__PURE__ */ new Set();
  function set(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe2(run, invalidate = noop) {
    const subscriber = [run, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || noop;
    }
    run(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update, subscribe: subscribe2 };
}
const rating = writable(0);
const showThankYou = writable(false);
const RatingNumber_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".rating-button.svelte-118s4q0{display:flex;justify-content:center;align-items:center;width:48px;height:48px;background-color:var(--dark-blue);border-radius:50%;color:var(--medium-grey);font-size:16px;font-weight:700;line-height:24px;letter-spacing:0.2px;transition:all 0.3s ease-in-out;border-style:none}.rating-button.svelte-118s4q0:hover{cursor:pointer;background-color:var(--orange);color:var(--pure-white)}.active.svelte-118s4q0{background-color:var(--medium-grey);color:var(--pure-white)}@media(max-width: 375px){.rating-button.svelte-118s4q0{width:42px;height:42px}}",
  map: null
};
const RatingNumber = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $rating, $$unsubscribe_rating;
  $$unsubscribe_rating = subscribe(rating, (value2) => $rating = value2);
  let { value = 0 } = $$props;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  $$result.css.add(css$3);
  $$unsubscribe_rating();
  return `<button class="${["rating-button svelte-118s4q0", value === $rating ? "active" : ""].join(" ").trim()}">${escape(value)}
</button>`;
});
const rating_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".rating-card.svelte-1sg920p.svelte-1sg920p{border-radius:30px;max-width:412px;margin:24px;background-image:var(--black-gradient)}.rating-card__star-icon-container.svelte-1sg920p.svelte-1sg920p{display:flex;justify-content:center;align-items:center;width:48px;height:48px;background-color:var(--dark-blue);border-radius:50%;margin:32px}.rating-card__star-icon-container.svelte-1sg920p img.svelte-1sg920p{width:16px;height:16px}.rating-card__cta-heading.svelte-1sg920p.svelte-1sg920p{line-height:36px;font-size:28px;font-weight:700;color:var(--pure-white);margin:0 32px 32px 32px}.rating-card__cta-description.svelte-1sg920p.svelte-1sg920p{line-height:24px;color:var(--light-grey);margin:0 32px 32px 32px}.rating-card__ratings-container.svelte-1sg920p.svelte-1sg920p{display:flex;justify-content:space-between;max-width:341px;margin:0 32px 32px 32px}button.svelte-1sg920p.svelte-1sg920p{width:83%;height:45px;background-color:var(--orange);border-radius:22.5px;border:none;text-transform:uppercase;color:var(--pure-white);font-weight:700;letter-spacing:2px;line-height:19px;margin:0 32px 32px 32px;transition:all 0.2s ease-in-out}button.svelte-1sg920p.svelte-1sg920p:hover{cursor:pointer;background-color:var(--pure-white);color:var(--orange)}.rating-card__invalid.svelte-1sg920p.svelte-1sg920p{color:var(--orange);text-align:center;font-size:12px;margin:-16px 32px 16px 32px}@media(max-width: 375px){.rating-card.svelte-1sg920p.svelte-1sg920p{max-width:100%;margin:24px}.rating-card__star-icon-container.svelte-1sg920p.svelte-1sg920p{margin:24px 0 0 24px;width:40px;height:40px}.rating-card__star-icon-container.svelte-1sg920p img.svelte-1sg920p{width:14px;height:14px}.rating-card__cta-heading.svelte-1sg920p.svelte-1sg920p{margin:16px 24px 0 24px;font-size:24px;line-height:30px}.rating-card__cta-description.svelte-1sg920p.svelte-1sg920p{margin:10px 24px 24px 24px;font-size:14px;line-height:22px}.rating-card__ratings-container.svelte-1sg920p.svelte-1sg920p{max-width:100%;margin:0 24px}button.svelte-1sg920p.svelte-1sg920p{max-width:100%;margin:24px 24px 32px 24px}}",
  map: null
};
const Rating = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_rating;
  $$unsubscribe_rating = subscribe(rating, (value) => value);
  $$result.css.add(css$2);
  $$unsubscribe_rating();
  return `<div class="${"rating-card svelte-1sg920p"}">
	<div class="${"rating-card__star-icon-container svelte-1sg920p"}"><img src="${"/icon-star.svg"}" alt="${"star icon"}" class="${"svelte-1sg920p"}"></div>

	
	<h1 class="${"rating-card__cta-heading svelte-1sg920p"}">How did we do?</h1>

	
	<p class="${"rating-card__cta-description svelte-1sg920p"}">Please let us know how we did with your support request. All feedback is appreciated to help us
		improve our offering!
	</p>

	
	<div class="${"rating-card__ratings-container svelte-1sg920p"}">${validate_component(RatingNumber, "RatingNum").$$render($$result, { value: "1" }, {}, {})}
		${validate_component(RatingNumber, "RatingNum").$$render($$result, { value: "2" }, {}, {})}
		${validate_component(RatingNumber, "RatingNum").$$render($$result, { value: "3" }, {}, {})}
		${validate_component(RatingNumber, "RatingNum").$$render($$result, { value: "4" }, {}, {})}
		${validate_component(RatingNumber, "RatingNum").$$render($$result, { value: "5" }, {}, {})}</div>

	
	<button class="${"svelte-1sg920p"}">Submit </button>

	
	${``}
</div>`;
});
const Thankyou_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".thankyou-card.svelte-sanpwk.svelte-sanpwk{border-radius:30px;max-width:412px;background-image:var(--black-gradient);display:flex;flex-direction:column;align-items:center}.thankyou-card.svelte-sanpwk img.svelte-sanpwk{width:162px;height:auto;margin-top:45px}.thankyou-card__selected-rating.svelte-sanpwk.svelte-sanpwk{background-color:var(--dark-blue);border-radius:22.5px;display:flex;justify-content:center;align-items:center;margin:32px 0;padding:5px 20px}.thankyou-card__selected-rating.svelte-sanpwk p.svelte-sanpwk{text-align:center;font-size:15px;font-weight:400;color:var(--orange);line-height:24px}.thankyou-card__heading.svelte-sanpwk.svelte-sanpwk{line-height:36px;font-size:28px;font-weight:700;color:var(--pure-white);margin:0 32px 32px 32px}.thankyou-card__description.svelte-sanpwk.svelte-sanpwk{text-align:center;line-height:24px;font-size:15px;font-weight:400;color:var(--light-grey);margin:0 32px 32px 32px;max-width:341px}@media(max-width: 375px){.thankyou-card.svelte-sanpwk.svelte-sanpwk{max-width:100%;margin:24px}.thankyou-card.svelte-sanpwk img.svelte-sanpwk{width:144px;height:auto;margin:34px 0 24px 0}.thankyou-card__selected-rating.svelte-sanpwk.svelte-sanpwk{padding:5px 12px;margin:0}.thankyou-card__selected-rating.svelte-sanpwk p.svelte-sanpwk{font-size:14px;line-height:22px}.thankyou-card__heading.svelte-sanpwk.svelte-sanpwk{font-size:24px;line-height:30px;margin:24px 24px 17px 24px}.thankyou-card__description.svelte-sanpwk.svelte-sanpwk{margin:0 24px 37px 24px;font-size:14px;line-height:22px}}",
  map: null
};
const Thankyou = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $rating, $$unsubscribe_rating;
  $$unsubscribe_rating = subscribe(rating, (value) => $rating = value);
  $$result.css.add(css$1);
  $$unsubscribe_rating();
  return `<div class="${"thankyou-card svelte-sanpwk"}">
	<img src="${"/illustration-thank-you.svg"}" alt="${"thank you icon"}" class="${"svelte-sanpwk"}">

	<div class="${"thankyou-card__selected-rating svelte-sanpwk"}"><p class="${"svelte-sanpwk"}">You selected ${escape($rating)} of 5</p></div>

	
	<h1 class="${"thankyou-card__heading svelte-sanpwk"}">Thank You!</h1>

	<p class="${"thankyou-card__description svelte-sanpwk"}">We appreciate you taking the time to give a rating. If you ever need more support, don\u2019t
		hesitate to get in touch!
	</p>
</div>`;
});
const index_svelte_svelte_type_style_lang = "";
const css = {
  code: ".page-container.svelte-1vhbph5{height:100vh;display:flex;justify-content:center;align-items:center;flex-direction:column}",
  map: null
};
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $showThankYou, $$unsubscribe_showThankYou;
  $$unsubscribe_showThankYou = subscribe(showThankYou, (value) => $showThankYou = value);
  $$result.css.add(css);
  $$unsubscribe_showThankYou();
  return `<section class="${"page-container svelte-1vhbph5"}">${$showThankYou ? `${validate_component(Thankyou, "ThankYou").$$render($$result, {}, {}, {})}` : `${validate_component(Rating, "Rating").$$render($$result, {}, {}, {})}`}
</section>`;
});
export {
  Routes as default
};

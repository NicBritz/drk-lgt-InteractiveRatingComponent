import { c as create_ssr_component, v as validate_component } from "../../_app/immutable/chunks/index-09a0a7f1.js";
const global = "";
const attribution_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".attribution.svelte-2svr6l.svelte-2svr6l{font-size:11px;text-align:center;color:var(--light-grey)}.attribution.svelte-2svr6l a.svelte-2svr6l{color:var(--orange);text-decoration:none}.attribution.svelte-2svr6l a.svelte-2svr6l:hover{text-decoration:underline}",
  map: null
};
const Attribution = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="${"attribution svelte-2svr6l"}">Challenge by <a href="${"https://www.frontendmentor.io?ref=challenge"}" target="${"_blank"}" class="${"svelte-2svr6l"}">Frontend Mentor</a>. Coded by <a href="${"https://www.frontendmentor.io/profile/NicBritz"}" target="${"_blank"}" class="${"svelte-2svr6l"}">Nic B.</a>.
</div>`;
});
const __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "footer.svelte-1d7vh95{position:absolute;bottom:0;width:100%;text-align:center;color:var(--light-grey);padding-bottom:1.5rem}",
  map: null
};
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${slots.default ? slots.default({}) : ``}

<footer class="${"svelte-1d7vh95"}">${validate_component(Attribution, "Attribution").$$render($$result, {}, {}, {})}
</footer>`;
});
export {
  _layout as default
};

import { l as createCommonjsModule, Q as _toConsumableArray } from './web.url.bf352adb.js';
import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, v as validate_slots, z as stores$1, A as validate_store, B as component_subscribe, K as onMount, L as onDestroy, e as element, h as claim_element, j as children, b as detach_dev, m as attr_dev, l as add_location, n as insert_dev, T as listen_dev, $ as prop_dev, N as binding_callbacks, U as bind, a as space, c as create_component, t as text, q as query_selector_all, f as claim_space, g as claim_component, k as claim_text, O as set_style, o as mount_component, p as append_dev, a0 as prevent_default, V as add_flush_callback, u as transition_in, w as transition_out, x as destroy_component, Z as run_all, J as globals } from './client.3c303c7e.js';
import { u as util, M as Markmap_1, l as lodash_debounce, t as transform_1 } from './markmap.e7e9f6df.js';
import { H as Header, F as Footer } from './footer.258c6a18.js';
import { T as Toolbar, s as subscribeHash } from './gist.9eea550f.js';

var template_1 = createCommonjsModule(function (module, exports) {

  exports.__esModule = true;
  exports.fillTemplate = fillTemplate;
  var template = "<!DOCTYPE html>\n<html>\n<head>\n<meta charset=\"UTF-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n<meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n<title>Markmap</title>\n<style>\n* {\n  margin: 0;\n  padding: 0;\n}\n#mindmap {\n  display: block;\n  width: 100vw;\n  height: 100vh;\n}\n</style>\n<!--CSS-->\n</head>\n<body>\n<svg id=\"mindmap\"></svg>\n<!--JS-->\n</body>\n</html>\n";
  var version = "0.9.1";
  var baseJs = ['https://cdn.jsdelivr.net/npm/d3@5', "https://cdn.jsdelivr.net/npm/markmap-lib@".concat(version, "/dist/browser/view.min.js")].map(function (src) {
    return {
      type: 'script',
      data: {
        src: src
      }
    };
  });

  function fillTemplate(data, opts) {
    var scripts = opts.scripts,
        styles = opts.styles;

    var cssList = _toConsumableArray(styles ? (0, util.persistCSS)(styles) : []);

    var context = {
      getMarkmap: function getMarkmap() {
        return window.markmap;
      },
      data: data
    };
    var jsList = [].concat(_toConsumableArray((0, util.persistJS)(baseJs)), _toConsumableArray(scripts ? (0, util.persistJS)(scripts, context) : []), _toConsumableArray((0, util.persistJS)([{
      type: 'iife',
      data: {
        fn: function fn(getMarkmap, data) {
          var _getMarkmap = getMarkmap(),
              Markmap = _getMarkmap.Markmap;

          window.mm = Markmap.create('svg#mindmap', null, data);
        },
        getParams: function getParams(_ref) {
          var getMarkmap = _ref.getMarkmap,
              data = _ref.data;
          return [getMarkmap, data];
        }
      }
    }], context)));
    var html = template.replace('<!--CSS-->', function () {
      return cssList.join('');
    }).replace('<!--JS-->', function () {
      return jsList.join('');
    });
    return html;
  }
});

/* src/routes/repl.svelte generated by Svelte v3.29.0 */

const { document: document_1 } = globals;
const file = "src/routes/repl.svelte";

// (104:4) {#if !cm}
function create_if_block(ctx) {
	let textarea;
	let mounted;
	let dispose;

	const block = {
		c: function create() {
			textarea = element("textarea");
			this.h();
		},
		l: function claim(nodes) {
			textarea = claim_element(nodes, "TEXTAREA", { class: true, value: true });
			children(textarea).forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(textarea, "class", "w-full h-full p-1");
			textarea.value = /*content*/ ctx[3];
			add_location(textarea, file, 104, 4, 2762);
		},
		m: function mount(target, anchor) {
			insert_dev(target, textarea, anchor);

			if (!mounted) {
				dispose = listen_dev(textarea, "input", /*handleInput*/ ctx[11], false, false, false);
				mounted = true;
			}
		},
		p: function update(ctx, dirty) {
			if (dirty & /*content*/ 8) {
				prop_dev(textarea, "value", /*content*/ ctx[3]);
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(textarea);
			mounted = false;
			dispose();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(104:4) {#if !cm}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let t0;
	let header;
	let t1;
	let div0;
	let a0;
	let t2;
	let a0_href_value;
	let t3;
	let main;
	let div1;
	let t4;
	let div6;
	let div2;
	let markmap;
	let updating_el;
	let updating_onReset;
	let updating_onZoomIn;
	let updating_onZoomOut;
	let t5;
	let toolbar;
	let t6;
	let div5;
	let div3;
	let a1;
	let t7;
	let t8;
	let div4;
	let a2;
	let t9;
	let t10;
	let span;
	let t11;
	let t12;
	let footer;
	let current;
	let mounted;
	let dispose;
	header = new Header({ $$inline: true });
	let if_block = !/*cm*/ ctx[2] && create_if_block(ctx);

	function markmap_el_binding(value) {
		/*markmap_el_binding*/ ctx[13].call(null, value);
	}

	function markmap_onReset_binding(value) {
		/*markmap_onReset_binding*/ ctx[14].call(null, value);
	}

	function markmap_onZoomIn_binding(value) {
		/*markmap_onZoomIn_binding*/ ctx[15].call(null, value);
	}

	function markmap_onZoomOut_binding(value) {
		/*markmap_onZoomOut_binding*/ ctx[16].call(null, value);
	}

	let markmap_props = { content: /*content*/ ctx[3] };

	if (/*svgEl*/ ctx[1] !== void 0) {
		markmap_props.el = /*svgEl*/ ctx[1];
	}

	if (/*onReset*/ ctx[4] !== void 0) {
		markmap_props.onReset = /*onReset*/ ctx[4];
	}

	if (/*onZoomIn*/ ctx[5] !== void 0) {
		markmap_props.onZoomIn = /*onZoomIn*/ ctx[5];
	}

	if (/*onZoomOut*/ ctx[6] !== void 0) {
		markmap_props.onZoomOut = /*onZoomOut*/ ctx[6];
	}

	markmap = new Markmap_1({ props: markmap_props, $$inline: true });
	binding_callbacks.push(() => bind(markmap, "el", markmap_el_binding));
	binding_callbacks.push(() => bind(markmap, "onReset", markmap_onReset_binding));
	binding_callbacks.push(() => bind(markmap, "onZoomIn", markmap_onZoomIn_binding));
	binding_callbacks.push(() => bind(markmap, "onZoomOut", markmap_onZoomOut_binding));

	toolbar = new Toolbar({
			props: {
				class: "absolute right-0 bottom-0 mr-2 mb-2",
				onReset: /*onReset*/ ctx[4],
				onZoomIn: /*onZoomIn*/ ctx[5],
				onZoomOut: /*onZoomOut*/ ctx[6]
			},
			$$inline: true
		});

	footer = new Footer({ $$inline: true });

	const block = {
		c: function create() {
			t0 = space();
			create_component(header.$$.fragment);
			t1 = space();
			div0 = element("div");
			a0 = element("a");
			t2 = text("New feature: load markmap from Gist!");
			t3 = space();
			main = element("main");
			div1 = element("div");
			if (if_block) if_block.c();
			t4 = space();
			div6 = element("div");
			div2 = element("div");
			create_component(markmap.$$.fragment);
			t5 = space();
			create_component(toolbar.$$.fragment);
			t6 = space();
			div5 = element("div");
			div3 = element("div");
			a1 = element("a");
			t7 = text("Download as interactive HTML");
			t8 = space();
			div4 = element("div");
			a2 = element("a");
			t9 = text("Download as SVG");
			t10 = space();
			span = element("span");
			t11 = text("⚠️");
			t12 = space();
			create_component(footer.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-r18bnt\"]", document_1.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			claim_component(header.$$.fragment, nodes);
			t1 = claim_space(nodes);
			div0 = claim_element(nodes, "DIV", { class: true, style: true });
			var div0_nodes = children(div0);
			a0 = claim_element(div0_nodes, "A", { class: true, href: true });
			var a0_nodes = children(a0);
			t2 = claim_text(a0_nodes, "New feature: load markmap from Gist!");
			a0_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			t3 = claim_space(nodes);
			main = claim_element(nodes, "MAIN", { class: true });
			var main_nodes = children(main);
			div1 = claim_element(main_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			if (if_block) if_block.l(div1_nodes);
			div1_nodes.forEach(detach_dev);
			t4 = claim_space(main_nodes);
			div6 = claim_element(main_nodes, "DIV", { class: true });
			var div6_nodes = children(div6);
			div2 = claim_element(div6_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			claim_component(markmap.$$.fragment, div2_nodes);
			t5 = claim_space(div2_nodes);
			claim_component(toolbar.$$.fragment, div2_nodes);
			div2_nodes.forEach(detach_dev);
			t6 = claim_space(div6_nodes);
			div5 = claim_element(div6_nodes, "DIV", {});
			var div5_nodes = children(div5);
			div3 = claim_element(div5_nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			a1 = claim_element(div3_nodes, "A", {});
			var a1_nodes = children(a1);
			t7 = claim_text(a1_nodes, "Download as interactive HTML");
			a1_nodes.forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			t8 = claim_space(div5_nodes);
			div4 = claim_element(div5_nodes, "DIV", { class: true, title: true });
			var div4_nodes = children(div4);
			a2 = claim_element(div4_nodes, "A", {});
			var a2_nodes = children(a2);
			t9 = claim_text(a2_nodes, "Download as SVG");
			a2_nodes.forEach(detach_dev);
			t10 = claim_space(div4_nodes);
			span = claim_element(div4_nodes, "SPAN", { class: true });
			var span_nodes = children(span);
			t11 = claim_text(span_nodes, "⚠️");
			span_nodes.forEach(detach_dev);
			div4_nodes.forEach(detach_dev);
			div5_nodes.forEach(detach_dev);
			div6_nodes.forEach(detach_dev);
			main_nodes.forEach(detach_dev);
			t12 = claim_space(nodes);
			claim_component(footer.$$.fragment, nodes);
			this.h();
		},
		h: function hydrate() {
			document_1.title = "Try Markmap";
			attr_dev(a0, "class", "inline-block text-sm text-orange-600 underline");
			attr_dev(a0, "href", a0_href_value = `${/*$page*/ ctx[7].path}#?gist=af76a4c245b302206b16aec503dbe07b/gist.md,gitee:a73wgucr28dhlxp91kytm57/gist.md`);
			add_location(a0, file, 99, 2, 2386);
			attr_dev(div0, "class", "fixed z-10 hidden md:block");
			set_style(div0, "top", "15px");
			set_style(div0, "left", "50%");
			add_location(div0, file, 98, 0, 2317);
			attr_dev(div1, "class", "flex-1 min-w-0 border border-gray-300");
			add_location(div1, file, 102, 2, 2671);
			attr_dev(div2, "class", "markmap-wrapper flex-1");
			add_location(div2, file, 108, 4, 2908);
			add_location(a1, file, 125, 8, 3350);
			attr_dev(div3, "class", "inline-block px-4 py-2");
			add_location(div3, file, 124, 6, 3305);
			add_location(a2, file, 128, 8, 3547);
			attr_dev(span, "class", "text-red-500");
			add_location(span, file, 129, 8, 3618);
			attr_dev(div4, "class", "inline-block px-4 py-2");
			attr_dev(div4, "title", "SVG does not work well with PrismJS and MathJax");
			add_location(div4, file, 127, 6, 3446);
			add_location(div5, file, 123, 4, 3293);
			attr_dev(div6, "class", "flex-1 min-w-0 flex flex-col");
			add_location(div6, file, 107, 2, 2861);
			attr_dev(main, "class", "inner lg:fs md:flex repl");
			add_location(main, file, 101, 0, 2629);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			mount_component(header, target, anchor);
			insert_dev(target, t1, anchor);
			insert_dev(target, div0, anchor);
			append_dev(div0, a0);
			append_dev(a0, t2);
			insert_dev(target, t3, anchor);
			insert_dev(target, main, anchor);
			append_dev(main, div1);
			if (if_block) if_block.m(div1, null);
			/*div1_binding*/ ctx[12](div1);
			append_dev(main, t4);
			append_dev(main, div6);
			append_dev(div6, div2);
			mount_component(markmap, div2, null);
			append_dev(div2, t5);
			mount_component(toolbar, div2, null);
			append_dev(div6, t6);
			append_dev(div6, div5);
			append_dev(div5, div3);
			append_dev(div3, a1);
			append_dev(a1, t7);
			append_dev(div5, t8);
			append_dev(div5, div4);
			append_dev(div4, a2);
			append_dev(a2, t9);
			append_dev(div4, t10);
			append_dev(div4, span);
			append_dev(span, t11);
			insert_dev(target, t12, anchor);
			mount_component(footer, target, anchor);
			current = true;

			if (!mounted) {
				dispose = [
					listen_dev(a0, "click", onClickNewFeature, false, false, false),
					listen_dev(a1, "click", prevent_default(/*onDownloadHTML*/ ctx[10]), false, true, false),
					listen_dev(a2, "click", prevent_default(/*onDownloadSVG*/ ctx[9]), false, true, false)
				];

				mounted = true;
			}
		},
		p: function update(ctx, [dirty]) {
			if (!current || dirty & /*$page*/ 128 && a0_href_value !== (a0_href_value = `${/*$page*/ ctx[7].path}#?gist=af76a4c245b302206b16aec503dbe07b/gist.md,gitee:a73wgucr28dhlxp91kytm57/gist.md`)) {
				attr_dev(a0, "href", a0_href_value);
			}

			if (!/*cm*/ ctx[2]) {
				if (if_block) {
					if_block.p(ctx, dirty);
				} else {
					if_block = create_if_block(ctx);
					if_block.c();
					if_block.m(div1, null);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}

			const markmap_changes = {};
			if (dirty & /*content*/ 8) markmap_changes.content = /*content*/ ctx[3];

			if (!updating_el && dirty & /*svgEl*/ 2) {
				updating_el = true;
				markmap_changes.el = /*svgEl*/ ctx[1];
				add_flush_callback(() => updating_el = false);
			}

			if (!updating_onReset && dirty & /*onReset*/ 16) {
				updating_onReset = true;
				markmap_changes.onReset = /*onReset*/ ctx[4];
				add_flush_callback(() => updating_onReset = false);
			}

			if (!updating_onZoomIn && dirty & /*onZoomIn*/ 32) {
				updating_onZoomIn = true;
				markmap_changes.onZoomIn = /*onZoomIn*/ ctx[5];
				add_flush_callback(() => updating_onZoomIn = false);
			}

			if (!updating_onZoomOut && dirty & /*onZoomOut*/ 64) {
				updating_onZoomOut = true;
				markmap_changes.onZoomOut = /*onZoomOut*/ ctx[6];
				add_flush_callback(() => updating_onZoomOut = false);
			}

			markmap.$set(markmap_changes);
			const toolbar_changes = {};
			if (dirty & /*onReset*/ 16) toolbar_changes.onReset = /*onReset*/ ctx[4];
			if (dirty & /*onZoomIn*/ 32) toolbar_changes.onZoomIn = /*onZoomIn*/ ctx[5];
			if (dirty & /*onZoomOut*/ 64) toolbar_changes.onZoomOut = /*onZoomOut*/ ctx[6];
			toolbar.$set(toolbar_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(header.$$.fragment, local);
			transition_in(markmap.$$.fragment, local);
			transition_in(toolbar.$$.fragment, local);
			transition_in(footer.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(header.$$.fragment, local);
			transition_out(markmap.$$.fragment, local);
			transition_out(toolbar.$$.fragment, local);
			transition_out(footer.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			destroy_component(header, detaching);
			if (detaching) detach_dev(t1);
			if (detaching) detach_dev(div0);
			if (detaching) detach_dev(t3);
			if (detaching) detach_dev(main);
			if (if_block) if_block.d();
			/*div1_binding*/ ctx[12](null);
			destroy_component(markmap);
			destroy_component(toolbar);
			if (detaching) detach_dev(t12);
			destroy_component(footer, detaching);
			mounted = false;
			run_all(dispose);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function download(filename, url) {
	const a = document.createElement("a");
	a.download = filename;
	a.href = url;
	a.click();
}

function onClickNewFeature() {
	if (typeof gtag === "function") gtag("event", "click", { button: "newFeature" });
}

function instance($$self, $$props, $$invalidate) {
	let $page;
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Repl", slots, []);
	let editorEl;
	let svgEl;
	let cm;
	let content = "";
	let onReset;
	let onZoomIn;
	let onZoomOut;
	const { page } = stores$1();
	validate_store(page, "page");
	component_subscribe($$self, page, value => $$invalidate(7, $page = value));

	function onDownloadSVG() {
		const svgHtml = svgEl.outerHTML.replace(/<br>/g, "<br/>");
		download("markmap.svg", "data:image/svg;utf8," + encodeURIComponent(svgHtml));
	}

	function onDownloadHTML() {
		const root = transform_1.transform(content);

		const html = template_1.fillTemplate(root, {
			mathJax: !!svgEl.querySelector(".MathJax"),
			prism: !!svgEl.querySelector("pre[class*=language-]")
		});

		download("markmap.html", "data:text/html;utf8," + encodeURIComponent(html));
	}

	function update() {
		if (cm) {
			$$invalidate(3, content = cm.getValue());
		}
	}

	function handleInput(e) {
		$$invalidate(3, content = e.target.value);
	}

	let revoke;

	onMount(async () => {
		revoke = subscribeHash(text => {
			if (cm) cm.setValue(text);
			$$invalidate(3, content = text);
		});

		const { default: CodeMirror } = await Promise.all([import('./codemirror.c7ffe14a.js'), __inject_styles(["client-ff2bd8be.css","codemirror-8033c53c.css"])]).then(function(x) { return x[0]; });

		$$invalidate(2, cm = CodeMirror(editorEl, {
			lineNumbers: true,
			mode: "markdown",
			value: content,
			indentUnit: 2,
			tabSize: 2
		}));

		cm.setOption("extraKeys", {
			Tab: cm => {
				if (cm.somethingSelected()) {
					cm.execCommand("indentMore");
				} else {
					cm.replaceSelection((" ").repeat(cm.getOption("indentUnit")));
				}
			},
			"Shift-Tab": cm => {
				cm.execCommand("indentLess");
			}
		});

		cm.on("change", lodash_debounce(update, 500));
	});

	onDestroy(() => {
		$$invalidate(2, cm = null);

		if (revoke) {
			revoke();
			revoke = null;
		}
	});

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Repl> was created with unknown prop '${key}'`);
	});

	function div1_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			editorEl = $$value;
			$$invalidate(0, editorEl);
		});
	}

	function markmap_el_binding(value) {
		svgEl = value;
		$$invalidate(1, svgEl);
	}

	function markmap_onReset_binding(value) {
		onReset = value;
		$$invalidate(4, onReset);
	}

	function markmap_onZoomIn_binding(value) {
		onZoomIn = value;
		$$invalidate(5, onZoomIn);
	}

	function markmap_onZoomOut_binding(value) {
		onZoomOut = value;
		$$invalidate(6, onZoomOut);
	}

	$$self.$capture_state = () => ({
		onMount,
		onDestroy,
		stores: stores$1,
		debounce: lodash_debounce,
		transform: transform_1.transform,
		fillTemplate: template_1.fillTemplate,
		Markmap: Markmap_1,
		Toolbar,
		Header,
		Footer,
		subscribeHash,
		editorEl,
		svgEl,
		cm,
		content,
		onReset,
		onZoomIn,
		onZoomOut,
		page,
		download,
		onDownloadSVG,
		onDownloadHTML,
		update,
		onClickNewFeature,
		handleInput,
		revoke,
		$page
	});

	$$self.$inject_state = $$props => {
		if ("editorEl" in $$props) $$invalidate(0, editorEl = $$props.editorEl);
		if ("svgEl" in $$props) $$invalidate(1, svgEl = $$props.svgEl);
		if ("cm" in $$props) $$invalidate(2, cm = $$props.cm);
		if ("content" in $$props) $$invalidate(3, content = $$props.content);
		if ("onReset" in $$props) $$invalidate(4, onReset = $$props.onReset);
		if ("onZoomIn" in $$props) $$invalidate(5, onZoomIn = $$props.onZoomIn);
		if ("onZoomOut" in $$props) $$invalidate(6, onZoomOut = $$props.onZoomOut);
		if ("revoke" in $$props) revoke = $$props.revoke;
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [
		editorEl,
		svgEl,
		cm,
		content,
		onReset,
		onZoomIn,
		onZoomOut,
		$page,
		page,
		onDownloadSVG,
		onDownloadHTML,
		handleInput,
		div1_binding,
		markmap_el_binding,
		markmap_onReset_binding,
		markmap_onZoomIn_binding,
		markmap_onZoomOut_binding
	];
}

class Repl extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Repl",
			options,
			id: create_fragment.name
		});
	}
}

export default Repl;

import __inject_styles from './inject_styles.22899e58.js';
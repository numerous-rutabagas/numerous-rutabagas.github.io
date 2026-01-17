<script lang="ts">
  import { $typst as _typst } from "@myriaddreamin/typst.ts";
  import { onMount } from "svelte";

  export let sources;

  export let value;
  let render_div: HTMLDivElement;

  const preview = mainContent => {
    _typst.svg({ mainContent }).then(svg => {
      // append svg text
      render_div.innerHTML = svg;

      const svg_el = render_div.firstElementChild;
      const width = Number.parseFloat(svg_el.getAttribute('width'));
      const height = Number.parseFloat(svg_el.getAttribute('height'));
      svg_el.setAttribute('width', "100%");
      svg_el.setAttribute('height', "auto");
    });
  };

  const encode_hex = (hex) => {
    if (hex.startsWith("0x") || hex.startsWith("0X")) hex = hex.slice(2);
    if (hex.length % 2) throw new Error("Hex length must be even");

    const out = new Uint8Array(hex.length / 2);
    for (let i = 0, j = 0; i < hex.length; i += 2, j++) {
      out[j] = Number.parseInt(hex.substr(i, 2), 16);
    }
    return out;
  };

  onMount(() => {
    /// Initializes the Typst compiler and renderer. Since we use "all-in-one-lite.bundle.js" instead of
    /// "all-in-one.bundle.js" we need to tell that the wasm module files can be loaded from CDN (jsdelivr).
    _typst.setCompilerInitOptions({
      getModule: () =>
        'https://cdn.jsdelivr.net/npm/@myriaddreamin/typst-ts-web-compiler/pkg/typst_ts_web_compiler_bg.wasm',
    });
    _typst.setRendererInitOptions({
      getModule: () =>
        'https://cdn.jsdelivr.net/npm/@myriaddreamin/typst-ts-renderer/pkg/typst_ts_renderer_bg.wasm',
    });
    const add_sources = (o) => {
      Object.keys(o).forEach((key) => {
        if (key.endsWith(".wasm")) {
          _typst.mapShadow("/tmp/" + key, encode_hex(o[key]));
        }
        else {
          _typst.addSource("/tmp/" + key, o[key])
        }
      })
    };
    add_sources(sources);
    preview(value);
  });

  $: {
    console.log("changed!");
    preview(value);
  }

</script>

<div id="content" bind:this={render_div}></div>
<style>
  body {
    margin: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  #content {
    width: 100%;
    border-radius: 5px;
    background: var(--light-bg);
  }

</style>

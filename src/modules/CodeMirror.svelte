<script lang="ts">
  import { EditorView, lineNumbers } from "@codemirror/view";
  import { onMount, createEventDispatcher } from "svelte";

  let view: EditorView;
  export let value = "";

  const CM_PARENT_ID = "cm_parent";
  let cm_parent: HTMLDivElement;
  const dispatch = createEventDispatcher();

  const onUpdate = EditorView.updateListener.of((update) => {
      if (!update.docChanged) return;

      const next = update.state.doc.toString();
      if (next === value) return;

      value = next;
      dispatch("change", next);
  });

  $: if (view) {
      const current = view.state.doc.toString();
      if (value !== current) {
        view.dispatch({
          changes: { from: 0, to: view.state.doc.length, insert: value },
        });
      }
  }

  onMount(() => {
    view = new EditorView({
      parent: cm_parent,
      doc: value,
      extensions: [
        lineNumbers(), onUpdate
      ],
    });
  });
</script>

<div class="cm_parent" id={CM_PARENT_ID} bind:this={cm_parent} />

<style global>
  .cm_parent {
    height: 21em;
    width: 100%;
  }
  .cm-editor { 
      height: 100%;
      width: 100%;
      padding: 1px;
      margin-top: 5px;
      margin-bottom: 5px;
      background-color: var(--bg) !important;
      border-radius: 5px;
      border: 1px solid var(--bg);
      box-shadow: var(--box-shadow);
  }
  .cm-gutters {
      background-color: var(--bg) !important;
      color: var(--text);
  }
</style>

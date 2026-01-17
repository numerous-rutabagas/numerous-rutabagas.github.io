<script lang="ts">
	import Tab from "./Tab.svelte";	
  import CodeMirror from "./modules/CodeMirror.svelte";
  import TypstPreview from "./modules/TypstPreview.svelte";
  import { sources } from "./typst/molecular_orbital_diagram.ts";

  let value = `#import "molecular_orbital_diagram.typ": *
#set page(height: 3.5in, width: 5.5in)
#set align(center + horizon)
#molecular_orbital_diagram(
  horizontal_offset: 2, 
  [
    #spot(label: $2"p"_(x a)$, electron, electron)
    #spot(label: $2"p"_(y b)$, electron, electron)
    #spot(label: $2"p"_(z c)$, electron, blank)
  ],
  [
    #spot(label: $2"p"_(x b)$, electron, electron)
    #spot(label: $2"p"_(y b)$, electron, electron)
    #spot(label: $2"p"_(z b)$, electron, electron)
  ],
  mk_spots => {
    mk_spots(height: -1, [
      #spot(label: $pi_(2"p"x)$, electron, electron)
      #spot(label: $pi_(2"p"y)$, electron, electron)
    ])
    mk_spots(height: 1, [
      #spot(label: $pi_(2"p"x)^\*$, electron, electron)
      #spot(label: $pi_(2"p"y)^\*$, electron, electron)
    ])
    mk_spots(height: 2.1, [
      #spot(label: $sigma_(2"p"z)^\*$, electron, blank)
    ])
    mk_spots(height: -2.1, [
      #spot(label: $sigma_(2"p"z)$, electron, electron)
    ])
  }, length: 40pt
)
	`;
</script>

<div class="pcard" id="mo_lib">
	<h3 class="card_title">
		Molecular Orbital Typesetting Library
		<a href="https://gist.github.com/numerous-rutabagas/db06a549b109f03cce6a56d3da79a59a">
				<img src="./link.png" class="card_link" alt="Link"/>
		</a>
	</h3>
	<p class="card_subtitle">
		<Tab/>
		A library in Typst made for writing out molecular orbitals
		and more generally, showing in standard notation the state of electrons.
		Have you ever wanted to typeset something that included molecular orbitals, but
		never had the ability to do so because there is no easy-to-use solution, especially
		for Typst? No? Well, here is a solution anyway:
	</p>
	<div id="demo_container">
		<CodeMirror bind:value={value}/>
		<TypstPreview bind:value={value} sources={sources}/>
	</div>
</div>

<style>
	#demo_container {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: true;
		flex-direction: column;
		row-gap: 1.5em;
		min-width: 0px;
	}
</style>

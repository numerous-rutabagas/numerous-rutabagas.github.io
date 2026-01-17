<script lang="ts">
	import Tab from "./Tab.svelte";	
	import MolecularOrbitals from "./MolecularOrbitals.svelte";
</script>

<h1 id="projects_title">
	Project Portfolio<br><br>Front End
</h1>
<div id="frontend_projects" class="projects_container">
	<a class="card_wrap_link" href="https://claritytalentmeasurement.com/roi-2/">
		<div class="pcard" id="clarity_calculator">
			<h3 class="card_title">
				Return on Investment Widget: Clarity Talent Measurement
				<img src="./link.png" class="card_link" alt="Link"/>
			</h3>
			<p class="card_subtitle">
				<Tab/>A calculator which estimates how much Clarity's assessments can save your company. Built with
				<a href="https://svelte.dev/">Svelte</a>, TypeScript, and vanilla CSS. Uses the JavaScript autonumeric library for seamless large number inputs. Svelte's efficient reactivity is perfect for a calculator like this. I also wrote the glue to include this on their WordPress website.
			</p>
			<div class="img_wrapper">
				<img src="./clarity_calculator.png" id="clarity_calculator" alt="ROI Calculator"/>
			</div>
		</div>
	</a>
	<a href="https://sbbldrugcalculator.github.io" class="card_wrap_link">
		<div class="pcard" id="drugcalculator">
			<h3 class="card_title">
				Drug Sentencing Calculator: SBBL Law, PLLC
				<img src="./link.png" class="card_link" alt="Link"/>
			</h3>
			<p class="card_subtitle">
				<Tab/>A calculator which gives the user the recommended sentence in months based on the United States Sentencing Commission guidelines for certain drug crimes. <br><Tab/>Users can input any combination of amounts of the hundreds of drugs specified in the Drug Quantity Table, and the calculator handles the conversion to marijuana equivalent weight. Then, based on the quantity of marijuana equivalent weight, it outputs a base "offense level." <br><Tab/>Factors in all elements of the crime that affect the sentencing range and displays them in a neat table. Also built with Svelte and TypeScript.
			</p>
			<div class="img_wrapper">
				<img src="./drug_calculator.png" id="drug_calculator" alt="Drug sentencing calculator"/>
			</div>
		</div>
	</a>
	<div class="pcard" id="template">
		<h3 class="card_title">
			Scientific Journal Submission Template
		</h3>
		<p class="card_subtitle">
			<Tab/>
			A template, written in <a href="https://typst.app">Typst</a>, for writing manuscripts in a journal style. 
			This was used for the BIOLOGY 173 lab report; a sample page is shown below.
		</p>
		<div id="lab_report_wrapper">
			<img src="./lab_report.svg" id="lab_report" alt="BIOLOGY 173 lab report"/>
			<!--
				<img src="./lab_report_table.png" id="lab_report" alt="BIOLOGY 173 lab report"/>
			-->
		</div>
	</div>

	<MolecularOrbitals/>
	<!--
	<a class="card_wrap_link" href="https://go.sewerai.com/ROI-calculator">
		<div class="pcard" id="sewerai_calculator">
			<h3 class="card_title">
				Return on Investment Widget: SewerAI
				<img src="./link.png" class="card_link" alt="Link"/>
			</h3>
			<p class="card_subtitle">
				<Tab/>
				A page that includes an ROI calculator form, as well as information and a "contact us" form.
				Made using a combination of Svelte, WordPress, HTML, and CSS.
				I was handed the design (it is not mine.) The most technical task was integrating the form with
				WordPress and timing the end of the video with it; this required quite a bit of glue.
			</p>
		</div>
	</a>
	<div class="pcard" id="placeholder"></div>
	-->
</div>
<h1 id="projects_title_misc">
	Miscellaneous
</h1>
<div class="projects_container" id="misc_projects">
	<div class="pcard" id="lean_units">
		<h3 class="card_title">
			Lean Units: Independent
		</h3>
		<p class="card_subtitle">
			<Tab/>
			A functional programming language and library written in
			<a href="https://lean-lang.org">Lean 4</a>.
			The Lean language includes a formalization of much of contemporary mathematics,
			called
			<a href="https://github.com/leanprover-community/mathlib4">
				Mathlib
			</a>
			and maintained by the Lean community. This project aims to
			implement a physical unit-aware calculator and scripting language similar to
			<a href="https://numbat.dev/">Numbat</a>, with formally proven correctness
			properties and improved extensibility thanks to Lean's flexible type system.
			It is currently in the development stage.
		</p>
		<div class="img_wrapper">
			<img src="./lean_units.png" id="lean_units_code"/>
		</div>
	</div>
	<div class="pcard" id="gistemp_rewrite">
		<h3 class="card_title">
			NASA GISTEMP v4 Rewrite: Independent
		</h3>
		<p class="card_subtitle">
			<Tab/>
			The long-running, comprehensive
			<a href="https://data.giss.nasa.gov/gistemp/">
				NASA Goddard Institute for Space Studies Surface Temperature Analysis
			</a>
			is one of the most complete, easy to parse sources for global surface temperature data;
			however, it relies on a complex algorithm currently written in 2016 using Python.
			Running the processing steps on the 170 MB raw data file takes an impractical amount of time on a normal
			laptop, and the code is not documented well.
			<br/>
			<Tab/>
			Fortunately, many parts of the algorithm are implemented inefficiently; this implementation in Rust
			aims to provide a better documented, more incremental, more efficient, and more reproducible way to run the algorithm.
			Currently, it runs partially through Step 2. (Unit tests for agreement with the official implementation are plentiful.)
		</p>
		<div class="img_wrapper">
			<img src="./gistemp.png" id="gistemp_rewrite_code" alt="GISTEMP rewrite code"/>
		</div>
	</div>
	<a href="https://gist.github.com/numerous-rutabagas/a495cb2fd26470d657f6939b6a691fd7" class="card_wrap_link">
		<div class="pcard" id="parametric_shader">
			<h3 class="card_title">
				Metal Parametric Curve Shader: Independent
				<img src="./link.png" class="card_link" alt="Link"/>
			</h3>
			<p class="card_subtitle">
				<Tab/>A GPU shader written in Metal which renders an arbitrary parametric curve in 2D space. The motivation for this was for an ML project in which the model would be taught a mapping to a bezier curve, but I found an easier way to accomplish the goal that did not require a bezier curve.
				<Tab/>The shader is efficient (it can run at over 100 fps on my laptop with very high samples) and correct, meaning it does not approximate the curve by lines or make other quality compromises. It accomplishes this by calculating the winding number of the curve for each pixel. I wrote a futher optimized version which takes advantage of reused calculations in PyTorch.
			</p>
			<div class="img_wrapper">
				<img src="./parametric_shader.png" alt="Parametric Shader producing a heart" id="parametric_shader">
			</div>
		</div>
	</a>
</div>
<style>
	h1, h2, h3, h4, h5 {
		text-align: center;
		width: 100%;
		box-sizing: border-box;
	}

	#placeholder {
		border: none;
		background: transparent;
		box-shadow: none;
	}

	.projects_container {
		flex-direction: row;
		display: flex;
		width: 100%;
		padding: 15px;
		gap: 2em;
		margin-left: auto;
		margin-right: auto;
		flex-wrap: wrap;	justify-content: space-evenly;
		align-items: stretch;
		box-sizing: border-box;
	}

	img:not(.card_link) {
		width: 100%;
		margin-left: auto;
		margin-right: auto;
		border-radius: 5px;
	}


	#template {
	}
	
	#lab_report {

	}

	#lab_report_wrapper {
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: row;
		row-gap: 1em;
		flex-wrap: wrap;
	}

	#parametric_shader {
		width: 75%;
	}

	#mo_lib {
		display: grid;
		grid-template-rows: min-content min-content auto;
	}

	#mo_code {
		width: 100%;
	}
	#mo_result {
		width: 98%;
	}

	#sewerai_calculator {
		height: min-content;
	}

	#lean_units_code, #gistemp_rewrite_code {
		border: 5px solid black;
		margin-left: auto;
		margin-right: auto;
		display: block;
	}
	#lean_units_code {
		width: 80%;
	}
	#gistemp_rewrite_code {
		width: 90%;
	}
</style>

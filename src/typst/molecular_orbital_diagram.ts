export const sources = {
  "molecular_orbital_diagram.typ": `
#import "@preview/cetz:0.4.2": canvas, draw
#let text_color = black;

#let electron(is_spin_up) = if is_spin_up [
  #sym.arrow.t
] else [
  #sym.arrow.b
]

#let blank(is_spin_up) = text(fill: rgb(0, 0, 0, 0))[
  #sym.arrow.b
]
#let make_content(content, passthrough: false) = if passthrough {
  content.pos().join()
} else {
  let is_spin_up = false;
  let acc = ();
  for elem in content.pos() {
    is_spin_up = not is_spin_up;
    acc.push(elem(is_spin_up))
  }
  return acc.join()
}

#let spot(label: none, passthrough: false, ..content) = box(table(
  rows: 1.1em,
  columns: (auto),
  inset: 0pt,
  stroke: 0pt,
  align: center + bottom,
  table.cell(
      stroke: (top: 0pt, bottom: (paint: text_color, thickness: 1pt), left: 0pt, right: 0pt), 
      inset: (top: 0pt, bottom: 3pt, left: 0pt, right: 0pt),
      block(text(bottom-edge: "bounds", make_content(content, passthrough: passthrough)))
  ),
  ..(if (label == none) {()} else {
      (table.cell(
      inset: (top: 5pt),
      label
      ),)
    })
))

#let molecular_orbital_diagram(horizontal_offset: 2, spots_a, spots_b, make_spots_rest, ..canvas_args) = canvas(..canvas_args, {
  import draw: *
  let horizontal_offset = 2;

  let ln(..args) = line(stroke: (dash: "dotted", paint: text_color), ..args)
  let state = 0;
  let get_name(state) = {
    state += 1;
    return str(state)
  }
  let mk_spots(name: get_name(state), height: 0, c) = {
    content((horizontal_offset, height), c, name: name)
    ln("a_orbital.east", name + ".west", anchor: "north")
    ln("b_orbital.west", name + ".east", anchor: "north")
  }
  
  content((0, 0), spots_a, name: "a_orbital")
  content((2 * horizontal_offset, 0), spots_b, name: "b_orbital")
  make_spots_rest(mk_spots)
})

#let full(label) = spot(label: label)
    
`
};

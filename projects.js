// ---------------------------------------------------------------------------
// Your projects live here. Add, remove or reorder entries — the page rebuilds
// itself from this list. Nothing else needs to change.
//
//   name   : shown as the card title
//   blurb  : one or two sentences, max ~140 chars reads best
//   url    : where the card links to (a GitHub Pages path, or any URL)
//   repo   : optional — source repo link, shown as a small "Source" link
//   tags   : optional — short labels shown as chips
//   status : optional — "live" | "wip" | "archived"  (adds a small badge)
//   year   : optional — shown in the card footer
// ---------------------------------------------------------------------------

const PROJECTS = [
  {
    name: "Celeris Web-GPU",
    blurb: "A Web-GPU implementation of the Celeris wave model by Patrick Lynett at USC.",
    url: "./celeris/",
    repo: "https://github.com/gutierrad/celeris",
    tags: ["celeris", "Web-GPU", "JavaScript", "Visualization"],
    status: "live",
    year: 2026,
  },
  {
    name: "Kelvin waves tracker",
    blurb: "A viewer to track the progress of Kelvin Waves on their way up the California Coast.",
    url: "./kelvin-wave-tracker/",
    repo: "https://github.com/gutierrad/kelvin-wave-tracker",
    tags: ["El Niño", "Sea level", "Kelvin waves", "Visualization"],
    status: "live",
    year: 2026,
  },
  // {
  //   name: "Project Two",
  //   blurb: "TODO: describe what this project does in a sentence or two.",
  //   url: "./project-two/",
  //   repo: "https://github.com/gutierrad/project-two",
  //   tags: ["Python", "Data"],
  //   status: "wip",
  //   year: 2026,
  // },
  // {
  //   name: "Project Three",
  //   blurb: "TODO: describe what this project does in a sentence or two.",
  //   url: "./project-three/",
  //   repo: "https://github.com/gutierrad/project-three",
  //   tags: ["Tooling"],
  //   status: "live",
  //   year: 2025,
  // },
  // {
  //   name: "Project Four",
  //   blurb: "TODO: describe what this project does in a sentence or two.",
  //   url: "./project-four/",
  //   tags: ["Experiment"],
  //   status: "archived",
  //   year: 2024,
  // },
];

// Header / footer text. Edit freely.
const SITE = {
  name: "David Gutierrez-Barcelo",
  tagline: "Things I've prepared and put on the web.",
  links: [
    { label: "GitHub", url: "https://github.com/gutierrad" },
    { label: "Email", url: "mailto:angel.david.gutierrez@gmail.com" },
  ],
};

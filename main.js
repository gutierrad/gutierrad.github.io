// Renders the page from the data in projects.js. You shouldn't need to touch
// this file to add a project — edit projects.js instead.
(function () {
  "use strict";

  var esc = function (s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  };

  var site = typeof SITE !== "undefined" ? SITE : {};
  var projects = typeof PROJECTS !== "undefined" ? PROJECTS : [];

  // ---- header -------------------------------------------------------------
  if (site.name) {
    document.getElementById("site-name").textContent = site.name;
    document.title = site.name + " — Projects";
  }
  if (site.tagline) document.getElementById("site-tagline").textContent = site.tagline;

  var linksEl = document.getElementById("site-links");
  (site.links || []).forEach(function (l) {
    var a = document.createElement("a");
    a.href = l.url;
    a.textContent = l.label;
    if (/^https?:/.test(l.url)) { a.rel = "noopener"; a.target = "_blank"; }
    linksEl.appendChild(a);
  });

  // ---- cards --------------------------------------------------------------
  var grid = document.getElementById("grid");
  var emptyEl = document.getElementById("empty");

  var BADGE = { live: "Live", wip: "In progress", archived: "Archived" };

  function cardHTML(p) {
    var chips = (p.tags || [])
      .map(function (t) { return '<span class="chip">' + esc(t) + "</span>"; })
      .join("");

    var badge = p.status && BADGE[p.status]
      ? '<span class="badge badge-' + esc(p.status) + '">' + BADGE[p.status] + "</span>"
      : "";

    var source = p.repo
      ? '<a href="' + esc(p.repo) + '" rel="noopener" target="_blank">Source</a>'
      : "";

    var year = p.year ? '<span class="spacer">' + esc(p.year) + "</span>" : "";

    var foot = (badge || source || year)
      ? '<div class="card-foot">' + badge + source + year + "</div>"
      : "";

    return (
      '<h3 class="card-title"><a href="' + esc(p.url || "#") + '">' + esc(p.name) + "</a></h3>" +
      '<p class="card-blurb">' + esc(p.blurb || "") + "</p>" +
      (chips ? '<div class="chips">' + chips + "</div>" : "") +
      foot
    );
  }

  function render(list) {
    grid.innerHTML = "";
    list.forEach(function (p) {
      var li = document.createElement("li");
      li.className = "card";
      li.innerHTML = cardHTML(p);
      grid.appendChild(li);
    });
    emptyEl.hidden = list.length > 0;
  }

  // ---- tag filters --------------------------------------------------------
  var tags = [];
  projects.forEach(function (p) {
    (p.tags || []).forEach(function (t) {
      if (tags.indexOf(t) === -1) tags.push(t);
    });
  });

  var filtersEl = document.getElementById("filters");
  var active = null;

  function makeFilter(label, value) {
    var b = document.createElement("button");
    b.type = "button";
    b.className = "filter";
    b.textContent = label;
    b.setAttribute("aria-pressed", String(active === value));
    b.addEventListener("click", function () {
      active = value;
      Array.prototype.forEach.call(filtersEl.children, function (el) {
        el.setAttribute("aria-pressed", String(el === b));
      });
      render(value === null
        ? projects
        : projects.filter(function (p) { return (p.tags || []).indexOf(value) !== -1; }));
    });
    return b;
  }

  if (tags.length > 1) {
    filtersEl.appendChild(makeFilter("All", null));
    tags.sort().forEach(function (t) { filtersEl.appendChild(makeFilter(t, t)); });
  }

  render(projects);

  // ---- theme toggle -------------------------------------------------------
  var root = document.documentElement;
  var icon = document.getElementById("theme-icon");
  var stored = null;
  try { stored = localStorage.getItem("theme"); } catch (e) { /* private mode */ }
  if (stored === "light" || stored === "dark") root.setAttribute("data-theme", stored);

  function currentIsDark() {
    var t = root.getAttribute("data-theme");
    if (t) return t === "dark";
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  }
  function paintIcon() { icon.textContent = currentIsDark() ? "☾" : "☀"; }
  paintIcon();

  document.getElementById("theme-toggle").addEventListener("click", function () {
    var next = currentIsDark() ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) { /* ignore */ }
    paintIcon();
  });
})();

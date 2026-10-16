document.addEventListener("click", function (e) {
  var btn = e.target.closest("header button[aria-expanded]");
  if (!btn) return;
  var mobile = btn.closest("header").querySelector('[aria-label="Mobile"]');
  if (!mobile) return;
  var panel = mobile.parentElement;
  var willOpen = panel.classList.contains("hidden");
  panel.classList.toggle("hidden", !willOpen);
  btn.setAttribute("aria-expanded", willOpen ? "true" : "false");
  btn.setAttribute("aria-label", willOpen ? "Close menu" : "Open menu");
});

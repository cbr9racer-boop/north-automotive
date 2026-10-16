document.addEventListener("submit", function (e) {
  var form = e.target;
  if (!form || form.id !== "shop-note") return;
  e.preventDefault();
  var fd = new FormData(form);
  var body =
    "Name: " + (fd.get("name") || "") +
    "\nEmail: " + (fd.get("email") || "") +
    "\nPhone: " + (fd.get("phone") || "") +
    "\n\n" + (fd.get("message") || "");
  window.location.href =
    "mailto:northautomotivellc@yahoo.com?subject=" +
    encodeURIComponent("Note from the North Automotive website") +
    "&body=" +
    encodeURIComponent(body);
});

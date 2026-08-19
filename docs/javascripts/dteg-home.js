/* Home-page role router, five-day stepper and readiness checklist.
   Progressive enhancement: every panel is in the HTML and readable without JS. */
(function () {
  var ROUTES = [
    ["A hub or intermediary new to running user testing", "Section 1 and Section 2", "Section 4, Part A (Steps 1\u20133); Section 6"],
    ["A hub considering offering user testing as a paid service", "Section 8", "Section 1; Section 5; Section 7"],
    ["A startup or solution provider preparing for user testing", "Section 2 and Section 3", "Section 4, Part A or Part B depending on product stage; Section 6"],
    ["A designer or developer adapting an existing product", "Section 3 and Section 6", "Section 4, Part A; Section 7"],
    ["A GIZ, donor, or government stakeholder reviewing project results", "Key Findings at a Glance, then Section 1 and Section 5", "Section 7; Section 9"],
    ["Someone designing a new digital product from the ground up", "Section 2 and Section 3", "Section 4, Part B; Section 6"],
    ["Anyone wanting to contribute to or maintain this guide", "Section 9", "n/a"]
  ];

  var DAYS = [
    ["Day 1", "Prepare", "Define 3\u20135 concrete tasks you want participants to attempt. Confirm the solution/prototype works end to end. Write your screening questions.", "Section 4, Part A/B, Step 1; Screening Template"],
    ["Day 2", "Recruit and set logistics", "Screen and confirm 5\u20138 participants (expect some no-shows). Book times, locations, and a note-taker for each session. Translate your script into the languages your participants actually speak.", "Section 2.1; Section 6.7 (Localization)"],
    ["Day 3\u20134", "Conduct sessions", "Run 45\u201360 minute sessions. One person facilitates, one takes notes; don't try to do both alone if you can help it. Record what participants do and say; don't explain, correct, or interpret during the session. Debrief with your team for 10 minutes after each session while it's fresh.", "Section 4, Step 2; Observation Sheet"],
    ["Day 5", "Analyze and share", "Group your notes by task and by theme. Identify the 3\u20135 issues that came up most often or caused the most difficulty. Write these up in plain language and share them with the solution provider. Don't let findings sit in a notebook.", "Section 4, Step 3"]
  ];

  function init() {
    var router = document.querySelector("[data-dteg-router]");
    if (router) {
      var roles = router.querySelectorAll(".dteg-router__role");
      Array.prototype.forEach.call(roles, function (btn) {
        btn.addEventListener("click", function () {
          var route = ROUTES[+btn.getAttribute("data-role")];
          if (!route) return;
          Array.prototype.forEach.call(roles, function (b) { b.setAttribute("aria-selected", b === btn ? "true" : "false"); });
          router.querySelector("[data-router-who]").textContent = route[0];
          router.querySelector("[data-router-start]").textContent = route[1];
          router.querySelector("[data-router-then]").textContent = route[2];
        });
      });
    }

    var stepper = document.querySelector("[data-dteg-stepper]");
    if (stepper) {
      var days = stepper.querySelectorAll(".dteg-day");
      Array.prototype.forEach.call(days, function (btn) {
        btn.addEventListener("click", function () {
          var d = DAYS[+btn.getAttribute("data-day")];
          if (!d) return;
          Array.prototype.forEach.call(days, function (b) { b.setAttribute("aria-selected", b === btn ? "true" : "false"); });
          stepper.querySelector("[data-day-label]").textContent = d[0];
          stepper.querySelector("[data-day-focus]").textContent = d[1];
          stepper.querySelector("[data-day-actions]").textContent = d[2];
          stepper.querySelector("[data-day-deeper]").textContent = d[3];
        });
      });
    }

    var list = document.querySelector("[data-dteg-checklist]");
    if (list) {
      var boxes = list.querySelectorAll(".dteg-check");
      var count = list.querySelector("[data-check-count]");
      var bar = list.querySelector("[data-check-bar]");
      var KEY = "dteg-quickstart-checklist";
      var saved = [];
      try { saved = JSON.parse(localStorage.getItem(KEY)) || []; } catch (e) { saved = []; }

      function sync(persist) {
        var done = [];
        Array.prototype.forEach.call(boxes, function (b, i) {
          if (b.getAttribute("aria-pressed") === "true") done.push(i);
        });
        count.textContent = done.length + " of " + boxes.length + " ready";
        bar.style.width = (done.length / boxes.length * 100) + "%";
        if (persist) { try { localStorage.setItem(KEY, JSON.stringify(done)); } catch (e) {} }
      }

      Array.prototype.forEach.call(boxes, function (b, i) {
        if (saved.indexOf(i) !== -1) b.setAttribute("aria-pressed", "true");
        b.addEventListener("click", function () {
          b.setAttribute("aria-pressed", b.getAttribute("aria-pressed") === "true" ? "false" : "true");
          sync(true);
        });
      });
      sync(false);
    }
  }

  if (document.readyState !== "loading") init();
  else document.addEventListener("DOMContentLoaded", init);
})();

/* Home-page role router, five-day stepper and readiness checklist.
   Progressive enhancement: every panel is in the HTML and readable without JS. */
(function () {
  var SECTION_URLS = {
    "1": "01-introduction/",
    "2": "02-understanding-users/",
    "3": "03-principles/",
    "4": "04-design-practices/",
    "5": "05-insights/",
    "6": "06-toolkit/",
    "7": "07-recommendations/",
    "8": "08-business-model/",
    "9": "09-sustaining/"
  };

  var ROUTES = [
    ["A hub or intermediary new to running user testing", "Section 1 and Section 2", "Section 4, Part A (Steps 1–3); Section 6"],
    ["A hub considering offering user testing as a paid service", "Section 8", "Section 1; Section 5; Section 7"],
    ["A startup or solution provider preparing for user testing", "Section 2 and Section 3", "Section 4, Part A or Part B depending on product stage; Section 6"],
    ["A designer or developer adapting an existing product", "Section 3 and Section 6", "Section 4, Part A; Section 7"],
    ["A GIZ, donor, or government stakeholder reviewing project results", "Key Findings at a Glance, then Section 1 and Section 5", "Section 7; Section 9"],
    ["Someone designing a new digital product from the ground up", "Section 2 and Section 3", "Section 4, Part B; Section 6"],
    ["Anyone wanting to contribute to or maintain this guide", "Section 9", "n/a"]
  ];

  var DAYS = [
    ["Day 1", "Prepare", "Define 3–5 concrete tasks you want participants to attempt. Confirm the solution/prototype works end to end. Write your screening questions.", "Section 4, Part A/B, Step 1; Screening Template"],
    ["Day 2", "Recruit and set logistics", "Screen and confirm 5–8 participants (expect some no-shows). Book times, locations, and a note-taker for each session. Translate your script into the languages your participants actually speak.", "Section 2.1; Section 6.7 (Localization)"],
    ["Day 3–4", "Conduct sessions", "Run 45–60 minute sessions. One person facilitates, one takes notes; don't try to do both alone if you can help it. Record what participants do and say; don't explain, correct, or interpret during the session. Debrief with your team for 10 minutes after each session while it's fresh.", "Section 4, Step 2; Observation Sheet"],
    ["Day 5", "Analyze and share", "Group your notes by task and by theme. Identify the 3–5 issues that came up most often or caused the most difficulty. Write these up in plain language and share them with the solution provider. Don't let findings sit in a notebook.", "Section 4, Step 3"]
  ];

  function toArray(nodes) { return Array.prototype.slice.call(nodes); }

  function escapeHtml(s) {
    return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  /* Turn section references in the route copy into real links, so a reader
     sent to "Section 4" can actually get there. */
  function linkify(text) {
    var out = escapeHtml(text);
    out = out.replace(/\bSections?\s\d(\.\d+)?(,\s*\d(\.\d+)?)*/g, function (match) {
      var nums = match.match(/\d(\.\d+)?/g) || [];
      /* "Section 4" links as a whole phrase, so the target is not a lone digit.
         "Sections 3.3, 5.5" keeps the shared prefix and links each number. */
      if (nums.length === 1) {
        var single = SECTION_URLS[nums[0].charAt(0)];
        return single ? '<a href="' + single + '">' + match + "</a>" : match;
      }
      return match.replace(/\d(\.\d+)?/g, function (num) {
        var url = SECTION_URLS[num.charAt(0)];
        return url ? '<a href="' + url + '">' + num + "</a>" : num;
      });
    });
    out = out.replace(/Key Findings at a Glance/g, '<a href="#key-findings">Key Findings at a Glance</a>');
    out = out.replace(/Screening Template|Observation Sheet/g, function (m) {
      return '<a href="' + SECTION_URLS["6"] + '">' + m + "</a>";
    });
    return out;
  }

  /* Standard tab pattern: roving tabindex plus arrow/Home/End navigation.
     The tabs share one panel, so the panel's label follows the active tab. */
  function setupTabs(tabs, panel, onSelect) {
    function select(idx, moveFocus) {
      tabs.forEach(function (t, i) {
        var on = i === idx;
        t.setAttribute("aria-selected", on ? "true" : "false");
        t.setAttribute("tabindex", on ? "0" : "-1");
      });
      if (panel && tabs[idx].id) panel.setAttribute("aria-labelledby", tabs[idx].id);
      onSelect(idx);
      if (moveFocus) tabs[idx].focus();
    }

    tabs.forEach(function (tab, i) {
      tab.addEventListener("click", function () { select(i, false); });
      tab.addEventListener("keydown", function (e) {
        var last = tabs.length - 1;
        var next = null;
        if (e.key === "ArrowRight" || e.key === "ArrowDown") next = i === last ? 0 : i + 1;
        else if (e.key === "ArrowLeft" || e.key === "ArrowUp") next = i === 0 ? last : i - 1;
        else if (e.key === "Home") next = 0;
        else if (e.key === "End") next = last;
        if (next === null) return;
        e.preventDefault();
        select(next, true);
      });
    });
  }

  /* 100vw includes the scrollbar, which pushes the full-bleed hero wider than
     the viewport. Expose the real scrollbar width so the CSS can subtract it. */
  function syncScrollbarWidth() {
    var sbw = window.innerWidth - document.documentElement.clientWidth;
    document.documentElement.style.setProperty("--dteg-sbw", (sbw > 0 ? sbw : 0) + "px");
  }

  function init() {
    syncScrollbarWidth();
    window.addEventListener("resize", syncScrollbarWidth);

    var router = document.querySelector("[data-dteg-router]");
    if (router) {
      var roles = toArray(router.querySelectorAll(".dteg-router__role"));
      var routePanel = document.getElementById("dteg-route-panel");
      var who = router.querySelector("[data-router-who]");
      var start = router.querySelector("[data-router-start]");
      var then = router.querySelector("[data-router-then]");

      function renderRoute(i) {
        var route = ROUTES[i];
        if (!route) return;
        who.textContent = route[0];
        start.innerHTML = linkify(route[1]);
        then.innerHTML = linkify(route[2]);
      }

      setupTabs(roles, routePanel, renderRoute);
      renderRoute(0);
    }

    var stepper = document.querySelector("[data-dteg-stepper]");
    if (stepper) {
      var days = toArray(stepper.querySelectorAll(".dteg-day"));
      var dayPanel = document.getElementById("dteg-day-panel");
      var label = stepper.querySelector("[data-day-label]");
      var focus = stepper.querySelector("[data-day-focus]");
      var actions = stepper.querySelector("[data-day-actions]");
      var deeper = stepper.querySelector("[data-day-deeper]");

      function renderDay(i) {
        var day = DAYS[i];
        if (!day) return;
        label.textContent = day[0];
        focus.textContent = day[1];
        actions.textContent = day[2];
        deeper.innerHTML = linkify(day[3]);
      }

      setupTabs(days, dayPanel, renderDay);
      renderDay(0);
    }

    var list = document.querySelector("[data-dteg-checklist]");
    if (list) {
      var boxes = toArray(list.querySelectorAll(".dteg-check"));
      var count = list.querySelector("[data-check-count]");
      var bar = list.querySelector("[data-check-bar]");
      var KEY = "dteg-quickstart-checklist";
      var saved = [];
      try { saved = JSON.parse(localStorage.getItem(KEY)) || []; } catch (e) { saved = []; }

      function sync(persist) {
        var done = [];
        boxes.forEach(function (b, i) {
          if (b.getAttribute("aria-checked") === "true") done.push(i);
        });
        count.textContent = done.length + " of " + boxes.length + " ready";
        bar.style.width = (done.length / boxes.length * 100) + "%";
        if (persist) { try { localStorage.setItem(KEY, JSON.stringify(done)); } catch (e) {} }
      }

      boxes.forEach(function (b, i) {
        if (saved.indexOf(i) !== -1) b.setAttribute("aria-checked", "true");
        b.addEventListener("click", function () {
          b.setAttribute("aria-checked", b.getAttribute("aria-checked") === "true" ? "false" : "true");
          sync(true);
        });
      });
      sync(false);
    }
  }

  if (document.readyState !== "loading") init();
  else document.addEventListener("DOMContentLoaded", init);
})();

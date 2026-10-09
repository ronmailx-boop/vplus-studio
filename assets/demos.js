// Renders the demo site cards from assets/demos.json.
// Used by index.html (first cards only) and demos.html (all cards).
// Text is set with textContent only (no innerHTML), so data from the JSON can't inject markup.
(function () {
  var labels = {
    en: {
      view: "View site",
      admin: "Try the admin panel",
      badge: "Live demo",
      note: "Demo data resets every night, so feel free to play.",
      loading: "Loading demos…",
      error: "Couldn't load the demo list. Please refresh the page."
    },
    he: {
      view: "צפה באתר",
      admin: "נסה את לוח הניהול",
      badge: "דמו חי",
      note: "נתוני הדמו מתאפסים כל לילה, אז אפשר לשחק חופשי.",
      loading: "טוען את הדמואים…",
      error: "לא הצלחנו לטעון את רשימת הדמואים. נסו לרענן את הדף."
    }
  };

  var demos = null;
  var failed = false;

  function currentLang() {
    return document.documentElement.getAttribute("data-current-lang") === "he" ? "he" : "en";
  }

  function pick(value, lang) {
    if (value && typeof value === "object") return value[lang] || value.en || "";
    return value || "";
  }

  function safeUrl(url) {
    return /^https:\/\//.test(url || "") ? url : "#";
  }

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text) node.textContent = text;
    return node;
  }

  function card(demo, lang, t) {
    var article = el("article", "demo-card");

    var media = el("a", "demo-media");
    media.href = safeUrl(demo.url);
    media.target = "_blank";
    media.rel = "noopener";
    if (demo.image) {
      var img = el("img");
      img.src = safeUrl(demo.image);
      img.alt = pick(demo.imageAlt, lang);
      img.loading = "lazy";
      img.decoding = "async";
      // Image unavailable: keep the card, show the gradient background instead of a broken icon
      img.addEventListener("error", function () {
        img.remove();
      });
      media.appendChild(img);
    }
    media.appendChild(el("span", "demo-badge", t.badge));
    article.appendChild(media);

    var body = el("div", "demo-body");
    body.appendChild(el("span", "demo-category", pick(demo.category, lang)));
    body.appendChild(el("h3", "", pick(demo.name, lang)));
    body.appendChild(el("p", "", pick(demo.description, lang)));

    if (demo.tags && demo.tags.length) {
      var tags = el("ul", "demo-tags");
      demo.tags.forEach(function (tag) {
        tags.appendChild(el("li", "", pick(tag, lang)));
      });
      body.appendChild(tags);
    }

    var actions = el("div", "demo-actions");
    var view = el("a", "btn btn-primary", t.view);
    view.href = safeUrl(demo.url);
    view.target = "_blank";
    view.rel = "noopener";
    actions.appendChild(view);
    if (demo.adminUrl) {
      var admin = el("a", "btn btn-secondary", t.admin);
      admin.href = safeUrl(demo.adminUrl);
      admin.target = "_blank";
      admin.rel = "noopener";
      actions.appendChild(admin);
    }
    body.appendChild(actions);
    if (demo.adminUrl) body.appendChild(el("p", "demo-note", t.note));

    article.appendChild(body);
    return article;
  }

  function render() {
    var lang = currentLang();
    var t = labels[lang];
    document.querySelectorAll("[data-demos]").forEach(function (container) {
      container.replaceChildren();
      if (failed) {
        container.appendChild(el("p", "demos-status", t.error));
        return;
      }
      if (!demos) {
        container.appendChild(el("p", "demos-status", t.loading));
        return;
      }
      var limit = parseInt(container.getAttribute("data-demos-limit"), 10);
      var list = limit > 0 ? demos.slice(0, limit) : demos;
      list.forEach(function (demo) {
        container.appendChild(card(demo, lang, t));
      });
    });
  }

  // index.html and demos.html fire this after switching language
  document.addEventListener("vplus:langchange", render);

  render();
  fetch("assets/demos.json", { cache: "no-cache" })
    .then(function (res) {
      if (!res.ok) throw new Error("HTTP " + res.status);
      return res.json();
    })
    .then(function (data) {
      demos = Array.isArray(data) ? data : [];
    })
    .catch(function () {
      failed = true;
    })
    .then(render);
})();

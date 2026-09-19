(function () {
	const rtlLanguages = /^(ar|fa|he|ur|ps|dv|ku|yi)(-|$)/i;
	const root = document.documentElement;

	function updateDirection() {
		const language = root.getAttribute("lang") || navigator.language || "en";
		const translatedRtl = document.body.classList.contains("translated-rtl");
		const isRtl = rtlLanguages.test(language) || translatedRtl;

		root.dir = isRtl ? "rtl" : "ltr";
		root.classList.toggle("is-rtl", isRtl);
	}

	updateDirection();

	new MutationObserver(updateDirection).observe(root, {
		attributes: true,
		attributeFilter: ["lang", "class"]
	});

	new MutationObserver(updateDirection).observe(document.body, {
		attributes: true,
		attributeFilter: ["class"]
	});
})();
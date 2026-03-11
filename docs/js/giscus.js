(function () {
    var script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';

    // CONFIGURATION START
    // To configure: visit https://giscus.app and fill in your repo details
    // Then replace the values below with your own
    script.setAttribute('data-repo', 'charanbobby/Shopify2026');
    script.setAttribute('data-repo-id', 'REPLACE_WITH_REPO_ID');
    script.setAttribute('data-category', 'General');
    script.setAttribute('data-category-id', 'REPLACE_WITH_CATEGORY_ID');
    // CONFIGURATION END

    script.setAttribute('data-mapping', 'pathname');
    script.setAttribute('data-strict', '0');
    script.setAttribute('data-reactions-enabled', '1');
    script.setAttribute('data-emit-metadata', '0');
    script.setAttribute('data-input-position', 'bottom');
    script.setAttribute('data-theme', 'light');
    script.setAttribute('data-lang', 'en');
    script.crossOrigin = 'anonymous';
    script.async = true;

    var container = document.querySelector('.giscus-placeholder');
    if (container) {
        container.appendChild(script);
    }
})();

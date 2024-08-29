// Function to load the npm-hosted script
function loadNpmScript() {
    var script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/test-logic-vds@latest/logic.js';
    script.type = 'text/javascript';
    document.head.appendChild(script);
}

// Load the npm script when the GitHub script is executed
loadNpmScript();

// Optionally, you can add other code here that should execute after loading the npm script.

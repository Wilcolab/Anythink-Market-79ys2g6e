/**
 * Converts a string to dot.case format.
 * Example: "Hello World" -> "hello.world"
 * @param {string} str
 * @returns {string}
 */
function toDotCase(str) {
    return str
        .replace(/([a-z])([A-Z])/g, '$1 $2') // Split camelCase
        .replace(/[\s_-]+/g, '.')            // Replace spaces, underscores, hyphens with dots
        .toLowerCase()
        .replace(/^\.+|\.+$/g, '');          // Trim leading/trailing dots
}

// Example usage:
// console.log(toDotCase("Hello World")); // "hello.world"
/**
 * Converts a string to dot.case format
 * 
 * This function handles various input formats including:
 * - camelCase (e.g., "myVariableName" -> "my.variable.name")
 * - spaces (e.g., "hello world" -> "hello.world")
 * - underscores (e.g., "hello_world" -> "hello.world")
 * - hyphens (e.g., "hello-world" -> "hello.world")
 * - mixed formats (e.g., "myVariable_name" -> "my.variable.name")
 * 
 * The output is always lowercase with dots separating words,
 * and no leading or trailing dots.
 * 
 * @param {string} str - The input string to convert
 * @returns {string} The string in dot.case format
 * 
 * @example
 * toDotCase("myVariableName");     // Returns: "my.variable.name"
 * toDotCase("hello world");        // Returns: "hello.world"
 * toDotCase("hello_world");        // Returns: "hello.world"
 * toDotCase("hello-world");        // Returns: "hello.world"
 * toDotCase("MyVariableName");     // Returns: "my.variable.name"
 * toDotCase("my_variable-name");   // Returns: "my.variable.name"
 * toDotCase("  hello  world  ");   // Returns: "hello.world"
 */
function toDotCase(str) {
  if (typeof str !== 'string') {
    return '';
  }

  return str
    // Insert a dot before uppercase letters that are preceded by lowercase letters
    .replace(/([a-z])([A-Z])/g, '$1.$2')
    // Replace spaces, underscores, and hyphens with dots
    .replace(/[\s_-]+/g, '.')
    // Convert to lowercase
    .toLowerCase()
    // Remove leading and trailing dots
    .replace(/^\.+|\.+$/g, '')
    // Replace multiple consecutive dots with a single dot
    .replace(/\.+/g, '.');
}

// Example usage:
// const result1 = toDotCase("myVariableName");     // "my.variable.name"
// const result2 = toDotCase("hello world");        // "hello.world"
// const result3 = toDotCase("hello_world");        // "hello.world"
// const result4 = toDotCase("hello-world");        // "hello.world"
// const result5 = toDotCase("MyVariableName");     // "my.variable.name"
// const result6 = toDotCase("my_variable-name");   // "my.variable.name"

module.exports = { toDotCase };

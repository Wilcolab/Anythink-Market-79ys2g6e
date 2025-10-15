function toKebabCase(str) {
    return str
        .trim()
        .toLowerCase()
        .replace(/[\s_]+/g, '-');
}

// Example usage:
console.log(toKebabCase('Hello World Example')); // Output: 'hello-world-example'
function toCamelCase(str) {
    return str
        .replace(/[_\-\s]+/g, ' ') // Replace underscores, hyphens, and spaces with a single space
        .trim()
        .split(' ')
        .map((word, i) => {
            word = word.toLowerCase();
            if (i === 0) return word;
            return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join('');
}

// Example usage:
// console.log(toCamelCase('first name'));      // firstName
// console.log(toCamelCase('user_id'));         // userId
// console.log(toCamelCase('SCREEN_NAME'));     // screenName
// console.log(toCamelCase('mobile-number'));   // mobileNumber
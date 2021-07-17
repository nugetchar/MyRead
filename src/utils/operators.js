/**
 * 
 * @param {Function} f a function to debounce 
 * @param {number} delay the debounce delay 
 * @returns a clojure function that is the debounced f function
 */
export function debounce(f, delay = 200) {
    let timer;
    return (...args) => {
        window.clearTimeout(timer);
        timer = window.setTimeout(() => f(...args), delay);
    };
}

/**
 * 
 * @param  {...functions} fns a list of functions 
 * @returns a function that will execute the list of functions one after the other
 */
export function serie(...fns) {
    return (...args) => fns.forEach(f => f(...args));
}
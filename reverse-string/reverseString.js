function reverseString(string = "abc") {
    if (typeof string !== "string") {
        return "passed argument is not string";
    }
    let revString = "";

    for (let i = string.length; i >= 0; i--) {
        revString += string.charAt(i);
    };  

    return revString;
};

export { reverseString };
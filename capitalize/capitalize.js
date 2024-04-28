function capitalize(string) {
    if (typeof string !== "string") {
        return "passed argument is not string";
    }

    let capString = "";
    
    for (let i = 0; i < string.length; i++) {
        capString += string.charAt(i).toUpperCase()
    }

    return capString;
};

export { capitalize };
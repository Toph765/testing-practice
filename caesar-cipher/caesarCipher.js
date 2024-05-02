const isPunc = (value) => {
    const punc = /[^\w]/;
    return punc.test(value) ? true : false;
}

const isOutOfRange = (code) => {
    return (code > 122 || code < 65) || (code > 90 && code < 97) ? true : false; 
}

const isUpperCase = (value) => {
    const upCase = /[A-Z]/;
    return upCase.test(value) ? true : false;
}

const caesarCipher = (str, n) => {
    let newString = "";

    for (let i = 0; i < str.length; i++) {
        const upCase = isUpperCase(str.charAt(i));

        if (isPunc(str.charAt(i))) {
            newString += str.charAt(i);
            continue;
        };

        let code = str.charCodeAt(i);
        let newCode = code + n;

        if (isOutOfRange(newCode) && upCase === true) {
            if (newCode > 90) newCode = newCode - 26;
            else if (newCode < 65) newCode = newCode + 26;
        }
        else if (isOutOfRange(newCode) && upCase === false) {
            if (newCode > 122) newCode = newCode - 26;
            else if (newCode < 97) newCode = newCode + 26;
        };
        
        newString += String.fromCharCode(newCode);
    }

    return newString;
};

export { caesarCipher, isUpperCase, isOutOfRange};
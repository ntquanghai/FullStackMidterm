

const isValid = (s) => {
    let openBrackets = [];
    let flag = false;

    const isNotEmpty = (arr) => {
        if(arr.length === 0) {
            return false;
        }
        else {
            return true;
        }
    }
    
    const lastEl = (arr) => {
        return arr[arr.length - 1];
    }

    for (let i = 0; i < s.length; i++) {

        if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
            openBrackets.push(s[i]);
        }
        
        else if ((s[i] === ')') && (lastEl(openBrackets) === '(') && (isNotEmpty(openBrackets))) {
            openBrackets.pop();
        } else if ((s[i] === '}') && (lastEl(openBrackets) === '{') && (isNotEmpty(openBrackets))) {
            openBrackets.pop();
        } else if ((s[i] === ']') && (lastEl(openBrackets) === '[') && (isNotEmpty(openBrackets))) {
            openBrackets.pop();
        }

        else {
            return flag;
        }
    }
    if(openBrackets.length === 0) {
        flag = true;
        return flag;
    }
};



const s1 = "({[)]})"
console.log(isValid(s1));

const s2 = "({[()]})"
console.log(isValid(s2));


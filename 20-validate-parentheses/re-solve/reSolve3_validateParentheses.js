/**
 * @param {string} s
 * @return {boolean}
 */

// (){(}
var isValid = function(s) {
    const hashMap = {
        '(' : ')',
        '{' : '}',
        '[' : ']',
    }
    let currentOpen = [] 
    for(let i = 0; i<s.length; i++){
        if (closed && doesnt match currentOpen)
            return false
        else if closed && match currentOpen
            pop currentOpen STACK
        if open 
            add to currentOpen STACK
    }
    if currentOpen.length == 0 
        return true
    else return false
};
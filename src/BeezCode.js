const background = "gray"
const syntaxes = {
    "^\\b(class|ram)\\b": "red",
    "regex": "blue",
    "return": "green"
}

window.onload = function() {
    let codes = document.getElementsByClassName("beez")
    for (i = 0; i < codes.length; i++) {
        codes[i].style["background-color"] = background
        let code = codes[i].innerHTML

        for (syntax in syntaxes) {
            let match = new RegExp(syntax, "gm")
            
            code = code.replace(match, '<span style="color: ' + syntaxes[syntax] + '">$&</span>')
            
        }

        codes[i].innerHTML = code
    }
};
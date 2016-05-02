function disableSelection(a) {
    if (typeof a.onselectstart != "undefined") {
        a.onselectstart = function () {
            return false
        }
    } else {
        if (typeof a.style.MozUserSelect != "undefined") {
            a.style.MozUserSelect = "none"
        } else {
            a.onmousedown = function () {
                return false
            }
        }
    }
    a.style.cursor = "default"
}

$(document).ready(function () {
    var a = document.getElementById("calculator-grid");
    disableSelection(a)
});

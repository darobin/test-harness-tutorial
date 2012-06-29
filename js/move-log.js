
(function () {
    window.addEventListener("load", function () {
        var log = document.getElementById("log");
        log.parentNode.removeChild(log);
        document.getElementById("container").appendChild(log);
    }, false);
}());


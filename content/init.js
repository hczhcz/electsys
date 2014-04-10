function ajaxget(url) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", url, false);
    xmlhttp.send();
    return xmlhttp.responseText;
}

function addscript(win, url) {
    var script = win.document.createElement("script");
    script.className = "electsys4fxscript";
    script.type = "text/javascript";
    script.text = ajaxget(url);
    win.document.body.appendChild(script);
}

function loadscript(win) {
    addscript(win, "chrome://Electsys++/content/jquery-1.6.1.min.js");
    addscript(win, "chrome://Electsys++/content/lesson.js");
    addscript(win, "chrome://Electsys++/content/nhce.js");
    addscript(win, "chrome://Electsys++/content/optimize.js");
    addscript(win, "chrome://Electsys++/content/score.js");
    addscript(win, "chrome://Electsys++/content/login_page.js");
    addscript(win, "chrome://Electsys++/content/eductionList.js");
    addscript(win, "chrome://Electsys++/content/load.js");

    if (win.frames.length > 0) {
        for (x in win.frames) {
            if (win.frames[x].window.document.URL != win.document.URL) {
                loadscript(win.frames[x].window);
            }
        }
    }

}

function electsysinit() {
    var win = XPCNativeWrapper.unwrap(window.content);
    if (win.document.getElementsByClassName("electsys4fxscript").length > 0) return;
    if (win.document.URL.search(/electsys.*\.sjtu\.edu\.cn/) < 0) return;

    loadscript(win)
}

window.addEventListener("load", function load(event){
    window.removeEventListener("load", load, false);

    var appcontent = document.getElementById("appcontent");
    if(appcontent){
        appcontent.addEventListener("DOMContentLoaded", electsysinit, true);
    }
}, false);

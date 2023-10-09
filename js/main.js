const htmlCode = document.getElementById("htmlCodeScope")
const cssCode = document.getElementById("cssCodeScope")
const jsCode = document.getElementById("jsCodeScope")
htmlCode.value = localStorage.getItem('htmlCode')??"<div>\n\n</div>";
cssCode.value = localStorage.getItem('cssCode')??"<style>\n\n</style>";
jsCode.value = localStorage.getItem('jsCode')??"<script>\n\n</script>";
showOnIframe()

htmlCode.addEventListener('input', () => {
    localStorage.setItem('htmlCode', htmlCode.value)
    showOnIframe()
})
cssCode.addEventListener('input', () => {
    localStorage.setItem('cssCode', cssCode.value)
    showOnIframe()
})
jsCode.addEventListener('input', () => {
    localStorage.setItem('jsCode', jsCode.value)
    showOnIframe()
})

function showOnIframe() {
    const htmlCode = document.getElementById("htmlCodeScope").value;
    const cssCode = "" + document.getElementById("cssCodeScope").value + "";
    const jsCode = "" + document.getElementById("jsCodeScope").value + "";
    const frame = document.getElementById("show-window").contentWindow.document;
    frame.open();
    frame.write(htmlCode + cssCode + jsCode);
    frame.close();
}

function showRes(x) {
    document.getElementById("htmlScope").style.display = "none";
    document.getElementById("cssScope").style.display = "none";
    document.getElementById("jsScope").style.display = "none";
    document.getElementById("resultScope").style.display = "none";
    document.getElementById(x).style.display = "block";
}
function showAll() {
    if (window.innerWidth >= 992) {
        document.getElementById("htmlScope").style.display = "block";
        document.getElementById("cssScope").style.display = "block";
        document.getElementById("jsScope").style.display = "block";
        document.getElementById("resultScope").style.display = "block";
    }
    if (window.innerWidth < 992 && document.getElementById("htmlScope").style.display == "block") {
        document.getElementById("cssScope").style.display = "none";
        document.getElementById("jsScope").style.display = "none";
        document.getElementById("resultScope").style.display = "none";
    }
}


let code = ``;
function run(){
    let htmlCode = document.getElementById("htmlcode").value;
    let cssCode = document.getElementById("csscode").value;
    let jsCode = document.getElementById("jscode").value;
    let output = document.getElementById("output");
    output.contentDocument.body.innerHTML= htmlCode +"<style>"+cssCode+"</style>";
    output.contentWindow.eval(jsCode);
    let outputpage = document.querySelector("#outputpage");
    outputpage.contentDocument.body.innerHTML= htmlCode +"<style>"+cssCode+"</style>";
    outputpage.contentWindow.eval(jsCode);
}
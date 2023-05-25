function run(){
    let htmlCode = document.getElementById("htmlcode").value;
    let cssCode = document.getElementById("csscode").value;
    let jsCode = document.getElementById("jscode").value;
    let output = document.getElementById("output");
    output.contentDocument.body.innerHTML= htmlCode +"<style>"+cssCode+"</style>";
    output.contentWindow.eval(jsCode);
}
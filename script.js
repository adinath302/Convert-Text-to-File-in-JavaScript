function saveFile() {
    var content = document.getElementById("content").value;
    var fileName = document.getElementById("file-name").value;
    var fileType = document.getElementById("file-type").value;
    
    var blob = new Blob([content], { type: "text/plain" });
    var link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = fileName + fileType;
    link.click();
}

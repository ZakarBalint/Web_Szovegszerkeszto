const inputFilePicker = document.getElementById("filePicker");
const inputTextEditor = document.getElementById("textEditor");

inputFilePicker.onchange = function loadFileInTextEditor()
{
    var file = inputFilePicker.files[0];

    var reader = new FileReader();
    reader.readAsText(file, "UTF-8");
    reader.onload = function (evt) {
        document.getElementById("fileContents").innerHTML = evt.target.result;
    }
    reader.onerror = function (evt) {
        document.getElementById("fileContents").innerHTML = "error reading file";
    }
}
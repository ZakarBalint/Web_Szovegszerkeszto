const filePicker = document.getElementById("filePicker");
const TextEditor = document.getElementById("textEditor");
const buttonClear = document.getElementById("buttonClear");

clearBoardAndFile();

function clearBoardAndFile()
{
    TextEditor.value = "";
    filePicker.value = null;
}

buttonClear.addEventListener("click", clearBoardAndFile);

filePicker.onchange = function loadFileInTextEditor()
{
    var file = filePicker.files[0];

    var reader = new FileReader();
    reader.readAsText(file, "UTF-8");
    reader.onload = function (evt) {
        TextEditor.value = evt.target.result;
    }
    reader.onerror = function (evt) {
        alert("Hiba a fájl beolvasásában!");
    }
}

const buttonSave = document.getElementById("buttonSave");
const buttonSaveAs = document.getElementById("buttonSaveAs");

buttonSave.addEventListener("click", SaveFile);
buttonSaveAs.addEventListener("click", SaveFileAs);

let fileName = null;

function SaveFile()
{
    try
    {
        fileName = filePicker.files[0].name;
    }
    catch
    {
        fileName = prompt("Kérem adja meg a fájl nevét:");

        if(fileName == null || fileName == "")
        {
            alert("A fájlnak nincs neve!")
            return;
        }
        fileName += ".txt";
    }

    try
    {
        var newFile = new Blob([TextEditor.value], {type: 'text/plain'});

        window.URL = window.URL || window.webkitURL;
        var dlBtn = document.getElementById("download");

        dlBtn.setAttribute("href", window.URL.createObjectURL(newFile));
        dlBtn.setAttribute("download", fileName);
    }
    catch(error)
    {
        alert("Hiba a fájl letöltésekor!")
    }    
}


function SaveFileAs()
{
    fileName = prompt("Kérem adja meg a fájl nevét:");

    if(fileName == null || fileName == "")
    {
        alert("A fájlnak nincs neve!")
        return;
    }

    try
    {
        var newFile = new Blob([TextEditor.value], {type: 'text/plain'});

        window.URL = window.URL || window.webkitURL;
        var dlBtn = document.getElementById("downloadAs");

        dlBtn.setAttribute("href", window.URL.createObjectURL(newFile));
        dlBtn.setAttribute("download", fileName += ".txt");

    }
    catch(error)
    {
        alert("Hiba a fájl letöltésekor!")
    }
}
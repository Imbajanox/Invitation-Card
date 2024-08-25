document.getElementById("saveButton").addEventListener("click", function (){
    var divElement = document.getElementById("myDiv");

    html2canvas(divElement).then(function(canvas){
        var imgData = canvas.toDataURL("image/png");

        var link = document.createElement("a");
        link.href = imgData;
        link.download = "div-image.png";

        link.click();
    });
});
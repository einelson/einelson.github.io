// slider output
addEventListener = function(){
    var slider = document.getElementById('counter-in');
    var output = document.getElementById("counter-out");
    output.innerHTML = slider.value;

    slider.oninput = function() {
    output.innerHTML = this.value;
    };


    var sliderl = document.getElementById("clock-in");
    var outputl = document.getElementById("clock-out");
    outputl.innerHTML = sliderl.value;

    sliderl.oninput = function() {
    outputl.innerHTML = this.value;
    };



};

// images upload
window.onload = function() {
    //Check File API support
    if (window.File && window.FileList && window.FileReader) {
      var filesInput = document.getElementById("files");
      filesInput.addEventListener("change", function(event) {
        var files = event.target.files; //FileList object
        var output = document.getElementById("result");
        for (var i = 0; i < files.length; i++) {
          var file = files[i];
          //Only pics
          if (!file.type.match('image'))
            continue;
          var picReader = new FileReader();
          picReader.addEventListener("load", function(event) {
            var picFile = event.target;
            var div = document.createElement("div");
            div.innerHTML = "<img class='thumbnail' src='" + picFile.result + "'" +
              "title='" + picFile.name + "'/>";
            output.insertBefore(div, null);
          });
          //Read the image
          picReader.readAsDataURL(file);
        }
      });
    } else {
      console.log("Your browser does not support File API");
    }
  }


// create collage
function generateCollage(){
    var filesInput = document.getElementById("files");
    console.log(filesInput.length)

    
    alert('Need to implement collage creation here');
};
function pegaArquivo(files){
    var imgLocal = document.getElementById('imgLocal')
    var file = files[0];
    var img = document.createElement("img");
        img.file = file;

    var reader = new FileReader();
        reader.onload = (function(aImg) {
        	return function(e) {
        		aImg.src = e.target.result;
        		appView.timelineView.insertFile(null, e.target.result);
        	};
        })(img);
        reader.readAsDataURL(file);
}

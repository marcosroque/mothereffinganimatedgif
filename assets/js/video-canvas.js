var canvas = document.getElementById('canvas');
var ctx    = canvas.getContext('2d');
var video  = document.getElementById('video');

video.addEventListener('click', function () {
    var $this = this; //cache
    (function onClick() {
        if (!$this.paused && !$this.ended) {
            ctx.drawImage($this, 0, 0);
            _generateThumbnail();
        } else {
            $this.play();
        }
    })();
}, 0);

function _playVideo() {
	video.play();
}

function _generateThumbnail() {
    //generate thumbnail URL data
    var dataURL = canvas.toDataURL();
    
    //create img
    appView.timelineView.insertFile(null, dataURL);

    //append img in container div
    document.getElementById('video-canvas-holder').appendChild(img);
}


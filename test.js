// For usage with Zoom in broswer
/* You are in the Waiting Room. Suddenly, the Host accepts you, but you do not notice it because you were busy doing other things. 
This extension plays a sound when the Host accepts you into the meeting. */

// Only start enhancing when user joined meeting and required texts exist
function startWatching() {
    if((document.getElementsByClassName("meeting-client")[0]?.getElementsByClassName("wr-tile").length || false) != 0) {
        clearInterval(interval);
        console.log(document.getElementsByClassName("meeting-client")[0].getElementsByClassName("wr-tile")[0].innerText);
        begin();
    }
}
var interval = setInterval(startWatching, 1000);

// note.mp3 from here: https://stackoverflow.com/a/27496510
function enhance() {
    console.log("***ENHANCE*** actually do a beep or something. Or maybe automatically join audio? Who knows.")
    //x.disconnect();
    var typeWriter = new Audio(chrome.runtime.getURL('note.mp3'));
    typeWriter.play()
}



// Based on https://stackoverflow.com/questions/20156453/how-to-detect-element-being-added-removed-from-dom-element/20156615#20156615
function begin() {
    console.log("Inside begin function.");
    x = new MutationObserver(function (e) {
        if (e[0].removedNodes) 
        {
            console.log(1);
            enhance();
        }
      });
      
      x.observe(document.body, { childList: true });
}


// Add border around page to see if the extension is loaded
document.body.style.border = "5px solid pink";
console.log("OK");
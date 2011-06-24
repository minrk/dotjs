// newStyle posted by mrhoo at: http://www.webdeveloper.com/forum/archive/index.php/t-130717.html
function newStyle(str){
var pa= document.getElementsByTagName('head')[0] ;
var el= document.createElement('style');
el.type= 'text/css';
el.media= 'screen';
if(el.styleSheet) el.styleSheet.cssText= str;// IE method
else el.appendChild(document.createTextNode(str));// others
pa.appendChild(el);
return el;
}

function leftClose(){
    // float 'Comment & Close' button on the left, to prevent accidental clicking
    // also fade text to grey to make it stand out less
    // query from from userscripts.org/scripts/105325
    var andClose = document.querySelector('button[name="comment_and_close"]');
    if (andClose){
        // float it on the left
        andClose.style.float='left';
        // fade text
        andClose.style.color="#aaa";
        // or you can just remove the button altogether:
        // andClose.parentNode.removeChild(andClose);
    }
}
leftClose();

// double height of issue title display (originally 1.4em)
// newStyle(".issue.closed h3 {height: 3em}")
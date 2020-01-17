var myText="hello dodo";
//Add or not https://
var watsHrefHandle="";
                      /***Browser type***/
//FireFox
var isFirefox = typeof InstallTrigger !== 'undefined';
// Internet Explorer
var isIE = /*@cc_on!@*/false || !!document.documentMode;
// Edge
var isEdge = !isIE && !!window.StyleMedia;
// Chrome 
var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
// Opera
var isOpera =(!!window.opr && opr.addons)||((!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0);
                    /*Handling wats Href*/
//For opera browser
if(isOpera)
{
    watsHrefHandle=""; //no need for https://
}
//For chrome browser
else if(isChrome)
{
      watsHrefHandle="https://"; //Add https://
}
function copy(id) {
    var copyText = document.getElementById(id);
    var type = copyText.nodeName;
    if (type == "INPUT") {
        copyText.select();
        document.execCommand("copy");
    }
    else {
        var from = document.getElementById(id);
        var range = document.createRange();
        window.getSelection().removeAllRanges();
        range.selectNode(from);
        window.getSelection().addRange(range);
        document.execCommand('copy');
        window.getSelection().removeAllRanges();
    }
    //Open wats app with shared text
    window.location.href='https://whatsapp.com://send?text=k',true;
  //  window.location.href="https://web.whatsapp.com://send?text="+myText;
}
copy(id);


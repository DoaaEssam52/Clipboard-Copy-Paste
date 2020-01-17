var myText="hello dodo";
//Add or not https://
var watsHrefHandle="";
async function copy(id) {
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
    
    //    location.href="https://whatsapp.com://send?text=k";
    location.href="https://whatsapp.com";
}
copy(id);


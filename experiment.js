// à editer : 
var min_height = 900;
var min_width  = 1600;
var url_high        = "https://www.psytoolkit.org/cgi-bin/psy2.4.1/survey?s=5dMuv";
var url_low        = "https://www.psytoolkit.org/cgi-bin/psy2.4.1/survey?s=Qj6kG";

// script -------------------------------------------------------------------------------------------
var is_safari = /^((?!chrome|android).)*safari+ie/i.test(navigator.userAgent);
var height = window.screen.availHeight;
var width = window.screen.availWidth;
var is_compatible = (!is_safari && height >= min_height && width >= min_width );

if(!is_compatible) {
  window.location.href = url_low;
    };

else {
  window.location.href = url_high;
}


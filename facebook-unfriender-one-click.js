function begin() {
    var elements = document.querySelectorAll("._5qo4");

    for (var i = 0; i < elements.length; i++) {
        var userId = elements[i].innerHTML.split("id=")[1].split("&")[0];
        var unfriend = 'this.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.remove(); fetch("https://www.facebook.com/ajax/profile/removefriendconfirm.php", {"credentials": "include","headers": {"accept": "*/*","accept-language": "en-US,en;q=0.9","cache-control": "no-cache","content-type": "application/x-www-form-urlencoded","pragma": "no-cache"},"referrer": "https://www.facebook.com/joeyfenny/friends?lst=603014086%3A603014086%3A1556981574&source_ref=pb_friends_tl","referrerPolicy": "origin-when-cross-origin","body": "uid=' + userId + '&unref=bd_friends_tab&floc=friends_tab&nctr[_mod]=pagelet_timeline_app_collection_603014086%3A2356318349%3A2&__user=603014086&__a=1&__dyn=7AgNe-4amaxx2u6aJGeFxqewKKEKAdy8Z9LFwxx-6ES2N6wAxu13y888eo9qyUcWAwDKaxeUW3K13z8S2S4o5eu58O5U7S4E9ohwoU8-1rG0HFU2BxCq7ooxu6U6O5oaUvwHwrEsxeEgy86CEymu4EhwIUa9u4-3CcGcwzwyU5W3u1yyUizHAy85iawiEKucxy6o98dU-rz8mgK7o884y8w9m6EdU&__req=x&__be=1&__pc=PHASED%3Aufi_home_page_pkg&dpr=3&__rev=1000675067&__comet_req=false&fb_dtsg=AQHwR9MCN5j9%3AAQHKOKYa-Ozv&jazoest=21969&__spin_r=1000675067&__spin_b=trunk&__spin_t=1556957068","method": "POST","mode": "cors"});';

        // if delete button doesn't already exist, add one
        if (elements[i].innerHTML.indexOf("facebook-unfriender-one-click") == -1) {
            var elem = elements[i].childNodes[1].childNodes[0].childNodes[1].childNodes[0];
            elem.innerHTML = elem.innerHTML + "<div class='facebook-unfriender-one-click' onclick='" + unfriend + "' style='color: red !important; float: right; margin-top: 1.5px; font-size: 17px; cursor: pointer;'><b>X</b></div>";
        }
    }
}

setInterval(begin, 500);











// test







// /**
//  * Get the closest matching element up the DOM tree.
//  * @private
//  * @param  {Element} elem     Starting element
//  * @param  {String}  selector Selector to match against
//  * @return {Boolean|Element}  Returns null if not match found
//  */
// var getClosest = function ( elem, selector ) {

// 	// Element.matches() polyfill
// 	if (!Element.prototype.matches) {
// 		Element.prototype.matches =
// 			Element.prototype.matchesSelector ||
// 			Element.prototype.mozMatchesSelector ||
// 			Element.prototype.msMatchesSelector ||
// 			Element.prototype.oMatchesSelector ||
// 			Element.prototype.webkitMatchesSelector ||
// 			function(s) {
// 				var matches = (this.document || this.ownerDocument).querySelectorAll(s),
// 					i = matches.length;
// 				while (--i >= 0 && matches.item(i) !== this) {}
// 				return i > -1;
// 			};
// 	}

// 	// Get closest match
// 	for ( ; elem && elem !== document; elem = elem.parentNode ) {
// 		if ( elem.matches( selector ) ) return elem;
// 	}

// 	return null;

// };
// And to use it:

// var elem = document.querySelector('#example');
// var closestElem = getClosest(elem, '.sample-class');
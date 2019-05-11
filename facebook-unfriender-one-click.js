chrome.extension.onMessage.addListener(function(message) {
    console.log("data", message);

	var __a = message.__a;
	var __dyn = message.__dyn;
	var __req = message.__req;
	var __be = message.__be;
	var __pc = message.__pc;
	var dpr = message.dpr;
	var __rev = message.__rev;
	var __s = message.__s;
	var fb_dtsg = message.fb_dtsg;
	var jazoest = message.jazoest;
	var __spin_r = message.__spin_r;
	var __spin_b = message.__spin_b;
	var __spin_t = message.__spin_t;
	var __user = message.__user;

	var unref = "hc_friends_tab";
	var __comet_req = "false";
	var referrer = document.location.href;
	var nctr = document.querySelector("._3sz").parentElement.outerHTML.split('aria-controls="')[1].split('"')[0]});

	function begin() {
		var elements = document.querySelectorAll("._5qo4");
	
		for (var i = 0; i < elements.length; i++) {
			var userId = elements[i].innerHTML.split("id=")[1].split("&")[0];
			var unfriend = 'this.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.remove(); fetch("https://www.facebook.com/ajax/profile/removefriendconfirm.php", {"credentials":"include","headers":{"accept":"*/*","accept-language":"en-US,en;q=0.9","cache-control":"no-cache","content-type":"application/x-www-form-urlencoded","pragma":"no-cache"},"referrer":"https://www.facebook.com/joeyfenny/friends?lst=603014086%3A603014086%3A1557593876&source_ref=pb_friends_tl","referrerPolicy":"origin-when-cross-origin","body":"uid='+userId+'&unref=hc_friends_tab&nctr[_mod]=pagelet_timeline_app_collection_603014086%3A2356318349%3A2&__user=603014086&__a=1&__dyn=7AgNe-4amaxx2u6aJGeFxqewKKEKAdy8Z9LFwxx-6ES2N6wAxu13y888eo9qyUcWAwDKaxeUW3K13z8S2S4o5eu58O5U7S4E9ohwoU8-1rG0HFU2BxCq7ooxu6U6O5oaUvwHwrEsxeEgy86CEymu4EhwIUa9u4-3CcGcwzwyU5W3u1yyUizHAy85iawiEKucxy6o98dU-rz8mgK7o884y8w9m6EdUco9E&__req=v&__be=1&__pc=PHASED%3Aufi_home_page_pkg&dpr=3&__rev=1000701161&__s=%3Adhhbdd%3Aaktxhu&fb_dtsg=AQGJkeBvhF5g%3AAQGk_85yVi9Y&jazoest=22057&__spin_r=1000701161&__spin_b=trunk&__spin_t=1557561201","method":"POST","mode":"cors"});';
	
			// if delete button doesn't already exist, add one
			if (elements[i].innerHTML.indexOf("facebook-unfriender-one-click") == -1) {
				var elem = elements[i].childNodes[1].childNodes[0].childNodes[1].childNodes[0];
				elem.innerHTML = elem.innerHTML + "<div class='facebook-unfriender-one-click' onclick='" + unfriend + "' style='color: red !important; float: right; margin-top: 1.5px; font-size: 17px; cursor: pointer;'><b>X</b></div>";
			}
		}
	}
	
	setInterval(begin, 500);
});

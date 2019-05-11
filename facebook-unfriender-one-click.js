chrome.extension.onMessage.addListener(function(message) {
    // console.log("dataFromBackgroundScript", message);

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
	var nctr = document.querySelector("._3sz").parentElement.outerHTML.split('aria-controls="')[1].split('"')[0];

	function begin() {
		var elements = document.querySelectorAll("._5qo4");
	
		for (var i = 0; i < elements.length; i++) {
			var userId = elements[i].innerHTML.split("id=")[1].split("&")[0];
			var unfriend = 'this.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.remove(); fetch("https://www.facebook.com/ajax/profile/removefriendconfirm.php", {"credentials":"include","headers":{"accept":"*/*","accept-language":"en-US,en;q=0.9","cache-control":"no-cache","content-type":"application/x-www-form-urlencoded","pragma":"no-cache"},"referrer":"'+referrer+'","referrerPolicy":"origin-when-cross-origin","body":"uid='+userId+'&unref='+unref+'&nctr[_mod]='+nctr+'&__user='+__user+'&__a='+__a+'&__dyn='+__dyn+'&__req='+__req+'&__be='+__be+'&__pc='+__pc+'&dpr='+dpr+'&__rev='+__rev+'&__s='+__s+'&fb_dtsg='+fb_dtsg+'&jazoest='+jazoest+'&__spin_r='+__spin_r+'&__spin_b='+__spin_b+'&__spin_t='+__spin_t+'","method":"POST","mode":"cors"});';
	
			// if delete button doesn't already exist, add one
			if (elements[i].innerHTML.indexOf("facebook-unfriender-one-click") == -1) {
				var elem = elements[i].childNodes[1].childNodes[0].childNodes[1].childNodes[0];
				elem.innerHTML = elem.innerHTML + "<div class='facebook-unfriender-one-click' onclick='" + unfriend + "' style='color: red !important; float: right; margin-top: 1.5px; font-size: 17px; cursor: pointer;'><b>X</b></div>";
			}
		}
	}
	
	setInterval(begin, 500);
});

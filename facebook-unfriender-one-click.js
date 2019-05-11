// chrome.extension.onMessage.addListener(function(message) {
//     console.log("data", message);
// });

function begin() {
	var friendElements = document.querySelectorAll("._5qo4");
	
	for (var i = 0; i < friendElements.length; i++) {
		var userId = friendElements[i].innerHTML.split("user.php?id=")[1].split("&")[0];
		var unfriend = 'this.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.remove(); fetch("https://www.facebook.com/ajax/profile/removefriendconfirm.php", {"credentials":"omit","headers":{"content-type":"application/x-www-form-urlencoded"},"referrer":"https://www.facebook.com/joeyfenny/friends?lst=603014086%3A603014086%3A1557593876&source_ref=pb_friends_tl","referrerPolicy":"origin-when-cross-origin","body":"uid='+userId+'&unref=hc_friends_tab&nctr[_mod]=pagelet_timeline_app_collection_603014086%3A2356318349%3A2&__user=603014086&__a=1&__dyn=7AgNe-4amaAxd2u6aJGeFxqeCwDKEKAdy8Z9LFwxx-6ES2N6wAxu13y888eo9qUC3eF89XyEjKewXwgUOdwJKdwVxCu58O5U7S4E9ohwoU8-1rG0HFU2BDx6q7ooxu6U6O5oaUvwHwrEsxeEgy9E6aEymu4EhwIUa9u4-2y48OEO2e2bwnE9EgwoEK4FFXAy85iawiEKucxy6o98dU-rz8mgK7o88vwEy82lxG3u362q&__req=17&__be=1&__pc=PHASED%3Aufi_home_page_pkg&dpr=3&__rev=1000701161&__s=%3Adhhbdd%3Ab0j31n&fb_dtsg=AQHCYTSPi2Tm%3AAQEr3LgyrGDU&jazoest=22045&__spin_r=1000701161&__spin_b=trunk&__spin_t=1557561201","method":"POST","mode":"cors"});';

		if (friendElements[i].innerHTML.indexOf("facebook-unfriender-one-click") == -1) { // if element doesn't already have a delete button, add one
			var deleteButtonLocation = friendElements[i].childNodes[1].childNodes[0].childNodes[1].childNodes[0];
			deleteButtonLocation.innerHTML = deleteButtonLocation.innerHTML + "<div class='facebook-unfriender-one-click' onclick='" + unfriend + "' style='color: red !important; float: right; margin-top: 1.5px; font-size: 17px; cursor: pointer;'><b>X</b></div>";
		}
	}

}
begin();
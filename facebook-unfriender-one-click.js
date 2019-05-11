chrome.extension.onMessage.addListener(function(message) {
    console.log("data", message);
});

// function begin () {
// 	// alert('Unfriend someone the normal way first.\r\nThen the delete buttons will appear.\r\n \r\n1) Hover over their name.\r\n2) Hover over "Friends".\r\n3) Click "Unfriend".');
// 	console.log('Chrome Extension "Facebook Unfriender - One Click" is running on this page.');
// 	chrome.runtime.sendMessage({referrer: document.location.href});
// 	chrome.runtime.sendMessage({nctr: document.querySelector("._3sz").parentElement.outerHTML.split('aria-controls="')[1].split('"')[0]});
	
// 	var friendElements = document.querySelectorAll("._5qo4");

// 	for (var i = 0; i < friendElements.length; i++) { // for each friend element
// 		var userId = friendElements[i].innerHTML.split("user.php?id=")[1].split("&")[0];

// 		if (friendElements[i].innerHTML.indexOf("facebook-unfriender-one-click") == -1) { // if element doesn't already have a delete button, add one
// 			var deleteButtonLocation = friendElements[i].childNodes[1].childNodes[0].childNodes[1].childNodes[0];
// 			deleteButtonLocation.innerHTML = deleteButtonLocation.innerHTML + "<div class='facebook-unfriender-one-click' data-facebook-unfriender-id="+userId+" style='font-weight: bold; color: red !important; float: right; margin-top: 1.5px; font-size: 17px; cursor: pointer;'>X</div>";
// 		}
// 	}

// 	document.addEventListener('click', function(e) {
// 		if (e.target.dataset.facebookUnfrienderId) {
// 			chrome.runtime.sendMessage({uid: e.target.dataset.facebookUnfrienderId});
// 		}
// 	});
// 	// add setInterval code below this line
// }
// begin();

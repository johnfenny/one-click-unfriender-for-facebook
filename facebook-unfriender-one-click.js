function begin () {
    console.log('"Facebook Unfriender - One Click" is running');
    
    function sendMessageToBackgroundScript (userId) {
        // SEND MESSAGE TO BACKGROUND TAB (USER ID)
        chrome.runtime.sendMessage({check: "test"});
        chrome.runtime.sendMessage({check: userId});
    }

    var friendElements = document.querySelectorAll("._5qo4");

    for (var i = 0; i < friendElements.length; i++) { // for each friend element

        var userId = friendElements[i].innerHTML.split("id=")[1].split("&")[0];

        // if element doesn't already have a delete button, add one
        if (friendElements[i].innerHTML.indexOf("facebook-unfriender-one-click") == -1) {
            var deleteButtonLocation = elements[i].childNodes[1].childNodes[0].childNodes[1].childNodes[0];
            deleteButtonLocation.innerHTML = deleteButtonLocation.innerHTML + "<div class='facebook-unfriender-one-click' onclick='" + sendMessageToBackgroundScript(userId) + "' style='color: red !important; float: right; margin-top: 1.5px; font-size: 17px; cursor: pointer;'><b>X</b></div>";
        }
    }

}
begin();

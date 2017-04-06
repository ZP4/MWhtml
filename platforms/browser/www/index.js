
var app = {
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        //function onDeviceReady() {
        //    window.open = cordova.InAppBrowser.open;
        //}
    },

    onDeviceReady: function() {
        app.amendLinks('elink');
    },
    //document.addEventListener("deviceready", onDeviceReady, false);

    // Find everything with class className and open it
    // with the InAppBrowser
    amendLinks: function(className) {
        var n = 0,
            links = document.getElementsByClassName(className);

        for (; n < links.length; n++) {
            links[n].onclick = function(e) {
                e.preventDefault();
                window.open(''.concat(this.href), '_blank');
            }
        }
    }
};

app.initialize();

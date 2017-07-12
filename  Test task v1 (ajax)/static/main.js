function ready(fn) {
    if (document.readyState != 'loading') {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}

var init = function() {

    var request = new XMLHttpRequest();
    var data = {};
    request.open('GET', '/static/names.json', true);
    request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
            // Success!
            console.log("Success!");
            data = JSON.parse(request.responseText);
            autocomplete.init(data, "myInput")
            console.log(Object.values(data));

        } else {
            // We reached our target server, but it returned an error
            console.log("We reached our target server, but it returned an error");
        }
    };

    request.onerror = function() {
        // There was a connection error of some sort
        console.log("There was a connection error of some sort");
    };

    request.send();


}
ready(init);



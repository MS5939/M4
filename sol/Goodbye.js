
(function(window) {


    var byeSpeaker = new Object();

    var word = "Good Bye!";

    byeSpeaker.speak = function speak(name) {

        console.log(word + " " + name);

    };

    window.byeSpeaker = byeSpeaker;


})(window);
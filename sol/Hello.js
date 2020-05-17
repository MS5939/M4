(function(window) {

    var hello = new Object();

    var word = "Hello";

    hello.speak = function(name) {

        console.log(word + " " + name);

    };

    window.hello = hello;

})(window);
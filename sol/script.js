


(function() {

    var names = ["Arjun", "Joss", "Jude", "Pallavi ", "Suriya ", "Lewis", "Tharun", "Jaswanth", "Amal", "SayanG", "BONG"];

    for (var i = 0; i < names.length; i++) {

        var firstLetter = names[i].charAt(0).toLowerCase();

        if (firstLetter === 'j') {

            bye.speak(names[i]);

        } else {

            hello.speak(names[i]);

        }

    }


})();
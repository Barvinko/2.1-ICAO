let dictionary = new Map();
    dictionary.set("A", "Alfa");
    dictionary.set("B", "Bravo");
    dictionary.set("C", "Charlie");
    dictionary.set("D", "Delta");
    dictionary.set("E", "Echo");
    dictionary.set("F", "Foxtrot");
    dictionary.set("G", "Golf");
    dictionary.set("H", "Hotel");
    dictionary.set("I", "India");
    dictionary.set("J", "Juliett");
    dictionary.set("K", "Kilo");
    dictionary.set("L", "Limo");
    dictionary.set("M", "Mike");
    dictionary.set("N", "November");
    dictionary.set("O", "Oscar");
    dictionary.set("P", "Papa");
    dictionary.set("Q", "Quebec");
    dictionary.set("R", "Romeo");
    dictionary.set("S", "Sierra");
    dictionary.set("T", "Tango");
    dictionary.set("U", "Uniform");
    dictionary.set("V", "Victor");
    dictionary.set("W", "Whiskey");
    dictionary.set("X", "Xray");
    dictionary.set("Y", "Yankee");
    dictionary.set("Z", "Zulu");
    dictionary.set("0", "Zero");
    dictionary.set("1", "One");
    dictionary.set("2", "Two");
    dictionary.set("3", "Three");
    dictionary.set("4", "Four");
    dictionary.set("5", "Five");
    dictionary.set("6", "Six");
    dictionary.set("7", "Seven");
    dictionary.set("8", "Eight");
    dictionary.set("9", "Nine");
    dictionary.set(" ", "|")

    function translation() {
        let word = (document.getElementById("input").value).toUpperCase();
        let letters = word.split('');
        let words = new Array();
        console.log(letters);
        idWords.classList.remove('text-danger');

        for (let i = 0; i < letters.length; i++) {
            // console.log(dictionary.get(letters[i]));
            words[i] = dictionary.get(letters[i]);
            console.log(words[i]);
        }

        words = words.join(' ');

        for (i = 0; i < letters.length; i++) {
            if (dictionary.has(letters[i]) ) {
                console.log("good");
            }else{
                words = "Имееться не коректный символ";
                idWords.classList.add('text-danger');
                break;
            }      
        }

        if (words == "") {
            words = "-";
        }

        console.log(words);

        document.getElementById("idWords").innerHTML = words;
    }
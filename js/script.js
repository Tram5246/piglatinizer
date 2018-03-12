/*global $*/

// Pig Latin takes the first consonant (or consonant cluster) of an English 
// word, moves it to the end of the word and suffixes an ay, or if a word
// begins with a vowel you just add ay to the end. For example, pig becomes
// igpay, banana becomes ananabay, and aadvark becomes aadvarkay.
// CREATE THE FUNCTIONS BELOW

// Document Ready Function. All of your jQuery should go in here. 
$( document ).ready(function() {
	$('#pig').click(function(){
		var input = $('#input').val();
		var pigWord = uppercaser(input);
		$('#place').text(pigWord);
	});

function startsWithAVowel(word) {
  var firstLetter = word[0].toLowerCase();
  
  if (firstLetter === "a" || firstLetter === "e" || firstLetter === "i" || firstLetter === "o" || firstLetter === "u") {
    return true;
  } else {
    return false;
  }
}

function wordToPigLatin(word) {
	var result;
	if (startsWithAVowel(word)) {
		result = word + "ay";
	} else {
		result = word.slice(1) + word[0] + "ay";
	}
	return result;
}

function uppercaser(sentence) {
debugger;
    var words = sentence.split(" ");
    var uppercasedWords = " ";
    for (var i = 0; i < words.length; i++) {
        var word = words[i];
        uppercasedWords = uppercasedWords + " " + wordToPigLatin(word);
    debugger;
    }
    return uppercasedWords;
}

   var input = $("#input").val();
   var uppercasedSentence = uppercaser(input);
   $("#place").text(uppercasedSentence);

});
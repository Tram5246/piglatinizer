// Pig Latin takes the first consonant (or consonant cluster) of an English 
// word, moves it to the end of the word and suffixes an ay, or if a word
// begins with a vowel you just add ay to the end. For example, pig becomes
// igpay, banana becomes ananabay, and aadvark becomes aadvarkay.
// CREATE THE FUNCTIONS BELOW

// Document Ready Function. All of your jQuery should go in here. 
$( document ).ready(function() {
  $("#pig").click(function(){
	var input = $("#input").val();
    $("#place").append(piglat(input));
  });
     


});


// Create the wordToPigLatin function that takes a word as a parameter and returns a transfromed word. 
function piglat (x){
    return x + "ay";
}




// Create the sentenceToPigLatin function that takes a sentence as a parameter
	//Loops through all the words in the sentence and transforms each word
	//It should return a transfromed sentance

function sentencrToPigLatin (p){
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    if (p[0] in vowels) {
        return sentenceToPigLatin.append
    }
    else {
        
    }
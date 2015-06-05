/*****************##JSBIN url generator##******************************

Write a JavaScript function that will randomly generate a 6 character string that
alternates between consonants and vowels.

**List of consonants:**
B, C, D, F, G, H, J, K, L, M, N, P, Q, R, S, T, V, X, Y, Z

**List of vowels:**
A, E, I, O, U

**Examples:**
fabuti, nitize, taqake, wuwuya******************************************/

var consonants = ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'X', 'Y', 'Z'];
var vowels = ['A', 'E', 'I', 'O', 'U'];

function generateWord() {
	for ( i = 0; i < 3; i++ ) {
		var randomWord = "";

		var randomConsonants = Math.floor(Math.random() * consonants.length );
		var randomVowels = Math.floor(Math.random() * vowels.length );

		//randomWord[randomWord.length] = consonants[randomConsonants] + vowels[randomVowels];
		//randomWord.push(consonants[randomConsonants], vowels[randomVowels]);
		randomWord = consonants[randomConsonants] + vowels[randomVowels];

		console.log(randomConsonants, randomVowels);
		document.write(randomWord.toLowerCase());

	}
}
// console.log(randomWord);
generateWord();




























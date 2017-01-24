function orderedVowels(arrayBucket) {
    var arrayBucketLength = arrayBucket.length;
    var vowelArray = [];
    var finishedArray = [];
    
    for(var i = 0; i < arrayBucketLength; i++){
        vowelArray.push(arrayBucket[i].replace(/[b-df-hj-np-tv-z]/g,""));
    }
    for(var i = 0; i < arrayBucketLength; i++){
        if (vowelArray[i] === "aeiou") {
            finishedArray.push(arrayBucket[i]);
        }
    }
    return finishedArray;
}

var testInput = ["absconder", "absconders", "absconding", "absconds", "abseil", "abseiled", "abseiling", "abseils", "absence", "absences", "absent", "absented", "absentee", "absenteeism", "absenteeisms", "absentees", "absenter", "absenters", "absenting", "absently", "absentminded", "absentmindedly", "absentmindedness", "absentmindednesses", "absents", "absinth", "absinthe", "absinthes", "absinths", "absolute", "absolutely", "absoluteness", "absolutenesses", "absoluter", "absolutes", "absolutest", "absolution", "absolutions", "absolutism", "absolutisms", "absolutist", "absolutistic", "absolutists", "absolutive", "absolutize", "absolutized", "absolutizes", "absolutizing", "absolve", "absolved", "absolver", "absolvers", "absolves", "absolving", "absonant", "absorb", "absorbabilities", "absorbability", "absorbable", "absorbance", "absorbances", "absorbancies", "absorbancy", "absorbant", "absorbants", "absorbed", "absorbencies", "absorbency", "absorbent", "absorbents", "absorber", "absorbers", "absorbing", "absorbingly", "absorbs", "absorptance", "absorptances", "absorption", "absorptions", "absorptive", "absorptivities", "absorptivity", "absquatulate", "absquatulated", "absquatulates", "absquatulating", "abstain", "abstained", "abstainer", "abstainers", "abstaining", "abstains", "abstemious", "abstemiously", "abstemiousness", "abstemiousnesses", "abstention", "abstentions", "abstentious", "absterge"];

var testInput02 = ["yeti", "meow", "atetiyonusba", "cheese", "cake", "areiotus"];

var newList = orderedVowels(testInput);
var newList02 = orderedVowels(testInput02);

console.log(newList);
console.log(newList02);
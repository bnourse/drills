var results;
var index = 0;

window.addEventListener("load", function() {
	addFormListener();
});

function addFormListener() {
	document.getElementById("search_form").addEventListener("submit",querySubmitted);
}

function querySubmitted(e) {
	e.preventDefault();
	var form_data = new FormData(e.target);
	var xhr = new XMLHttpRequest();
	uri = "/results?query=" + form_data.get("query");
	xhr.open("GET", uri);
	xhr.send();
	xhr.addEventListener("load", resultsLoaded);
}

function resultsLoaded(e) {
	var response = JSON.parse(e.target.responseText);
	results = response["Search"];
	index = 0;
	var contents = getResultHtml(results[index]);
	document.getElementById("results").innerHTML = contents;
	addButtonListeners();
}

function getResultHtml(result) {
	var resultHtml = " <div class=\"movie_info\"> ";
	resultHtml +=    "   <h2>" + result["Title"] + "  (" + result["Year"] + ")</h2>";
	resultHtml +=    "   <img src=\"" + result["Poster"] + "\"> ";
	resultHtml +=    " </div> ";
	return resultHtml;
}

function addButtonListeners() {
	document.getElementById("next_button").addEventListener("click", nextClicked);
	document.getElementById("previous_button").addEventListener("click", previousClicked);
}

function nextClicked(e) {
	e.preventDefault();
	index++;
	if(index > results.length-1) {
		index = 0;
	}
	var next_content = getResultHtml(results[index]);
	document.getElementById("results").innerHTML = next_content;
}

function previousClicked(e) {
	e.preventDefault();
	index--;
	if(index  <= -1) {
		index = results.length-1;
	}
	var prev_content = getResultHtml(results[index]);
	document.getElementById("results").innerHTML = prev_content;
}
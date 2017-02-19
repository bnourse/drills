window.addEventListener("load", function() {

	displayInfo();

});

function displayInfo() {
	var xhr = new XMLHttpRequest();
	var url = "/people";
	xhr.open("get", url, true);
	xhr.addEventListener("load", handleInfoLoad);
	xhr.send();
}

function handleInfoLoad(e) {
	info = JSON.parse(e.target.responseText);
	insertInfo(info);
}

function insertInfo(info) {
	body_HTML = buildBodyHTML(info);
	document.body.innerHTML = body_HTML;
}

function buildBodyHTML(info) {
	body_HTML = "";
	for(i=0; i<info.length; i++) {
		body_HTML += buildIndividualHTML(info[i]);
	}
	return body_HTML;
}

function buildIndividualHTML(i_info) {
	individual_HTML = " <div class=\"individual\"> ";
	individual_HTML += "<p>" + i_info["fname"] + " " + i_info["lname"] + "</p>";
	individual_HTML += " <ul>";
	individual_HTML += " <li>Telephone: " + i_info["tel"] + "</li>";
	individual_HTML += " <li>Street Address: " + i_info["address"] + "</li>";
	individual_HTML += " <li>City/Zip: " + i_info["city"] + ", " + i_info["state"] + " " + i_info["zip"] + "</li>";
	individual_HTML += " </ul> ";
	individual_HTML += " </div> ";
	return individual_HTML;
}
window.addEventListener("load", function (){
	insertJSONContent();
	
});

function insertJSONContent() {
	var xhr = new XMLHttpRequest();
	var url = "/comments";
	xhr.open("get", url, true);
	xhr.addEventListener("load", handleCommentsLoad);
	xhr.send();
}

function handleCommentsLoad(e) {
	var comments = JSON.parse(e.target.responseText);
	insertComments(comments);
}

// function insertComments(comments) {
// 	var comments_HTML = buildCommentsHTML(comments);
// 	comments_area = document.getElementsByClassName("post__comments")[0];
// 	comments_area.innerHTML = comments_HTML;
// }

function insertComments(comments) {
	var post_info_div = document.getElementsByClassName("post__info")[0];
	var comments_div = document.createElement("div");
	insertAfter(comments_div, post_info_div);
	comments_div.classList.add("post__comments");
	for(var i=0; i<comments.length; i++) {
		var comment_node = buildCommentNode(comments[i]);
		comments_div.appendChild(comment_node);
	}
	refreshListeners();
}

function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

// function buildCommentsHTML(comments) {
// 	var comments_HTML = "";
// 	for(i=0; i<comments.length; i++) {
// 		comments_HTML +=" <div class=\"comment media\"> ";
// 		comments_HTML += buildCommentHTML(comments[i]);
// 		comments_HTML +=" </div> ";
// 	}
// 	return comments_HTML;
// }

// function buildCommentHTML(comment) {
//  	var comment_HTML = " <img src = \"" + comment["profile_img"] + "\" class=\"profilePhoto\"> ";
//  	comment_HTML += " <div class=\"media__info\"> "; 
//  	comment_HTML += "  <a href=\"#\">" + comment["name"] + "</a> ";
//  	comment_HTML += comment["body"];
//  	comment_HTML += buildCommentInfoHTML(comment);
//  	comment_HTML += buildRepliesHTML(comment);
//  	comment_HTML += " </div> ";

// 	return comment_HTML;
// }

function buildCommentNode(comment) {
	var comment_media_div = document.createElement("div");
	comment_media_div.classList.add("comment");
	comment_media_div.classList.add("media");
	comment_media_div.innerHTML = " <img src = \"" + comment["profile_img"] + "\" class=\"profilePhoto\"> ";
	comment_media_div.appendChild(buildMediaInfoNode(comment));

	return comment_media_div;
}

function buildMediaInfoNode(comment) {
	var media_info_div	 = document.createElement("div");
	media_info_div.classList.add("media__info");
	media_info_HTML = "  <a href=\"#\">" + comment["name"] + "</a> ";
	media_info_HTML += comment["body"] + " ";
	media_info_div.innerHTML = media_info_HTML;

	media_info_div.appendChild(buildCommentInfoNode(comment));
	media_info_div.appendChild(document.createTextNode(" "));
	media_info_div.appendChild(buildRepliesNode(comment));

	return media_info_div;
}

function buildCommentInfoNode(comment) {
	var comment_info_div = document.createElement("div");
 	comment_info_div.classList.add("comment__info");

 	var comment_info_HTML = " <a href=\"#\">Like</a> ";
 	comment_info_HTML += " <a href=\"#\">"+ comment["replies"] + " replies</a> ";
 	comment_info_HTML += " <span>" + comment["likes"] + " likes</span> ";
 	comment_info_HTML += comment["time"];

 	comment_info_div.innerHTML = comment_info_HTML;
 	return comment_info_div;
}

// function buildRepliesHTML(comment) {
// 	var replies_HTML = " <div class=\"replies\" style=\"display: none\"> ";
// 	if(comment["replys_comments"] != null) {
// 		replies_HTML += buildCommentsHTML(comment["replys_comments"]);
// 	}
// 	replies_HTML += " </div> "
// 	return replies_HTML;
// }

function buildRepliesNode(comment) {
	var replies_div = document.createElement("div");
	replies_div.classList.add("replies");
	replies_div.style.display = "none";
	var replies = comment["replys_comments"];
	if (replies != null) {
		for(var i=0; i<replies.length; i++) {
			var reply_node = buildCommentNode(replies[i]);
			replies_div.appendChild(reply_node);
		}
	}
	replies_div.appendChild(buildReplyForm());
	return replies_div;
}

function buildReplyForm() {
	var comment_form_div = document.createElement("div");
	comment_form_div.classList.add("commentForm");
	comment_form_div.classList.add("media");
	// It seems like the image here should be the profile image of the
	// currently logged in user. I'm not sure if that would be coming from
	// the same JSON/Ajax request so I'm leaving it hardcoded for now.
	var html =  " <img src=\"images/user.png\" class=\"profilePhoto\"> ";
	html += " <div class=\"media__info\"> ";
	html += "   <form action=\"#\" method=\"post\"> ";
	html += "     <textarea name=\"comment\"></textarea> ";
	html += "     <input type=\"submit\"> ";
	html += "   </form> ";
	html += " </div> ";

	comment_form_div.innerHTML = html;
	return comment_form_div;
}
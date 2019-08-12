item_neutral.addEventListener("click", function() {
	get_data("neutral");
	document.getElementById("button_sentiment").innerHTML = "Neutral";
});
item_positive.addEventListener("click", function() {
	get_data("positive");
	document.getElementById("button_sentiment").innerHTML = "Positive";
});
item_negative.addEventListener("click", function() {
	get_data("negative");
	document.getElementById("button_sentiment").innerHTML = "Negative";
});

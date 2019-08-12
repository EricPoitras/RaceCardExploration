var selected_state;
var data_array = [];
var item_neutral = document.getElementById("item_neutral");
var item_positive = document.getElementById("item_positive");
var item_negative = document.getElementById("item_negative");
var chart_wordcloud = document.getElementById("chart_wordcloud");
google.charts.load("current", {
	packages: ["geochart", "corechart"],
	mapsApiKey: "AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY"
});
var options1 = {
	region: "US",
	resolution: "provinces",
	width: "100%",
	height: "auto",
	colorAxis: { colors: ["#007bff", "rgb(147, 79, 97)"] },
	backgroundColor: "transparent",
	datalessRegionColor: "#f5f5f5",
	defaultColor: "#f5f5f5"
};
var options2 = {
	width: "100%",
	pieHole: 0.4,
	fontSize: 14,
	pieSliceBorderColor: "black",
	legend: { position: "bottom", textStyle: { color: "white" } },
	backgroundColor: "#343a40",
	pieSliceTextStyle: {
		color: "white"
	}
};
var options3 = {
	width: "100%",
	fontSize: 14,
	hAxis: {
		slantedText: false,
		textStyle: {
			color: "white"
		}
	},
	vAxis: {
		textStyle: {
			color: "white"
		}
	},
	legend: { position: "none", textStyle: { color: "white" } },
	backgroundColor: "#343a40"
};

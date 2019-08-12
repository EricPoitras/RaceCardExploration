function get_data(value) {
	data_array = [];
	var title = ["State", "Stats"];
	data_array.push(title);
	for (var i = 0; i < myJson.length; i++) {
		if (value == "neutral") {
			var entry = [myJson[i][1], myJson[i][2]];
			data_array.push(entry);
			//console.log(data_array);
		} else if (value == "positive") {
			var entry = [myJson[i][1], myJson[i][3]];
			data_array.push(entry);
			//console.log(data_array);
		} else if (value == "negative") {
			var entry = [myJson[i][1], myJson[i][4]];
			data_array.push(entry);
			//console.log(data_array);
		} else {
			var entry = [myJson[i][1], myJson[i][2]];
			data_array.push(entry);
			//console.log(data_array);
		}
	}
	drawRegionsMap();
}

function drawRegionsMap() {
	var data1 = google.visualization.arrayToDataTable(data_array);
	var chart1 = new google.visualization.GeoChart(document.getElementById("regions_div"));
	google.visualization.events.addListener(chart1, "select", function() {
		for (var i = 0; i < data1.getNumberOfRows(); i++) {
			if (i === chart1.getSelection()[0].row) {
				document.getElementById("message").innerHTML = data1.getValue(i, 0);
				document.getElementById("value").innerHTML = data1.getValue(i, 1);
				document.getElementById("state").innerHTML = data1.getValue(i, 0) + "(" + data1.getValue(i, 1) + ")";
				selected_state = i;
				drawPieChart();
				drawBarChart();
			} else {
			}
		}
		chart1.draw(data1, options1);
	});
	chart1.draw(data1, options1);
}

function drawPieChart() {
	var data2 = google.visualization.arrayToDataTable([
		["Sentiment", "Count"],
		["Positive", myJson[selected_state][3]],
		["Negative", myJson[selected_state][4]],
		["Neutral", myJson[selected_state][2]]
	]);
	var chart2 = new google.visualization.PieChart(document.getElementById("donutchart"));
	chart2.draw(data2, options2);
}

function drawBarChart() {
	var data3 = google.visualization.arrayToDataTable([
		["Topic", "Probabilities"],
		["live", myJson[selected_state][5]],
		["look", myJson[selected_state][6]],
		["white,speak", myJson[selected_state][7]],
		["people", myJson[selected_state][8]],
		["black", myJson[selected_state][9]],
		["race", myJson[selected_state][10]],
		["white,life", myJson[selected_state][11]],
		["color", myJson[selected_state][12]]
	]);
	var view3 = new google.visualization.DataView(data3);
	var chart3 = new google.visualization.ColumnChart(document.getElementById("columnchart_values"));
	google.visualization.events.addListener(chart3, "select", function() {
		chart_wordcloud.src = selectHandler(chart3);
	});
	chart3.draw(view3, options3);
}

function selectHandler(chart) {
	console.log(chart.getSelection()[0].row);
	var src;
	switch (chart.getSelection()[0].row) {
		case 0:
			src = "images/BigML-TopicModel-5d1bcb19eba31d6a950000e6_live.svg";
			break;
		case 1:
			src = "images/BigML-TopicModel-5d1bcb19eba31d6a950000e6_look.svg";
			break;
		case 2:
			src = "images/BigML-TopicModel-5d1bcb19eba31d6a950000e6_white-speak.svg";
			break;
		case 3:
			src = "images/BigML-TopicModel-5d1bcb19eba31d6a950000e6_people.svg";
			break;
		case 4:
			src = "images/BigML-TopicModel-5d1bcb19eba31d6a950000e6_black.svg";
			break;
		case 5:
			src = "images/BigML-TopicModel-5d1bcb19eba31d6a950000e6_race.svg";
			break;
		case 6:
			src = "images/BigML-TopicModel-5d1bcb19eba31d6a950000e6_white-life.svg";
			break;
		case 7:
			src = "images/BigML-TopicModel-5d1bcb19eba31d6a950000e6_color.svg";
			break;
		default:
			console.log(chart.getSelection()[0].row);
	}
	console.log(src);
	return src;
}

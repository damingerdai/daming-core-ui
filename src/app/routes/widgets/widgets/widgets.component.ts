import { Component, OnInit } from "@angular/core";
import { ChartConfiguration, ChartOptions, ChartType } from "chart.js";
import { getStyle } from "@coreui/coreui/dist/js/coreui-utilities";
import { CustomTooltips } from "@coreui/coreui-plugin-chartjs-custom-tooltips";

@Component({
	selector: "app-widgets",
	templateUrl: "./widgets.component.html",
	styleUrls: ["./widgets.component.scss"],
})
export class WidgetsComponent implements OnInit {
	// lineChart1
	public lineChart1Data: ChartConfiguration<"line">["data"] = {
		labels: ["January", "February", "March", "April", "May", "June", "July"],
		datasets: [
			{
				data: [65, 59, 84, 84, 51, 55, 40],
				label: "Series A",
				fill: false,
				backgroundColor: getStyle("--primary"),
				pointHoverBackgroundColor: getStyle("--primary"),
				pointBackgroundColor: getStyle("--primary"),
				borderColor: "rgba(255,255,255,.55)",
				pointHoverBorderColor: "rgba(255,255,255,.55)",
				pointBorderColor: "rgba(255,255,255,.55)",
			},
		],
	};
	public lineChart1Options: ChartOptions<"line"> = {
		maintainAspectRatio: false,
		scales: {
			xAxis: {
				grid: {
					color: "transparent",
					borderColor: "transparent",
				},
				ticks: {
					font: {
						size: 2,
					},
					color: "transparent",
				},
			},
			yAxis: {
				display: false,
				ticks: {
					display: false,
				},
				min: 40 - 5,
				max: 84 + 5,
			},
		},
		elements: {
			line: {
				borderWidth: 1,
			},
			point: {
				radius: 4,
				hitRadius: 10,
				hoverRadius: 4,
			},
		},
		plugins: {
			tooltip: {
				enabled: true,
				// callbacks: CustomTooltips
			},
			legend: {
				display: false,
			},
		},
	};
	public lineChart1Legend = false;
	public lineChart1Type = "line";

	// lineChart2
	public lineChart2Data: ChartConfiguration<"line">["data"] = {
		labels: ["January", "February", "March", "April", "May", "June", "July"],
		datasets: [
			{
				data: [1, 18, 9, 17, 34, 22, 11],
				label: "Series A",
				fill: false,
				backgroundColor: getStyle("--info"),
				pointHoverBackgroundColor: getStyle("--info"),
				pointBackgroundColor: getStyle("--info"),
				borderColor: "rgba(255,255,255,.55)",
				pointHoverBorderColor: "rgba(255,255,255,.55)",
				pointBorderColor: "rgba(255,255,255,.55)",
			},
		],
	};
	public lineChart2Options: ChartOptions<"line"> = {
		maintainAspectRatio: false,
		scales: {
			xAxes: {
				grid: {
					color: "transparent",
					borderColor: "transparent",
				},
				ticks: {
					font: {
						size: 2,
					},
					color: "transparent",
				},
			},
			yAxes: {
				display: false,
				ticks: {
					display: false,
				},
				min: 1 - 5,
				max: 34 + 5,
			},
		},
		elements: {
			line: {
				tension: 0.00001,
				borderWidth: 1,
			},
			point: {
				radius: 4,
				hitRadius: 10,
				hoverRadius: 4,
			},
		},
		plugins: {
			tooltip: {
				enabled: true,
				// callbacks: CustomTooltips
			},
			legend: {
				display: false,
			},
		},
	};

	public lineChart2Legend = false;
	public lineChart2Type = "line";

	// lineChart3
	public lineChart3Data: ChartConfiguration<"line">["data"] = {
		labels: ["January", "February", "March", "April", "May", "June", "July"],
		datasets: [
			{
				data: [78, 81, 80, 45, 34, 12, 40],
				label: "Series A",
				fill: true,
				backgroundColor: "rgba(255,255,255,.2)",
				pointHoverBackgroundColor: "rgba(255,255,255,.2)",
				pointBackgroundColor: "rgba(255,255,255,.2)",
				borderColor: "rgba(255,255,255,.55)",
				pointHoverBorderColor: "rgba(255,255,255,.55)",
				pointBorderColor: "rgba(255,255,255,.55)",
				tension: 0.4,
			},
		],
	};
	public lineChart3Options: ChartOptions<"line"> = {
		maintainAspectRatio: false,
		scales: {
			xAxes: {
				display: false,
			},

			yAxes: {
				display: false,
			},
		},
		elements: {
			line: {
				borderWidth: 2,
			},
			point: {
				radius: 0,
				hitRadius: 10,
				hoverRadius: 4,
			},
		},
		plugins: {
			tooltip: {
				enabled: true,
				// callbacks: CustomTooltips
			},
			legend: {
				display: false,
			},
		},
	};
	public lineChart3Legend = false;
	public lineChart3Type = "line";

	// barChart1
	public barChart1Data: ChartConfiguration<"bar">["data"] = {
		labels: [
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10",
			"11",
			"12",
			"13",
			"14",
			"15",
			"16",
		],
		datasets: [
			{
				data: [78, 81, 80, 45, 34, 12, 40, 78, 81, 80, 45, 34, 12, 40, 12, 40],
				label: "Series A",
				backgroundColor: "rgba(255,255,255,.3)",
				borderWidth: 0,
				barPercentage: 0.6,
			},
		],
	};
	public barChart1Options: ChartOptions<"bar"> = {
		maintainAspectRatio: false,
		scales: {
			xAxes: {
				display: false,
			},
			yAxes: {
				display: false,
			},
		},
		plugins: {
			tooltip: {
				enabled: false,
				// external: CustomTooltips,
			},
			legend: {
				display: false,
			},
		},
	};
	public barChart1Legend = false;
	public barChart1Type = "bar";

	// lineChart4
	public lineChart4Data: ChartConfiguration<"line">["data"] = {
		labels: [
			"Jan",
			"Feb",
			"Mar",
			"Apr",
			"May",
			"Jun",
			"Jul",
			"Aug",
			"Sep",
			"Oct",
			"Nov",
			"Dec",
		],
		datasets: [
			{
				data: [4, 18, 9, 17, 34, 22, 11, 3, 15, 12, 18, 9],
				label: "Series A",
				backgroundColor: "transparent",
				borderColor: "rgba(255,255,255,.55)",
				borderWidth: 2,
				tension: 0.4,
			},
		],
	};
	public lineChart4Options: ChartOptions<"line"> = {
		maintainAspectRatio: false,
		scales: {
			xAxes: {
				display: false,
				// points: false,
			},
			yAxes: {
				display: false,
			},
		},
		elements: { point: { radius: 0 } },
		plugins: {
			tooltip: {
				enabled: false,
				// custom: CustomTooltips,
			},
			legend: {
				display: false,
			},
		},
	};
	public lineChart4Legend = false;
	public lineChart4Type = "line";

	// barChart2
	public barChart2Data: ChartConfiguration<"bar">["data"] = {
		labels: [
			"Jan",
			"Feb",
			"Mar",
			"Apr",
			"May",
			"Jun",
			"Jul",
			"Aug",
			"Sep",
			"Oct",
			"Nov",
			"Dec",
		],
		datasets: [
			{
				data: [4, 18, 9, 17, 34, 22, 11, 3, 15, 12, 18, 9],
				label: "Series A",
				backgroundColor: "rgba(0,0,0,.2)",
				borderWidth: 0,
				barPercentage: 0.6,
			},
		],
	};
	public barChart2Options: ChartOptions<"bar"> = {
		maintainAspectRatio: false,
		scales: {
			xAxes: {
				display: false,
			},
			yAxes: {
				display: false,
				ticks: {
					//beginAtZero: true,
				},
			},
		},
		plugins: {
			tooltip: {
				enabled: false,
				//custom: CustomTooltips,
			},
			legend: {
				display: false,
			},
		},
	};
	public barChart2Colours: Array<any> = [
		{
			backgroundColor: "rgba(0,0,0,.2)",
			borderWidth: 0,
		},
	];
	public barChart2Legend = false;
	public barChart2Type = "bar";

	// barChart3
	public barChart3Data: Array<any> = [
		{
			data: [4, 18, 9, 17, 34, 22, 11, 3, 15, 12, 18, 9],
			label: "Series A",
		},
	];
	public barChart3Labels: Array<any> = [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec",
	];
	public barChart3Options: any = {
		tooltips: {
			enabled: false,
			custom: CustomTooltips,
		},
		maintainAspectRatio: false,
		scales: {
			xAxes: [
				{
					display: false,
				},
			],
			yAxes: [
				{
					display: false,
				},
			],
		},
		legend: {
			display: false,
		},
	};
	public barChart3Primary: Array<any> = [
		{
			backgroundColor: getStyle("--primary"),
			borderColor: "transparent",
			borderWidth: 1,
		},
	];
	public barChart3Danger: Array<any> = [
		{
			backgroundColor: getStyle("--danger"),
			borderColor: "transparent",
			borderWidth: 1,
		},
	];
	public barChart3Success: Array<any> = [
		{
			backgroundColor: getStyle("--success"),
			borderColor: "transparent",
			borderWidth: 1,
		},
	];
	public barChart3Legend = false;
	public barChart3Type = "bar";

	// lineChart5
	public lineChart5Data: Array<any> = [
		{
			data: [65, 59, 84, 84, 51, 55, 40],
			label: "Series A",
		},
	];
	public lineChart5Labels: Array<any> = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
	];
	public lineChart5Options: any = {
		tooltips: {
			enabled: false,
			custom: CustomTooltips,
		},
		maintainAspectRatio: false,
		scales: {
			xAxes: [
				{
					display: false,
					points: false,
				},
			],
			yAxes: [
				{
					display: false,
				},
			],
		},
		elements: { point: { radius: 0 } },
		legend: {
			display: false,
		},
	};
	public lineChart5Info: Array<any> = [
		{
			backgroundColor: "transparent",
			borderColor: getStyle("--info"),
			borderWidth: 2,
		},
	];
	public lineChart5Success: Array<any> = [
		{
			backgroundColor: "transparent",
			borderColor: getStyle("--info"),
			borderWidth: 2,
		},
	];
	public lineChart5Warning: Array<any> = [
		{
			backgroundColor: "transparent",
			borderColor: getStyle("--warning"),
			borderWidth: 2,
		},
	];
	public lineChart5Legend = false;
	public lineChart5Type = "line";

	ngOnInit() {
		console.log(this.lineChart1Data);
	}
}

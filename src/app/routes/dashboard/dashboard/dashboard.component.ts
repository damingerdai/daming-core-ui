import { Component, OnInit } from "@angular/core";
import { getStyle, hexToRgba } from "@coreui/coreui/dist/js/coreui-utilities";
import { CustomTooltips } from "@coreui/coreui-plugin-chartjs-custom-tooltips";
import { ChartConfiguration, ChartOptions, Ticks } from "chart.js";

@Component({
	selector: "app-dashboard",
	templateUrl: "./dashboard.component.html",
	styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
	radioModel = "Month";

	// lineChart1
	public lineChart1Data: ChartConfiguration<"line">["data"] = {
		labels: ["January", "February", "March", "April", "May", "June", "July"],
		datasets: [
			{
				data: [65, 59, 84, 84, 51, 55, 40],
				label: "Series A",
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
				enabled: false,
				// custom: CustomTooltips,
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
				enabled: false,
				// custom: CustomTooltips,
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
				enabled: false,
				// custom: CustomTooltips,
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
				barPercentage: 0.6,
				backgroundColor: "rgba(255,255,255,.3)",
				borderWidth: 0,
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
				// custom: CustomTooltips,
			},
			legend: {
				display: false,
			},
		},
	};
	public barChart1Legend = false;
	public barChart1Type = "bar";

	// mainChart

	public mainChartElements = 27;
	public mainChartData1: Array<number> = [];
	public mainChartData2: Array<number> = [];
	public mainChartData3: Array<number> = [];

	public mainChartData: ChartConfiguration<"line">["data"] = {
		labels: [
			"Monday",
			"Tuesday",
			"Wednesday",
			"Thursday",
			"Friday",
			"Saturday",
			"Sunday",
			"Monday",
			"Tuesday",
			"Wednesday",
			"Thursday",
			"Friday",
			"Saturday",
			"Sunday",
			"Monday",
			"Tuesday",
			"Wednesday",
			"Thursday",
			"Friday",
			"Saturday",
			"Sunday",
			"Monday",
			"Thursday",
			"Wednesday",
			"Thursday",
			"Friday",
			"Saturday",
			"Sunday",
		],
		datasets: [
			{
				// data: this.mainChartData1,
				data: [],
				label: "Current",
				fill: true,
				// brandInfo
				backgroundColor: hexToRgba(getStyle("--info"), 10),
				borderColor: getStyle("--info"),
				pointHoverBackgroundColor: "#fff",
				tension: 0.3,
			},
			{
				// data: this.mainChartData2,
				data: [],
				label: "Previous",
				// brandSuccess
				backgroundColor: "transparent",
				borderColor: getStyle("--success"),
				pointHoverBackgroundColor: "#fff",
			},
			{
				// data: this.mainChartData3,
				data: [],
				label: "BEP",
				// brandDanger
				backgroundColor: "transparent",
				borderColor: getStyle("--danger"),
				pointHoverBackgroundColor: "#fff",
				borderWidth: 1,
				borderDash: [8, 5],
			},
		],
	};
	/* eslint-enable max-len */
	public mainChartOptions: ChartOptions<"bar"> = {
		responsive: true,
		maintainAspectRatio: false,
		scales: {
			xAxes: {
				grid: {
					drawOnChartArea: false,
				},
				ticks: {
					display: true,
					autoSkip: false,
					callback: (value, index, ticks) => {
						// TODO value is not really label value
						return (this.mainChartData.labels[index] as string).charAt(0);
					},
				},
			},
			yAxes: {
				ticks: {
					// beginAtZero: true,
					maxTicksLimit: 5,
					stepSize: Math.ceil(250 / 5),
				},
				max: 250,
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
				hoverBorderWidth: 3,
			},
		},
		plugins: {
			tooltip: {
				enabled: false,
				// custom: CustomTooltips,
				intersect: true,
				mode: "index",
				position: "nearest",
				callbacks: {
					// labelColor: function (tooltipItem, chart) {
					// 	return {
					// 		backgroundColor:
					// 			chart.data.datasets[tooltipItem.datasetIndex].borderColor,
					// 	};
					// },
				},
			},
			legend: {
				display: false,
			},
		},
	};
	public mainChartLegend = false;
	public mainChartType = "line";

	// social box charts

	public brandBoxChartData1: ChartConfiguration<"line">["data"] = {
		labels: ["January", "February", "March", "April", "May", "June", "July"],
		datasets: [
			{
				data: [65, 59, 84, 84, 51, 55, 40],
				label: "Facebook",
				backgroundColor: "rgba(255,255,255,.1)",
				borderColor: "rgba(255,255,255,.55)",
				pointHoverBackgroundColor: "#fff",
				tension: 0.4,
			},
		],
	};
	public brandBoxChartData2: ChartConfiguration<"line">["data"] = {
		labels: ["January", "February", "March", "April", "May", "June", "July"],
		datasets: [
			{
				data: [1, 13, 9, 17, 34, 41, 38],
				label: "Twitter",
				backgroundColor: "rgba(255,255,255,.1)",
				borderColor: "rgba(255,255,255,.55)",
				pointHoverBackgroundColor: "#fff",
				tension: 0.4,
			},
		],
	};
	public brandBoxChartData3: ChartConfiguration<"line">["data"] = {
		labels: ["January", "February", "March", "April", "May", "June", "July"],
		datasets: [
			{
				data: [78, 81, 80, 45, 34, 12, 40],
				label: "LinkedIn",
				backgroundColor: "rgba(255,255,255,.1)",
				borderColor: "rgba(255,255,255,.55)",
				pointHoverBackgroundColor: "#fff",
				tension: 0.4,
			},
		],
	};
	public brandBoxChartData4: ChartConfiguration<"line">["data"] = {
		labels: ["January", "February", "March", "April", "May", "June", "July"],
		datasets: [
			{
				data: [35, 23, 56, 22, 97, 23, 64],
				label: "Google+",
				backgroundColor: "rgba(255,255,255,.1)",
				borderColor: "rgba(255,255,255,.55)",
				pointHoverBackgroundColor: "#fff",
				tension: 0.4,
			},
		],
	};

	public brandBoxChartLabels: Array<any> = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
	];
	public brandBoxChartOptions: ChartOptions<"line"> = {
		responsive: true,
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
				hoverBorderWidth: 3,
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
	public brandBoxChartColours: Array<any> = [
		{
			backgroundColor: "rgba(255,255,255,.1)",
			borderColor: "rgba(255,255,255,.55)",
			pointHoverBackgroundColor: "#fff",
		},
	];
	public brandBoxChartLegend = false;
	public brandBoxChartType = "line";

	public random(min: number, max: number) {
		return Math.floor(Math.random() * (max - min + 1) + min);
	}

	ngOnInit(): void {
		// generate random values for mainChart
		for (let i = 0; i <= this.mainChartElements; i++) {
			this.mainChartData1.push(this.random(50, 200));
			this.mainChartData2.push(this.random(80, 100));
			this.mainChartData3.push(65);
		}
		this.mainChartData.datasets[0].data = this.mainChartData1;
		this.mainChartData.datasets[1].data = this.mainChartData2;
		this.mainChartData.datasets[2].data = this.mainChartData3;
		this.mainChartData = {
			...this.mainChartData,
		};
		console.log(this.mainChartOptions);
	}
}

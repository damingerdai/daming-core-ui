import { Component, OnInit } from "@angular/core";
import { ChartConfiguration, ChartOptions } from "chart.js";

@Component({
	selector: "app-charts",
	templateUrl: "./charts.component.html",
	styleUrls: ["./charts.component.scss"],
})
export class ChartsComponent implements OnInit {
	// lineChart
	public lineChartData: ChartConfiguration<"line">["data"] = {
		labels: ["January", "February", "March", "April", "May", "June", "July"],
		datasets: [
			{
				data: [65, 59, 80, 81, 56, 55, 40],
				label: "Series A",
				// grey
				backgroundColor: "rgba(148,159,177,0.2)",
				borderColor: "rgba(148,159,177,1)",
				pointBackgroundColor: "rgba(148,159,177,1)",
				pointBorderColor: "#fff",
				pointHoverBackgroundColor: "#fff",
				pointHoverBorderColor: "rgba(148,159,177,0.8)",
				tension: 0.4,
				fill: true,
			},
			{
				data: [28, 48, 40, 19, 86, 27, 90],
				label: "Series B",
				backgroundColor: "rgba(77,83,96,0.2)",
				borderColor: "rgba(77,83,96,1)",
				pointBackgroundColor: "rgba(77,83,96,1)",
				pointBorderColor: "#fff",
				pointHoverBackgroundColor: "#fff",
				pointHoverBorderColor: "rgba(77,83,96,1)",
				tension: 0.4,
				fill: true,
			},
			{
				data: [18, 48, 77, 9, 100, 27, 40],
				label: "Series C",
				backgroundColor: "rgba(148,159,177,0.2)",
				borderColor: "rgba(148,159,177,1)",
				pointBackgroundColor: "rgba(148,159,177,1)",
				pointBorderColor: "#fff",
				pointHoverBackgroundColor: "#fff",
				pointHoverBorderColor: "rgba(148,159,177,0.8)",
				tension: 0.4,
				fill: true,
			},
		],
	};
	public lineChartOptions: ChartOptions<"line"> = {
		animation: false,
		responsive: true,
	};
	public lineChartLegend = true;
	public lineChartType = "line";

	// barChart
	public barChartData: ChartConfiguration<"bar">["data"] = {
		labels: ["2006", "2007", "2008", "2009", "2010", "2011", "2012"],
		datasets: [
			{
				data: [65, 59, 80, 81, 56, 55, 40],
				label: "Series A",
			},
			{
				data: [28, 48, 40, 19, 86, 27, 90],
				label: "Series B",
			},
		],
	};
	public barChartOptions: ChartOptions<"bar"> = {
		// scaleShowVerticalLines: false,
		responsive: true,
	};

	public barChartType = "bar";
	public barChartLegend = true;

	// Doughnut
	public doughnutChartData: ChartConfiguration<"doughnut">["data"] = {
		labels: ["Download Sales", "In-Store Sales", "Mail-Order Sales"],
		datasets: [
			{
				data: [350, 450, 100],
			},
		],
	};
	public doughnutChartType = "doughnut";

	// Radar
	public radarChartData: ChartConfiguration<"radar">["data"] = {
		labels: [
			"Eating",
			"Drinking",
			"Sleeping",
			"Designing",
			"Coding",
			"Cycling",
			"Running",
		],
		datasets: [
			{ data: [65, 59, 90, 81, 56, 55, 40], label: "Series A" },
			{ data: [28, 48, 40, 19, 96, 27, 100], label: "Series B" },
		],
	};
	public radarChartType = "radar";

	// Pie
	public pieChartData: ChartConfiguration<"pie">["data"] = {
		labels: ["Download Sales", "In-Store Sales", "Mail Sales"],
		datasets: [
			{
				data: [300, 500, 100],
			},
		],
	};
	public pieChartType = "pie";

	// PolarArea
	public polarAreaChartData: ChartConfiguration<"polarArea">["data"] = {
		labels: [
			"Download Sales",
			"In-Store Sales",
			"Mail Sales",
			"Telesales",
			"Corporate Sales",
		],
		datasets: [
			{
				data: [300, 500, 100, 40, 120],
			},
		],
	};
	public polarAreaLegend = true;
	public polarAreaChartType = "polarArea";

	// events
	public chartClicked(e: any): void {
		console.log(e);
	}

	public chartHovered(e: any): void {
		console.log(e);
	}
	ngOnInit() {}
}

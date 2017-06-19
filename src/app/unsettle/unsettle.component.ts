import { Component, OnInit } from '@angular/core';
import { UnSettleService } from './unsettle.service';

@Component({
  templateUrl: 'unsettle.component.html',
  providers: [UnSettleService]
})
export class UnSettleComponent {

  constructor(private unsettleService: UnSettleService) { }

  public settledList: Array<Object> = [];
  public barChartOptions: Object = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public customerList: string[] = [];
  public barChartType = 'bar';
  public barChartLegend = true;

  public barChartData: any[] = [
    { data: [], label: 'Stake' },
    { data: [], label: 'Win' }
  ];


  //get the list of settle data from the api
  public getSettledBetData(): void {

    //call the settle service to get the data
    this.unsettleService.getSettleData().then(res => {
      this.settledList = this.groupedCustomerData(res);
    }).catch(err => { console.log("Error: ", err); });
  };


  //convert the csv data into a Json Data and also group it based on Customer
  public groupedCustomerData(csv: string): Array<Object> {

    let lines = csv.split("\n");
    let result = {};
    let groupedData = [];

    //first line is a header so split the header 
    let headers = lines[0].split(",");

    result = this.convertCsvToJson(headers, lines);

    //convert the object into an Array
    for (let i in result) {
      //Win String Fix
      result[i].Win = result[i][headers[4]];

      //calculate the risk
      result[i].isRisky = this.calculateRisk(result[i]);
      this.barChartData[0].data.push(result[i].Stake);
      this.barChartData[1].data.push(result[i].Win);
      this.customerList.push(result[i].Customer);
      groupedData.push(result[i]);
    }

    return groupedData; //JSON
  };

  //convert the CSV data into the JSON data
  public convertCsvToJson(headers: string[], lines: string[]): Object {

    let result = {};
    //iterate the remaining values and construct the JSON Array
    for (let i = 1; i < lines.length; i++) {

      let currentline = lines[i].split(",");
      let customer = currentline[0];

      if (result && result[customer]) {
        result[customer][headers[3]] += parseInt(currentline[3]);
        result[customer][headers[4]] += parseInt(currentline[4]);
      } else {
        //create a new object in the result object
        result[customer] = {};

        //iterate the single line and contruct the JSON object
        for (let j = 0; j < headers.length; j++) {
          result[customer][headers[j]] = parseInt(currentline[j]);
        }
      }
    }

    return result;
  };

  //calculate the risk
  public calculateRisk(data: any): boolean {
    return data.Stake / 100 * 60 < data.Win ? true : false;
  }


  ngOnInit(): void {
    this.getSettledBetData();
  }
}

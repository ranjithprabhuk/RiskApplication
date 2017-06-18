import { Component, OnInit } from '@angular/core';
import { SettleService } from './settle.service';

@Component({
  templateUrl: 'settle.component.html',
  providers : [SettleService]
})
export class SettleComponent {

  constructor(private settleService: SettleService) {
    
   }

  //get the list of settle data from the api
  public getSettleData(): void {

    //call the settle service to get the data
    this.settleService.getSettleData().then(res => {
      console.log("response>>",res);
    }).catch(err => { console.log("Error: ", err); });
  }


  ngOnInit(): void {
    this.getSettleData();
  }
}

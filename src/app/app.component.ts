import { Component } from '@angular/core';
import {StockDataService} from '../services/stock-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [StockDataService]
})

export class AppComponent {
  myData: Array<any>;
  stockTitle = 'Google Inc';

  constructor(private stockDataService: StockDataService) {
      this.stockDataService.getStockData().subscribe(data => {
          this.myData = data.sampleStockData;
          console.info(this.myData);
      });
  }
}

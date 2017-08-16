import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class StockDataService {
    constructor(private http: Http){
        console.info('Stock data initialized..');
    }

    private dataUrl = 'assets/stock-data.json';

    getStockData(){
        return this.http.get(this.dataUrl)
            .map(res => res.json());
    }
}

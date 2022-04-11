import {Component} from '@angular/core';
import { CarService } from './carservice';
import { Car } from './car';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [MessageService]

})
export class AppComponent { 
    cars: Car[];

    cols: any[];

    selectedCars3: Car[];

    frozenColsWidth: any = '0px';

    frozenCols: any = [{ field: 'year', header: 'Year' },{ field: 'brand', header: 'Brand' }];

    constructor(private carService: CarService, private messageService: MessageService) { }

    ngOnInit() {
        this.carService.getCarsSmall().then(cars => this.cars = cars);

        this.cols = [
            { field: 'vin', header: 'Vin' },           
            { field: 'brand', header: 'Brand' },
            { field: 'color', header: 'Color' },
            { field: 'vin', header: 'Vin' },
            { field: 'vin', header: 'Vin' },           
            { field: 'brand', header: 'Brand' },
            { field: 'color', header: 'Color' },
            { field: 'vin', header: 'Vin' },
            { field: 'vin', header: 'Vin' },           
            { field: 'brand', header: 'Brand' },
            { field: 'color', header: 'Color' },
            { field: 'vin', header: 'Vin' },
            { field: 'vin', header: 'Vin' },           
            { field: 'brand', header: 'Brand' },
            { field: 'color', header: 'Color' },
            { field: 'vin', header: 'Vin' },
          
        ];
    }

}

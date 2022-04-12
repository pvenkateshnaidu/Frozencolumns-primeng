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

    frozenCols: any = [{ field: 'year', header: 'Year', frozen_col: true },{ field: 'brand', header: 'Brand' , frozen_col: true}];

    constructor(private carService: CarService, private messageService: MessageService) { }
  
    ngOnInit() {
        this.carService.getCarsSmall().then(cars => {
            this.cars = cars;
            this.makeRowsSameHeight()
        });
       
        this.cols = [
          
          
            { field: 'year', header: 'year'  },
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
            { field: 'vin', header: 'Vin' },
            { field: 'vin', header: 'Vin' },
            { field: 'year', header: 'Year' }
        ];
    }
    makeRowsSameHeight() {
        setTimeout(() => {
          if (jQuery('.ui-table-scrollable-wrapper').length) {
            let wrapper = $('.ui-table-scrollable-wrapper');
            wrapper.each(function () {
              let w = $(this);
              let frozen_rows: any = w.find('.ui-table-frozen-view tr');
              let unfrozen_rows = w.find('.ui-table-unfrozen-view tr');
              for (let i = 0; i < frozen_rows.length; i++) {
                if (frozen_rows.eq(i).height() > unfrozen_rows.eq(i).height()) {
                  unfrozen_rows.eq(i).height(frozen_rows.eq(i).height());
                } else if (frozen_rows.eq(i).height() < unfrozen_rows.eq(i).height()) {
                  frozen_rows.eq(i).height(unfrozen_rows.eq(i).height());
                }
              }
            });
          }
        });
      }

}

 


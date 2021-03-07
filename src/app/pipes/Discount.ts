import { Pipe, PipeTransform } from '@angular/core';
@Pipe({name: 'discount'})

export class Discount implements PipeTransform {
  transform(price:number,firstClient:boolean, defaultClient: boolean): any {
    if (firstClient === true){
        price = price - (price / 100) * 10;
    }
    if (defaultClient === true){
        price = price - (price / 100) * 5;
    }
    return price;
  }

}
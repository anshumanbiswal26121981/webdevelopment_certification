import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
 name:'custompipe',
 pure:false
})
export class CustompipeComponent implements PipeTransform { //implement sys def interface
    transform(value: any, filterString: string): any{ //ovveride sys defined function in the interface
        if(value.length===0 || filterString===''){ //if no data or search value, ignore
                return value;
        }
        const resultArray: any[]=[];              //declare temp array
        for(const item of value){                 //iterate over dervers data array
            if(item.status===filterString){       //search for "stable" or"offline" servers
                resultArray.push(item);           //insert into temp array
            }
        }
        return resultArray;                      //return temp array
    }
}


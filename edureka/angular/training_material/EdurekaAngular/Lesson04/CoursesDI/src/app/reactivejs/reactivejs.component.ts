import { Component, OnInit } from '@angular/core';
import {of,from,throwError,interval, Observable } from  'rxjs';
import {map,find,take,filter,catchError} from  'rxjs/operators';
import { NgForOfContext } from '@angular/common';

@Component({
  selector: 'app-reactivejs',
  templateUrl: './reactivejs.component.html',
  styleUrls: ['./reactivejs.component.css']
})
export class ReactivejsComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    //of - converts the values into an observable sequence
    console.log(".....................of")
    of([10,20,30]).subscribe(
         next => console.log('of--next:',next),
         err => console.log('error:',err),
         () => console.log('the end'),
    );



    //from -- converts various objects and data types into observables.
    console.log(".....................from")
    const array=[10,20,30];
    const result=from(array);
    result.subscribe(x => console.log("from:--"+ x));




     //throwError - creates an Observervable that will not emit any value to the Observer 
     //and will issue an error message in case of any error
     console.log(".....................throwError")
     const result2=throwError('this is an error!');
     result2.subscribe({
       next: val => console.log(val),
       complete: () => console.log('Throw Error Complete!'),
       error: val => console.log(`Error: ${val}`)
     });

      
    //interval -- runs continuously every 1 second
    const timer=interval(1000); //create an observable
    /*timer.subscribe(n =>        //subscribe to begin publishing values 
         console.log(`its been ${n} seconds since subscribing`)
      );*/


      //map -- applies transformation function to each value
    console.log(".....................map")
    const source=from([1,2,3,4,5]); //emit (1,2,3,4,5)
    const example = (source.pipe  (map(val => val * 10))).subscribe(
                                      val=> console.log(val)
                                   );


    //find -- it searches the value in the observable that matches the specified condition
    //and retuns the first value that meets the condition
    console.log(".....................find")
    const source2=from([10,9,15]);
    const example2=(source2.pipe(find(num => num % 3 ===0))).subscribe(
                             val => console.log(`first to pass the test: ${val}`)
                         );//emit first item to pass the test
    //output-9




    //take -- takes the value from the source Observable and emits the number of values 
    //specified in the operator. If the source emits fewer than count values, 
    //then all of its values are emitted
    const output2= (interval(1000)).pipe((take(5))).subscribe(
                             x =>  console.log('take..' + x)
                          );










    //filter -- takes the values from the source Observable , passes them through
    //a function and only emits those values that satisfy the criteria
    //specified in the fucntion
    console.log(".....................filter")
    const source3 = from ([{name: "Joey",    age: 31 },
                           {name: "Chandler",age: 25 }]);
    //filterout people with age < 30
    const output3= source3.pipe((filter(person => person.age <=30))).subscribe(
                        val => console.log(`Under 30: ${val.name} `)
                              );
    






    //catchError -- it cathes error on the source observable and 
    // returns a new observable when there is an error
    //or raises an error from the source observable
    console.log(".....................catchError")
    of(1,2,3,4,5).pipe(
       map(x => {
            if( x===4 ){ throw 'Some custom error occured!';}
            return x;
       }),
       catchError(err => of("Custom Error Occured!!")),
    ).subscribe(n => console.log(n));

  }

}

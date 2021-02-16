import { from, Observable, of } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { map, switchMap, tap } from 'rxjs/operators';
import { BlogService } from 'app/shared/services/blog.service';

interface Person {
    name?: string;
}

@Component({
    selector: 'app-ngrx-operator',
    templateUrl: './ngrx-operator.component.html',
    styleUrls: ['./ngrx-operator.component.scss']
})
export class NgrxOperatorComponent implements OnInit {
    public person: Person = {
        name: 'King George'
    };

    public persons: Person[] = [
        {
            name: 'King George'
        },
        {
            name: 'Ashly Morgan'
        }
    ];

    constructor(private blogApiService: BlogService) {}

    ngOnInit(): void {
        this.performTask();
    }

    // tslint:disable-next-line: typedef
    performTask() {
        // switchmap

        const combined = this.blogApiService.getBlogList().pipe(
            switchMap(posts => {
                return this.blogApiService.getBlogComment().pipe(
                    tap(comments => {
                        console.log(posts);
                        console.log(comments);
                    })
                );
            })
        );
        combined.subscribe();

        // ============ Operator: [map, tap]
        const personsObservable: Observable<any> = of('George');
        personsObservable
            .pipe(map(data => data.toUpperCase())) // map Effect data
            .subscribe(data => console.log(data));
        personsObservable
            .pipe(tap(data => data.toUpperCase())) // tap don't effect data
            .subscribe(data => console.log(data));

        /*
    // ============= Operator: [of, from]
      //// Conver Object to Obserbable with of
      // const personObs: Observable<Person> = of(this.person); 
      //// Conver Object to Obserbable with from
      const personPromise: Promise<Person> = Promise.resolve(this.person)
      const personObs: Observable<Person> = from(personPromise)

      personObs.subscribe(data => console.log(data))
    */
    }
}

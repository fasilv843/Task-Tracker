import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showeAddTask: boolean = false
  private subject = new Subject<any>

  constructor() { }

  toggleAddTask(): void {
    this.showeAddTask = !this.showeAddTask;
    this.subject.next(this.showeAddTask)
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
  
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, filter, map, of, retry} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService{

  public formData: any = {};

  constructor(private http: HttpClient) {}


  getUsersData(): Observable<any>{
    return this.http.get('/assets/mock-dates/users-dates.json').pipe(
      map( user => {
        const string: string = JSON.stringify(user);
        const arr : Array<any> = JSON.parse(string).users;
        return arr;
      })
    );
  }


  
  checkUsersData(arrOfDates:Array<any>, login: string, password: string): Observable<boolean>  {
      const user = arrOfDates.find( f => {
        if (f.login === login && f.password === password) {
          return f;
        }
        else return undefined;
      });
      if (user){
        return  of(true);
      } 
      else{
        return of(false);
      }
  }

  saveInputUsersDates(data:any){
    this.formData = data;
    console.log(this.formData)
  }

  getInputUsersDates(){
    console.log(this.formData)
    return this.formData
  }

}

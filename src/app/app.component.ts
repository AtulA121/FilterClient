import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  students : any;
  filterStudent : any;
  private _searchTerm : string;

  title = 'filterClient';

  constructor(private _http : HttpClient){
    this._http.get("http://localhost:3000/getData").subscribe((res : any)=>{
      this.students=res.result;
      this.filterStudent=this.students;
    });
  }

  get searchTerm(){
    return this._searchTerm;
  }

  set searchTerm(value){
    this._searchTerm=value;
    this.filterStudent=this.getFilterData(value);
  }

  getFilterData(value){
    return this.students.filter((stu : any)=>{
      return stu.name.toLowerCase().indexOf(value.toLowerCase())!==-1 ? true : stu.email.toLowerCase().indexOf(value.toLowerCase())!==-1 ? true : false;
    });
  }
}

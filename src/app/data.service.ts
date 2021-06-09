import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from './student.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiUrl = "http://localhost:8080/students";

  constructor(private _http:HttpClient) { 

  }

  getStudents() {
    return this._http.get<Student[]>(this.apiUrl);
  }


  deleteStudent(){

  }

}

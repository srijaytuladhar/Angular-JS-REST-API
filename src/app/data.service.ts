import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from './student.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiUrl = "http://localhost:8080/students/";

  

  constructor(private http:HttpClient) { 

  }

  getStudents() {
    return this.http.get<Student[]>(this.apiUrl);
    
  }


  deleteStudent(student: Student): Observable<Student> {
    const url = `${this.apiUrl}${student.id}`;
    return this.http.delete<Student>(url);
    
  }

  addStudent(student: Student): Observable<Student> {
    // console.log(student);
    return this.http.post<Student>(this.apiUrl, student, httpOptions);
  }

  updateStudent(id: string, student: Student): Observable<Student> {
    //const url = `${this.apiUrl}${student.id}`;
    return this.http.put<Student>(this.apiUrl + id, student, httpOptions);

  }

}

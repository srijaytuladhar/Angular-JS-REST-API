import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Topic, Topics } from './topic.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiUrl = "http://localhost:8080/topics/";

  

  constructor(private http:HttpClient) { 

  }

  getTopics() {
    return this.http.get<Topic[]>(this.apiUrl);
    
  }


  deleteTopic(topic: Topic): Observable<Topic> {
    const url = `${this.apiUrl}${topic.id}`;
    return this.http.delete<Topic>(url);
    
  }

  addTopic(topic: Topic): Observable<Topic> {
    // console.log(student);
    return this.http.post<Topic>(this.apiUrl, topic, httpOptions);
  }

  updateTopic(topic: Topic): Observable<Topic> {
    //const url = `${this.apiUrl}${student.id}`;
    return this.http.put<Topic>(this.apiUrl, topic, httpOptions);

  }

}

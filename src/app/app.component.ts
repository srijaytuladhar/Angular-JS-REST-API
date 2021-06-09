import { Component, Input, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Student } from './student.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  students$: Student[] = [];

  constructor(private dataService: DataService) {

  }
  title: string = "REST API";

  ngOnInit() {
    return this.dataService.getStudents().subscribe(data => this.students$ = data);
  }


  save() : void {
    console.log("button will work soon....")
  }
  

  
}

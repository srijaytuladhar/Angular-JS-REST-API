import { Component, Input, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Student } from './student.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  student: Student = new Student;

 

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
  
  onDelete(student: Student) {
    // console.log(student)
    this.dataService.deleteStudent(student)
      .subscribe(
        () => (this.students$ = this.students$.filter(s => s.id!= student.id))
      );

    console.log("student with id: " + student.id + " deleted!!");
  }



  addStudent() {


    let newStudent: Student = new Student();

    if(!this.student.id) {
      alert('ID Cannot be empty!!');
      return;
    }

    
    newStudent = this.student;

    this.dataService.addStudent(newStudent)
    .subscribe(data => (this.students$.push(newStudent)));

    console.log(this.student);

    this.student = new Student();
    
    
  }

   
}

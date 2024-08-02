import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-page-test',
  templateUrl: './error-page-test.component.html',
  styleUrls: ['./error-page-test.component.css']
})
export class ErrorPageTestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  triggerError() {
    console.log("This is a book");
    throw new Error("Some Error Eieiz");
  }
}

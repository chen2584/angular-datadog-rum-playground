import { Component, OnInit } from '@angular/core';
import DataDogRUMHelper from 'src/app/shared/data-log-rum';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  async testDelayFunction(): Promise<void> {
    await new Promise( resolve => setTimeout(resolve, 5000) );
    DataDogRUMHelper.setUser();
    alert("Done");
  }
}

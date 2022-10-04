import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fullstackdevlogs',
  templateUrl: './fullstackdevlogs.component.html',
  styleUrls: ['./fullstackdevlogs.component.css']
})
export class FullstackdevlogsComponent implements OnInit {
today = new Date();
  constructor() { }

  ngOnInit() {
  }

}
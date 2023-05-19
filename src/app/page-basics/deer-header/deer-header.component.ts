import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deer-header',
  templateUrl: './deer-header.component.html',
  styleUrls: ['./deer-header.component.css']
})
export class DeerHeaderComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  showLinks() {
    var x = document.getElementById("links");
    if (!!x)
      if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
      }

  }

}

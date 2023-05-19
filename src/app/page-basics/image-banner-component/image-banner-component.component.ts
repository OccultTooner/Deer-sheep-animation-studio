import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-image-banner-component',
  templateUrl: './image-banner-component.component.html',
  styleUrls: ['./image-banner-component.component.css']
})
export class ImageBannerComponentComponent implements OnInit {

  @Input() imageToUse: any='';
  constructor() { }

  ngOnInit(): void {
  }

}

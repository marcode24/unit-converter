import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {
  changeColor: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  changeColorScroll($event: any): void {
    this.changeColor = $event.srcElement.scrollTop > 15;
  }

}

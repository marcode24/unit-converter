import { Component } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent {
  changeColor = false;

  changeColorScroll($event: any): void {
    this.changeColor = $event.srcElement.scrollTop > 15;
  }

}

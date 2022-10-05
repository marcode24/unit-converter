import { Component, OnInit } from '@angular/core';
import { properties } from '@constants/unit.constant';
import { IProperty } from '@interfaces/unit.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  props: IProperty[] = properties;
  private pathRelative: string = '/assets/images';
  constructor() { }

  ngOnInit(): void {
  }

  buildPathImage(image: string): string {
    return `${this.pathRelative}/${image}`;
  }


}

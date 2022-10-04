import { Component, OnInit } from '@angular/core';
import { properties } from '@constants/unit.constant';
import { IProperty } from '@interfaces/unit.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  props: IProperty[] = properties;
  constructor() { }

  ngOnInit(): void {
  }

}

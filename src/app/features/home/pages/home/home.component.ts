import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { IProperty } from '@interfaces/unit.interface';

import { properties } from '@constants/unit.constant';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {

  props: IProperty[] = properties;
  private pathRelative = '/assets/images';
  constructor(
    private router: Router,
  ) { }

  buildPathImage(image: string): string {
    return `${this.pathRelative}/${image}`;
  }

  goToConverter(index: number): void {
    this.router.navigate(['converter', index]);
  }
}

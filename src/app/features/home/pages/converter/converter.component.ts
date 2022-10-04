import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Event } from '@angular/router';
import { properties } from '@constants/unit.constant';
import { IConvert, IProperty } from '@interfaces/unit.interface';

import { ConverterService } from '@services/converter.service';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {

  @ViewChild('options') options!: ElementRef;
  prop!: IProperty;

  convert!: IConvert;
  nameFrom!: string;
  nameTo!: string;

  firstInputValue: number = 1;
  secondInputValue: number = 1;

  private firstInput: boolean = true;
  constructor(
    private readonly converterService: ConverterService,
    private readonly activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({ propertyIndex }) => this.loadData(propertyIndex));
  }

  loadData(propIndex: string) {
    this.prop = properties[Number(propIndex)];
    this.convert = {
      propName: this.prop.name,
      indexFrom: 0,
      indexTo:0,
      quantity: 0
    }
    this.nameFrom = this.prop.units[0].name;
    this.nameTo = this.prop.units[0].name;
  }


  showOptions(firstInput: boolean) {
    this.firstInput = firstInput;
    this.options.nativeElement.classList.add('open');
  }

  hideOptions() {
    this.options.nativeElement.classList.remove('open');
  }

  changeValues(event: any) {
    this.convert.quantity = Number(event.value);
    if(this.convert.quantity.toString().length > 20) {
      return;
    }
    this.secondInputValue = this.getResult;
  }

  private get getResult(): number {
    return this.converterService.convert(this.convert);
  }

  changeOption(index: number) {
    if(!this.firstInput) {
      this.convert.indexTo = index;
      this.convert.quantity = this.firstInputValue;
      this.nameTo = this.prop.units[index].name;
      this.secondInputValue = this.getResult;
    } else {
      this.convert.indexFrom = index;
      this.convert.quantity = this.secondInputValue;
      this.nameFrom = this.prop.units[index].name;
      this.firstInputValue = this.getResult;

    }
    this.hideOptions();
  }

}

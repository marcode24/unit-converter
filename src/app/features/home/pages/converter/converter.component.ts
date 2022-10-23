import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { ConverterService } from '@services/converter.service';

import { properties } from '@constants/unit.constant';

import { IConvert, IProperty } from '@interfaces/unit.interface';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {
  @ViewChild('options') options!: ElementRef;
  prop!: IProperty;
  unitForm!: FormGroup
  convertOptions!: IConvert;

  nameFrom!: string;
  nameTo!: string;

  firstInputValue: number = 1;
  secondInputValue: number = 1;

  private optionsFirstInput: boolean = true;

  constructor(
    private readonly converterService: ConverterService,
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router,
    private readonly fb: FormBuilder,
  ) {
    this.unitForm = this.fb.group({
      firstValue: [1, [Validators.required]],
      secondValue: [{ value: 1, disabled: true }, [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({ propertyIndex }) => this.loadData(propertyIndex));
    this.unitForm.get('firstValue')?.valueChanges.subscribe(firstValue => {
      if(firstValue) {
        this.convertOptions.quantity = firstValue;
        this.setSecondValue(this.getResult);
      }
    });
  }

  loadData(propIndex: string): void | Promise<boolean> {
    this.prop = properties[Number(propIndex)];
    if(!this.prop) return this.router.navigate(['/']);
    this.convertOptions = {
      propName: this.prop.name,
      indexFrom: 0,
      indexTo:0,
      quantity: 1
    };
    this.nameFrom = this.prop.units[0].name;
    this.nameTo = this.prop.units[0].name;
  }

  private get getResult(): number {
    return this.converterService.convert(this.convertOptions);
  }

  private setSecondValue(value: number) {
    this.unitForm.get('secondValue')?.setValue(value, { emitEvent: false });
  }

  changeIndexOption(index: number): void {
    const option = this.optionsFirstInput ? 'indexFrom' : 'indexTo';
    this.convertOptions[option] = index;
    this.convertOptions.quantity = this.unitForm.get('firstValue')?.value;
    if(this.optionsFirstInput) {
      this.nameFrom = this.prop.units[index].name;
    } else {
      this.nameTo = this.prop.units[index].name;
    }
    this.setSecondValue(this.getResult);
    this.hideOptions();
  }

  showOptions(firstInput: boolean): void {
    this.optionsFirstInput = firstInput;
    this.options.nativeElement.classList.add('open');
  }

  hideOptions(): void {
    this.options.nativeElement.classList.remove('open');
  }

}

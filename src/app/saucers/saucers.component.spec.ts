/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SaucersComponent } from './saucers.component';

describe('SaucersComponent', () => {
  let component: SaucersComponent;
  let fixture: ComponentFixture<SaucersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaucersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaucersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

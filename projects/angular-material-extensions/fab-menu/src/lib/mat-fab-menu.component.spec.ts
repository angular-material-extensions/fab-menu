import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import {MatFabMenuComponent} from './mat-fab-menu.component';

describe('FabMenuComponent', () => {
  let component: MatFabMenuComponent;
  let fixture: ComponentFixture<MatFabMenuComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [MatFabMenuComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatFabMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

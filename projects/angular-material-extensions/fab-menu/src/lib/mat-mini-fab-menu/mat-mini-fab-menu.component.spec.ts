import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatMiniFabMenuComponent } from './mat-mini-fab-menu.component';

describe('MatMiniFabMenuComponent', () => {
  let component: MatMiniFabMenuComponent;
  let fixture: ComponentFixture<MatMiniFabMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatMiniFabMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatMiniFabMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

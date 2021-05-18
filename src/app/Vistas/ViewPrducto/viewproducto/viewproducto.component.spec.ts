import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewproductoComponent } from './viewproducto.component';

describe('ViewproductoComponent', () => {
  let component: ViewproductoComponent;
  let fixture: ComponentFixture<ViewproductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewproductoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewproductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

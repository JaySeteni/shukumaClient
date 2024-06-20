import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CusOrdersComponent } from './cus-orders.component';

describe('CusOrdersComponent', () => {
  let component: CusOrdersComponent;
  let fixture: ComponentFixture<CusOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CusOrdersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CusOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

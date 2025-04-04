import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeigeComponent } from './beige.component';

describe('BeigeComponent', () => {
  let component: BeigeComponent;
  let fixture: ComponentFixture<BeigeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeigeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeigeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

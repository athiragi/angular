import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PfsItemComponent } from './pfs-item.component';

describe('PfsItemComponent', () => {
  let component: PfsItemComponent;
  let fixture: ComponentFixture<PfsItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PfsItemComponent]
    });
    fixture = TestBed.createComponent(PfsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

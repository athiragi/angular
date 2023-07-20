import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PfsAddComponent } from './pfs-add.component';

describe('PfsAddComponent', () => {
  let component: PfsAddComponent;
  let fixture: ComponentFixture<PfsAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PfsAddComponent]
    });
    fixture = TestBed.createComponent(PfsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

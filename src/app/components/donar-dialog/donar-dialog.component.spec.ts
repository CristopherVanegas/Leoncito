import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonarDialogComponent } from './donar-dialog.component';

describe('DonarDialogComponent', () => {
  let component: DonarDialogComponent;
  let fixture: ComponentFixture<DonarDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DonarDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonarDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterinstructorComponent } from './registerinstructor.component';

describe('RegisterinstructorComponent', () => {
  let component: RegisterinstructorComponent;
  let fixture: ComponentFixture<RegisterinstructorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterinstructorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterinstructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PocCameraComponent } from './poc-camera.component';

describe('PocCameraComponent', () => {
  let component: PocCameraComponent;
  let fixture: ComponentFixture<PocCameraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PocCameraComponent]
    });
    fixture = TestBed.createComponent(PocCameraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

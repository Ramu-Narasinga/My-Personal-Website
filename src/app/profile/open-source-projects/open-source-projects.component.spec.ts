import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenSourceProjectsComponent } from './open-source-projects.component';

describe('OpenSourceProjectsComponent', () => {
  let component: OpenSourceProjectsComponent;
  let fixture: ComponentFixture<OpenSourceProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenSourceProjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenSourceProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibDialogComponent } from './lib-dialog.component';

describe('LibDialogComponent', () => {
  let component: LibDialogComponent;
  let fixture: ComponentFixture<LibDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

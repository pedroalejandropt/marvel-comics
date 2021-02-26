import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridRecordsComponent } from './grid-records.component';

describe('GridRecordsComponent', () => {
  let component: GridRecordsComponent;
  let fixture: ComponentFixture<GridRecordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridRecordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

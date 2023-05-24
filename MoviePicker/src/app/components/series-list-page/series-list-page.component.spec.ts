import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SeriesListPageComponent} from './series-list-page.component';

describe('SeriesPageComponent', () => {
  let component: SeriesListPageComponent;
  let fixture: ComponentFixture<SeriesListPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeriesListPageComponent]
    });
    fixture = TestBed.createComponent(SeriesListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

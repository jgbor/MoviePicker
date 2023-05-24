import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PersonListPageComponent} from './person-list-page.component';

describe('PersonPageComponent', () => {
  let component: PersonListPageComponent;
  let fixture: ComponentFixture<PersonListPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonListPageComponent]
    });
    fixture = TestBed.createComponent(PersonListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

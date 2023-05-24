import {TestBed} from '@angular/core/testing';
import {MoviePickerAppComponent} from './movie-picker-app.component';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [MoviePickerAppComponent]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(MoviePickerAppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'MoviePicker'`, () => {
    const fixture = TestBed.createComponent(MoviePickerAppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('MoviePicker');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(MoviePickerAppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('MoviePicker app is running!');
  });
});

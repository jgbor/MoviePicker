import { TestBed } from '@angular/core/testing';
import { MoviePickerAppMo } from './movie-picker-app.component';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [MoviePickerAppMo]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(MoviePickerAppMo);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'MoviePicker'`, () => {
    const fixture = TestBed.createComponent(MoviePickerAppMo);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('MoviePicker');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(MoviePickerAppMo);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('MoviePicker app is running!');
  });
});

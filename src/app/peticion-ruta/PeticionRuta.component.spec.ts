import { TestBed } from '@angular/core/testing';
import { PeticionRutaComponent } from './PeticionRuta.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PeticionRutaComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(PeticionRutaComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
  it(`should have as title 'FrontPOO'`, () => {
    const fixture = TestBed.createComponent(PeticionRutaComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('FrontPOO');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(PeticionRutaComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain(
      'FrontPOO app is running!'
    );
  });
});

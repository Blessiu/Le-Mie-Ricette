import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CalcolatricePage } from './calcolatrice.page';

describe('CalcolatricePage', () => {
  let component: CalcolatricePage;
  let fixture: ComponentFixture<CalcolatricePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalcolatricePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CalcolatricePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

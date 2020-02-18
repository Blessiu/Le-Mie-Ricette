import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConvertitorePage } from './convertitore.page';

describe('ConvertitorePage', () => {
  let component: ConvertitorePage;
  let fixture: ComponentFixture<ConvertitorePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConvertitorePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConvertitorePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

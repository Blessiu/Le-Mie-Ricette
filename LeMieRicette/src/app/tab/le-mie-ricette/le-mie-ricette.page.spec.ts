import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LeMieRicettePage } from './le-mie-ricette.page';

describe('LeMieRicettePage', () => {
  let component: LeMieRicettePage;
  let fixture: ComponentFixture<LeMieRicettePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeMieRicettePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LeMieRicettePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

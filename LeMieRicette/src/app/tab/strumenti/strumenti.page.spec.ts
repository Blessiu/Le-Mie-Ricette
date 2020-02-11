import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StrumentiPage } from './strumenti.page';

describe('StrumentiPage', () => {
  let component: StrumentiPage;
  let fixture: ComponentFixture<StrumentiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrumentiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StrumentiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

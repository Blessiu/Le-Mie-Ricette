import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FrigoriferoPage } from './frigorifero.page';

describe('FrigoriferoPage', () => {
  let component: FrigoriferoPage;
  let fixture: ComponentFixture<FrigoriferoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrigoriferoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FrigoriferoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

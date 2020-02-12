import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddFrigoItemPage } from './add-frigo-item.page';

describe('AddFrigoItemPage', () => {
  let component: AddFrigoItemPage;
  let fixture: ComponentFixture<AddFrigoItemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFrigoItemPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddFrigoItemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

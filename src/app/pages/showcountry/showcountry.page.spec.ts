import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShowcountryPage } from './showcountry.page';

describe('ShowcountryPage', () => {
  let component: ShowcountryPage;
  let fixture: ComponentFixture<ShowcountryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowcountryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShowcountryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

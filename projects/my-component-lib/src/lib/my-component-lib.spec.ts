import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComponentLib } from './my-component-lib';

describe('MyComponentLib', () => {
  let component: MyComponentLib;
  let fixture: ComponentFixture<MyComponentLib>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyComponentLib]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyComponentLib);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

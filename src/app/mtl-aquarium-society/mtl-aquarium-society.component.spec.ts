import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MtlAquariumSocietyComponent } from './mtl-aquarium-society.component';

describe('MtlAquariumSocietyComponent', () => {
  let component: MtlAquariumSocietyComponent;
  let fixture: ComponentFixture<MtlAquariumSocietyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MtlAquariumSocietyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MtlAquariumSocietyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

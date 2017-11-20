import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoverNavComponent } from './discover-nav.component';

describe('DiscoverNavComponent', () => {
  let component: DiscoverNavComponent;
  let fixture: ComponentFixture<DiscoverNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscoverNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscoverNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchVComponent } from './search-v.component';

describe('SearchVComponent', () => {
  let component: SearchVComponent;
  let fixture: ComponentFixture<SearchVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchVComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let dom: any;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent]
    });
    fixture = TestBed.createComponent(AppComponent);
    dom = fixture.nativeElement;
    component = fixture.componentInstance;
  }));

  test('should exist', () => {
    expect(component).toBeDefined();
  });

  test('should have a default title', () => {
    expect(component.title).toBe('app');
  });

  test('should output Welcome to {{ title }}!', () => {
    fixture.detectChanges();
    expect(dom.innerHTML).toContain('Welcome to app!');
  });
});

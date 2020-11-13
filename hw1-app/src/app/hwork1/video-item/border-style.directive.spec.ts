import {BorderStyleDirective} from './border-style.directive';
import {Component, ElementRef} from '@angular/core';
import {TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';

describe('BorderStyleDirective', () => {
  let fixture;
  let mockDiv: ElementRef[];


  beforeEach(() => {
    jasmine.clock().install();
    jasmine.clock().mockDate(new Date('2020-10-01'));
    fixture = TestBed.configureTestingModule({
      declarations: [TestComponent, BorderStyleDirective]
    }).createComponent(TestComponent);
    fixture.detectChanges();
    mockDiv = fixture.debugElement.queryAll(By.css('div'));
  });

  afterEach(() => {
    jasmine.clock().uninstall();
  });

  it('should create an instance', () => {
    const directive = new BorderStyleDirective(new MockElementRef());
    expect(directive).toBeTruthy();
  });

  it('should apply blue border style for future element', () => {
    expect(mockDiv[0].nativeElement.style.borderColor).toEqual('blue');
  });

  it('should apply green border style for the last 2 weeks element', () => {
    expect(mockDiv[1].nativeElement.style.borderColor).toEqual('green');
  });

  it('should not apply any border style for old element', () => {
    expect(mockDiv[2].nativeElement.style.borderColor).toEqual('');
  });

});

@Component({
  template: `
    <div appBorderStyle creationDate="2020-10-10"></div>
    <div appBorderStyle creationDate="2020-09-25"></div>
    <div appBorderStyle creationDate="2020-08-25"></div>`,
})
class TestComponent {
}

class MockElementRef implements ElementRef {
  nativeElement = {};
}

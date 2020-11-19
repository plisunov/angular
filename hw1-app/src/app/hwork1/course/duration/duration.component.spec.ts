import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DurationComponent} from './duration.component';
import {TimeformatPipe} from '../../pipes/timeformat.pipe';

describe('DurationComponent', () => {
  let component: DurationComponent;
  let fixture: ComponentFixture<DurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DurationComponent, TimeformatPipe]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit event when duration changed', () => {
    spyOn(component.changeEvent, 'emit');
    component.onChangeDuration();
    expect(component.changeEvent.emit).toHaveBeenCalled();
  });
});


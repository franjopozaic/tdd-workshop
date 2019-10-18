import { ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

export class TestHelper<T> {
  constructor(protected fixture: ComponentFixture<T>) {}

  get innerHTML() {
    return this.fixture.debugElement.nativeElement.innerHTML;
  }

  onInit() {
    this.fixture.detectChanges();
  }

  detectChanges() {
    this.fixture.detectChanges();
  }

  getDebugElement(query: string) {
    return this.fixture.debugElement.query(By.css(query));
  }

  getNativeElement(query: string) {
    const el = this.fixture.debugElement.query(By.css(query));
    return el && el.nativeElement;
  }
}

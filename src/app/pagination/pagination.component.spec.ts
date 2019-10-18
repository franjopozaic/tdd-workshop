import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TestHelper } from '../helpers';
import { PaginationComponent } from './pagination.component';

class Page extends TestHelper<PaginationComponent> {
  constructor(fixture: ComponentFixture<PaginationComponent>) {
    super(fixture);
  }

  getPage() {
    const pageEl = this.getNativeElement('#page');
    return pageEl.innerText;
  }

  nextPage() {
    const nextBtn = this.getNativeElement('#next-btn');
    nextBtn.click();
  }

  previousPage() {
    const previousBtn = this.getNativeElement('#previous-btn');
    previousBtn.click();
  }
}

fdescribe('PaginationComponent', () => {
  let component: PaginationComponent;
  let fixture: ComponentFixture<PaginationComponent>;
  let page: Page;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PaginationComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    page = new Page(fixture);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the first page initially', () => {
    expect(page.getPage()).toContain('1');
  });

  it('should display a next button', () => {
    const nextBtn = page.getNativeElement('#next-btn');
    expect(nextBtn).toBeTruthy();
  });

  it('should display a next button', () => {
    const nextBtn = page.getNativeElement('#previous-btn');
    expect(nextBtn).toBeTruthy();
  });

  it('should display a next button with the correct label', () => {
    const nextBtn = page.getNativeElement('#next-btn');
    expect(nextBtn.innerText).toBe('NEXT');
  });

  it('should display a next button with the correct label', () => {
    const nextBtn = page.getNativeElement('#previous-btn');
    expect(nextBtn.innerText).toBe('PREVIOUS');
  });

  it('should call the nextPage method on next button click', () => {
    spyOn(component, 'nextPage').and.callThrough();
    page.nextPage();
    expect(component.nextPage).toHaveBeenCalled();
  });

  it('should call the previousPage method on previous button click', () => {
    component.page = 2;
    fixture.detectChanges();
    spyOn(component, 'previousPage').and.callThrough();
    page.previousPage();
    expect(component.previousPage).toHaveBeenCalled();
  });

  it('should show page 2 when next page is clicked', () => {
    page.nextPage();
    fixture.detectChanges();
    expect(page.getPage()).toContain('2');
  });

  it('should show page 3 when next page is clicked twice', () => {
    page.nextPage();
    page.nextPage();
    fixture.detectChanges();
    expect(page.getPage()).toContain('3');
  });

  it('should show page 1 when previous page is clicked', () => {
    component.page = 2;
    fixture.detectChanges();
    page.previousPage();
    fixture.detectChanges();
    expect(page.getPage()).toContain('1');
  });

  it('should disable the previous button on the first page', () => {
    const previousBtn = page.getNativeElement('#previous-btn');
    expect(previousBtn.attributes.disabled).toBeTruthy();
  });

  it('should enable the previous button on the second page', () => {
    page.nextPage();
    fixture.detectChanges();
    const previousBtn = page.getNativeElement('#previous-btn');
    expect(previousBtn.attributes.disabled).toBeFalsy();
  });
});

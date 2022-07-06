import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: "[appOutsideClick]"
})

export class OutsideClickDirective {

  constructor(private elem: ElementRef) { }

  @Output() public outsideClick = new EventEmitter<void>();

  @HostListener("document:click", ["$event.target"])

  public onClick(target: any) {
    const insideClick = this.elem.nativeElement.contains(target);
    if (!insideClick) {
      this.outsideClick.emit();
    }
  }

}

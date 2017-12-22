import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

export class DelayContext {
  constructor(private loadTime: number) { }
}

@Directive({
  selector: '[appDelay]'
})
export class DelayDirective {

  constructor(
    private templateRef: TemplateRef<DelayContext>,
    private viewContainerRef: ViewContainerRef
  ) { }

  @Input()
  set appDelay(time: number) {
    setTimeout(
      () => {
        this.viewContainerRef.createEmbeddedView(
          this.templateRef,
          new DelayContext(performance.now())
        );
      },
      time
    );
  }

}

import {Directive, Input, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appBlink]'
})
export class BlinkDirective implements OnInit {

  @Input() appBlinkTime = '1000';
  @Input() appBlinkColor = 'pink';
  @Input() appBlinkMessage = '';

  private baseColor = null;

  constructor(private viewContainerRef: ViewContainerRef,
              private templateRef: TemplateRef<any>) {
  }

  ngOnInit(): void {

    let state = false;

    // Use embedded view as templateRef
    const embeddedView = this.viewContainerRef.createEmbeddedView(this.templateRef);
    this.baseColor = embeddedView.rootNodes[0].style.color;

    // Add new node to dom
    const div = document.createElement('div');
    div.innerText = this.appBlinkMessage;
    embeddedView.rootNodes[0].appendChild(div);

    // blink implement
    setInterval(() => {
      if (state === false) {
        embeddedView.rootNodes[0].style.color = this.appBlinkColor;
        state = true;
      } else {
        embeddedView.rootNodes[0].style.color = this.baseColor;
        state = false;
      }
    }, parseInt(this.appBlinkTime));
  }

}



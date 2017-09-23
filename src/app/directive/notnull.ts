import { Directive, ElementRef, Renderer } from "@angular/core";
@Directive({
    selector: '[my-dir]'
})
export class MyDir {
    constructor(ele: ElementRef, render: Renderer) {
        console.log('dir')
        console.log(ele.nativeElement);
    }
}
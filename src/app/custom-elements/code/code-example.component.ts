/* eslint-disable  @angular-eslint/component-selector */
import { Component, HostBinding, ElementRef, ViewChild, Input, AfterViewInit } from '@angular/core';
import { CodeComponent } from './code.component';

/**
 * An embeddable code block that displays nicely formatted code.
 * Example usage:
 *
 * ```
 * <code-example language="ts" linenums="2" class="special" header="Do Stuff">
 * // a code block
 * console.log('do stuff');
 * </code-example>
 * ```
 */
@Component({
  selector: 'code-example',
  template: `
    <!-- Content projection is used to get the content HTML provided to this component -->
    <div #content style="display: none"><ng-content></ng-content></div>

    <header *ngIf="header">{{header}}</header>

    <aio-code [ngClass]="classes"
              [language]="language"
              [linenums]="linenums"
              [path]="path"
              [region]="region"
              [hideCopy]="hidecopy"
              [header]="header">
    </aio-code>
  `,
})
export class CodeExampleComponent implements AfterViewInit {
  classes: { 'headed-code': boolean, 'simple-code': boolean };

  @Input() code: string; //mich

  @Input() language: string;

  @Input() linenums: string;

  @Input() region: string;

  @Input()
  set header(header: string) {
    this._header = header;
    this.classes = {
      'headed-code': !!this.header,
      'simple-code': !this.header,
    };
  }
  get header(): string { return this._header; }
  private _header: string;

  @Input()
  set path(path: string) {
    this._path = path;
    this.isAvoid = this.path.indexOf('.avoid.') !== -1;
  }
  get path(): string { return this._path; }
  private _path = '';

  @Input()
  set hidecopy(hidecopy: boolean) {
    // Coerce the boolean value.
    this._hidecopy = hidecopy != null && `${hidecopy}` !== 'false';
  }
  get hidecopy(): boolean { return this._hidecopy; }
  private _hidecopy: boolean;

  /* eslint-disable-next-line @angular-eslint/no-input-rename */
  @Input('hide-copy')
  set hyphenatedHideCopy(hidecopy: boolean) {
    this.hidecopy = hidecopy;
  }

  /* eslint-disable-next-line @angular-eslint/no-input-rename */
  @Input('hideCopy')
  set capitalizedHideCopy(hidecopy: boolean) {
    this.hidecopy = hidecopy;
  }

  @HostBinding('class.avoidFile') isAvoid = false;

  @ViewChild('content', { static: true }) content: ElementRef<HTMLDivElement>;

  @ViewChild(CodeComponent, { static: true }) aioCode: CodeComponent;

  ngAfterViewInit() {
    console.log("content:", this.content);
    console.log("this.content.nativeElement:", this.content.nativeElement);
    const contentElem = this.content.nativeElement;
    // this.aioCode.code = contentElem.innerHTML;
    this.aioCode.code = this.code;
    console.log("this.aioCode:", this.aioCode);
    contentElem.innerHTML = '';  // Remove DOM nodes that are no longer needed.
  }
}

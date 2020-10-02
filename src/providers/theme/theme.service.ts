import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  constructor(
    @Inject(DOCUMENT) private document: Document
    ) {
  }
  setVariable(name, value) {
    this.document.documentElement.style.setProperty(name, value);
  }
}

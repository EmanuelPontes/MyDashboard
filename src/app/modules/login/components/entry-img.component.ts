import { Component, OnDestroy, OnInit } from "@angular/core";

@Component({
    selector: 'entry-img',
    template: `<div></div> `,
    styles: ['div { background-image: url("/assets/img/dashboard_book.png"); height: 100vh; width: 100%; border-left: 3px groove gray; }', '']
})
export class EntryImgComponent implements OnInit, OnDestroy {
    ngOnDestroy(): void {
    }
    ngOnInit(): void {
    }

}
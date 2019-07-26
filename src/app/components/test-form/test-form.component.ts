import { OnInit, Component, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'app-test-form',
    templateUrl: './test-form.component.html',
    styleUrls: ['./test-form.component.scss'],
})
export class TestFormComponent implements OnInit {
    switchState = 'więcej';
    moreTerms = true;
    @Input() centerHeading = false;
    @Input() fullButton = false;
    @ViewChild('checkbox') checkbox: ElementRef;

    constructor() {}
    ngOnInit() {

    }

    onExpandTerms() {
        this.moreTerms = !this.moreTerms;
        this.switchState = (this.switchState === 'więcej') ? 'mniej' : 'więcej';
        this.checkbox.nativeElement.checked = !this.checkbox.nativeElement.checked;
    }
        
}

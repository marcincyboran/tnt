import { OnInit, Component, Input } from '@angular/core';

@Component({
    selector: 'app-section-form',
    templateUrl: './section-form.component.html',
    styleUrls: ['./section-form.component.scss'],
})
export class SectionFormComponent implements OnInit {
    @Input() centerHeading = false;

    constructor() {}
    ngOnInit() {

    }
}

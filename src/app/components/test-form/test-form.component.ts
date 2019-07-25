import { OnInit, Component, Input } from '@angular/core';

@Component({
    selector: 'app-test-form',
    templateUrl: './test-form.component.html',
    styleUrls: ['./test-form.component.scss'],
})
export class TestFormComponent implements OnInit {
    @Input() centerHeading = false;
    @Input() fullButton = false;

    constructor() {}
    ngOnInit() {

    }
}

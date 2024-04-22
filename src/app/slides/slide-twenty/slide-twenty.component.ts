import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'adc-slide-twenty',
    standalone: true,
    styleUrls: ['./slide-twenty.component.scss'],
    templateUrl: './slide-twenty.component.html'
})
export class SlideTwentyComponent {}

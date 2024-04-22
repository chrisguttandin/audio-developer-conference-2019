import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'adc-slide-twenty-three',
    standalone: true,
    templateUrl: './slide-twenty-three.component.html'
})
export class SlideTwentyThreeComponent {}

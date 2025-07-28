import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'adc-slide-ten',
    templateUrl: './slide-ten.component.html'
})
export class SlideTenComponent {}

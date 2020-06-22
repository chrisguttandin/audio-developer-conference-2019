import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable, animationFrameScheduler, interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['./slide-three.component.css'],
    templateUrl: './slide-three.component.html'
})
export class SlideThreeComponent implements OnInit {
    public stepClass$!: Observable<string>;

    public ngOnInit(): void {
        this.stepClass$ = interval(0, animationFrameScheduler).pipe(
            map(() => (Math.floor(performance.now() / 250) % 8) + 1),
            map((step) => `step-${step}`)
        );
    }
}

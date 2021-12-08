import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable, animationFrameScheduler, interval, map } from 'rxjs';

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

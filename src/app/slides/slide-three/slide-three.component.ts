import { AsyncPipe, NgClass, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable, animationFrameScheduler, interval, map, from, switchMap, iif, of } from 'rxjs';
import { mediaQueryMatch } from 'subscribable-things';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [AsyncPipe, NgClass, NgIf],
    selector: 'adc-slide-three',
    standalone: true,
    styleUrls: ['./slide-three.component.scss'],
    templateUrl: './slide-three.component.html'
})
export class SlideThreeComponent implements OnInit {
    public stepClass$!: Observable<string>;

    public ngOnInit(): void {
        this.stepClass$ = from(mediaQueryMatch('(prefers-reduced-motion: reduce)')).pipe(
            switchMap((matches) =>
                iif(
                    () => matches,
                    of('step-1'),
                    interval(0, animationFrameScheduler).pipe(
                        map(() => (Math.floor(performance.now() / 250) % 8) + 1),
                        map((step) => `step-${step}`)
                    )
                )
            )
        );
    }
}

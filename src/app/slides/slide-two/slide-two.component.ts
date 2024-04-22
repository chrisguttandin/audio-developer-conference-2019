import { AsyncPipe, NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable, animationFrameScheduler, distinctUntilChanged, interval, map, scan, from, switchMap, iif, of } from 'rxjs';
import { mediaQueryMatch } from 'subscribable-things';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [AsyncPipe, NgFor],
    selector: 'adc-slide-two',
    standalone: true,
    styleUrls: ['./slide-two.component.scss'],
    templateUrl: './slide-two.component.html'
})
export class SlideTwoComponent implements OnInit {
    public bars$!: Observable<number[]>;

    private static _appendNextBar(bars: number[], bar: null | number = null): number[] {
        if (bars.length > 19) {
            bars.shift();
        }

        return [...bars, bar === null ? Math.round((bars[bars.length - 1] + Math.random() * 94) / 3) * 2 : bar];
    }

    public ngOnInit(): void {
        this.bars$ = from(mediaQueryMatch('(prefers-reduced-motion: reduce)')).pipe(
            switchMap((matches) =>
                iif(
                    () => matches,
                    of(36),
                    interval(0, animationFrameScheduler).pipe(
                        map(() => Math.floor(performance.now() / 80)),
                        distinctUntilChanged(),
                        map(() => null)
                    )
                )
            ),
            scan(
                SlideTwoComponent._appendNextBar,
                Array.from({ length: 20 }, (_, index) => 36 * ((index % 4) + 1))
            )
        );
    }
}

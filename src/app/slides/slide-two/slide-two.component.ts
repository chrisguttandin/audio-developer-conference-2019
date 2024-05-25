import { AsyncPipe, NgFor, isPlatformServer } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, PLATFORM_ID, inject } from '@angular/core';
import { Observable, animationFrameScheduler, distinctUntilChanged, interval, map, scan, switchMap, iif, of } from 'rxjs';
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

    #platformId = inject(PLATFORM_ID);

    public ngOnInit(): void {
        this.bars$ = iif(() => isPlatformServer(this.#platformId), of(true), mediaQueryMatch('(prefers-reduced-motion: reduce)')).pipe(
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
                (bars, bar) => [...bars.slice(1), bar === null ? Math.round((bars[bars.length - 1] + Math.random() * 94) / 3) * 2 : bar],
                Array.from({ length: 20 }, (_, index) => 36 * ((index % 4) + 1))
            )
        );
    }
}

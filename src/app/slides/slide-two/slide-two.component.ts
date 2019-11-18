import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable, animationFrameScheduler, interval } from 'rxjs';
import { distinctUntilChanged, map, scan } from 'rxjs/operators';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: [ './slide-two.component.css' ],
    templateUrl: './slide-two.component.html'
})
export class SlideTwoComponent implements OnInit {

    public bars$!: Observable<number[]>;

    public ngOnInit (): void {
        let bars: number[] = [];

        for (let i = 0; i < 20; i += 1) {
            bars = SlideTwoComponent._appendNextBar(bars);
        }

        this.bars$ = interval(0, animationFrameScheduler)
            .pipe(
                map(() => Math.floor(performance.now() / 80)),
                distinctUntilChanged(),
                scan(SlideTwoComponent._appendNextBar, bars)
            );
    }

    private static _appendNextBar (bars: number[]): number[] {
        if (bars.length === 0) {
            return [ Math.round(Math.random() * 94) * 2 ];
        }

        if (bars.length > 19) {
            bars.shift();
        }

        return [ ...bars, Math.round((bars[ bars.length - 1 ] + Math.random() * 94) / 3) * 2 ];
    }

}

import { IStep, TourState } from './ngx-bootstrap-product-tour-mod.models';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/first';
import { Router } from '@angular/router';
import { NgxBootstrapProductTourDirective } from './ngx-bootstrap-product-tour-mod.directive';
export declare class NgxBootstrapProductTourService {
    private router;
    stepShow$: Subject<IStep>;
    stepHide$: Subject<IStep>;
    initialize$: Subject<IStep[]>;
    start$: Subject<IStep>;
    end$: Subject<any>;
    pause$: Subject<IStep>;
    resume$: Subject<IStep>;
    anchorRegister$: Subject<string>;
    anchorUnregister$: Subject<string>;
    events$: Observable<{
        name: string;
        value: any;
    }>;
    steps: IStep[];
    currentStep: IStep;
    anchors: {
        [anchorId: string]: NgxBootstrapProductTourDirective;
    };
    private status;
    constructor(router: Router);
    initialize(steps: IStep[], stepDefaults?: IStep): void;
    start(): void;
    startAt(stepId: number | string): void;
    end(): void;
    pause(): void;
    resume(): void;
    toggle(pause?: boolean): void;
    next(): void;
    hasNext(step: IStep): boolean;
    prev(): void;
    hasPrev(step: IStep): boolean;
    goto(stepId: number | string): void;
    register(anchorId: string, anchor: NgxBootstrapProductTourDirective): void;
    unregister(anchorId: string): void;
    getStatus(): TourState;
    private goToStep(step);
    private loadStep(stepId);
    private setCurrentStep(step);
    private showStep(step);
    private hideStep(step);
    isStepOpen(step: any): () => boolean;
}

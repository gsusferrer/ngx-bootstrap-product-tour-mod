import { ElementRef, OnDestroy, OnInit } from '@angular/core';
import { PopoverDirective } from 'ngx-bootstrap';
import { NgxBootstrapProductTourService } from './ngx-bootstrap-product-tour-mod.service';
import { IStep } from './ngx-bootstrap-product-tour-mod.models';
import { NgxBootstrapProductTourStepService } from './ngx-bootstrap-product-tour-mod-step/ngx-bootstrap-product-tour-mod-step.service';
export declare class NgxBootstrapPopoverDirective extends PopoverDirective {
    triggers: string;
}
export declare class NgxBootstrapProductTourDirective implements OnInit, OnDestroy {
    private tourService;
    private tourStepTemplate;
    private element;
    popoverDirective: NgxBootstrapPopoverDirective;
    protected _elementClass: string[];
    tourAnchor: string;
    private backdropClass;
    constructor(tourService: NgxBootstrapProductTourService, tourStepTemplate: NgxBootstrapProductTourStepService, element: ElementRef, popoverDirective: NgxBootstrapPopoverDirective);
    ngOnInit(): void;
    ngOnDestroy(): void;
    showTourStep(step: IStep): void;
    hideTourStep(): void;
    isOpen(): boolean;
}

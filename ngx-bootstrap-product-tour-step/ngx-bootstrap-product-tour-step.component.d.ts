import { TemplateRef, AfterContentInit } from '@angular/core';
import { IStep } from '../ngx-bootstrap-product-tour.models';
import { NgxBootstrapProductTourStepService } from './ngx-bootstrap-product-tour-step.service';
import { NgxBootstrapProductTourService } from '../ngx-bootstrap-product-tour.service';
export declare class NgxBootstrapProductTourStepComponent implements AfterContentInit {
    private ngxBootstrapProductTourStepService;
    tourService: NgxBootstrapProductTourService;
    defaultTourStepTemplate: TemplateRef<any>;
    stepTemplate: TemplateRef<{
        step: IStep;
    }>;
    constructor(ngxBootstrapProductTourStepService: NgxBootstrapProductTourStepService, tourService: NgxBootstrapProductTourService);
    ngAfterContentInit(): void;
}

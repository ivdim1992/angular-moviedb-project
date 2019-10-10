import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { MovieDetailsModalComponent } from './movie-details-modal.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OverlayContainer } from '@angular/cdk/overlay';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

describe('MyDialogComponent', () => {
    let dialog: MatDialog;
    let overlayContainer: OverlayContainer;
    let component: MovieDetailsModalComponent;
    let fixture: ComponentFixture<MovieDetailsModalComponent>;
    const mockDialogRef = {
        close: jasmine.createSpy('close')
    };

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                CommonModule,
                SharedModule,
                RouterTestingModule.withRoutes([]),
                HttpClientTestingModule
            ],
            providers: [
                { provide: MatDialogRef, useValue: mockDialogRef },
                {
                    provide: MAT_DIALOG_DATA,
                    useValue: {
                        title: 'myTitle',
                    }
                }
            ],
            declarations: [MovieDetailsModalComponent],
        });

        TestBed.overrideModule(BrowserDynamicTestingModule, {
            set: {
                entryComponents: [MovieDetailsModalComponent]
            }
        });
        TestBed.compileComponents();
    }));

    beforeEach(inject([MatDialog, OverlayContainer],
        (d: MatDialog, oc: OverlayContainer) => {
            dialog = d;
            overlayContainer = oc;
        })
    );

    afterEach(() => {
        overlayContainer.ngOnDestroy();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(MovieDetailsModalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('onCancel should close the dialog', () => {
        component.closeDialog();
        expect(mockDialogRef.close).toHaveBeenCalled();
    });
});
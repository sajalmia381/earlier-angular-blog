import { ComponentFixture, TestBed } from "@angular/core/testing";

import { NgrxOperatorComponent } from "./ngrx-operator.component";

describe("NgrxOperatorComponent", () => {
    let component: NgrxOperatorComponent;
    let fixture: ComponentFixture<NgrxOperatorComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [NgrxOperatorComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(NgrxOperatorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});

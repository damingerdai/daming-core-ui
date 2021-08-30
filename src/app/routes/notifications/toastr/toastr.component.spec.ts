import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastrComponent } from './toastr.component';

describe('ToastrComponent', () => {
	let component: ToastrComponent;
	let fixture: ComponentFixture<ToastrComponent>;

	beforeEach(waitForAsync(() => {
		TestBed.configureTestingModule({
			declarations: [ToastrComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ToastrComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});

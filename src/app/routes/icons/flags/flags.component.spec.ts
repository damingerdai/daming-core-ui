import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlagsComponent } from './flags.component';

describe('FlagsComponent', () => {
	let component: FlagsComponent;
	let fixture: ComponentFixture<FlagsComponent>;

	beforeEach(waitForAsync(() => {
		TestBed.configureTestingModule({
			declarations: [FlagsComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(FlagsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});

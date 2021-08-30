import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideComponent } from './aside.component';

describe('AsideComponent', () => {
	let component: AsideComponent;
	let fixture: ComponentFixture<AsideComponent>;

	beforeEach(waitForAsync(() => {
		TestBed.configureTestingModule({
			declarations: [AsideComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(AsideComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});

import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreuiIconsComponent } from './coreui-icons.component';

describe('CoreuiIconsComponent', () => {
	let component: CoreuiIconsComponent;
	let fixture: ComponentFixture<CoreuiIconsComponent>;

	beforeEach(waitForAsync(() => {
		TestBed.configureTestingModule({
			declarations: [CoreuiIconsComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(CoreuiIconsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});

import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablesComponent } from './tables.component';

describe('TablesComponent', () => {
	let component: TablesComponent;
	let fixture: ComponentFixture<TablesComponent>;

	beforeEach(waitForAsync(() => {
		TestBed.configureTestingModule({
			declarations: [TablesComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(TablesComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});

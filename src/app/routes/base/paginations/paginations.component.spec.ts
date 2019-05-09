import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationsComponent } from './paginations.component';

describe('PaginationComponent', () => {
	let component: PaginationsComponent;
	let fixture: ComponentFixture<PaginationsComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [PaginationsComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(PaginationsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});

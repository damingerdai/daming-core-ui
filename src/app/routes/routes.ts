import { LayoutComponent } from '../layout/layout.component';

export const routes = [

	{
		path: '',
		component: LayoutComponent,
		data: {
			title: 'Home'
		},
		children: [
			{ path: '', redirectTo: 'dashboard', pathMatch: 'full', },
			{ path: 'theme', loadChildren: () => import('./theme/theme.module').then(m => m.ThemeModule) },
			{ path: 'base', loadChildren: () => import('./base/base.module').then(m => m.BaseModule) },
			{ path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
			{ path: 'buttons', loadChildren: () => import('./buttons/buttons.module').then(m => m.ButtonsModule) },
			{ path: 'charts', loadChildren: () => import('./charts/charts.module').then(m => m.ChartsModule) },
			{ path: 'icons', loadChildren: () => import('./icons/icons.module').then(m => m.IconsModule) },
			{ path: 'notifications', loadChildren: () => import('./notifications/notifications.module').then(m => m.NotificationsModule) },
			{ path: 'widgets', loadChildren: () => import('./widgets/widgets.module').then(m => m.WidgetsModule) },
		]
	},
	{ path: 'pages', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) },
	// Not found
	{ path: '**', redirectTo: 'home' }

];

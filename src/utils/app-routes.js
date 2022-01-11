import { 
    LoginPage,
    PanelPage
} from '../pages';

const AppRoutes = {
    Login: {
        name: 'Login',
        path: '/login',
        exact: true,
        component: LoginPage,
        private: false
    },
    Panel: {
        name: 'Panel',
        path: '/panel',
        exact: true,
        component: PanelPage,
        private: true
    },
    Default: {
        name: 'Default',
        path: '/',
        exact: false,
        component: LoginPage,
        private: false
    }
}


export default AppRoutes
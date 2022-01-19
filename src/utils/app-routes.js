import { 
    LoginPage,
    PanelPage,
    TradingPage
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
    Trading: {
        name: 'Trading',
        path: '/trading-panel',
        exact: true,
        component: TradingPage,
        private: false
    },
    Default: {
        name: 'Default',
        path: '/',
        exact: false,
        component: TradingPage,
        private: false
    }
}


export default AppRoutes
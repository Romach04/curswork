import Admin from "./pages/Admin";
import Basket from "./pages/Basket"
import Shop from './pages/Shop';
import Auth from './pages/Auth';
import DevicePage from './pages/DevicePage' 
import { ADMIN_ROUTER, BASKET_ROUTER, DEVICE_ROUTER, LOGIN_ROUTER, REGISTATION_ROUTER, SHOP_ROUTER } from "./utils/const";

export const authRoutes = [
    {
        path: ADMIN_ROUTER,
        Component: Admin
    },
    {
        path:BASKET_ROUTER,
        Component: Basket
    }
]

export const publicRoutes = [
    {
        path:SHOP_ROUTER,
        Component: Shop
    },
    {
        path:LOGIN_ROUTER,
        Component: Auth
    },
    {
        path:REGISTATION_ROUTER,
        Component: Auth
    },
    {
        path:DEVICE_ROUTER + '/:id',
        Component: DevicePage
    }
    
]
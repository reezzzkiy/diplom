import Admin from "./pages/Admin"
import Basket from "./pages/Basket"
import ObjectPage from "./pages/ObjectPage"
import Shop from "./pages/Shop"
import Auth from "./pages/Auth"
import { ADMIN_ROUTE, BASKET_ROUTE,  LOGIN_ROUTE,  OBJECT_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "./utils/consts"

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: BASKET_ROUTE,
        Component: Basket
    }
    
]

export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: Shop
    },
    {
        path: OBJECT_ROUTE + '/:id',
        Component: ObjectPage
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    }
    
]
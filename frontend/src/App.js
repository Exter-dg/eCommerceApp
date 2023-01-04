import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import ProtectedRoutesComponent from "./components/ProtectedRoutesComponent";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";

// publicly available pages
import HomePage from "./pages/HomePage";
import ProductDetailsPage from "./pages/ProductDetails";
import ProductListPage from "./pages/ProductListPage";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

// user protected pages
import UserProfilePage from "./pages/user/UserProfilePage";
import UserOrdersPage from "./pages/user/UserOrdersPage";
import UserCartDetailsPage from "./pages/user/UserCartDetailsPage";
import UserOrderDetailsPage from "./pages/user/UserOrderDetailsPage";

// admin protected pages
import AdminAnalyticsPage from "./pages/admin/AdminAnalyticsPage";
import AdminChatsPage from "./pages/admin/AdminChatsPage";
import AdminCreateProductPage from "./pages/admin/AdminCreateProductPage";
import AdminEditProductPage from "./pages/admin/AdminEditProductPage";
import AdminEditUserPage from "./pages/admin/AdminEditUserPage";
import AdminOrderDetailsPage from "./pages/admin/AdminOrderDetailsPage";
import AdminOrdersPage from "./pages/admin/AdminOrdersPage";
import AdminProductsPage from "./pages/admin/AdminProductsPage";
import AdminUsersPage from "./pages/admin/AdminUsersPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderComponent></HeaderComponent>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/product-list" element={<ProductListPage></ProductListPage>}></Route>
          <Route path="/product-details/:id" element={<ProductDetailsPage></ProductDetailsPage>}></Route>
          <Route path="/cart" element={<CartPage></CartPage>}></Route>
          <Route path="/login" element={<LoginPage></LoginPage>}></Route>
          <Route path="/register" element={<RegisterPage></RegisterPage>}></Route>

          {/* User Protected Routes */}
          <Route element={<ProtectedRoutesComponent admin={false}></ProtectedRoutesComponent>}>
            <Route path="/user" element={<UserProfilePage></UserProfilePage>}></Route>
            <Route path="/user/my-orders" element={<UserOrdersPage></UserOrdersPage>}></Route>
            <Route path="/user/cart-details" element={<UserCartDetailsPage></UserCartDetailsPage>}></Route>
            <Route path="/user/order-details" element={<UserOrderDetailsPage></UserOrderDetailsPage>}></Route>
          </Route>

          {/* Admin Protected Routes */}
          <Route element={<ProtectedRoutesComponent admin={true}></ProtectedRoutesComponent>}>
            <Route path="/admin/users" element={<AdminUsersPage></AdminUsersPage>}></Route>
            <Route path="/admin/edit-user" element={<AdminEditUserPage></AdminEditUserPage>}></Route>
            <Route path="/admin/products" element={<AdminProductsPage></AdminProductsPage>}></Route>
            <Route path="/admin/create-new-product" element={<AdminCreateProductPage></AdminCreateProductPage>}></Route>
            <Route path="/admin/edit-product" element={<AdminEditProductPage></AdminEditProductPage>}></Route>
            <Route path="/admin/orders" element={<AdminOrdersPage></AdminOrdersPage>}></Route>
            <Route path="/admin/order-details" element={<AdminOrderDetailsPage></AdminOrderDetailsPage>}></Route>
            <Route path="/admin/chats" element={<AdminChatsPage></AdminChatsPage>}></Route>
            <Route path="/admin/analytics" element={<AdminAnalyticsPage></AdminAnalyticsPage>}></Route>
          </Route>

          <Route path="*" element="Error 404: Page not found!!!"></Route>
        </Routes>
        <FooterComponent></FooterComponent>
      </BrowserRouter>
    </>
  );
}

export default App;

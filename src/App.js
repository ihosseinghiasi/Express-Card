import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Register from "./pages/authentication/register.page";
import SmsForm from "./pages/authentication/smsForm.page";
import ConfirmSmsForm from "./pages/authentication/confirmSmsForm.page";
import Login from "./pages/authentication/login.page";
import AdminCounter from "./pages/adminPanel/counter.page";
import AddAdmin from "./pages/adminPanel/admin/addAdmin.page";
import AllAdmins from "./pages/adminPanel/admin/allAdmins.page";
import ShowAdmin from "./pages/adminPanel/admin/showAdmin.page";
import AddUser from "./pages/adminPanel/user/addUser.page";
import AllUsers from "./pages/adminPanel/user/allUsers.page";
import ShowUser from "./pages/adminPanel/user/showUser.page";
import AddCategory from "./pages/adminPanel/category/addCategory.page";
import ShowCategory from "./pages/adminPanel/category/showCategory.page";
import AllCategories from "./pages/adminPanel/category/allCategories.page";
import AddProduct from "./pages/adminPanel/product/addProduct.page";
import AllProducts from "./pages/adminPanel/product/allProducts.page";
import ShowProduct from "./pages/adminPanel/product/showProduct.page";
import AddCard from "./pages/adminPanel/card/addCard.page";
import AllCards from "./pages/adminPanel/card/allCards.page";
import ShowCard from "./pages/adminPanel/card/showCard.page";
import AdminAddTicket from "./pages/adminPanel/ticket/addTicket.page";
import AdminAllTickets from "./pages/adminPanel/ticket/allTickets.page";
import Payment from "./pages/main/payment.page";
import Category from "./pages/main/category.page";
import UserCounter from "./pages/userPanel/counter.page";
import Profile from "./pages/userPanel/profile/profile.page";
import UserAddTicket from "./pages/userPanel/ticket/addTicket.page";
import HomePage from "./pages/main/home.page";
import MainLayoutComponent from "./components/layout/main-layout.component";
import AdminPanelLayoutComponent from "./components/layout/adminPanel-layout.component";
import UserLayoutComponent from "./components/layout/userPanel-layout.component";

const App = () => {
  return (
    <Suspense>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <MainLayoutComponent>
                <HomePage />
              </MainLayoutComponent>
            }
          />
          <Route
            path="/:category/:id"
            element={
              <MainLayoutComponent>
                <Category />
              </MainLayoutComponent>
            }
          />
          <Route
            path="/payment/:id"
            element={
              <MainLayoutComponent>
                <Payment />
              </MainLayoutComponent>
            }
          />
          <Route
            path="/admin/counter"
            element={
              <AdminPanelLayoutComponent>
                <AdminCounter />
              </AdminPanelLayoutComponent>
            }
          />
          <Route
            path="/admin/newAdmin"
            element={
              <AdminPanelLayoutComponent>
                <AddAdmin />
              </AdminPanelLayoutComponent>
            }
          />
          <Route
            path="/admin/allAdmins"
            element={
              <AdminPanelLayoutComponent>
                <AllAdmins />
              </AdminPanelLayoutComponent>
            }
          />
          <Route
            path="/admin/showAdmin/:id"
            element={
              <AdminPanelLayoutComponent>
                <ShowAdmin />
              </AdminPanelLayoutComponent>
            }
          />
          <Route
            path="/admin/newUser"
            element={
              <AdminPanelLayoutComponent>
                <AddUser />
              </AdminPanelLayoutComponent>
            }
          />
          <Route
            path="/admin/allUsers"
            element={
              <AdminPanelLayoutComponent>
                <AllUsers />
              </AdminPanelLayoutComponent>
            }
          />
          <Route
            path="/admin/showUser/:id"
            element={
              <AdminPanelLayoutComponent>
                <ShowUser />
              </AdminPanelLayoutComponent>
            }
          />
          <Route
            path="/admin/newCategory"
            element={
              <AdminPanelLayoutComponent>
                <AddCategory />
              </AdminPanelLayoutComponent>
            }
          />
          <Route
            path="/admin/allCategories"
            element={
              <AdminPanelLayoutComponent>
                <AllCategories />
              </AdminPanelLayoutComponent>
            }
          />
          <Route
            path="/admin/showCategory/:id"
            element={
              <AdminPanelLayoutComponent>
                <ShowCategory />
              </AdminPanelLayoutComponent>
            }
          />
          <Route
            path="/admin/newProduct"
            element={
              <AdminPanelLayoutComponent>
                <AddProduct />
              </AdminPanelLayoutComponent>
            }
          />
          <Route
            path="/admin/allProducts"
            element={
              <AdminPanelLayoutComponent>
                <AllProducts />
              </AdminPanelLayoutComponent>
            }
          />
          <Route
            path="/admin/showProduct/:id"
            element={
              <AdminPanelLayoutComponent>
                <ShowProduct />
              </AdminPanelLayoutComponent>
            }
          />
          <Route
            path="/admin/newCard"
            element={
              <AdminPanelLayoutComponent>
                <AddCard />
              </AdminPanelLayoutComponent>
            }
          />
          <Route
            path="/admin/allCards"
            element={
              <AdminPanelLayoutComponent>
                <AllCards />
              </AdminPanelLayoutComponent>
            }
          />
          <Route
            path="/admin/showCard/:id"
            element={
              <AdminPanelLayoutComponent>
                <ShowCard />
              </AdminPanelLayoutComponent>
            }
          />
          <Route
            path="/admin/newTicket"
            element={
              <AdminPanelLayoutComponent>
                <AdminAddTicket />
              </AdminPanelLayoutComponent>
            }
          />
          <Route
            path="/admin/allTickets"
            element={
              <AdminPanelLayoutComponent>
                <AdminAllTickets />
              </AdminPanelLayoutComponent>
            }
          />
          <Route path="/register" element={<Register />} />
          <Route path="/smsForm" element={<SmsForm />} />
          <Route path="/confirmSmsForm" element={<ConfirmSmsForm />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/user/counter"
            element={
              <UserLayoutComponent>
                <UserCounter />
              </UserLayoutComponent>
            }
          />
          <Route
            path="/user/profile"
            element={
              <UserLayoutComponent>
                <Profile />
              </UserLayoutComponent>
            }
          />
          <Route
            path="/user/addTicket"
            element={
              <UserLayoutComponent>
                <UserAddTicket />
              </UserLayoutComponent>
            }
          />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default App;

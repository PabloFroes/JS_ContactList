import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomeScreen from "./screens/home";
import RegisterScreen from "./screens/auth/register";
import LoginScreen from "./screens/auth/login";
import ContactsScreen from "./screens/contacts";
import CreateContactScreen from "./screens/contacts/create";
import EditContactScreen from "./screens/contacts/edit";
import PrivateRouter from "./components/auth/private_router";
import UserEdit from "./screens/auth/user"

const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomeScreen/>}/>
            <Route path="/auth/register" element={<RegisterScreen/>}/>
            <Route path="/auth/login" element={<LoginScreen/>}/>
            <Route path="/contacts" element={<ContactsScreen/>}/>
            <Route path='/contacts/create' element={<CreateContactScreen/>}/>
            <Route path='/contacts/:id' element={<EditContactScreen/>}/>
            <Route path='/auth/edit' element={<UserEdit/>}/>
        </Routes>
    </BrowserRouter>

)

export default Router
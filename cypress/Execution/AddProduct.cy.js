/// <reference types="cypress"/>

import Baseclass from "../POM/Basepage"
import CartItemList from "../POM/CartList"
import loginpage from "../POM/Loginpage"
import ProductPage from "../POM/Product"

describe("Add Products Test Suite", () => 
{
    const bs = new Baseclass
    const login = new loginpage
    const products = new ProductPage
    const cart =    new CartItemList

    beforeEach( () => 
    {
        bs.visit();
    });

    it("Add products to cart", () => 
    {
        bs.Wait_for(2000)
        login.Login_with_Valid_Credentials();
        products.Add_Products();
        cart.Cart_List_Items();
    })
})
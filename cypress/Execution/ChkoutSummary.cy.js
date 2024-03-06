/// <reference types="cypress"/>

import Baseclass from "../POM/Basepage"
import CartItemList from "../POM/CartList"
import CheckOutOverview from "../POM/CheckOutSummary"
import CheckOutInfo from "../POM/ChkoutInfo"
import loginpage from "../POM/Loginpage"
import ProductPage from "../POM/Product"

describe("CheckOut Summary of Products Test Suite", () => 
{
    const bs = new Baseclass
    const login = new loginpage
    const products = new ProductPage
    const cart =    new CartItemList
    const chkout = new CheckOutInfo
    const chkoutSummry = new CheckOutOverview

    beforeEach( () => 
    {
        bs.visit();
    });

    it("Checkout Summary of Products and Finish the Flow", () => 
    {
        bs.Wait_for(2000)
        login.Login_with_Valid_Credentials();
        products.Add_Products();
        cart.Cart_List_Items();
        chkout.CheckOutInformation();
        chkoutSummry.CheckOutSummary();
    })
})
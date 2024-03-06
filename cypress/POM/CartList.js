/// <reference types="cypress" />

import Baseclass from "./Basepage";

    const bs = new Baseclass
    const cartlist = "../fixtures/CartListItem/CartListItem.json"
class CartItemList
{
    Cart_List_Items() 
    {
        cy.fixture(cartlist).then((val) => 
        {
            bs.Validate("containtext", val.Locators.Assert_Cart_Loc, val.Data.CartTitle);
            bs.Action("click", val.Locators.Prod3_Remove_Loc);
            bs.Action("click",val.Locators.CheckOutBtn);
        })
    }
}
export default CartItemList;
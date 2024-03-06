/// <reference types="cypress" />

import Baseclass from "./Basepage";

    const bs = new Baseclass
    const product = "../fixtures/Products/Products.json";
                        
class ProductPage
{
    Add_Products()
    {
        cy.fixture(product).then((val) => 
        {
            bs.Action("click",val.Locators.Prod1_Bagpack);
            bs.Action("click",val.Locators.Prod2_BikeLite);
            bs.Action("select",val.Locators.Sort_AtoZ, val.Data.Sort_Value);
            bs.Action("click",val.Locators.Prod3_Onesie);
            bs.Action("click",val.Locators.CartBtn);
        })
    }

}
export default ProductPage;
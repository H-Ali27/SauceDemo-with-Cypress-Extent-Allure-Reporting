/// <reference types = "cypress" />

import Baseclass from "./Basepage";

    const bs = new Baseclass
    const ItemPrice = "../fixtures/CheckoutSumry/CheckoutSumry.json"
class CheckOutOverview
{
    CheckOutSummary()
    {
        var sum = 0;
        cy.fixture(ItemPrice).then((val) => 
        {
            cy.get(val.Locators.Items_price_Loc).each((price) => 
        {
            var actualtext = price.text();
            var res = actualtext.slice(1);
            res = +res;
            sum = sum + res;
        })
        cy.get(val.Locators.TotalAmount_Loc).then(elem => 
        {
            var actualElem = elem.text();
            var res = actualElem.slice(13);
            res = +res;
            expect(res).to.equal(sum)
        })

        bs.Action("click",val.Locators.FinishBtn);
        bs.Validate("containtext",val.Locators.FinishNote_Loc,val.Data.FinishNote_Data);
        })
        
    }
}
export default CheckOutOverview;
/// <reference types = "cypress" />

import Baseclass from "./Basepage";

    const bs = new Baseclass
    const chkout = "../fixtures/ChkOutInfo/ChkOutInfo.json"

class CheckOutInfo
{
    CheckOutInformation()
    {   
        cy.fixture(chkout).then((val) => 
        {
            bs.Action("write", val.Locators.FirstName_Loc, val.Data.FirstName_Data);
            bs.Action("write", val.Locators.LastName_Loc, val.Data.LastName_Data);
            bs.Action("write", val.Locators.PostCode_Loc, val.Data.PostCode_Data);
            bs.Action("click", val.Locators.SubmitBtn);
        })
        
    }
}
export default CheckOutInfo;
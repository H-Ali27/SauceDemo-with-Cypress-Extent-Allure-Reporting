/// <reference types="cypress" />

import Baseclass from "./Basepage";

  const bs = new Baseclass
  const login = "../fixtures/LoginJson/Login.json"; 
class loginpage
{
    Login_with_Valid_Credentials()
    {
        cy.fixture(login).then((val) => 
        {
            bs.Action("write",val.Locators.UserName_Loc, val.Valid_Login_Data.Username_Data);
            bs.Action("write",val.Locators.Password_Loc, val.Valid_Login_Data.Password_Data);
            bs.Action("click",val.Locators.LoginBtn_Loc);
            bs.Wait_for(2000);
            bs.Validate("have.text",".product_label",val.Valid_Login_Data.Assertion_Data)    
        })
        
    }
    Login_with_InValid_Credentials()
    {
        cy.fixture(login).then((val) => 
        {
            bs.Action("write",val.Locators.UserName_Loc, val.InValid_Login_Data.Username_Data);
            bs.Action("write",val.Locators.Password_Loc, val.Valid_Login_Data.Password_Data);
            bs.Action("click",val.Locators.LoginBtn_Loc);
            bs.Wait_for(2000);
            bs.Validate("includetext","[data-test='error']",val.InValid_Login_Data.Assertion_Data);    
        })
        
    }
}
export default loginpage;
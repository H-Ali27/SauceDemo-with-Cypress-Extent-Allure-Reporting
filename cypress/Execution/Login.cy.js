

import Baseclass from "../POM/Basepage"
import loginpage from "../POM/Loginpage"

describe("Suacedemo testing suit",() => 
{
    const bs = new Baseclass
    const login = new loginpage

    beforeEach(() => {
        bs.visit();
    })

    it.only("Valid Login Test", () =>
    {
        bs.Wait_for(2000);
        login.Login_with_Valid_Credentials();
    })
    it("InValid Login Test", () =>
    {
        bs.Wait_for(2000);
        login.Login_with_InValid_Credentials();
    })
})
/// <reference types="cypress" />
class Baseclass 
{

    Wait_for(sec) 
    {
        cy.wait(sec);
    }
    visit()
    {
        cy.visit("https://www.saucedemo.com/v1/index.html");
    }
    Validate(option, loc, expected)
    {
        option.toLowerCase();
        try
        {
            switch (option) {
                case 'checked':
                    cy.get(loc).should('be.checked');
                    break;
                case 'have.length':
                    cy.get(loc).should('have.length', expected);
                    break;
                case 'includetext':
                    cy.get(loc).should('include.text',expected);
                    break;
                case 'containtext':
                    cy.get(loc).should('contain.text', expected);
                    break;
                case 'href':
                    cy.location().should((loc) => 
                    {
                        expect(loc.href).to.eq(`${expected}`)
                    })
                    break;
                default:
                    cy.get(loc).should('have.text',expected)
                    break;
            }
        }catch(error)
        {
            console.log("please enter valid option",error)
        }
    }
    Action(Opt, loc, input="")
    {
        Opt.toLowerCase();
        try {
            if (Opt == "write") {
                try {
                    cy.get(loc).type(input);
                } catch (error) {
                    console.log("please valid option", error)
                }
            } else if (Opt == "click"){
                try {
                    cy.get(loc).click();                
                } catch (error) {
                    console.log("please give valid option", error)
                }
            }
            else if(Opt == "select"){
                try {
                    cy.get(loc).select(input);
                } catch (error) {
                    console.log("please give valid option",error)
                }
            }
        } catch (error) {
            console.log("Please enter write, click and select option",error)
        }
    }

    

}

export default Baseclass;
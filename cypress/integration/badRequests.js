/// <reference types="cypress"/>



//run tests on a bad requests some in hebrew mode and english mode

describe('BadRequests',()=>{
    
    beforeEach(() => {
        cy.visit('https://citation.dicta.org.il/')
    })
  

    it('Message after request failed with status code 500 when clicking the run butten of citation'+
    ' page in hebrew mode'
    ,()=>{
       cy.citationRequest('Hebrew',500,'לא ניתן לגשת כעת לשרת, נסה שוב מאוחר יותר',
       0)
    })

    it('Message after request failed with status code 500 when clicking the run butten of citation'+
    ' page in english mode'
    ,()=>{
        cy.citationRequest('English',500,'Server error. Please try again later',0)
    })

    it('Message after request failed with 30 seconds delay when clicking the run butten of citation'+
    ' page in hebrew mode'
    ,()=>{
        cy.citationRequest('Hebrew',200,'לא ניתן לגשת כעת לשרת, נסה שוב מאוחר יותר',
       15)
    })

    it('Message after request failed with 30 seconds delay when clicking the run butten of citation'+
    ' page in hebrew mode'
    ,()=>{
        cy.citationRequest('English',200,'Server error. Please try again later',
       15)
    })
})
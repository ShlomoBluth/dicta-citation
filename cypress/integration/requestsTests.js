/// <reference types="cypress"/>



////run tests on requests from citation run some in hebrew mode and english mode

describe('RequestsTests',()=>{
    
    beforeEach(() => {
        cy.visit('https://citation.dicta.org.il/')
    })
  

    it('Message after request failed with status code 500 when clicking the run butten of citation'+
    ' page in hebrew mode',()=>{
       cy.citationRequest({
           language:'Hebrew',
           status:500,
           message:'לא ניתן לגשת כעת לשרת, נסה שוב מאוחר יותר',
       })
    })

    it('Message after request failed with status code 500 when clicking the run butten of citation'+
    ' page in english mode',()=>{
        cy.citationRequest({
            language:'English',
            status:500,
            message:'Server error. Please try again later',
        })
    })

    it('Error message for response with a delay of 15 seconds when clicking the run butten'+
    ' of citation page in hebrew mode',()=>{
        cy.citationRequest({
            language:'Hebrew',
            message:'לא ניתן לגשת כעת לשרת, נסה שוב מאוחר יותר',
            delaySeconds: 15
        })
    })

    it('Error message for response with a delay of 15 seconds when clicking the run butten'+
    ' of citation page in english mode',()=>{
        cy.citationRequest({
            language:'English',
            message:'Server error. Please try again later',
            delaySeconds: 15
        })
    })

    
})
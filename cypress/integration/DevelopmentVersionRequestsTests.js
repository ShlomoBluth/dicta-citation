/// <reference types="cypress"/>



////run tests on requests from development version citation run some in hebrew mode and english mode

describe('DevelopmentVersionRequestsTests',()=>{
    
    beforeEach(() => {
        cy.visit('https://citation-dev--gracious-gates-eda4d9.netlify.app/')
    })
  

    it('Error message for response with status code 500 when clicking the run button of development '+
    'version citation page in hebrew mode',()=>{
       cy.citationRequest({
           language:'Hebrew',
           status:500,
           message:'לא ניתן לגשת כעת לשרת, נסה שוב מאוחר יותר',
       })
    })

    it('Error message for response with status code 500 when clicking the run button of development'+
    ' version citation page in english mode',()=>{
        cy.citationRequest({
            language:'English',
            status:500,
            message:'Server error. Please try again later',
        })
    })

    it('Error message for response with a delay of 15 seconds when clicking the run button'+
    ' of development version citation page in hebrew mode',()=>{
        cy.citationRequest({
            language:'Hebrew',
            message:'לא ניתן לגשת כעת לשרת, נסה שוב מאוחר יותר',
            delaySeconds: 15
        })
    })

    it('Error message for response with a delay of 15 seconds when clicking the run button'+
    ' of development version citation page in english mode',()=>{
        cy.citationRequest({
            language:'English',
            message:'Server error. Please try again later',
            delaySeconds: 15
        })
    })

    
})
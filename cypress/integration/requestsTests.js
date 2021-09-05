/// <reference types="cypress"/>



////run tests on requests from citation run some in hebrew mode and english mode

const urls = new Map();
urls.set('live',Cypress.env('LIVE_URL'))
urls.set('dev',Cypress.env('DEV_URL')) 

const sizes= new Map();
sizes.set('desktop',[1000, 660])
sizes.set('mobile','iphone-x')


urls.forEach((urlValue,urlKey)=>{

    sizes.forEach((sizeValue,sizeKey) => {

    
        describe('toolTests '+urlKey+' '+sizeKey,()=>{
    
            beforeEach(() => {
                cy.screenSize({size:sizeValue})
                cy.visitpage({url:urlValue})
            })

            it('Error message for markpsukim response with status code 500 when clicking the run button of citation page'+
            ' in hebrew mode',()=>{
               cy.citationRequest({
                   url:'markpsukim',
                   language:'Hebrew',
                   status:500,
                   message:'לא ניתן לגשת כעת לשרת, נסה שוב מאוחר יותר',
               })
            })
        
            it('Error message for markpsukim response with status code 500 when clicking the run button of citation page'+
            ' in english mode',()=>{
                cy.citationRequest({
                    url:'markpsukim',
                    language:'English',
                    status:500,
                    message:'Server error. Please try again later',
                })
            })
        
            it('Error message for markpsukim response with a delay of 15 seconds when clicking the run button'+
            ' of citation page in hebrew mode',()=>{
                cy.citationRequest({
                    url:'markpsukim',
                    language:'Hebrew',
                    message:'לא ניתן לגשת כעת לשרת, נסה שוב מאוחר יותר',
                    delaySeconds: 60
                })
            })
        
            it('Error message for markpsukim response with a delay of 15 seconds when clicking the run button'+
            ' of citation page in english mode',()=>{
                cy.citationRequest({
                    url:'markpsukim',
                    language:'English',
                    message:'Server error. Please try again later',
                    delaySeconds: 60
                })
            })
        
            // it('Error message for parsetogroups response with status code 500 when clicking the run button of citation page'+
            // ' in hebrew mode',()=>{
            //    cy.citationRequest({
            //        url:'parsetogroups',
            //        language:'Hebrew',
            //        status:500,
            //        message:'לא ניתן לגשת כעת לשרת, נסה שוב מאוחר יותר',
            //    })
            // })
        
            // it('Error message for parsetogroups response with status code 500 when clicking the run button of citation page'+
            // ' in english mode',()=>{
            //     cy.citationRequest({
            //         url:'parsetogroups',
            //         language:'English',
            //         status:500,
            //         message:'Server error. Please try again later',
            //     })
            // })
        
            // it('Error message for parsetogroups response with a delay of 15 seconds when clicking the run button'+
            // ' of citation page in hebrew mode',()=>{
            //     cy.citationRequest({
            //         url:'parsetogroups',
            //         language:'Hebrew',
            //         message:'לא ניתן לגשת כעת לשרת, נסה שוב מאוחר יותר',
            //         delaySeconds: 60
            //     })
            // })
        
            // it('Error message for parsetogroups response with a delay of 15 seconds when clicking the run button'+
            // ' of citation page in english mode',()=>{
            //     cy.citationRequest({
            //         url:'parsetogroups',
            //         language:'English',
            //         message:'Server error. Please try again later',
            //         delaySeconds: 60
            //     })
            // })
            

      
    
        
    
        })
    })
})


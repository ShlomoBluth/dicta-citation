/// <reference types="cypress"/>

//run basic tests on citation run

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

            it('citation run in hebrew mode',()=>{
                cy.setLanguageMode({language:'Hebrew'})
                cy.intercept('**/api/markpsukim**').as('req')
                cy.findCitation('משה קבל תורה מסיני ומסרה ליהושע')
                cy.wait('@req',{timeout:120000})
                cy.resultsTests(' משֶׁה קִבֵּל תּוֹרָה מִסִּינַי וּמְסָרָהּ לִיהוֹשֻׁעַ וִיהוֹשֻׁעַ לִזְקֵנִים וּזְקֵנִים')
            })
        
            it('citation run in english mode',()=>{
                cy.setLanguageMode({language:'English'})
                cy.intercept('**/api/markpsukim**').as('req')
                cy.findCitation('משה קבל תורה מסיני ומסרה ליהושע')
                cy.wait('@req',{timeout:120000})
                cy.resultsTests(' משֶׁה קִבֵּל תּוֹרָה מִסִּינַי וּמְסָרָהּ לִיהוֹשֻׁעַ וִיהוֹשֻׁעַ לִזְקֵנִים וּזְקֵנִים')
            })

            // it('graph in hebrew mode',()=>{
            //     cy.setLanguageMode({language:'Hebrew'})
            //     cy.intercept('**/api/markpsukim**').as('req')
            //     cy.findCitation('משה קבל תורה מסיני ומסרה ליהושע')
            //     cy.wait('@req',{timeout:120000})
            //     cy.get('[class="col-auto"]').contains('הערות שוליים').siblings().click({force:true})
            //     cy.get('[role="presentation"]').contains('גרף').click({force:true})
            //     cy.get('[id="frame"]',{timeout:3000000}).should('exist')
            // })

        })
    })

})


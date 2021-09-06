/// <reference types="cypress"/>

//run basic tests on citation run

const urls = new Map();
urls.set('live',Cypress.env('LIVE_URL'))
//urls.set('dev',Cypress.env('DEV_URL')) 

const sizes= new Map();
sizes.set('desktop',[1000, 660])
//sizes.set('mobile','iphone-x')


urls.forEach((urlValue,urlKey)=>{

    sizes.forEach((sizeValue,sizeKey) => {

    
        describe('toolTests '+urlKey+' '+sizeKey,()=>{
    
            beforeEach(() => {
                cy.screenSize({size:sizeValue})
                cy.visitpage({url:urlValue})
            })

            it('citation run in hebrew mode',()=>{
                cy.setLanguageMode('Hebrew')
                cy.intercept('**/api/markpsukim**').as('req')
                cy.findCitation('משה קבל תורה מסיני ומסרה ליהושע')
                cy.wait('@req')
                cy.resultsTests(' משֶׁה קִבֵּל תּוֹרָה מִסִּינַי וּמְסָרָהּ לִיהוֹשֻׁעַ וִיהוֹשֻׁעַ לִזְקֵנִים וּזְקֵנִים')
            })
        
            it('citation run in english mode',()=>{
                cy.setLanguageMode('English')
                cy.intercept('**/api/markpsukim**').as('req')
                cy.findCitation('משה קבל תורה מסיני ומסרה ליהושע')
                cy.wait('@req')
                cy.resultsTests(' משֶׁה קִבֵּל תּוֹרָה מִסִּינַי וּמְסָרָהּ לִיהוֹשֻׁעַ וִיהוֹשֻׁעַ לִזְקֵנִים וּזְקֵנִים')
            })

        })
    })

})


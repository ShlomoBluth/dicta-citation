/// <reference types="cypress"/>

//run basic tests on citation run

let sizes = ['iphone-x',[1000, 660]]


sizes.forEach((size) => {

    describe('toolTests',()=>{

        beforeEach(() => {
            cy.screenSize({size:size})
            cy.visitpage({url:'https://citation.dicta.org.il/'})
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


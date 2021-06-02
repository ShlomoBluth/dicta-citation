/// <reference types="cypress"/>

//run basic tests on citation run

let sizes = ['iphone-x',[1000, 660]]


sizes.forEach((size) => {

    describe('basicTests',()=>{

        beforeEach(() => {
            if (Cypress._.isArray(size)) {
                Cypress.config({
                    viewportWidth: size[0],
                    viewportHeight: size[1]
                })
                cy.viewport(size[0], size[1])
            } else {
                Cypress.config({
                    viewportWidth: 375,
                    viewportHeight: 812
                })
                cy.viewport(size)
            }
            cy.visit('/')
        })
    
        it('citation run in hebrew mode',()=>{
            cy.setLanguageMode('Hebrew')
            cy.findCitation('משה קבל תורה מסיני ומסרה ליהושע')
            cy.resultsTests(' משֶׁה קִבֵּל תּוֹרָה מִסִּינַי וּמְסָרָהּ לִיהוֹשֻׁעַ וִיהוֹשֻׁעַ לִזְקֵנִים וּזְקֵנִים')
        })
    
        it('citation run in english mode',()=>{
            cy.setLanguageMode('English')
            cy.findCitation('משה קבל תורה מסיני ומסרה ליהושע')
            cy.resultsTests(' משֶׁה קִבֵּל תּוֹרָה מִסִּינַי וּמְסָרָהּ לִיהוֹשֻׁעַ וִיהוֹשֻׁעַ לִזְקֵנִים וּזְקֵנִים')
        })
    })

})


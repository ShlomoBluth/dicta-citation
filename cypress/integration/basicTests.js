/// <reference types="cypress"/>

//run basic tests on citation run

describe('basicTests',()=>{

    beforeEach(() => {
        cy.visit('https://citation.dicta.org.il/')
    })

    it('abbreviation run in hebrew mode',()=>{
        cy.setLanguageMode('Hebrew')
        cy.findCitation('משה קבל תורה מסיני ומסרה ליהושע')
        cy.resultsTests(' משֶׁה קִבֵּל תּוֹרָה מִסִּינַי וּמְסָרָהּ לִיהוֹשֻׁעַ וִיהוֹשֻׁעַ לִזְקֵנִים וּזְקֵנִים')
    })

    it('abbreviation run in english mode',()=>{
        cy.setLanguageMode('English')
        cy.findCitation('משה קבל תורה מסיני ומסרה ליהושע')
        cy.resultsTests(' משֶׁה קִבֵּל תּוֹרָה מִסִּינַי וּמְסָרָהּ לִיהוֹשֻׁעַ וִיהוֹשֻׁעַ לִזְקֵנִים וּזְקֵנִים')
    })
})
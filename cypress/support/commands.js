Cypress.Commands.add('citationRequest',(language,status,message,seconds)=>{
    cy.setLanguageMode(language)
    cy.intercept('POST', '/api', {
      delayMs:1000*seconds,
      statusCode: status
    },
    ).as('api')
    cy.get('textarea[id="textEntryArea"]').type('משה קיבל תורה')
    cy.contains(message).should('not.exist')
    cy.get('[id="findInstancesBttn"]').click()
    cy.wait('@api').then(xhr=>{
      cy.wrap(xhr.response.statusCode).should('eq', status).then(()=>{
        cy.contains(message).should('exist')
      })
    })
  })  

  Cypress.Commands.add('setLanguageMode',(language)=>{
    cy.get('body').then(elem => {
      let languageMode
      if(language=='Hebrew'){
        languageMode='he'
      }else if(language=='English'){
        languageMode=''
      }
      let classAttr = elem.attr("class").substring(0,2);
      if(classAttr!=languageMode)
      {
        cy.get('a').contains(/^English$/||/^עברית$/).click();
      }
      if(languageMode=='he'){
        cy.get('a').contains(/^English$/).should('exist')
      } else{
        cy.get('a').contains(/^עברית$/).should('exist')
      }
    })
  })
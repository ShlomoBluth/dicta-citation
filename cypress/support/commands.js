Cypress.Commands.add('citationRequest',({language,status=200,message='',delaySeconds=0})=>{
  cy.setLanguageMode(language)
  cy.intercept('POST', '/api', {
    delayMs:1000*delaySeconds,
    statusCode: status
  },
  ).as('api')
  cy.get('textarea[id="textEntryArea"]').type('משה קיבל תורה')
  if(message.length>0){
    cy.contains(message).should('not.exist')
  }
  cy.get('[id="findInstancesBttn"]').click()
  if(delaySeconds>0){
    cy.get('[class*="spinner"').should('exist')
  }
  cy.wait('@api',{responseTimeout:1000*delaySeconds})
  cy.get('@api').its('response.statusCode').should('eq',status)
  cy.get('[class*="spinner"').should('not.exist')
  if(message.length>0){
    cy.contains(message).should('exist')
  }
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
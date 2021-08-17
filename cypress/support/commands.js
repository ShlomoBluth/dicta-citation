
Cypress.Commands.add('visitpage',({url})=>{
  function visitpage(status,Attempts){
    if(status!=200){
      cy.wrap(Attempts).should('be.lt', 10)
      cy.intercept(url).as('webreq'+Attempts)
      cy.visit(url)
      cy.get('@webreq'+Attempts).then(req=>{
        visitpage(req.response.statusCode,Attempts+1)
      })
    }
  }
  visitpage(0,0)
})

Cypress.Commands.add('findCitation',(text)=>{
  cy.get('textarea[id="textEntryArea"]').type(text)
  cy.get('[id="findInstancesBttn"]').click()
})

Cypress.Commands.add('resultsTests',(text)=>{
  let citationResults=''
  cy.get('div[class*="matched-text"]').within(()=>{
    cy.get('b').parent().then($res=>{
      expect($res.text()).to.eq(text)
    })
  })
})

Cypress.Commands.add('citationRequest',({url,language,status=200,message='',delaySeconds=0})=>{
  cy.setLanguageMode(language)
  cy.intercept('POST', '**/api/'+url+'**', {
    delayMs:1000*delaySeconds,
    statusCode: status
  },)
  if(message.length>0){
    cy.contains(message).should('not.exist')
  }
  cy.findCitation('משה קבל תורה מסיני ומסרה ליהושע')

  if(delaySeconds>0){
    cy.get('[class*="spinner"]',{timeout:1000*delaySeconds}).should('not.exist')
  }
  
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
      cy.get('a').contains(/^English$|^עברית$/g).click({force: true});
    }
    if(languageMode=='he'){
      cy.get('a').contains(/^English$/).should('exist')
    } else{
      cy.get('a').contains(/^עברית$/).should('exist')
    }
  })
})  
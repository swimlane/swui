describe('Inputs', () => {
  before(() => {
    cy.visit('/inputs');
    cy.get('.page-loader').should('not.exist', { timeout: 20000 });
  });

  describe('Text Input', () => {
    beforeEach(() => {
      cy.getByName('input1').as('CUT');
    });

    afterEach(() => {
      cy.get('@CUT').fill('A Value');
    });

    it('has a label', () => {
      cy.get('@CUT').findLabel().should('contain.text', 'Name');
    });

    it('has no placeholder', () => {
      cy.get('@CUT').findInput().should('have.attr', 'placeholder', '');
    });

    it('enters and clears text', () => {
      const text = 'hello world';

      cy.get('@CUT').fill(text).getValue().should('equal', text);

      cy.get('@CUT').clear().getValue().should('equal', '');
    });

    it('underlines active input', () => {
      cy.get('@CUT')
        .find('.ngx-input-underline .underline-fill')
        .should(el => {
          expect(el).to.have.attr('style');
          expect(Cypress.$(el).attr('style')).to.match(/.*width:\s*0%.*/);
        });

      // when we click on the input box
      // it underlines it
      cy.get('@CUT').click();

      cy.get('@CUT')
        .find('.ngx-input-underline .underline-fill')
        .should(el => {
          expect(el).to.have.attr('style');
          expect(Cypress.$(el).attr('style')).to.match(/.*width:\s*100%.*/);
        });
    });
  });

  describe('Native Input', () => {
    beforeEach(() => {
      cy.get('[sectiontitle="Native"] input').first().as('CUT');
    });

    it('enters and clears text', () => {
      const text = 'hello world';

      cy.get('@CUT').fill(text);

      cy.get('@CUT').getValue().should('equal', text);

      cy.get('@CUT').clear();

      cy.get('@CUT').getValue().should('equal', '');
    });
  });

  describe('Textarea Input', () => {
    beforeEach(() => {
      cy.getByName('input111').as('CUT');
    });

    afterEach(() => {
      cy.get('@CUT').fill('A Value');
    });

    it('has a label', () => {
      cy.get('@CUT').findLabel().contains('Name');
    });

    it('has no placeholder', () => {
      cy.get('@CUT').findInput().should('have.attr', 'placeholder', '');
    });

    it('enters text', () => {
      const text = ' hello world';

      cy.get('@CUT').fill(text);

      cy.get('@CUT').getValue().should('equal', text);
    });

    it('underlines active input', () => {
      cy.get('@CUT')
        .find('.ngx-input-underline .underline-fill')
        .should(el => {
          expect(el).to.have.attr('style');
          expect(Cypress.$(el).attr('style')).to.match(/.*width:\s*0%.*/);
        });

      // when we click on the input box
      // it underlines it
      cy.get('@CUT').findInput().click();

      cy.get('@CUT')
        .find('.ngx-input-underline .underline-fill')
        .should(el => {
          expect(el).to.have.attr('style');
          expect(Cypress.$(el).attr('style')).to.match(/.*width:\s*100%.*/);
        });
    });
  });

  describe('Text Input with placeholder', () => {
    beforeEach(() => {
      cy.getByName('input2').as('CUT');
    });

    afterEach(() => {
      cy.get('@CUT').fill('');
    });

    it('adds a placeholder', () => {
      cy.get('@CUT').findInput().should('have.attr', 'placeholder', 'Enter your first and last name');
    });

    it('underlines active input', () => {
      // reset active input box
      cy.focused().blur();

      cy.get('@CUT')
        .find('.ngx-input-underline .underline-fill')
        .should(el => {
          expect(el).to.have.attr('style');
          expect(Cypress.$(el).attr('style')).to.match(/.*width:\s*0%.*/);
        });

      // when we click on the input box
      // it underlines it
      cy.get('@CUT').findInput().click();

      cy.get('@CUT')
        .find('.ngx-input-underline .underline-fill')
        .should(el => {
          expect(el).to.have.attr('style');
          expect(Cypress.$(el).attr('style')).to.match(/.*width:\s*100%.*/);
        });
    });
  });

  describe('Text Input with prefix and suffix', () => {
    beforeEach(() => {
      cy.getByLabel('Prefix Suffix Input').as('CUT');
    });

    afterEach(() => {
      cy.get('@CUT').fill('');
    });

    it('has a label', () => {
      cy.get('@CUT').findLabel().should('contain.text', 'Prefix Suffix Input');
    });

    it('have no placeholder', () => {
      cy.get('@CUT').findInput().should('have.attr', 'placeholder', '');
    });

    it('adds a prefix', () => {
      cy.get('@CUT').find('ngx-input-prefix i').should('have.class', 'icon-add-new');
    });

    it('adds a suffix', () => {
      cy.get('@CUT').should('contain.text', 'Clear');
    });
  });

  describe('Disabled Example', () => {
    beforeEach(() => {
      cy.getByName('input3').as('CUT');
    });

    it('has a label', () => {
      cy.get('@CUT').findLabel().should('contain.text', 'Disabled Example');
    });

    it('has no placeholder', () => {
      cy.get('@CUT').findInput().should('have.attr', 'placeholder', '');
    });

    it('has a value', () => {
      cy.get('@CUT').getValue().should('equal', 'Disabled value');
    });

    it('should be disabled', () => {
      cy.get('@CUT').findInput().should('be.disabled');
    });
  });

  describe('Required Example', () => {
    beforeEach(() => {
      cy.get('ngx-input[name="input4"]').as('CUT');
    });

    it('has a label with asterisk', () => {
      cy.get('@CUT').findLabel().should('contain.text', 'Required Input Example Of The Day');
      // todo: check if the asterisk is in the right place
    });

    it('has no placeholder', () => {
      cy.get('@CUT').findInput().should('have.attr', 'placeholder', '');
    });

    it('should be required', () => {
      cy.get('@CUT').findInput().should('have.attr', 'required');
    });
  });

  describe('Default value', () => {
    beforeEach(() => {
      cy.get('ngx-input[name="input44"]').as('CUT');
    });

    it('has a label', () => {
      cy.get('@CUT').findLabel().should('contain.text', 'Default value');
    });

    it('has no placeholder', () => {
      cy.get('@CUT').findInput().should('have.attr', 'placeholder', '');
    });

    it('should be required', () => {
      cy.get('@CUT').getValue().should('equal', 'Defaulted!');
    });
  });

  describe('Password', () => {
    beforeEach(() => {
      cy.getByName('input6').as('CUT');
    });

    it('has a label', () => {
      cy.get('@CUT').findLabel().contains('Password *');
    });

    it('has no placeholder', () => {
      cy.get('@CUT').findInput().should('have.attr', 'placeholder', '');
    });

    it('should have a password ', () => {
      cy.get('@CUT').findInput().first().should('have.attr', 'type', 'password');
    });

    it('should allow input', () => {
      const text = '>vQ9~4W$%ag!ACe$';

      cy.get('@CUT').fill(text);
      cy.get('@CUT').getValue().should('equal', text);
    });

    it('should toggle password', () => {
      cy.get('@CUT').findInput().first().should('have.attr', 'type', 'password');

      cy.get('@CUT').find('.icon-eye').click();

      cy.get('@CUT').findInput().first().should('have.attr', 'type', 'text');
    });
  });
});

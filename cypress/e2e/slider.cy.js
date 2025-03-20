describe('Swiper Gallery Test', function () {
  it('Checks if second slide contains "United Kingdom"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.get('.swiper-slide-active').should('contain', 'United Kingdom');
  });
});

describe('Swiper Gallery Test', function () {
  it('Checks if third slide contains "Paris"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.swiper-button-next').click({ force: true });
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'Paris');
  });
});

describe('Swiper Gallery Test', function () {
  it('Checks if the user can swipe slides both sides', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click({ force: true });
    cy.wait(2000);
    cy.get('.swiper-slide-fully-visible').should('contain', 'United Kingdom');
    cy.get('.swiper-button-prev').click({ force: true });
    cy.wait(2000);
    cy.get('.swiper-slide-fully-visible').should('contain', 'Rome');
  });
});

describe('Swiper Gallery Test', function () {
  it('Checks if the title and description is visible and appropriate for every slide', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-slide-fully-visible').should('contain', 'Rome');
    cy.get('.swiper-slide-fully-visible').should('contain', 'Italy');
    cy.get('.swiper-button-next').click({ force: true });
    cy.wait(2000);
    cy.get('.swiper-slide-fully-visible').should('contain', 'London');
    cy.get('.swiper-slide-fully-visible').should('contain', 'United Kingdom');
    cy.get('.swiper-button-next').click({ force: true });
    cy.wait(2000);
    cy.get('.swiper-slide-fully-visible').should('contain', 'Paris');
    cy.get('.swiper-slide-fully-visible').should('contain', 'France');
  });
});
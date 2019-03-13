describe('Drop file into dropzone', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('successfully uploads a file', () => {
    cy.fixture('cy.png', 'base64').then(fileContent => {
      cy.get('[data-cy="dropzone"]').upload(
        { fileContent, fileName: 'cy.png', mimeType: 'image/png' },
        { uploadType: 'drag-n-drop' },
      );
    });
  });
});
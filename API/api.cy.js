describe("Test suite", () => {
  it("GET request", () => {
    cy.request({
      method: "GET",
      url: "https://reqres.in/api/users/2",
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it("POST request", () => {
    cy.request({
      method: "GET",
      url: "https://reqres.in/api/users",
      body: {
        name: "morpheus",
        job: "leader",
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it("PUT request", () => {
    cy.request({
      method: "PUT",
      url: "https://reqres.in/api/users/2",
      body: {
        name: "morpheus",
        job: "zion resident",
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });
  it("PATCH request", () => {
    cy.request({
      method: "PUT",
      url: "https://reqres.in/api/users/2",
      body: {
        name: "morpheus",
        job: "zion resident",
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });
  it("DELETE request", () => {
    cy.request({
      method: "DELETE",
      url: "https://reqres.in/api/users/2",
    }).then((response) => {
      expect(response.status).to.eq(204);
    });
  });
});

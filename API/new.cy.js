describe("Test suite", () => {
  // const base_url = "https://api.trello.com";
  // const api_key = "b4418a2ab9b32350f6c1ff5da1ffee31";
  // const api_token =
  //   "ATTA6788993e5fc1b2928cd0e4ec63fd3f511b08eaffc7aeb5d2ad02270892501e72C071ADEF";

  const base_url = "https://api.trello.com";
  const api_key = "22f7908ab822229043280abaa6288268";
  const api_token =
    "ATTA57855a47b479d87c5124cde87e29fdda7ad5366ff546ee695b53dc11dcaaea8d62D90CA0";

  const board_name = "Cosmos";
  let id;

  // Create a new Trello board
  it("Creating a new Trello Board", () => {
    cy.request({
      method: "POST",
      url: "${base_url}/1/boards/",
      qs: {
        name: board_name,
        key: api_key,
        token: api_token,
      },
    }).then((response) => {
      const res = response.body;
      id = res.id;
      expect(response.status).to.eq(200);
      cy.log("Board ID:", id);
    });
  });

  // Get board details
  it("Fetching the board details", () => {
    cy.request({
      method: "GET",
      url: "${base_url}/1/boards/${id}",
      qs: {
        key: api_key,
        token: api_token,
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      cy.log("Board Details:", response.body);
    });
  });

  // Update the board's name
  it("Updating the board name", () => {
    cy.request({
      method: "PUT",
      url: "${base_url}/1/boards/${id}",
      qs: {
        name: "Cosmos Updated",
        key: api_key,
        token: api_token,
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      // expect(response.body.name).to.eq("Cosmos Updated");
    });
  });

  // Add a list to the board
  it("Creating a list in the board", () => {
    cy.request({
      method: "POST",
      url: "${base_url}/1/lists",
      qs: {
        name: "To-Do",
        idBoard: id,
        key: api_key,
        token: api_token,
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      cy.log("List Created:", response.body);
    });
  });

  // Delete the board
  it("Deleting the Trello Board", () => {
    cy.request({
      method: "DELETE",
      url: "${base_url}/1/boards/${id}",
      qs: {
        key: api_key,
        token: api_token,
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });
});

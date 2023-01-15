describe("Mocha skeleton test suite", () => {

  before("Initialize the browser", async function () {
    console.log("before");
  });

  it("execute the test in the browser", async () => {
    console.log("actual test");
  });

  after("close the browser", async function () {
    console.log("after");
  });
  
});

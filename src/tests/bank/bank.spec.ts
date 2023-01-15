import { expect } from "chai";
import { BaseClass } from "../../base/bank/BaseClass";
import { BankPage } from "../../base/bank/BankPage";

describe("Bank of Braavos Test Suite", () => {
  let baseClass: BaseClass;

  before("Initialize the browser", async () => {
    baseClass = new BaseClass();
    await baseClass.setupDriver();
  });

  it("execute the test in the browser", async () => {
    await baseClass.openApplication();
    await baseClass.clickAndType(BankPage.username, "user");
    await baseClass.clickAndType(BankPage.password, "test");
    await baseClass.clickElement(BankPage.btnLogin);
  });

  after("close the browser", async function () {
    await baseClass.sleep(5000);
    await baseClass.closeDriver();
  });
  
});

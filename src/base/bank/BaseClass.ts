import { Config } from "./config";
require("chromedriver");
const { Builder, until } = require("selenium-webdriver");

export class BaseClass {
  public driver: any;

  setupDriver = async (): Promise<any> => {
    this.driver = await new Builder().forBrowser(Config.BROWSER_NAME).build();
    return this.driver;
  };

  openApplication = async (): Promise<any> => {
    await this.driver.get(Config.URL);
    return await this.driver.manage().window().maximize();
  };

  clickAndType = async (locator: any, text: string): Promise<any> => {
    await this.driver.findElement(locator).click();
    return await this.driver.findElement(locator).sendKeys(text);
  };

  clickElement = async (locator: any): Promise<any> => {
    return await this.driver.findElement(locator).click();
  };

  waitForElement = async (locator: any): Promise<any> => {
    return await this.driver.wait(
      until.visibilityOfElementLocated(locator),
      Config.WAIT_TIME
    );
  };

  sleep = async (ms: any): Promise<any> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(true);
      }, ms);
    });
  };

  closeDriver = async () => {
    await this.driver.quit();
  };
}

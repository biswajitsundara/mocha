const { By } = require("selenium-webdriver");

export class BankPage {
    public static username:any = By.name("login");
    public static password:any = By.name("password");
    public static btnLogin:any = By.xpath("//button[@type='submit']");
}
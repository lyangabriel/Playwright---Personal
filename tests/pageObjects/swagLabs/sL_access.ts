import { Page, expect } from "@playwright/test"
import { BasePage } from "./sL_basePage"
import access from "../../testData/swagLabs/sL_acces.json"

export class Login extends BasePage {

    constructor(page: Page) {
        super(page)
    }

    async loginToSL() {
        const commonLocators = this.commonLocators
        await this.page.goto(access.sL.url)

        await commonLocators.populateTextbox('user-name','')
        await commonLocators.populateTextbox('password','')
    }
}
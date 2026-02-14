import { Page } from "@playwright/test"
import { BasePage } from "../../basePage/basePage"
import Data from "../../testData/00_Navigation/navigation.json"

export class Navigation extends BasePage {

    constructor(page: Page) {
        super(page)
    }

    async navigateToDemoQA() {
        const data = Data.DemoQA
        await this.navigateTo(data.path)
    }

}
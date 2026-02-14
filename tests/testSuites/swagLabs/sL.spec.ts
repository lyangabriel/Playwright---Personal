import {test} from "@playwright/test"
import { PageManager } from "../../pageObjects/swagLabs/sL_pageManager"

test.slow()

let pageManager:PageManager

test('Navigate to Swag Labs', async({page}) => {
    pageManager = new PageManager(page)
    await pageManager.loginToSL().loginToSL()
    //await pageManager.registerFunctionality().registerToADS()
})
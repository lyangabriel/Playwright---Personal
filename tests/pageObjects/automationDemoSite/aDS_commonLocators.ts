import { Page, expect } from "@playwright/test"

export class CommonLocators {

    readonly page: Page

    constructor(page: Page) {
        this.page = page
    }

    // async populateTextboxViaNgModel (textboxName:string, ngmodel:string, value:string) {
    //     const textboxLocatorViaNgModel = this.page.locator(`div.form-group:has-text("${textboxName}") input[ng-model="${ngmodel}"]`)
    //     await textboxLocatorViaNgModel.fill(value)
    // }

    async populateTextboxViaNgModel (textboxName:string, ngmodel:string, value:string) {
        const textboxLocatorViaNgModel = this.page.locator(`label:has-text("${textboxName}") + div input[ng-model="${ngmodel}"]`)
        await textboxLocatorViaNgModel.fill(value)
    }

    async populateTextbox (textboxName:string,value:string) {
        const textboxLocatorViaNgModel = this.page.getByRole('textbox', {name:`${textboxName}`})
        await textboxLocatorViaNgModel.fill(value)
    }
}

/*
async clickSignOutButton(id:string) {
        //const signOutButtonLocator = this.page.locator(this.SignOutButton)
        const signOutButtonLocator = this.page.locator(`i.fa-sign-out`)
        await signOutButtonLocator.click()
    }

    async clickMenuOption(id: string, menuOption: string) {
        const menuOptionLocator = this.page.locator(`#${id}:has-text("${menuOption}")`)
        await menuOptionLocator.click()
    }

    async clickSubMenuOption(id: string, subMenuOption: string) {
        const subMenuOptionLocator = this.page.locator(`#${id}:has-text("${subMenuOption}")`)
        await subMenuOptionLocator.click()
    }

    async populateTextbox(textboxName: string, id:string, value: string) {
        const textboxLocator = this.page.locator(`div:has-text("${textboxName}") input#${id}`)
        await textboxLocator.clear()
        await textboxLocator.fill(value)
    }

    async populateTextarea(id: string, value: string) {
        const textareaLocator = this.page.locator(`textarea#${id}`)
        await textareaLocator.clear()
        await textareaLocator.fill(value)
    }

    async clickButton(buttonName: string) {
        const buttonTextLocator = this.page.locator(`div >> text="${buttonName}"`)
        await buttonTextLocator.click()
    }

    async clickPopupIcon(id: string) {
        const popupIconLocator = this.page.locator(`.popup-content i#${id}`)
        await popupIconLocator.click()
    }

    async verifyPopupText(text: string) {
        const textLocator = this.page.locator(`.popup-content span:has-text("${text}")`)
        await expect(textLocator).toBeVisible()
    }

    async verifyText(text: string) {
        const textLocator = this.page.locator(`span:has-text("${text}")`)
        await expect(textLocator).toBeVisible()
    }

    async verifyTextViaID(id: string, text: string) {
        const textLocator = this.page.locator(`span#${id}:has-text("${text}")`)
        await expect(textLocator).toBeVisible()
    }

    async verifyPageTitle(id: string, text: string) {
        const pageTitleLocator = this.page.locator(`div#${id} span:has-text("${text}")`)
        await expect(pageTitleLocator).toBeVisible()
    }

    async selectRadioButton(radioButtonName: string) {
        const radioButtonViaLabelLocator = this.page.locator(`div input + label >> text="${radioButtonName}"`)
        await radioButtonViaLabelLocator.check()
    }

    async verifyTableSearchResult(columName: string, text: string) {
        const tableSearchResultLocator = this.page.locator(`td[data-header="${columName}"] span:has-text("${text}")`)
        await expect(tableSearchResultLocator).toBeVisible()
    }

    async selectDropdownByLabel(textboxName:string, id: string, dropdownValue: string) {
        const dropdownLocator = this.page.locator(`div:has-text("${textboxName}") select#${id}`)
        await dropdownLocator.selectOption({ label: `${dropdownValue}` })
    }

    async selectDropdownByValue(textboxName:string, id: string, dropdownValue: string) {
        const dropdownLocator = this.page.locator(`div:has-text("${textboxName}") select#${id}`)
        await dropdownLocator.selectOption({ value: `${dropdownValue}` })
    }

    async clickInformationssøgningNavigationTitle(navigationTitle: string) {
        //const menuOption = this.page.getByTestId(id).locator(`span:text("${text}")`)
        const informationssøgningNavigationTitleLocator = this.page.getByText(navigationTitle)
        await informationssøgningNavigationTitleLocator.click()
    }

    async validateFeedbackMessage() {
        const feedbackMessageLocator = this.page.locator('.feedback-message-text')
        await expect(feedbackMessageLocator).toBeVisible()
    }

    async textContentFeedbackMessage(feedbackMessageTextContent: string) {
        const feedbackMessageLocator = this.page.locator('.feedback-message-text')
        const feedbackMessageText = await feedbackMessageLocator.textContent()
        console.log(`Text Content: ${feedbackMessageText}`)
        await expect(feedbackMessageText).toEqual(feedbackMessageTextContent)
        console.log(`${feedbackMessageText} = ${feedbackMessageTextContent}`)
    }

    async clickFeedbackMessage() {
        const feedbackMessageLocator = this.page.locator('.feedback-message-text')
        await feedbackMessageLocator.click()
    }
*/

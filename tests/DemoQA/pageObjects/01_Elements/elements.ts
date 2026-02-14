import { Page } from "@playwright/test"
import { BasePage } from "../../basePage/basePage"
import Data from "../../testData/01_Elements/elements.json"

export class Elements extends BasePage {

    constructor(page: Page) {
        super(page)
    }

    async navigateToElements() {
        const data = Data.Elements
        await this.waitForNumberOfSeconds(1)
        await this.clickCardBody(data.cardBody)
        await this.waitForNumberOfSeconds(1)
        await this.validateGroupHeader(data.groupHeader)
    }

    async elementsTextBox() {
        await this.clickMenuItem('Text Box')
    }

    async elementsCheckBox() {
        await this.clickMenuItem('Check Box')
    }

    async elementsRadioButton() {
        await this.clickMenuItem('Radio Button')
    }

    async elementsWebTables() {
        await this.clickMenuItem('Web Tables')
    }

    async elementsButtons() {
        await this.clickMenuItem('Buttons')
    }

    async elementsLinks() {
        await this.clickMenuItem('Links')
    }

    async elementsBrokenLinksImages() {
        await this.clickMenuItem('Broken Links - Images')
    }

    async elementsUploadAndDownload() {
        await this.clickMenuItem('Upload and Download')
    }

    async elementsDynamicProperties() {
        await this.clickMenuItem('Dynamic Properties')
    }

}
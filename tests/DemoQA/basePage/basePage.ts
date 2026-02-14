import { Page, expect } from "@playwright/test"

export class BasePage {

    readonly page: Page

    constructor(page: Page) {
        this.page = page
    }

    async navigateTo(url: string) {
        await this.page.goto(url)
    }

    async waitForNumberOfSeconds(timeInSeconds: number) {
        await this.page.waitForTimeout(timeInSeconds * 1000)
    }
    
    async clickCardBody(cardName: string) {
        const locator = this.page.locator('.card-body', { hasText: cardName })
        await locator.click()
    }

    async validateGroupHeader(headerName: string) {
        const locator = this.page.locator('.group-header .header-text', { hasText: headerName })
        await expect(locator).toBeVisible()
    }

    async clickMenuItem(menuName: string) {
        const locator = this.page.locator('.menu-list li span.text').getByText(menuName, { exact: true })
        await this.waitForNumberOfSeconds(0.5)
        await locator.click()
    }

    async populateTextbox(id: string, value: string) {
        const locator = this.page.locator(`input#${id}`)
        await locator.clear()
        await this.waitForNumberOfSeconds(0.5)
        await locator.fill(value)
    }

    async populateTextarea(id: string, value: string) {
        const locator = this.page.locator(`textarea#${id}`)
        await locator.clear()
        await this.waitForNumberOfSeconds(0.5)
        await locator.fill(value)
    }
    
}
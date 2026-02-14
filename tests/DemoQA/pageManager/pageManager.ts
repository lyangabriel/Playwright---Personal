import { Page } from "@playwright/test"
import { Navigation } from "../pageObjects/00_Navigation/navigation"
import { Elements } from "../pageObjects/01_Elements/elements"

export class PageManager {

    private readonly page: Page
    private readonly navigation: Navigation
    private readonly elements: Elements

    constructor(page: Page) {
        this.page = page
        this.navigation = new Navigation(this.page)
        this.elements = new Elements(this.page)
    }

    navigateToDemoQA() {
        return this.navigation
    }

    elementsFunctionality() {
        return this.elements
    }

}
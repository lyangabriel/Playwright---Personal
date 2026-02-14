import { test } from '@playwright/test'
import { PageManager } from '../../DemoQA/pageManager/pageManager'

test.slow()

test.beforeEach('Navigate to Demo QA', async ({ page }) => {
    const pageManager = new PageManager(page)
    await pageManager.navigateToDemoQA().navigateToDemoQA()
})

test('Elements Functionality', async ({ page }) => {
    const pageManager = new PageManager(page)
    await pageManager.elementsFunctionality().navigateToElements()
    await pageManager.elementsFunctionality().elementsTextBox()
    await pageManager.elementsFunctionality().elementsCheckBox()
    await pageManager.elementsFunctionality().elementsRadioButton()
    await pageManager.elementsFunctionality().elementsWebTables()
    await pageManager.elementsFunctionality().elementsButtons()
    await pageManager.elementsFunctionality().elementsLinks()
    await pageManager.elementsFunctionality().elementsBrokenLinksImages()
    await pageManager.elementsFunctionality().elementsUploadAndDownload()
    await pageManager.elementsFunctionality().elementsDynamicProperties()
})
import { Page } from "@playwright/test";

import { Login } from "./sL_access";
//import { Register } from "./aDS_Register";

export class PageManager {
    private readonly page: Page
    private readonly login:Login
    //private readonly register:Register

    constructor (page:Page){
        this.page = page
        this.login = new Login(this.page)
        //this.register = new Register(this.page)
    }

    loginToSL (){
        return this.login
    }

    // registerFunctionality (){
    //     return this.register
    // }
}

//import Page from './page';
/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage {

    /** get the search bar by name */
    get getsearchBar() {
        return $('[name="search_query"]');

    }
    get getsearchBtn() {
        return $('[name="submit_search"]');
    }

    get getlinkText() {
        console.log($);
        return $('=Printed Chiffon Dress');
    }


    /*Below functions are setting up the below elements**/
    async typeOnTheSearchBar() {

        (await this.getsearchBar).setValue("shirts");
    }

    async clickOntheSearchButton() {
        (await this.getsearchBtn).click();

    }

   async reteriveLinkText() { 
   console.log("typescript1");  
   console.log(await this.getlinkText+"mehaktTest");  
   const mehak =(await this.getlinkText).getText();
   console.log(mehak +"typescript2");
     
   }

}
export const loginPage = new LoginPage();

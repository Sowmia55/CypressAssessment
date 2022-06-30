declare namespace Cypress{

    interface Chainable {

        /**

         * @param username - takes username or id

         * @param password - takes user password

         */

        login(username: string, password: string): Chainable<Element>

        /**

         * @param name - takes name

         * @param email - takes email

         * @param subject - takes subject

         * @param comment - takes comment

         */

        sumbitFeedback(name:string,email:string,subject:string,comment:string):Chainable<Element>

    }

}
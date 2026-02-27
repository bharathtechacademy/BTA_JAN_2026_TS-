//Abstraction : Abstraction is the concept of hiding the implementation. 

//method: A method is a block of code or collection of statements written together inside the block to perform specific tasks. 

abstract class Application {

    loginintoApplication(): void {
        console.log("Launch the Browser");
        console.log("Enter Credentials");
        console.log("Click on the Login button and verify the login is successful.");
    }

    abstract logOutFromApplication(): void;

}

class Facebook {

    //let obj  = new Application();

}

 class Google extends Application {

    logOutFromApplication(): void{
        console.log("Click on the Logout button. ");
        console.log("Verify logout is successful. ");
    }

    getMethods() {
        this.loginintoApplication();
    }

}
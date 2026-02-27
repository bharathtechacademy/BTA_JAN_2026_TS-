//interface : 100% abstract class

interface Application1 {

    loginintoApplication(): void;

    logOutFromApplication(): void;

}

interface Application2 {

    verifyHomePage(): void;

    verifyDashboard(): void;

}

class Google implements Application1,Application2{


    loginintoApplication(): void {
        throw new Error("Method not implemented.");
    }
    logOutFromApplication(): void {
        console.log("Logging out from Google application...");
        // Clear session and redirect to logout page
    }

    verifyHomePage(): void {
        console.log("Verifying Google home page...");
        // Assert home page elements are visible
    }

    verifyDashboard(): void {
        console.log("Verifying Google dashboard...");
    }

    
}


//extends ==> Extending the help ==> Anurag is going to help Bharath. In return, Bharath is also going to help Anurag. 
//implements ==> Implementing parent class unimplemented methods in child class. In return, we are not going to get any properties from parent class. 
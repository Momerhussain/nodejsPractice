/**
 * @author Copyright RIKSOF (Private) Limited - All Rights Reserved.
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential.
 */

/**
 * This class models a single location point.
 */
class GPSLocation {
    /**
     * Constructor sets the values for this model. Please note all member
     * variables in this class are public and can be accessed directly.
     *
     * @param {string} t                          Type of the coordinates.
     *                                            Will always equal 'point'.
     * @param {number[]} coords                   Coordinates is an array 
     *                                            of two numbers. First number
     *                                            is longitude and second 
     *                                            number is latitute.
     */
    constructor(t, coords) {
        this.type = t;
        this.coordinates = coords;
    }
}

/**
 * The user class contains complete information about the user.
 * For simplicity, we just show the most important information relevant to
 * the current problem.
 */
class User {
    /**
     * This is ths constructor for this object. Please note 
     * _deviceToken and _location are private and should not be
     * accessed directly.
     *
     * @param {string} dt                 Device token.
     * @param {GPSLocation} loc           GPS location of user.
     * 
     */
    constructor(dt, loc) {
        this._deviceToken = dt;
        this._location = loc;
    }

    /**
     * You may add modifications to the class below.
     */
}

/**
 * This class models the new user information received.
 */
class UserInput {
    /**
     * This is ths constructor for this object. Please note 
     * deviceToken and location are public.
     *
     * @param {string} dt                 Device token.
     * @param {GPSLocation} loc           GPS location of user.
     * 
     */
    constructor(dt, loc) {
        this.deviceToken = dt;
        this.location = loc;
    }


}

/**
 * This function updates certain user details, that change frequently.
 *
 * @param {User} info               The current user details that are
 *                                  saved in the DB.
 * @param {UserInput} input         New information received from the user.
 *                                  We will use this information to update
 *                                  the user information.
 *
 * @returns {User} info             The user object is updated with the new
 *                                  information.
 */
function updateUserDetails(info, input) {
    /**
     * You may add modifications to the function below.
     */

    //   var user =new UserInput();

    let u = new User('0823D1231F4A',
    new GPSLocation('point', [24.8607, 67.0011]));

    console.log(input,"input");
    console.log(info,"info");
    
    console.log(input);
   
    // console.log(info)
    // console.log(info._location.type);
    info._location.type="marker"
    info._location.coordinates[0]=30.999
    info._location.coordinates[1]=60.999

    console.log(info,"update");
    // console.log(input)
    return info ;

}

/**
 * The test cases that need to pass for above function. This will typically
 * be part of another file but has been placed here for simplicity.
 */

/**
 * In this first test case, we update both the fields.
 */
// Initialize a user with existing information.
let u = new User('0823D1231F4A',
    new GPSLocation('point', [24.8607, 67.0011]));

// The new information that is received from the user
const inp = new UserInput('ED81347E14CA',
    new GPSLocation('point', [31.5204, 74.3587]));

// Update user details
u = updateUserDetails(u, inp);

// Confirm user details have been updated
console.log(`The user details have been updated: ${u.deviceToken === inp.deviceToken && u.location === inp.location}<br />`);

/**
 * In this second test case, we update just the deviceToken.
 */
// Initialize the second user.
let u2 = new User('0823D1231F4A',
    new GPSLocation('point', [24.8607, 67.0011]));

// The new information that is received from the user
const inp2 = new UserInput('ED81347E14CA');

// Update user details
u2 = updateUserDetails(u2, inp2);

// Confirm user details have been updated
console.log(`The second user details have been updated: ${u2.deviceToken === inp2.deviceToken && u2.location !== inp2.location}<br />`);

import express from "express" ;

import axios from "axios";

const app = express();
const port = 8080; // default port to listen

// define a route handler for the default home page
app.get( "/", ( req, res ) => {
    res.send( "You shouldn't be here >:(" );
} );


/**
 * /users/:battleNetID/profile
 * Endpoint for requesting a profile from the OW server
 *
 * :battleNetID
 *      This is the battle net ID. Must be formatted as such:
 *          "Linther#1473" = "Linther-1473"
 *      Make note that "#" is replaced with "-"
 */
app.get( "/users/:battleNetID/profile", (req, res) => {
    const battleTag = req.params.battleNetID;
    // tslint:disable-next-line:no-console
    console.log( `https://ow-api.com/v1/stats/pc/us/${ battleTag }/profile` );
    axios({
        method: 'GET',
        url: `https://ow-api.com/v1/stats/pc/us/${ battleTag }/profile`
    })
    .then((response) => {
        res.send(battleTag)

        // To do:
        //  - Save Info to DB
    }, (error) => {
        res.send(manageOriginApiError(error))
    });
});


function manageOriginApiError(error:any){
    return(error);
}

// start the Express server
app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ port }` );
} );
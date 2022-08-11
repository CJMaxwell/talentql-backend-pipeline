# How Does it Work?

This app can used following these guidelines:
- The baseUrl is defined in the `properties.json` files as `deployedAppURL` which returns a default message.
- It has an endpoint `/howold/:dob` where `dob` is a valid date of birth.
- The `dob` must be a valid timestamp in the format `YYYY-MM-DD` e.g `1998-11-20`, `2012-04-23T18:25:43.511Z`
- The endpoint returns a status code of `200` and the appropriate age if the query string is valid or a status code of 
`400` and a corresponding message if the query string is invalid.
- This endpoint `/howold/:dob` is limited to maximum of 3 calls in a second and when exceeded return a status code of `429` and a corresponding message.

Happy cracking.
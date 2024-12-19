// import { post } from "axios";

// const CLIENT_ID = "e1a154e7c82044aeaab59f942ba4f734";
// const CLIENT_SECRET = "862a33216c9245a8998eb67469cb64dc";
// const REDIRECT_URI = "http://localhost:3000/callback";
// const AUTH_URL = "https://accounts.spotify.com/api/token";

// async function getAccessToken(code) {
//   const response = await post(
//     AUTH_URL,
//     new URLSearchParams({
//       grant_type: "authorization_code",
//       code,
//       redirect_uri: REDIRECT_URI,
//       client_id: CLIENT_ID,
//       client_secret: CLIENT_SECRET,
//     }),
//     { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
//   );

//   return response.data.access_token;
// }

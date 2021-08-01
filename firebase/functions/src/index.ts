import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
const express = require("express")
const cors = require("cors")

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//

// firebase.initializeApp({
//   apiKey: "AIzaSyA78SdvVANyn2barpW-jsqPr-AZ3zVJTgA",
//   authDomain: "fir-be26f.firebaseapp.com",
//   projectId: "fir-be26f",
//   storageBucket: "fir-be26f.appspot.com",
//   messagingSenderId: "706854423893",
//   appId: "1:706854423893:web:7aa904dc7756e5ffaab3dc"
// })

admin.initializeApp()
const db = admin.firestore();
const app = express();
app.use(cors({ origin: true }));
// enum REQUEST_METHOD {
//   GET ="GET",
//   POST ="POST",
//   PUT ="PUT",
//   DELETE ="DELETE"
// }


app.get("/", async(request :any, response:any) => {
  const users:any[] = []
const snapshot = await db.collection("users").get()
snapshot.forEach(doc => { users.push(doc?.data()) })

response.send(users)
})
app.get("/:id", (request :any, response:any) => {
response.send(request.params.id)
})

export const users = functions.https.onRequest(app)
//   functions.logger.info("Hello logs!", {structuredData: true});
  


  
//   db.collection("users")
//     .add({
//       first: "Ada",
//       last: "Lovelace",
//       born: 1815,
//     }).then((docRef:any) => {
//       console.log("Document written with ID: ", docRef.id);
//     })
//     .catch((error:any) => {
//       console.error("Error adding document: ", error);
//       response.send("error:"+ error)
//       return 
//     });
//   response.send("Hello from Firebase!");
// });

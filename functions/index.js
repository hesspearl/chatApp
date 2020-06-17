const functions = require('firebase-functions');
const admin = require("firebase-admin")

admin.initializeApp()
const db = admin.firestore()
// var serviceAccount = require("./key/app-database-e9221-firebase-adminsdk-in39a-fccb47108e.json");

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: "https://app-database-e9221.firebaseio.com"
// });

exports.sendMSG= functions.https.onRequest(async(request , response)=>{
try{
   

    const data=  db.collection("chat").doc("room-1").collection("MSG").doc()
await data.set({
    message:request.body.message ,
    user: request.body.user ,
    pic:request.body.pic ,
   email:request.body.email,
   gender: request.body.gender,
        city: request.body.city,
        phone: request.body.phone,

})
    response.json({"ok": true})
}catch (err)
{
    response.json({"err":true})
}
})

exports.FCM= functions.firestore.document("chat/room-01/MSG/{docId}").onUpdate(change=>
  {
      const after= change.after.data()
      console.log(after)

      const payload={
          data:{
              temp:String(after.temp),
              conditions:after.conditions
          }
      }

    return  admin.messaging().sendToTopic("update",payload)
  }  )
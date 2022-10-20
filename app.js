
import { auth , db , storage } from "./config.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { collection, addDoc, Timestamp, getDocs, where, query, deleteDoc, doc } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";
import { ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-storage.js";


let button = document.getElementById("button");
let email = document.getElementById("email");
let password = document.getElementById("password");
let profile = document.getElementById("image");

button.addEventListener("click",() => {
  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then(async (userCredential) => {
      const user = userCredential.user;
      console.log(user);
      window.open("./sendver.html", "Send Verification", "height=400, width=800 top=200, left=400");

      // upload image 


        let file = profile.files[0];
        let imageRef = ref(storage, `images/${file.name}`);

            let uploaded = await uploadBytes(imageRef, file);
            let url = await getDownloadURL(imageRef);
            console.log(url, 'downloadable URL');

        console.log("upload called", profile.files[0]);

        let userDetail = collection(db, "UserDetail");
        await addDoc(userDetail, { email: email.value, UID: auth.currentUser.uid,image:url, time: Timestamp.fromDate(new Date()) });
    })


    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      alert("Please give the correct value");
    });
})


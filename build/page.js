import { auth, db, app } from "./config.js";
import { signOut } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { collection, addDoc, Timestamp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";
let signout = document.getElementById("signout");
signout.addEventListener("click", () => {
    signOut(auth).then(() => {
        // Sign-out successful.
        alert("Sign-out successful.");
        window.location = "./login.html";
    }).catch((error) => {
        // An error happened.

    });
})

let saveButton = document.querySelector("#save");
saveButton.addEventListener("click", async () => {
    let todosCollection = collection(db, "todoList");
   await addDoc(todosCollection, { info: todoInput.value , UID: auth.currentUser.uid , time: Timestamp.fromDate(new Date())});
    // console.log(auth.currentUser.uid);

});
let todoInput = document.querySelector("#input");

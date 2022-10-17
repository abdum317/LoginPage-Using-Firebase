import { auth, db } from "./config.js";
import { signOut } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { collection, addDoc, Timestamp, getDocs, where, query } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";
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

// let todoInput = document.querySelector("#input");

// let saveButton = document.querySelector("#save");
// saveButton.addEventListener("click", async () => {
//     let todosCollection = collection(db, "todoList");
//     await addDoc(todosCollection, { info: todoInput.value, UID: auth.currentUser.uid, time: Timestamp.fromDate(new Date()) });


//     const q = query(todosCollection, where("UID", "==", auth.currentUser.uid));
//     // getDocs(todosCollection)
//     // .then((items) => {
//     //     let snap = [];
//     //     items.docs.forEach(doc => {
//     //         snap.push({ ...doc.data(), id: doc.id })
//     //     });
//     //     console.log(snap.map((item)=> item.info));
//     // })
//     getDocs(q)
//         .then((items) => {
//             let snap = [];
//             items.docs.forEach(doc => {
//                 snap.push({ ...doc.data(), id: doc.id })
//             });
//             console.log(snap.map((item)=> item.info));
//         })

// });

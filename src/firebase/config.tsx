import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBrQL5suQch0MtEo8tHjpqdt9AXuZJqQTQ",

  authDomain: "recipeasy-b463c.firebaseapp.com",

  projectId: "recipeasy-b463c",

  storageBucket: "recipeasy-b463c.firebasestorage.app",

  messagingSenderId: "299682566621",

  appId: "1:299682566621:web:23cb9296aa4bed4d7b6634"

}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
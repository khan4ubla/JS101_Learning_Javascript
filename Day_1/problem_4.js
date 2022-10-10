const db_user = "sha@gmail.com";
const db_pass = "12345";
let user = "sha@gmail.com";
let pass = "12345";
if (db_user == user) {
  if (db_pass == pass) {
    console.log("Login successfully")
  } else {
    "Incorrect password"
  }
} else {
  console.log("wrong Email ")
}
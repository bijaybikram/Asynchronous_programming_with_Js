// post/create the new user
// fetch("https://dummyjson.com/users/add", {
//   method: "POST",
//   headers: {
//     "content-type": "application/json",
//   },
//   body: JSON.stringify({
//     firstName: "Ram",
//     lastName: "Khadka",
//     maidenName: "Ramey",
//     age: "21",
//   }),
// })
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// fetch all the users
// fetch("https://dummyjson.com/users", {})
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// // update the existing user
// fetch("https://dummyjson.com/users/1", {
//   method: "PUT",
//   headers: {
//     "content-type": "application/json",
//   },
//   body: JSON.stringify({
//     lastName: "Johncena",
//     age: "22",
//   }),
// })
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// delete the user
// fetch("https://dummyjson.com/users/1", {
//   method: "DELETE",
// })
//   .then((response) => response.json())
//   .then((data) => console.log({ message: "User deleted Succesfully", data }))
//   .catch((err) => console.log(err));

// Using Async Await

const getAllUsers = async () => {
  try {
    const response = await fetch("https://dummyjson.com/users");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

getAllUsers();

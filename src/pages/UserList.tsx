// import { useEffect, useState } from "react";

// interface User {
//   id: number;
//   name: string;
//     email: string;
//     phone: string;
// }

// function Users() {
//   const [users, setUsers] = useState<User[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((data: User[]) => {
//         setUsers(data);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return <h2>Loading...</h2>;
//   }

//   return (
//     <div>
//       <h1>User List</h1>

//       {users.map((user) => (
//         <div key={user.id}>
//           <p>{user.name}</p>
//               <p>{user.email}</p>
//               {user.phone}
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Users;

// import { useEffect, useState } from "react";

// function UserList() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     console.log("Component rendered");
//   },[]);

//   return (
//     <div>
//       <h2>{count}</h2>
//       <button onClick={() => setCount(count + 1)}>Increase</button>
//     </div>
//   );
// }
// export default UserList;
// import { useEffect, useState } from "react";

// function UserList() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     console.log("Count changed:", count);
//   }, [count]);

//   return <button onClick={() => setCount(count + 1)}>{count}</button>;
// }
// export default UserList;

import { useEffect, useState } from "react";
interface Person {
  name: string;
  age: number;
  email: string
}

const person: Person = {
  name: "Sara",
  age: 22,
  email:"fardosa@123",
};

function UserList() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  useEffect(() => {
    console.log("Name or age changed");
  }, [name, age]);

// function add(a: number, b: number): number {
//   return a   +  b;
// }
  
  
  // function joinFirstAndLastName(firstName: string, lastName: string):  void{
    // console.log(firstName  +  "  "  +  lastName) 
  // }
  
  //  joinFirstAndLastName("faduma", "maria")




  return (
    <div>
      <input onChange={(e) => setName(e.target.value)} />
      <button onClick={() => setAge(age + 1)}>Age {age}</button>
      <br />
      {person.name}
      {person.age}
      {person.email}
    </div>
  );
} 
export default UserList
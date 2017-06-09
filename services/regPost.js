export default function newContact() {
  return fetch('http://localhost:3000/reg', {}).then(res => res.json().then(JSON.stringify(data)));
}

// const data = {
//   firstname: 'ant',
// };
// fetch('http://localhost:3000/reg', {
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   method: 'POST',
//   body: JSON.stringify(data),
// });

let chosen = 3;

let myFriend = [
  { title: "Osama", age: 39, avaliable: true, skills: ["HTML", "CSS"] },
  {
    title: "Ahmed",
    age: 25,
    avaliable: false,
    skills: ["JavaScript", "React"],
  },
  { title: "Sayed", age: 32, avaliable: true, skills: ["Python", "Django"] },
];

function showDetails() {
  let {
    title: name,
    age,
    avaliable,
    skills: [, lastSkill],
  } = myFriend[chosen - 1];
  console.log(name);
  console.log(age);
  console.log(avaliable ? "Availabe" : "NotAvailabe");
  console.log(lastSkill);
}

showDetails();

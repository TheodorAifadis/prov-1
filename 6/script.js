function isSameUser(user1, user2) {
    return user1.email === user2.email
}

const person1 = {
    name: 'theo',
    email: 'theo@email.com'
}

const person2 = {
    name: 'einar',
    email: 'einar@email.com'
}

console.log(isSameUser(person1, person2))
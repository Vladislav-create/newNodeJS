function  creatorObject (name, type, description) {
    return {
        id: generateID(),
        name: name,
        type: type,
        description: description
    }
}

function generateID() {
    const time = Date.now();
    const randomNumber = Math.floor(Math.random() * 1000000001);

    const uniqueId = time + "_" + randomNumber;

    return uniqueId;
}

module.exports = { creatorObject }
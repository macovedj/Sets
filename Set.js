 const Set = () => {
    let members = {};

    const add = (member) => {
        members[member] = true;
    }
    
    const has = (member) => {
        return members[member] || false
    }

    const remove = (member) => {
        delete members[member]
    }

    return { members, add, has, remove }
}

export const Union = (A, B) => {
    let result = Set();
    let Amembers = Object.keys(A.members);
    let Bmembers = Object.keys(B.members);
    for (var member of Bmembers) {
        result.add(member);
    }
    for (var member of Amembers) {
        if (!B.has(member)) {
            result.add(member);
        }
    }
    return result;
}

export const Intersection = (A, B) => {
    let result = Set();
    let Amembers = Object.keys(A.members);
    for(var member of Amembers) {
        if (B.has(member)) {
            result.add(member);
        }
    }
    return result;
}


export const Difference = (A, B) => {
    let result = Set();
    let Amembers = Object.keys(A.members);
    for (var member of Amembers) {
        if (!B.has(member)) {
            result.add(member)
        }
    }
    return result;
}

export const SymDiff = (A, B) => {
    let result = Set();
    let Amembers = Object.keys(A.members);
    let Bmembers = Object.keys(B.members);
    for (var member of Amembers) {
        if (!B.has(member)) {
            result.add(member)
        }
    }
    for (var member of Bmembers) {
        if (!A.has(member)) {
            result.add(member)
        }
    }
    return result;
}

export default Set;
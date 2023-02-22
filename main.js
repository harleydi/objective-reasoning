// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘

function isAdmin(obj) {
    if (obj.userRole === 'ADMIN') {
        return true
    }
    return false
}



function getEmail(obj) {
    return `${obj['firstName'].toLowerCase()}.${obj['lastName'].toLowerCase()}@codeimmersives.com`
}


function getPlaylistLength(obj) {
    return obj['songs'].length
}


function getHardestHomework(arr) {
    if (arr.length === 0) {
        return ''
    }
    let hardest = arr[0]
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].averageScore < hardest.averageScore) {
          hardest = arr[i]
        }
      }
      return hardest.name
  }



function createPhonebook(names, numbers) {
    let obj = {}
    for (let i = 0; i < names.length; i++) {
        obj[`${names[i]}`] = numbers[i]
    }
    return obj
}



// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof isAdmin === 'undefined') {
    isAdmin = undefined;
}
if (typeof getEmail === 'undefined') {
    getEmail = undefined;
}
if (typeof getPlaylistLength === 'undefined') {
    getPlaylistLength = undefined;
}
if (typeof getHardestHomework === 'undefined') {
    getHardestHomework = undefined;
}
if (typeof createPhonebook === 'undefined') {
    createPhonebook = undefined;
}

module.exports = {
    isAdmin,
    getEmail,
    getPlaylistLength,
    getHardestHomework,
    createPhonebook
};
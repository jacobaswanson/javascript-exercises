const getTheTitles = function(books) {
    let titles = [];
    let temp = {};
    for(let i = 0; i < books.length; i++){
        temp = books[i];
        titles.push(temp["title"]);
    }
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;

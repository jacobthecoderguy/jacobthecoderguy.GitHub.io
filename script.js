async function loadDB() {
    let dbObject = await fetch("datebase.json");
    let txtdat = await myObject.text();
    let jsonval = await JSON.parse(txtdat);
    return jsonval;
}

console.log(loadDB);
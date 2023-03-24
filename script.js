async function loadDB() {
    let dbObject = await fetch("datebase.json");
    let txtdat = await dbObject.text();
    let jsonval = await JSON.parse(txtdat);
    return jsonval;
}

alert(loadDB());
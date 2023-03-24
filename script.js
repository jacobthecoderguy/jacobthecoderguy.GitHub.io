async function loadDB() {
    let dbObject = await fetch("datebase.json");
    let txtdat = await dbObject.text();
    let jsonval = await JSON.parse(txtdat);
    return jsonval;
}

async function myFunction() {
    let jsonval = await loadDB();
    alert(JSON.stringify(jsonval));
}

myFunction();

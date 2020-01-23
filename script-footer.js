const pages = [];
loadPageData();

function loadPageData(){
    loadPage("index");
    loadPage("biography");
    loadPage("gallery");
    loadPage("games");
    loadPage("contact");
    savePageData();
}

function loadPage(name){
    const key = "visits" + name;
    pages.push({
        pageName: name,
        visitCount: localStorage.getItem(key) ? parseInt(localStorage.getItem(key)) : 0
    });
}

function savePageData(){
    for(let i = 0; i < pages.length; i++){
        const key = "visits" + pages[i].pageName;
        localStorage.setItem(key, pages[i].visitCount);

        console.log("Saved", key, localStorage.getItem(key));
    }
}

function visitIndex(){
    getPage("index").visitCount++;
    savePageData();
}

function visitBiography(){
    getPage("biography").visitCount++;
    savePageData();
}

function visitGallery(){
    getPage("gallery").visitCount++;
    savePageData();
}

function visitGames(){
    getPage("games").visitCount++;
    savePageData();
}

function visitContact(){
    getPage("contact").visitCount++;
    savePageData();
}

function getPage(name){
    for(let i = 0; i < pages.length; i++){
        if(pages[i].pageName == name){
            return pages[i];
        }
    }
}

function generateFooterLinks(){

}
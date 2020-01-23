const pages = [];
let topPages = [];


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
    getTopThreePages();


    const footer = document.getElementById('footer');
    for(let i = 0; i < topPages.length; i++){
        
        const link = document.createElement("a");
        link.href = topPages[i].pageName + ".html";
        let pageName = topPages[i].pageName;
        if(pageName == "index"){
            pageName = "home";
        }
        link.innerHTML = pageName.toUpperCase();
        link.title = topPages[i].visitCount;
        footer.appendChild(link);
    }
}

function getTopThreePages(){
    const oldPages = pages.slice(0);

    const lowestPage1 = getLowestPageID(oldPages);
    oldPages.splice(lowestPage1, 1);
    const lowestPage2 = getLowestPageID(oldPages);
    oldPages.splice(lowestPage2, 1);

    topPages = oldPages.slice(0);

    sortTopPagesDescending();
}

function getLowestPageID(pageArray){
    let lowestPageID = 0;
    for(let i = 1; i < pageArray.length; i++){
        if(pageArray[i].visitCount < pageArray[lowestPageID].visitCount){
            lowestPageID = i;
        }
    }
    
    return lowestPageID;
}

function sortTopPagesDescending(){
    topPages.sort((a,b) => (a.visitCount < b.visitCount) ? 1 : -1);
}


setTimeout(function(){
    loadPageData();
    generateFooterLinks();
    console.log(topPages)
}, 100);

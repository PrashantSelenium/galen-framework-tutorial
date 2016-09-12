importClass(org.openqa.selenium.Keys);


this.SearchPage = $page("Search page", {
    searchbox: "input[name='s']",

    doSearch: loggedFunction ("Do Search", function (query){
        var actions = new Actions(this.driver);
        this.searchbox.typeText(query + Keys.ENTER);
    }) 
});

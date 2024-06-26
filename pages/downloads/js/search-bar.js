// Startup Alert
window.setTimeout(function() {
    $(".alert").fadeTo(500, 0).slideUp(500, function(){
        $(this).remove(); 
    });
}, 18000);
// Search Bar Code
function myFunction() {
    var input, filter, cards, cardContainer, h3, keep_card, card_titles, badge_texts, i, j;

    input = document.getElementById("myFilter");
    filter = input.value.toUpperCase();
    cardContainer = document.getElementById("myItems");
    cards = cardContainer.getElementsByClassName("card");
    for (i = 0; i < cards.length; i++) {
        //We will switch keep_card to true if we find search text in badge or title
        keep_card = false;
        //querySelectorAll returns all elements of a.badge. querySelector returns only the first element
        card_titles = cards[i].querySelectorAll(".card-body h3.card-title");
        badge_texts = cards[i].querySelectorAll(".card-footer a.badge");

        //You must loop through all card titles.
        for(j = 0; j < card_titles.length; j++) {
            if (card_titles[j].innerText.toUpperCase().indexOf(filter) > -1) {
                //Found search text, now lets switch keep_card on
                keep_card = true;
                //No need for further looping, we found the card, there we break loop
                break;
            }
        }

        if(!keep_card) {
            for(j = 0; j < badge_texts.length; j++) {
                if (badge_texts[j].innerText.toUpperCase().indexOf(filter) > -1) {
                    keep_card = true;
                    break;
                }
            }
        }

        if(keep_card) {
            cards[i].style.display = "";
        } else {
            cards[i].style.display = "none";
        }

    }
}


// Search Bar Software Section
function SoftwareFilter() {
    var input, filter, cards, cardContainer, h5, title, i;
    input = document.getElementById("mySearch");
    filter = input.value.toUpperCase();
    cardContainer = document.getElementById("myProduct");
    cards = cardContainer.getElementsByClassName("CARD");
    for (i = 0; i < cards.length; i++) {
        title = cards[i].querySelector(".card-body h5.card-title");
        if (title.innerText.toUpperCase().indexOf(filter) > -1) {
            cards[i].style.display = "";
        } else {
            cards[i].style.display = "none";
        }
    }
}
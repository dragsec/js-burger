/* inizio evento*/
var buttonPrice = document.getElementById("button");

buttonPrice.addEventListener("click", function (){

    /* prezzo dell'hamburger base è 1 dollaro */
    var totPrezzo = 50;

    /* setto prezzo in base al prodotto selezionato */
    var nameBurger = ["hamburger", "cheeseburger", "superburger"]

    var userBurger = document.getElementById("name");

    for (var i = 0; i < nameBurger.length; i++){

        var localBurger = nameBurger[i];

        if (localBurger === userBurger.value){
            totPrezzo += i;
        }
    }

    /* controllo ingredienti e aggiungo al prezzo tot */
    var ingredientsLista = document.querySelectorAll(".ingredients [type='checkbox']");
    console.log(ingredientsLista); /* controllo */
    
    for (var i = 0; i < ingredientsLista.length; i++){

        var ingredientsLocal = ingredientsLista[i];
        console.log(ingredientsLocal);  /* controllo */

        if (ingredientsLocal.checked){
            totPrezzo += parseInt(ingredientsLista[i].value);
        }
        console.log(totPrezzo); /* controllo */
    }


    /* controllo coupon */
    var workingCoupon = ["xxxyyy", "yyyzzz", "zzzxxx"];

    var userCoupon = document.getElementById("coupon");

    for (var i = 0; i < workingCoupon.length; i++){

        var localCoupon = workingCoupon[i];

        if (localCoupon === userCoupon.value){
            console.log("sssssssssssssss"); /* controllo */
            totPrezzo = totPrezzo - 5;
        }
    }


    /* prezzo finale */
    document.getElementById("price").innerHTML = totPrezzo ;
})
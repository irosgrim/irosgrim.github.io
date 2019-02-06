let registerOrLoginForms_html = `
  <div class="formsLogin">

  <button id="openLoginForm" class="bigButton">Login</button>
  <div id="containerLogin" class="formsContainer">
  <h3>Kund log in</h3>
  <form action="" class="form">
    <div class="inpt-container">   
      <label class="form_label" for="userLogin">Användarnamn</label> 
      <input type="text"   
             id="loginUsername"
             maxlength="25"   
             autocomplete="username"         
             pattern="[a-zA-Z0-9]{3,25}" 
             title="The usernamne can be only letters and numbers, max 25 characters"
             class="inpt"
             required
             />
    </div>

    <div class="inpt-container">   
      <label class="form_label" for="passwordLogin">Lösenord</label> 
      <input type="password"
             id="loginPassword"
             maxlength="25"
             autocomplete="current-password"
             title="The password can be any character"
             class="inpt"
             required
       />
    </div>
    <div class="error" id="loginError"></div>
    <div class="right"><button class="button" id="logIn">Logga in</button></div>
  </form>
  </div>

  <div class="register-account">
  <button id="openRegisterForm" class="bigButton">Skapa konto</button>
      <div id="containerRegister" class="formsContainer">
      <h3>Skapa konto</h3>
        <form action="" class="form" onsubmit="return checkInputs()" name="registerAccountForm">

          <div class="inpt-container">  
          <label class="form_label" for="username">Användarnamn*</label>
          <input type="text" 
                 id="registerUsername"
                 maxlength="25"            
                 pattern="[a-zA-Z0-9]{3,25}" 
                 title="Användarnamnet kan bara vara bokstäver och siffror, max 25 tecken"
                 class="inpt"
                 required
                 />
          </div>

          <div class="inpt-container">
          <label class="form_label" for="name">Namn *</label>
          <input type="text" 
                 id="registerName"
                 name="name"
                 maxlength="25"            
                 pattern="[a-zA-Z]+[ ][a-zA-Z]+" 
                 title="Endast bokstäver och mellanslag tillåten"
                 class="inpt"
                 required
          />
          </div>

          <div class="inpt-container">
          <label id="personalNumberLabel" class="form_label" for="personalnumber">Personnummer*</label>
          <input type="text"
                 id="registerPersonalNumber" 
                 name="personalnumber"
                 title="personnummer  ex AAAAMMDD-1234"
                 class="inpt"
                 required
                 />
          </div>

          <div class="inpt-container">
          <label class="form_label" for="address">Adress*</label>
          <input type="text" 
                 id="registerAddress"
                 name="address"
                 class="inpt"
                 required
                 />
          </div>

          <div class="inpt-container">
          <label id="postCodeLabel" class="form_label" for="postcode">Postnummer*</label>
          <input type="text"
                 id="registerPostCode"
                 name="postcode"
                 title="ex 123 45"
                 class="inpt"
                 required
                  />
          </div>

          <div class="inpt-container">
          <label class="form_label" for="city">Ort*</label>
          <select name="city" 
                  id="registerCity"
                  class="citySelect"
                  required
                  >
                  <option value="Alingsås">Alingsås</option>
                  <option value="Arboga">Arboga</option>
                    <option value="Arvika">Arvika</option>
                    <option value="Askersund">Askersund</option>
                    <option value="Avesta">Avesta</option>
                    <option value="Boden">Boden</option>
                    <option value="Bollnäs">Bollnäs</option>
                  <option value="Borgholm">Borgholm</option>
                    <option value="Borlänge">Borlänge</option>
                  <option value="Borås">Borås</option>
                  <option value="Djursholm">Djursholm</option>
                    <option value="Eksjö">Eksjö</option>
                    <option value="Enköping">Enköping</option>
                  <option value="Eskilstuna">Eskilstuna</option>
                    <option value="Eslöv">Eslöv</option>
                  <option value="Fagersta">Fagersta</option>
                    <option value="Falkenberg">Falkenberg</option>
                    <option value="Falköping">Falköping</option>
                  <option value="Falun">Falun</option>
                    <option value="Filipstad">Filipstad</option>
                    <option value="Flen">Flen</option>
                    <option value="Gränna">Gränna</option>
                  <option value="Gävle">Gävle</option>
                  <option value="Göteborg">Göteborg</option>
                  <option value="Hagfors">Hagfors</option>
                    <option value="Halmstad">Halmstad</option>
                    <option value="Haparanda">Haparanda</option>
                    <option value="Hedemora">Hedemora</option>
                    <option value="Helsingborg">Helsingborg</option>
                    <option value="Hjo">Hjo</option>
                    <option value="Hudiksvall">Hudiksvall</option>
                    <option value="Huskvarna">Huskvarna</option>
                    <option value="Härnösand">Härnösand</option>
                  <option value="Hässleholm">Hässleholm</option>
                  <option value="Höganäs" selected="selected">Höganäs</option>
                  <option value="Jönköping">Jönköping</option>
                  <option value="Kalmar">Kalmar</option>
                    <option value="Karlshamn">Karlshamn</option>
                    <option value="Karlskoga">Karlskoga</option>
                    <option value="Karlskrona">Karlskrona</option>
                    <option value="Karlstad">Karlstad</option>
                    <option value="Katrineholm">Katrineholm</option>
                    <option value="Kiruna">Kiruna</option>
                    <option value="Kramfors">Kramfors</option>
                    <option value="Kristianstad">Kristianstad</option>
                    <option value="Kristinehamn">Kristinehamn</option>
                    <option value="Kumla">Kumla</option>
                    <option value="Kungsbacka">Kungsbacka</option>
                    <option value="Kungälv">Kungälv</option>
                  <option value="Köping">Köping</option>
                  <option value="Laholm">Laholm</option>
                    <option value="Landskrona">Landskrona</option>
                    <option value="Lidingö">Lidingö</option>
                    <option value="Lidköping">Lidköping</option>
                  <option value="Lindesberg">Lindesberg</option>
                    <option value="Linköping">Linköping</option>
                  <option value="Ljungby">Ljungby</option>
                    <option value="Ludvika">Ludvika</option>
                    <option value="Luleå">Luleå</option>
                    <option value="Lund">Lund</option>
                    <option value="Lycksele">Lycksele</option>
                    <option value="Lysekil">Lysekil</option>
                    <option value="Malmö">Malmö</option>
                    <option value="Mariefred">Mariefred</option>
                    <option value="Mariestad">Mariestad</option>
                    <option value="Marstrand">Marstrand</option>
                    <option value="Mjölby">Mjölby</option>
                  <option value="Motala">Motala</option>
                    <option value="Mölndal">Mölndal</option>
                  <option value="Nacka">Nacka</option>
                    <option value="Nora">Nora</option>
                    <option value="Norrköping">Norrköping</option>
                  <option value="Norrtälje">Norrtälje</option>
                  <option value="Nybro">Nybro</option>
                    <option value="Nyköping">Nyköping</option>
                  <option value="Nynäshamn">Nynäshamn</option>
                  <option value="Nässjö">Nässjö</option>
                    <option value="Oskarshamn">Oskarshamn</option>
                    <option value="Oxelösund">Oxelösund</option>
                  <option value="Piteå">Piteå</option>
                    <option value="Ronneby">Ronneby</option>
                    <option value="Sala">Sala</option>
                    <option value="Sandviken">Sandviken</option>
                    <option value="Sigtuna">Sigtuna</option>
                    <option value="Simrishamn">Simrishamn</option>
                    <option value="Skanör-Falsterbo">Skanör-Falsterbo</option>
                  <option value="Skara">Skara</option>
                    <option value="Skellefteå">Skellefteå</option>
                    <option value="Skänninge">Skänninge</option>
                  <option value="Skövde">Skövde</option>
                  <option value="Sollefteå">Sollefteå</option>
                    <option value="Solna">Solna</option>
                    <option value="Stockholm">Stockholm</option>
                    <option value="Strängnäs">Strängnäs</option>
                  <option value="Strömstad">Strömstad</option>
                  <option value="Sundbyberg">Sundbyberg</option>
                    <option value="Sundsvall">Sundsvall</option>
                    <option value="Säffle">Säffle</option>
                  <option value="Säter">Säter</option>
                  <option value="Sävsjö">Sävsjö</option>
                    <option value="Söderhamn">Söderhamn</option>
                  <option value="Söderköping">Söderköping</option>
                  <option value="Södertälje">Södertälje</option>
                  <option value="Sölvesborg">Sölvesborg</option>
                  <option value="Tidaholm">Tidaholm</option>
                    <option value="Torshälla">Torshälla</option>
                  <option value="Tranås">Tranås</option>
                  <option value="Trelleborg">Trelleborg</option>
                    <option value="Trollhättan">Trollhättan</option>
                  <option value="Trosa">Trosa</option>
                    <option value="Uddevalla">Uddevalla</option>
                    <option value="Ulricehamn">Ulricehamn</option>
                    <option value="Umeå">Umeå</option>
                    <option value="Uppsala">Uppsala</option>
                    <option value="Vadstena">Vadstena</option>
                    <option value="Varberg">Varberg</option>
                    <option value="Vaxholm">Vaxholm</option>
                    <option value="Vetlanda">Vetlanda</option>
                    <option value="Vimmerby">Vimmerby</option>
                    <option value="Visby">Visby</option>
                    <option value="Vänersborg">Vänersborg</option>
                  <option value="Värnamo">Värnamo</option>
                  <option value="Västervik">Västervik</option>
                  <option value="Västerås">Västerås</option>
                  <option value="Växjö">Växjö</option>
                  <option value="Ystad">Ystad</option>
                  <option value="Åmål">Åmål</option>
                  <option value="Ängelholm">Ängelholm</option>
                  <option value="Örebro">Örebro</option>
                  <option value="Öregrund">Öregrund</option>
                  <option value="Örnsköldsvik">Örnsköldsvik</option>
                  <option value="Östersund">Östersund</option>
                  <option value="Östhammar">Östhammar</option>
          </select>
          </div>

          <div class="inpt-container">
          <label class="form_label" for="telephone">Telefon</label>
          <input type="tel" 
                 id="registerPhone" 
                 name="phone"
                 pattern="[0-9]{6,10}"
                 title="ex. 0777568583"
                 class="inpt"
                 required
                 />
          </div>

          <div class="inpt-container">
          <label class="form_label" for="email">E-postadress*</label>
          <input type="email"
                 id="registerEmail"
                 name="email"
                 maxlength="40"
                 class="inpt"
                 required
                 />
          </div>
          <div class="right">
          <button id="registerAccount">Skapa konto</button>
          </div>
        </form>
      </div>
    </div>
</div>
    `;

let emptyShoppingCart_html = `
<h2>The shopping cart is empty</h2>
<p>
  You want to buy stuff today?
</p>
`;

let notEmptyShoppingCart_html = `
<h2>You have 666 items in your cart</h2>
<p>
  Here is the content of your shopping cart
</p>
`;

function modal(theMeal) {
  let ingredients = theMeal.ingredientList;
  let amount = theMeal.amount;
  let theLi = '';
  for (let i = 0; i < ingredients.length; i++) {
    if (ingredients[i] !== '')
      theLi += `<li><span>${amount[i]}</span> ${ingredients[i]}</li>`;
  }

  let mealRecipe = `
  <img src="${theMeal.mealPicture}" alt="${theMeal.mealName}"/>
  <h2>${theMeal.mealName}</h2>
  <h3>Ingredients</h3>
  <ul id="${theMeal.mealId}">
  ${theLi}
  </ul>
  <div class="mealRecipeButtonsContainer"> 
    <button class="bigButton" id="recipeButton">Recipe</button>
    <button class="bigButton" id="addRecipeToCart">Add to cart</button>
  </div>
  <p class="recipeText" id="recipeText">${theMeal.mealRecipe}</p>
  `;
  document.getElementById('mealRecipeContainer').innerHTML = mealRecipe;
}

function createMealDiv(meal) {
  return `<div class="productContainer">
<img
  src="${meal.picMeal}"
  alt="${meal.nameMeal}"
  class="featured-img"
  data-mealid="${meal.idMeal}"
/>
<p>${meal.nameMeal}</p>
</div>`;
}

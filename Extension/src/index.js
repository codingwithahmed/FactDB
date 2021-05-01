import axios from "axios";
const api = "http://localhost:4000/api/post/fact";
const errors = document.querySelector(".errors");
const loading = document.querySelector(".loading");

const results = document.querySelector(".result-container");
const Headline = document.querySelector(".Headline");
const Clickbait = document.querySelector(".Clickbait");
const Insult = document.querySelector(".Insult");
const Result = document.querySelector(".Result");
const Sarcasm = document.querySelector(".Sarcasm");
const Racsim = document.querySelector(".Racsim");


results.style.display = "none";
loading.style.display = "none";
errors.textContent = "";
// grab the form
const form = document.querySelector(".form-data");
// grab the country name
const country = document.querySelector(".country-name");

// declare a method to search by country name
const searchForCountry = async countryName => {
  loading.style.display = "block";
  errors.textContent = "";
  try {
    const response = await axios.post(`${api}` , {'fact' : countryName} , { headers : {
      'Content-type' : 'application/json'
    }});
    loading.style.display = "none";
    
    Headline.textContent = response.data.Headline;
    Clickbait.textContent = response.data.Clickbait;
    Insult.textContent = response.data.IsInsult;
    Result.textContent = response.data.Result;
    Sarcasm.textContent = response.data.Sarcasm;
    Racsim.textContent = response.data.Racsim;



    results.style.display = "block";
  } catch (error) {
    
    loading.style.display = "none";
    results.style.display = "none";
    errors.textContent = error;
  }
};

// declare a function to handle form submission
const handleSubmit = async e => {
  e.preventDefault();
  searchForCountry(country.value);
  console.log(country.value);
};

form.addEventListener("submit", e => handleSubmit(e));

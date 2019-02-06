// Calculate MBR based on
// Mifflin-St Jeor Equation for BMR
// for men BMR = 10W + 6.25H - 5A + 5
// for women BMR = 9.247W + 3.098H - 4.330A + 447.593
//
// W is body weight in kg
// H is body height in cm
// A is age
////////////////////////////////////////////

const male = document.getElementById('male');
const female = document.getElementById('female');
const okButton = document.getElementById('weightWatchOk');
let genderSelected = '';
let ageInpt = document.getElementById('age');
let heightInpt = document.getElementById('height');
let weightInpt = document.getElementById('weight');
let targetWeightInpt = document.getElementById('targetWeight');
let targetCaloriesInpt = document.getElementById('caloriesPerDay');
let prefferedDietSelect = document.getElementById('prefferedDiet');
let statusMsg = document.getElementById('status');

let personValue = {
  gender: '',
  age: ageInpt.value,
  height: heightInpt.value,
  weight: weightInpt.value,
  targetWeight: targetWeightInpt.value,
  calories: targetCaloriesInpt.value,
  mbr: '',
  prefferedDiet: ''
};

(function() {
  if (localStorage.getItem('mbr') !== null) {
    let person = JSON.parse(localStorage.getItem('mbr'));
    statusMsg.innerHTML = `
    Du behöver en diet baserad på <span class="thick">${
      person.mbr
    }</span> calorier per dag
    `;
    if (person.gender === 'male') {
      male.checked = true;
    }
    if (person.gender === 'female') {
      female.checked = true;
    }
    ageInpt.value = person.age;
    heightInpt.value = person.height;
    weightInpt.value = person.weight;
    targetWeightInpt.value = person.targetWeight;
    targetCaloriesInpt.value = person.calories;
    prefferedDietSelect.value = person.prefferedDiet;
    console.log(person.mbr);
  }
})();

function calculateMbr(person) {
  if (
    person.gender === 'male' &&
    person.age !== '' &&
    person.height !== '' &&
    person.weight !== '' &&
    person.targetWeight !== ''
  ) {
    let mbr =
      10 * parseInt(person.weight) +
      6.25 * parseInt(person.height) -
      5 * parseInt(person.age) +
      5;
    personValue.mbr = Math.round(mbr);
    localStorage.setItem('mbr', JSON.stringify(personValue));
    popUp(
      `Du behöver <span class="thick">${Math.round(
        mbr
      )}</span> calorier per dag.`
    );
  } else if (
    person.gender === 'female' &&
    person.age !== '' &&
    person.height !== '' &&
    person.weight !== '' &&
    person.targetWeight !== ''
  ) {
    let mbrF =
      9.247 * parseInt(person.weight) +
      3.098 * parseInt(person.height) -
      4.33 * parseInt(person.age) +
      447.593;
    personValue.mbr = Math.round(mbrF);
    localStorage.setItem('mbr', JSON.stringify(personValue));
    popUp(
      `Du behöver <span class="thick">${Math.round(
        mbrF
      )}</span> calorier per dag.`
    );
  }
}

okButton.addEventListener('click', function() {
  if (male.checked) {
    personValue = {
      gender: male.value,
      age: ageInpt.value,
      height: heightInpt.value,
      weight: weightInpt.value,
      targetWeight: targetWeightInpt.value,
      calories: targetCaloriesInpt.value,
      mbr: '',
      prefferedDiet: prefferedDietSelect.value
    };
    calculateMbr(personValue);
  }

  if (female.checked) {
    personValue = {
      gender: female.value,
      age: ageInpt.value,
      height: heightInpt.value,
      weight: weightInpt.value,
      targetWeight: targetWeightInpt.value,
      calories: targetCaloriesInpt.value,
      mbr: '',
      prefferedDiet: prefferedDietSelect.value
    };
    calculateMbr(personValue);
  }
});
document.addEventListener('click', function(e) {
  if (
    e.target.id === 'modalBg' ||
    e.target.id === 'msgWindow' ||
    e.target.id === 'caloriesStatus'
  ) {
    document.getElementById('modalBg').style.display = 'none';
    location.reload();
  }
});

function popUp(message) {
  document.getElementById('modalBg').style.display = 'block';
  document.getElementById('caloriesStatus').innerHTML = message;
}

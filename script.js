const select = document.getElementById("brainrotSelect");
const levelInput = document.getElementById("levelInput");
const resultSpan = document.getElementById("result");

const emptyOption = document.createElement("option");
emptyOption.value = "";
emptyOption.textContent = "-- Select an Item --";
select.appendChild(emptyOption);

for (const name in brainrots) {
  const option = document.createElement("option");
  option.value = name;
  option.textContent = `${name} (${brainrots[name].rarity})`;
  select.appendChild(option);
}

function calculate() {
  const selectedName = select.value;
  let level = parseInt(levelInput.value) || 1;

  if (!selectedName || !brainrots[selectedName]) {
    resultSpan.textContent = "0";
    return;
  }

  const baseValue = brainrots[selectedName].base;
  
  let total = baseValue + (baseValue * 0.33 * (level - 1));

  const checkboxes = document.querySelectorAll(".mutation-check");
  checkboxes.forEach(box => {
    if (box.checked) {
      total *= parseFloat(box.value);
    }
  });

  resultSpan.textContent = Math.round(total).toLocaleString('en-US');
}

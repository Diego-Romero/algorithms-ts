function generateGenders(n) {
  let boys = 0;
  let girls = 0;
  for (let i = 0; i < n; i++) {
    const family = generateFamilyBabies();
    const b = family[0];
    const g = family[1];
    boys += b;
    girls += g;
  }

  console.log("boys", boys);
  console.log("girls", girls);
  return girls / (boys + girls);
}

function generateFamilyBabies() {
  let boys = 0;
  let girls = 0;
  while (girls === 0) {
    const random = Math.random();
    if (random > 0.5) girls++;
    else boys++;
  }

  return [boys, girls];
}


console.log(generateGenders(100000))

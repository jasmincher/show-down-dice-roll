function fight() {
  let monster = prompt("Name your hero");
  let hero = prompt("Name your monster");

  let villainHealth = 50;
  let heroHealth = 50;

  while (villainHealth > 0 && heroHealth > 0) {
    let heroDiceRoll = Math.floor(
      Math.random() * (Math.floor(20) - Math.ceil(1) + 1) + 1
    );
    let monsterDiceRoll = Math.floor(
      Math.random() * (Math.floor(20) - Math.ceil(1) + 1) + 1
    );

    if (heroDiceRoll == 1 || heroDiceRoll == 2) {
      heroHealth -= 5;
      alert(
        `${hero} rolled ${heroDiceRoll} and ended up stabbing themselves. ${hero}'s health is ${heroHealth}`
      );
    } else if (monsterDiceRoll == 1 || monsterDiceRoll == 2) {
      villainHealth -= 5;
      alert(
        `${monster} rolled ${monsterDiceRoll} and ended up stabbing themselves. ${monster}'s health is ${villainHealth}`
      );
    } else if (
      (heroDiceRoll >= 3 && heroDiceRoll <= 10) ||
      (monsterDiceRoll >= 3 && monsterDiceRoll <= 10)
    ) {
      //do nothing
      alert(
        `${hero} and ${monster} rolled lucky numbers and have not done any damage to each other. ${hero}'s health is ${heroHealth}. ${monster}'s health is ${villainHealth}`
      );
    } else if (heroDiceRoll >= 11 && heroDiceRoll <= 18) {
      villainHealth -= 10;
      alert(
        `${hero} rolled ${heroDiceRoll} and did 10 damage to the villain. ${hero}'s health is ${heroHealth}, and ${monster}'s health is ${villainHealth}`
      );
    } else if (monsterDiceRoll >= 11 && monsterDiceRoll <= 18) {
      heroHealth -= 10;
      alert(
        `${monster} rolled ${monsterDiceRoll} and did 10 damage to the hero. ${hero}'s health is ${heroHealth} and ${monster}'s health is ${villainHealth}`
      );
    } else if (heroDiceRoll == 19 || heroDiceRoll == 20) {
      villainHealth -= 20;
      alert(
        `${hero} rolled ${heroDiceRoll} and did 20 damage to the villain. ${hero}'s health is ${heroHealth} and ${monster}'s health is ${villainHealth}`
      );
    } else if (monsterDiceRoll == 19 || monsterDiceRoll == 20) {
      heroHealth -= 20;
      alert(
        `${monster} rolled ${monsterDiceRoll} and did 20 damage to the hero. ${hero}'s health is ${heroHealth} and ${monster}'s health is ${villainHealth}`
      );
    } else {
      console.log("There's an error");
    }
  }

  if (heroHealth <= 0) {
    alert(`${hero} has lost. ${monster} won.`);
  }

  if (villainHealth <= 0) {
    alert(`${monster} has lost. ${hero} won.`);
  }
}

fight();

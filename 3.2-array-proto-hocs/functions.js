console.clear();
const weapons = [new Knife(), new Staff(), new Axe(), new StormStaff(), new LongBow(), new Bow()];
function getNames(){
    return weapons.map(weapon => weapon.name);
}
function getCountReliableWeapons(health){
return weapons.filter(weapons => weapons.durability > health).length;
}

function hasReliableWeapons(health){
    return weapons.some(weapons => weapons.durability > health);
}
function getReliableWeaponsNames(health){
    return weapons.filter(weapons => weapons.durability > health).map(weapon => weapon.name);
}
function getTotalDamage(){
    return weapons.reduce((sum, weapon) => sum + weapon.attack, 0);
}


var villes = ['nates', 'paris', 'saint-nazaire', 'angers', 'le mans'];

//forEach
villes.forEach((ville)=>console.log(ville));

//every
console.log('lettreADansToutesLesVilles =', villes.every((ville)=>{
    if(ville.includes('a')){
        return true;
    }}));

//some
console.log('auMoinsUneVilleAvecUnTiret =', villes.some((ville)=>{
    if(ville.includes('-')){
        return true;
    }}));

//filter
var villesSansTiretSansEspace = villes.filter((ville)=>{
    if(ville.includes('-') || ville.includes(' ')){
        return false;
    }
    else{
        return true;
    }});
console.log('villesSansTiretSansEspace =', villesSansTiretSansEspace);

//chainer les fonctions
var villesMajusculeSeTerminantParS = villes
    .filter((ville)=>ville.endsWith('s'))
    .map(ville =>{return ville.toUpperCase();});
console.log('villesMajusculeSeTerminantParS =', villesMajusculeSeTerminantParS);
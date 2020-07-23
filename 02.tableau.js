var villes = ['nates', 'paris', 'saint-nazaire', 'angers', 'le mans'];

//forEach
villes.forEach((ville)=>console.log(ville));

//every
console.log('lettreADansToutesLesVilles =', villes.every((ville)=>ville.includes('a')));

//some
console.log('auMoinsUneVilleAvecUnTiret =', villes.some((ville)=>ville.includes('-')));

//filter
var villesSansTiretSansEspace = villes.filter((ville)=>!(ville.includes('-') || ville.includes(' '))==true);
console.log('villesSansTiretSansEspace =', villesSansTiretSansEspace);

//chainer les fonctions
var villesMajusculeSeTerminantParS = villes
    .filter(ville=>ville.endsWith('s'))
    .map(ville =>ville.toUpperCase());
console.log('villesMajusculeSeTerminantParS =', villesMajusculeSeTerminantParS);
var form = document.getElementById('form')
var res = document.getElementsByTagName('BODY')[0]
var heading = document.createElement('h1')
var cllass = document.createElement('h2')
var el = document.getElementsByClassName('test')
var planet = document.createElement('h2')

form.addEventListener('submit', function(event) {
  event.preventDefault();
  el.innerHTML = ''

 var id = event.target.elements.search.value;

 fetch('https://swapi.co/api/species/').then(function(response) {
    return response.json().then(function(speciesData){
      var number = Math.floor(Math.random()*10)
      console.log(speciesData);
      var name = speciesData.results[number].name
      var cllasss = speciesData.results[number].classification
      var name = speciesData.results[number].name
      var plants = speciesData.results[number].language
      planet.innerHTML = 'Language: ' + plants
      heading.innerHTML = 'Species: ' + name
      cllass.innerHTML = 'Classification: ' +  cllasss


     res.append(heading)
      res.append(cllass)
      res.append(planet)

     // var blurb = speciesData.results[poo]
      // console.log(blurb);
    })
  })

})

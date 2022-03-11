jQuery('#addAnimal').click(function () {
    const ga = new GlideAjax('fetchUtils');
    ga.addParam('sysparm_name', 'createAnimal');
    ga.addParam('sysparm_animal_name', jQuery('#animalName').val());
    ga.addParam('sysparm_animal_type', jQuery('#animalType').val());
    ga.addParam('sysparm_animal_age', jQuery('#animalAge').val());
    ga.addParam('sysparm_animal_bio', jQuery('#animalBio').val());
    ga.getXML(fetch)
})

function fetch(response) {
    const answer = response.responseXML.documentElement.getAttribute('answer').split('|');
    jQuery('#msg').append('<p>' + answer[0] + ' has been created')
}
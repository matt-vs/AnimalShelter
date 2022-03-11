var fetchUtils = Class.create();
fetchUtils.prototype = Object.extendsObject(global.AbstractAjaxProcessor, {
    createAnimal: function () {
        var animalName = this.getParameter('sysparm_animal_name');
        var animalType = this.getParameter('sysparm_animal_type');
        var animalAge = this.getParameter('sysparm_animal_age');
        var animalBio = this.getParameter('sysparm_animal_bio');

        var newAnimal = new GLideRecord('u_animals');
        newAnimal.newRecord();
        newAnimal.name = animalName;
        newAnimal.type = animalType;
        newAnimal.age = animalAge;
        newAnimal.bio = animalBio;
        var animalNumber = newAnimal.number.getDisplayValue();
        var sysID = newAnimal.insert();
        var animalLink = newAnimal.getLink();

        return animalName + '|' + animalNumber + '|' + animalLink;
    },

    type: 'fetchUtils'
});
define(['questAPI'], function(Quest){
    let API = new Quest();
    let isTouch = API.getGlobal().$isTouch;
	
    /**
	* Page prototype
	*/
    API.addPagesSet('basicPage',{
        noSubmit:false, //Change to true if you don't want to show the submit button.
        header: 'Questionnaire',
        decline: false,
        declineText: isTouch ? 'Refuser' : 'Refuser de répondre', 
        autoFocus:true, 
        progressBar:  'Page <%= pagesMeta.number %> sur 12'
    });


    /**
	* Question prototypes
	*/
    API.addQuestionsSet('basicQ',{
        decline: 'true',
        required : true, 		
        errorMsg: {
            required: isTouch 
                ? 'Veuillez sélectionner une réponse ou cliquer sur \'Refuser\'' 
                : 'Veuillez sélectionner une réponse ou cliquer sur \'Refuser de répondre\''
        },
        autoSubmit:'false',
        numericValues:'true',
        help: '<%= pagesMeta.number < 3 %>',
        helpText: 'Astuce : Vous pouvez double-cliquer sur votre réponse pour passer à la question suivante.',
		helpText: 'Attention, vous ne pourrez pas revenir sur votre réponse précédente.'
	});
    API.addQuestionsSet('basicSelect',{ //Sélection unique 
        inherit :'basicQ',
        type: 'selectOne'
    });
	
    API.addQuestionsSet('basicDropdown',{ //Menu déroulant 
        inherit :'basicQ',
        type : 'dropdown',
        autoSubmit:false
    });

	API.addQuestionsSet('basicText',{
		inherit : 'basicQ',
		type : 'text',
	});
	
    API.addQuestionsSet('likert5',{ //Likert
        inherit: 'basicSelect',
        answers: [
            {text:'Tout à fait d\'accord', value:5},
			{text:'Plutôt d\'accord', value:4},
			{text:'Ni d\'accord ni pas d\'accord', value:3},
			{text:'Plutôt pas d\'accord', value:2},
			{text:'Pas du tout d\'accord', value:1}
        ]
    });

	
    /**
	*Specific questions
	*/	
	//Module 1
	API.addQuestionsSet('genre',{
		inherit : 'basicSelect',
		name : 'genre',
		stem : 'Quel est votre sexe à l\'état-civil ?',
		answers : [
			{text : 'Homme'},
			{text : 'Femme'}
				]
	});

	API.addQuestionsSet('naissance1',{
		inherit : 'basicText', 
		name : 'naissance',
		stem : 'Quelle est votre année de naissance ?',
		validator : 'number', 
		errorMsg : {
			number : 'Veuillez entrer un nombre valide'
		}
	});

	API.addQuestionsSet('naissance2',{
		inherit : 'basicSelect', 
		name : 'naissance_lieu', 
		stem : 'Où êtes-vous né(e)?', 
		answers : [
			{text : 'En France', value: 1},
			{text : 'A l\'étranger', value: 2}
			]
	});

	API.addQuestionsSet('francais',{
		inherit : 'basicSelect',
		name : 'francais', 
		stem : 'Parliez-vous français en famille durant votre enfance ?', 
		answers : [
			{text : 'Oui', value : 1},
			{text : 'Non', value : 2}
			]
	});

	API.addQuestionsSet('iat',{
		inherit : 'basicSelect',
		name : 'iat', 
		stem : 'Avez-vous déjà passé un Test d\'Association Implicite (IAT) ?', 
		answers : [
			{text : 'Oui', value : 1},
			{text : 'Non', value : 2}
			]
	});



    API.addSequence([
		//demographie
		{inherit:'basicPage',questions:{inherit:'genre'}},
		{inherit:'basicPage',questions:{inherit:'naissance1'}},
		{inherit:'basicPage',questions:{inherit:'naissance2'}},
		{inherit:'basicPage',questions:{inherit:'francais'}},
		{inherit:'basicPage',questions:{inherit:'iat'}}
    ]);


    return API.script;
});

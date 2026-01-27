define(['questAPI'], function(Quest){
    let API = new Quest();
    let isTouch = API.getGlobal().$isTouch;
	
    /**
	* Page prototype
	*/
    API.addPagesSet('basicPage',{
        noSubmit:false, //Change to true if you don't want to show the submit button.
        header: 'Questionnaire',
        decline: true,
        declineText: isTouch ? 'Refuser' : 'Refuser de répondre', 
        autoFocus:true, 
        progressBar:  'Page <%= pagesMeta.number %> out of 7'
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
        helpText: 'Astuce : Pour répondre rapidement, cliquez pour sélectionner votre réponse, puis cliquez à nouveau pour soumettre.'
    });

    API.addQuestionsSet('basicSelect',{
        inherit :'basicQ',
        type: 'selectOne'
    });
	
    API.addQuestionsSet('basicDropdown',{
        inherit :'basicQ',
        type : 'dropdown',
        autoSubmit:false
    });
	
    API.addQuestionsSet('likert5',{
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

	API.addQuestionsSet('explicit1',{
		inherit : 'likert5',
		name : 'diff_culture',
		stem : 'Il est mieux pour une classe qu\'il y ait une diversité de coutumes, de cultures et d\'origines ?',
	});

	API.addQuestionsSet('explicit2',{
		inherit : 'likert5',
		name : 'facilite_etu',
		stem : 'Pensez-vous, qu\'en moyenne, les étudiants de certaines origines ont plus de facilité dans certaines matières ?',
	});

	API.addQuestionsSet('explicit3',{
		inherit : 'likert5',
		name : 'difficulte_afr',
		stem : 'Pensez-vous, qu\'en moyenne, les étudiants d\'origine maghrébine ou africaine ont plus de difficultés dans certaines matières, au-delà de la potentielle barrière de la langue ?',
	});

	API.addQuestionsSet('prof1',{
		inherit : 'likert5',
		name : 'prof_1',
		stem : 'Dans votre enseignement, vous laissez les étudiants chercher les réponses eux-mêmes, au risque qu\'ils se trompent, avant de leur expliquer et leur donner les solutions.',
	});

	API.addQuestionsSet('prof2',{
		inherit : 'likert5',
		name : 'prof_2',
		stem : 'Dans votre enseignement, vous invitez les étudiants à participer, à avoir un regard critique et à poser des questions.',
	});

	API.addQuestionsSet('prof3',{
		inherit : 'likert5',
		name : 'prof_3',
		stem : 'Si un étudiant travaille suffisamment, il peut devenir le meilleur de sa classe (peu importe ses capacités innées).',
	});

	API.addQuestionsSet('prof4',{
		inherit : 'likert5',
		name : 'prof_4',
		stem : 'Les enseignants doivent garder une certaine distance et incarner l\'autorité dans leur relation avec les étudiants.',
	});


    API.addSequence([
        {
			inherit:'basicPage', 
    		questions: {inherit:'explicit1'},
			questions: {inherit:'explicit2'},
			questions: {inherit:'explicit3'}
		},
		{
            inherit:'basicPage', 
            questions: {inherit:'prof1'},
			questions: {inherit:'prof2'},
			questions: {inherit:'prof3'},
			questions: {inherit:'prof4'}
        }
    ]);

    return API.script;
});

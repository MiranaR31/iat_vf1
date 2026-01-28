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
        progressBar:  'Page <%= pagesMeta.number %> sur 7'
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
        helpText: 'Astuce : Pour répondre rapidement, double-cliquez sur votre réponse pour la soumettre.'
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
	//Démographie
	API.addQuestionsSet('genre',{
		inherit : 'basicSelect',
		name : 'genre',
		stem : 'Quelle est votre identité de genre actuelle ?',
		answers : [
			{text : 'Homme'},
			{text : 'Femme'},
			{text : 'Autre'},
			{text : 'Ne souhaite pas répondre'}
				]
	});

	API.addQuestionsSet('age',{
		inherit : 'basicText', 
		name : 'age',
		stem : 'Quel âge avez-vous ?',
		validator : 'number', 
		errorMsg : {
			required : 'Veuillez indiquer votre âge.',
			number : 'Veuillez entrer un nombre valide'
		}
	});

	API.addQuestionsSet('pays_naissance',{
	    inherit : 'basicDropdown',
	    name: 'pays_naissance',
	    stem: 'Quel est votre pays de naissance ?',
	    answers: [
	        {text:'Afghanistan', value:1},
	        {text:'Afrique du Sud', value:2},
	        {text:'Albanie', value:3},
	        {text:'Algérie', value:4},
	        {text:'Allemagne', value:5},
	        {text:'Andorre', value:6},
	        {text:'Angola', value:7},
	        {text:'Arabie Saoudite', value:8},
	        {text:'Argentine', value:9},
	        {text:'Arménie', value:10},
	        {text:'Australie', value:11},
	        {text:'Autriche', value:12},
	        {text:'Azerbaïdjan', value:13},
	        {text:'Bahamas', value:14},
	        {text:'Bahreïn', value:15},
	        {text:'Bangladesh', value:16},
	        {text:'Belgique', value:17},
	        {text:'Bénin', value:18},
	        {text:'Biélorussie', value:19},
	        {text:'Bolivie', value:20},
	        {text:'Bosnie-Herzégovine', value:21},
	        {text:'Brésil', value:22},
	        {text:'Bulgarie', value:23},
	        {text:'Burkina Faso', value:24},
	        {text:'Burundi', value:25},
	        {text:'Cambodge', value:26},
	        {text:'Cameroun', value:27},
	        {text:'Canada', value:28},
	        {text:'Cap-Vert', value:29},
	        {text:'Chili', value:30},
	        {text:'Chine', value:31},
	        {text:'Chypre', value:32},
	        {text:'Colombie', value:33},
	        {text:'Comores', value:34},
	        {text:'Congo', value:35},
	        {text:'Corée du Nord', value:36},
	        {text:'Corée du Sud', value:37},
	        {text:'Costa Rica', value:38},
	        {text:'Côte d\'Ivoire', value:39},
	        {text:'Croatie', value:40},
	        {text:'Cuba', value:41},
	        {text:'Danemark', value:42},
	        {text:'Djibouti', value:43},
	        {text:'Égypte', value:44},
	        {text:'Émirats Arabes Unis', value:45},
	        {text:'Équateur', value:46},
	        {text:'Espagne', value:47},
	        {text:'Estonie', value:48},
	        {text:'États-Unis', value:49},
	        {text:'Éthiopie', value:50},
	        {text:'Finlande', value:51},
	        {text:'France', value:52},
	        {text:'Gabon', value:53},
	        {text:'Gambie', value:54},
	        {text:'Géorgie', value:55},
	        {text:'Ghana', value:56},
	        {text:'Grèce', value:57},
	        {text:'Guatemala', value:58},
	        {text:'Guinée', value:59},
	        {text:'Guinée équatoriale', value:60},
	        {text:'Guinée-Bissau', value:61},
	        {text:'Haïti', value:62},
	        {text:'Honduras', value:63},
	        {text:'Hongrie', value:64},
	        {text:'Inde', value:65},
	        {text:'Indonésie', value:66},
	        {text:'Irak', value:67},
	        {text:'Iran', value:68},
	        {text:'Irlande', value:69},
	        {text:'Islande', value:70},
	        {text:'Israël', value:71},
	        {text:'Italie', value:72},
	        {text:'Jamaïque', value:73},
	        {text:'Japon', value:74},
	        {text:'Jordanie', value:75},
	        {text:'Kazakhstan', value:76},
	        {text:'Kenya', value:77},
	        {text:'Koweït', value:78},
	        {text:'Laos', value:79},
	        {text:'Lettonie', value:80},
	        {text:'Liban', value:81},
	        {text:'Libéria', value:82},
	        {text:'Libye', value:83},
	        {text:'Lituanie', value:84},
	        {text:'Luxembourg', value:85},
	        {text:'Macédoine du Nord', value:86},
	        {text:'Madagascar', value:87},
	        {text:'Malaisie', value:88},
	        {text:'Malawi', value:89},
	        {text:'Mali', value:90},
	        {text:'Malte', value:91},
	        {text:'Maroc', value:92},
	        {text:'Maurice', value:93},
	        {text:'Mauritanie', value:94},
	        {text:'Mexique', value:95},
	        {text:'Moldavie', value:96},
	        {text:'Monaco', value:97},
	        {text:'Mongolie', value:98},
	        {text:'Monténégro', value:99},
	        {text:'Mozambique', value:100},
	        {text:'Namibie', value:101},
	        {text:'Népal', value:102},
	        {text:'Nicaragua', value:103},
	        {text:'Niger', value:104},
	        {text:'Nigéria', value:105},
	        {text:'Norvège', value:106},
	        {text:'Nouvelle-Zélande', value:107},
	        {text:'Oman', value:108},
	        {text:'Ouganda', value:109},
	        {text:'Pakistan', value:110},
	        {text:'Palestine', value:111},
	        {text:'Panama', value:112},
	        {text:'Paraguay', value:113},
	        {text:'Pays-Bas', value:114},
	        {text:'Pérou', value:115},
	        {text:'Philippines', value:116},
	        {text:'Pologne', value:117},
	        {text:'Portugal', value:118},
	        {text:'Qatar', value:119},
	        {text:'République Centrafricaine', value:120},
	        {text:'République Démocratique du Congo', value:121},
	        {text:'République Dominicaine', value:122},
	        {text:'République Tchèque', value:123},
	        {text:'Roumanie', value:124},
	        {text:'Royaume-Uni', value:125},
	        {text:'Russie', value:126},
	        {text:'Rwanda', value:127},
	        {text:'Sénégal', value:128},
	        {text:'Serbie', value:129},
	        {text:'Seychelles', value:130},
	        {text:'Sierra Leone', value:131},
	        {text:'Singapour', value:132},
	        {text:'Slovaquie', value:133},
	        {text:'Slovénie', value:134},
	        {text:'Somalie', value:135},
	        {text:'Soudan', value:136},
	        {text:'Soudan du Sud', value:137},
	        {text:'Sri Lanka', value:138},
	        {text:'Suède', value:139},
	        {text:'Suisse', value:140},
	        {text:'Suriname', value:141},
	        {text:'Syrie', value:142},
	        {text:'Taïwan', value:143},
	        {text:'Tanzanie', value:144},
	        {text:'Tchad', value:145},
	        {text:'Thaïlande', value:146},
	        {text:'Togo', value:147},
	        {text:'Trinité-et-Tobago', value:148},
	        {text:'Tunisie', value:149},
	        {text:'Turkménistan', value:150},
	        {text:'Turquie', value:151},
	        {text:'Ukraine', value:152},
	        {text:'Uruguay', value:153},
	        {text:'Venezuela', value:154},
	        {text:'Viêt Nam', value:155},
	        {text:'Yémen', value:156},
	        {text:'Zambie', value:157},
	        {text:'Zimbabwe', value:158},
	        {text:'Autre', value:999}
	    ]
	});
		
	//Explicit 
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

	//Profs
	API.addQuestionsSet('prof1',{
		inherit : 'likert5',
		name : 'prof_reponse_eleve',
		stem : 'Dans votre enseignement, vous laissez les étudiants chercher les réponses eux-mêmes, au risque qu\'ils se trompent, avant de leur expliquer et leur donner les solutions.',
	});

	API.addQuestionsSet('prof2',{
		inherit : 'likert5',
		name : 'prof_participation_eleve',
		stem : 'Dans votre enseignement, vous invitez les étudiants à participer, à avoir un regard critique et à poser des questions.',
	});

	API.addQuestionsSet('prof3',{
		inherit : 'likert5',
		name : 'prof_travail_eleve',
		stem : 'Si un étudiant travaille suffisamment, il peut devenir le meilleur de sa classe (peu importe ses capacités innées).',
	});

	API.addQuestionsSet('prof4',{
		inherit : 'likert5',
		name : 'prof_autorite',
		stem : 'Les enseignants doivent garder une certaine distance et incarner l\'autorité dans leur relation avec les étudiants.',
	});

	API.addQuestionsSet('prof5',{
		inherit : 'basicDropdown',
		name : 'prof_annees', 
		stem : 'Depuis combien d\'années enseignez-vous cette matière ?', 
		answers : [
			{text : '0', value:0},
			{text: '1', value:1},
	        {text:'2', value:2},
	        {text:'3', value:3},
	        {text:'4', value:4},
	        {text:'5', value:5},
	        {text:'6', value:6},
	        {text:'7', value:7},
	        {text:'8', value:8},
	        {text:'9', value:9},
	        {text:'10', value:10},
	        {text:'11', value:11},
	        {text:'12', value:12},
	        {text:'13', value:13},
	        {text:'14', value:14},
	        {text:'15', value:15},
	        {text:'16', value:16},
	        {text:'17', value:17},
	        {text:'18', value:18},
	        {text:'19', value:19},
	        {text:'20', value:20},
	        {text:'21', value:21},
	        {text:'22', value:22},
	        {text:'23', value:23},
	        {text:'24', value:24},
	        {text:'25', value:25},
	        {text:'26', value:26},
	        {text:'27', value:27},
	        {text:'28', value:28},
	        {text:'29', value:29},
	        {text:'30', value:30},
	        {text:'31', value:31},
	        {text:'32', value:32},
	        {text:'33', value:33},
	        {text:'34', value:34},
	        {text:'35', value:35},
	        {text:'36', value:36},
	        {text:'37', value:37},
	        {text:'38', value:38},
	        {text:'39', value:39},
	        {text:'40', value:40},
			]
	});

	API.addQuestionsSet('contrat',{
		inherit : 'basicSelect',
		name : 'contrat',
		stem : 'Quel type de contrat/statut avez-vous?', 
		answers : [
			{text : 'Maître de conférence', value:1},
			{text : 'Professeur des universités', value : 2},
			{text : 'Vacataire', value : 3},
			{text : 'Doctorant sous contrat', value : 4},
			{text : 'Autre', value : 5}
			]
	});

	API.addQuestionsSet('vacataire',{
		inherit : 'basicSelect',
		name : 'vacataire',
		stem : 'Si vous êtes vacataires, enseignez-vous cette matière ailleurs qu\'à l\'Université ?',
		answers : [
			{text : 'Oui', value : 1},
			{text : 'Non', value : 2}
			]
	});

	API.addQuestionsSet('satisfaction',{
		inherit : 'likert5',
		name : 'satisfaction',
		stem : 'Dans quelle mesure êtes-vous satisfait(e)s du métier d\'enseignant ?',
		answers : [
			{text : 'Très satisfait(e)', value:5},
			{text : 'Plutôt satisfait(e)', value:4},
			{text : 'Ni satisfait(e) ni insatisfait(e)', value:3},
			{text : 'Plutôt insatisfait(e)', value:2},
			{text : 'Très insatisfait(e)', value:1}
			]
	});
			
		


    API.addSequence([
		//demographie
		{
			inherit:'basicPage',
			questions:[
				{inherit:'genre'},
				{inherit:'age'},
				{inherit:'pays_naissance'}
				]
		},
		{//explicit
			mixer:'random',
			wrapper:true,
			data:[
				{inherit:'basicPage', questions: {inherit:'explicit1'}},
				{inherit:'basicPage', questions: {inherit:'explicit2'}},
				{inherit:'basicPage', questions: {inherit:'explicit3'}}
				]
		},
		//prof
		{
			mixer:'random',
			wrapper:true,
			data:[		
		        {inherit:'basicPage', questions: {inherit:'prof1'}},
				{inherit:'basicPage', questions: {inherit:'prof2'}},
				{inherit:'basicPage', questions: {inherit:'prof3'}},
				{inherit:'basicPage', questions: {inherit:'prof4'}}
				]
		},
		{inherit:'basicPage',questions:{inherit:'contrat'}},
		{inherit:'basicPage',condition:'<%=current.questions.contrat == 3 %>',
		 questions:{inherit:'vacataire'}},
		{inherit:'basicPage',questions:{inherit:'satisfaction'}}
    ]);


    return API.script;
});

define(['pipAPI','https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/IAT/iat10.js'], function(APIConstructor, iatExtension){
    let API = new APIConstructor();
    let global = API.getGlobal();

    return iatExtension({
        category1 : {
            name : global.ImmigrantLabels, //Will appear in the data.
            title : {
                media : {word : global.ImmigrantLabels}, //Name of the category presented in the task.
                css : {color:'#31940F','font-size':'1.8em'}, //Style of the category title.
                height : 4 //Used to position the "Or" in the combined block.
            }, 
            stimulusMedia : [ //Stimuli content as PIP's media objects
                {word: 'Youssef'},
                {word: 'Mohamed'},
                {word: 'Gheorge'},
                {word: 'Alejandro'},
                {word: 'Li Yi'},                 
                {word: 'Pascual'}     
            ],
            //Stimulus css (style)
            stimulusCss : {color:'#31940F','font-size':'2.3em'}
        },    
        category2 : {
            name : global.Native, //Will appear in the data.
            title : {
                media : {word : global.Native}, //Name of the category presented in the task.
                css : {color:'#31940F','font-size':'1.8em'}, //Style of the category title.
                height : 4 //Used to position the "Or" in the combined block.
            }, 
            stimulusMedia : [ //Stimuli content as PIP's media objects
                {word: 'Marco'},
                {word: 'Simone'},
                {word: 'Daniele'},
                {word: 'Francesco'},
                {word: 'Lorenzo'},                 
                {word: 'Mattia'} 
            ],
            //Stimulus css (style)
            stimulusCss : {color:'#31940F','font-size':'2.3em'}
        },
        attribute1 : {
            name : 'Bad words',
            title : {
                media : {word : 'Bad words'},
                css : {color:'#0000FF','font-size':'1.8em'},
                height : 4 //Used to position the "Or" in the combined block.
            },
            stimulusMedia : [ //Stimuli content as PIP's media objects
                {word: 'Disrespectful'},
                {word: 'Slow'},
                {word: 'Incapable'},
                {word: 'Boisterous'},
                {word: 'Lazy'},
                {word: 'Distracted'},
                {word: 'Demotivated'},
                {word: 'Insufficient'}
            ],
            //Stimulus css
            stimulusCss : {color:'#0000FF','font-size':'2.3em'}
        },
        attribute2 : {
            name : 'Good words',
            title : {
                media : {word : 'Good words'},
                css : {color:'#0000FF','font-size':'1.8em'},
                height : 4 //Used to position the "Or" in the combined block.
            },
            stimulusMedia : [ //Stimuli content as PIP's media objects
                {word: 'Prepared'},
                {word: 'Intelligent'},
                {word: 'Capable'},
                {word: 'Studious'},
                {word: 'Able'},
                {word: 'Precise'},
                {word: 'Willing'},
                {word: 'Respectful'}
            ],
            //Stimulus css
            stimulusCss : {color:'#0000FF','font-size':'2.3em'}
        },

        remindError : true,

			remindErrorText : '<p align="center" style="font-size:1em; font-family:arial; color:#000000">' +
			'Si vous vous trompez, une croix rouge <font color="#ff0000"><b>X</b></font> va apparaître. ' +
			'Appuyez sur l\'autre touche pour continuer.<p/>',

			remindErrorTextTouch : '<p align="center" style="font-size:1.4em; font-family:arial; color:#000000">' +
			'Si vous vous trompez, une croix rouge <font color="#ff0000"><b>X</b></font> va apparaître. ' +
			'Appuyez sur l\'autre touche pour continuer.<p/>',

        leftKeyText : 'Appuyez sur "E" pour', 
		rightKeyText :'Appuyez sur "I" pour',
        orText : 'ou', 

        finalText : 'Appuyez sur "Espace" pour passer à l\'étape suivante', 
		finalTouchText : 'Touchez la zone verte en bas pour passer à l\'étape suivante',

        instAttributePractice: '<div><p align="center" style="font-size:20px; font-family:arial">' +
				'<font color="#000000"><u>Partie blockNum sur nBlocks </u><br/><br/></p>' +
				'<p style="font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial">' +
				'Placez un doigt de la main gauche sur la touche <b>E</b> pour les éléments qui appartiennent à la catégorie <font color="#0000ff">leftAttribute.</font>' +
				'<br/>Placez un doigt de la main droite sur la touche <b>I</b> pour les éléments qui appartiennent à la catégorie <font color="#0000ff">rightAttribute</font>.<br/><br/>' +
				'Si vous vous trompez, une croix rouge <font color="#ff0000"><b>X</b></font> apparaîtra. ' +
				'Appuyez sur l\'autre touche pour continuer.<br/>' +
				'<u>Allez aussi vite que possible</u> tout en restant précis.<br/><br/></p>'+
				'<p align="center">Appuyez sur la <b>barre d\'espace</b> Quand vous êtes prêts à commencer.</font></p></div>',

        instAttributePracticeTouch: [
				'<div>',
					'<p align="center">',
						'<u>Partie blockNum sur nBlocks</u>',
					'</p>',
					'<p align="left" style="margin-left:5px">',
						'<br/>',
						'Placez un doigt de la main gauche sur la zone verte à <b>gauche</b> pour l\'élément qui appartient à la catégorie <font color="#0000ff">leftAttribute</font>.<br/>',
						'Placez un doigt de la main droite sur la zone verte à <b>droite</b> pour l\'élément qui appartient à la catégorie <font color="#0000ff">rightAttribute</font>.<br/>',
						'Les éléments apparaîtront un par un.<br/>',
						'<br/>',
						'Si vous vous trompez, une croix rouge <font color="#ff0000"><b>X</b></font> apparaîtra. Touchez l\'autre touche. <u>Allez aussi vite que possible</u> tout en restant précis.',
					'</p>',
					'<p align="center">Touchez la zone verte en <b>bas</b> pour commencer.</p>',
				'</div>'
            ],
        
            instCategoriesPractice: '<div><p align="center" style="font-size:20px; font-family:arial">' +
				'<font color="#000000"><u>Partie blockNum sur nBlocks </u><br/><br/></p>' +
				'<p style="font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial">' +
				'Placez un doigt gauche sur la touche <b>E</b> pour les éléments qui appartiennent à la catégorie <font color="#336600">leftCategory</font>. ' +
				'<br/>Placez un doigt droit sur la touche <b>I</b> pour les éléments qui appartiennent à la catégorie <font color="#336600">rightCategory</font>.<br/>' +
				'Les éléments apparaîtront un par un.<br/><br/>' +
				'Si vous vous trompez, une croix rouge <font color="#ff0000"><b>X</b></font> apparaîtra. ' +
				'Appuyez sur l\'autre touche pour continuer.<br/>' +
				'<u>Allez aussi vite que possible</u> tout en restant précis.<br/><br/></p>'+
				'<p align="center">Appuyez sur la <b>barre d\'espace</b> quand vous êtes prêts à commencer.</font></p></div>',
		    instCategoriesPracticeTouch: [
			    '<div>',
				'<p align="center">',
					'<u>Partie blockNum sur nBlocks</u>',
				'</p>',
				'<p align="left" style="margin-left:5px">',
					'<br/>',
					'Placez un doigt gauche sur la zone verte à <b>gauche</b> pour les éléments appartenant à la catégorie <font color="#336600">leftCategory</font>.<br/>',
					'Placez un doigt droite sur la zone verte à <b>droite</b> pour les éléments appartenant à la catégorie <font color="#336600">rightCategory</font>.<br/>',
					'Les éléments apparaîtront un à un.<br/>',
					'<br/>',
					'Si vous vous trompez, une croix rouge <font color="#ff0000"><b>X</b></font> apparaîtra. Touchez l\'autre touche. <u>Allez aussi vite que possible</u> tout en restant précis.',
				'</p>',
				'<p align="center">Touchez la zone verte en <b>bas</b> pour commencer.</p>',
			'</div>'
		].join('\n'),
        
        instFirstCombined : '<div><p align="center" style="font-size:20px; font-family:arial">' +
				'<font color="#000000"><u>Partie blockNum sur nBlocks </u><br/><br/></p>' +
				'<p style="font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial">' +
				'Utilisez la touche <b>E</b> pour <font color="#336600">leftCategory</font> et pour <font color="#0000ff">leftAttribute</font>.<br/>' +
				'Utilisez la touche <b>I</b> pour <font color="#336600">rightCategory</font> et pour  <font color="#0000ff">rightAttribute</font>.<br/>' +
				'Chaque élément appartient à une seule catégorie.<br/><br/>' +
				'Si vous vous trompez, une croix rouge <font color="#ff0000"><b>X</b></font> apparaîtra. ' +
				'Appuyez sur l\'autre touche pour continuer.<br/>' + 
				'<u>Allez aussi vite que possible </u> tout en restant précis.<br/><br/></p>' +
				'<p align="center">Appuyez sur la <b>barre d\'espace</b> quand vous êtes prêts à commencer.</font></p></div>',
			instFirstCombinedTouch:[
				'<div>',
					'<p align="center">',
						'<u>Partie blockNum sur nBlocks</u>',
					'</p>',
					'<br/>',
					'<br/>',
					'<p align="left" style="margin-left:5px">',
						'Placez un doigt gauche sur la zone verte à <b>gauche</b> pour les éléments <font color="#336600">leftCategory</font> et pour <font color="#0000ff">leftAttribute</font>.</br>',
						'Placez un doigt droit sur la zone verte à <b>droite</b> pour les éléments <font color="#336600">rightCategory</font> et pour <font color="#0000ff">rightAttribute</font>.</br>',
							'Si vous vous trompez, une croix rouge <font color="#ff0000"><b>X</b></font> apparaîtra. Touchez l\'autre touche. <u>Allez aussi vite que possible</u> tout en restant précis.</br>',
						'</p>',
						'<p align="center">Touchez la zone verte en <b>bas</b> pour commencer.</p>',
				'</div>'
			].join('\n'),

		    instSecondCombined : '<div><p align="center" style="font-size:20px; font-family:arial">' +
				'<font color="#000000"><u>Partie blockNum sur nBlocks </u><br/><br/></p>' +
				'<p style="font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial">' +
				'C\'est le même exercice que précédemment.<br/>' +
				'Utilisez la touche <b>E</b> pour <font color="#336600">leftCategory</font> et pour <font color="#0000ff">leftAttribute</font>.<br/>' +
				'Utilisez la touche <b>I</b> pour <font color="#336600">rightCategory</font> et pour  <font color="#0000ff">rightAttribute</font>.<br/>' +
				'Chaque élément appartient à une seule catégorie.<br/><br/>' +
				'<u>Allez aussi vite que vous le pouvez </u> tout en restant précis.<br/><br/></p>' +
				'<p align="center">Appuyez sur la <b>barre d\'espace</b> quand vous êtes prêts à commencer.</font></p></div>',
			instSecondCombinedTouch:[
				'<div>',
					'<p align="center"><u>Partie blockNum sur nBlocks</u></p>',
					'<br/>',
					'<br/>',

					'<p align="left" style="margin-left:5px">',
						'Placez un doigt gauche sur la zone verte à <b>gauche</b> pour les éléments <font color="#336600">leftCategory</font> et pour <font color="#0000ff">leftAttribute</font>.<br/>',
						'Placez un doigt droit sur la zone verte à <b>droite</b> pour les éléments <font color="#336600">rightCategory</font> et pour <font color="#0000ff">rightAttribute</font>.<br/>',
						'<br/>',
						'<u>Allez aussi vite que possible </u> tout en restant précis.<br/>',
					'</p>',
					'<p align="center">Touchez la zone verte en <b>bas</b> pour commencer.</p>',
				'</div>'
			].join('\n'),

			instSwitchCategories : '<div><p align="center" style="font-size:20px; font-family:arial">' +
				'<font color="#000000"><u>Partie blockNum sur nBlocks </u><br/><br/></p>' +
				'<p style="font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial">' +
				'<b>Attention, les étiquettes ont changé de position!</b><br/>' +
				'Utilisez le doigt gauche sur la touche <b>E</b> pour <font color="#336600">leftCategory</font>.<br/>' +
				'Utilisez le doigt droit sur la touche <b>I</b> pour <font color="#336600">rightCategory</font>.<br/><br/>' +
				'<u>Allez aussi vite que possible</u> tout en restant précis.<br/><br/></p>' +
				'<p align="center">Appuyez sur la <b>barre d\'espace</b> quand vous êtes prêts à commencer.</font></p></div>',
			instSwitchCategoriesTouch: [
				'<div>',
					'<p align="center">',
						'<u>Partie blockNum sur nBlocks</u>',
					'</p>',
					'<p align="left" style="margin-left:5px">',
						'<br/>',
						'Attention, les étiquettes ont changé de position!<br/>',
							'Placez un doigt gauche sur la zone verte à <b>gauche</b> pour les éléments <font color="#336600">leftCategory</font>.<br/>',
							'Placez un doigt droit sur la zone verte à <b>droite</b> pour les éléments <font color="#336600">rightCategory</font>.<br/>',
							'Les éléments apparaîtront un par un.',
							'<br/>',
							'Si vous vous trompez, une croix rouge <font color="#ff0000"><b>X</b></font> apparaîtra. Touchez l\'autre zone. <u>Allez aussi vite que possible </u> tout en restant précis.<br/>',
						'</p>',
						'<p align="center">Touchez la zone verte en <b>bas</b> pour commencer.</p>',
				'</div>'
			].join('\n'),
        isTouch : global.$isTouch,
    });
});




var anaSayfa = function(req,res){
	res.render('mekanlar-liste',
		{'baslik':'Anasayfa',
		 	'sayfaBaslik':{
		 		'siteAd':'Mekan32',
		 		'aciklama':'Dünyanın en büyük ve en güzel gül bahçelerine sahip, güller şehri Ispartaya hoşgeldiniz'
		 },
		 'mekanlar':[
		 	{
		 		'ad':'Starbucks',
		 		'adres':'Centrum Garden',
		 		'puan':3,
		 		'imkanlar':['kahve','cay','ciger'],
		 		'mesafe':'10 km'
		 	},
		 	{
		 		'ad':'Gloria Jeans Cafe',
		 		'adres':'Carsi',
		 		'puan':2,
		 		'imkanlar':['kahve','cay','ciger'],
		 		'mesafe':'3 km'
		 	}


		 ]


	});
};
var mekanBilgisi = function(req,res){
	res.render('mekan-detay',
		{'baslik':'Mekan Bilgisi',
		 'sayfaBaslik':'Starbucks',
		 'mekanBilgisi':{
		 	'ad':'Starbucks',
		 	'adres':'Centrum Garden',
		 	'puan':3,
		 	'imkanlar':['kahve','Pasta','Kek'],
		 	'koordinatlar':{
		 		'enlem':37.781885,
		 		'boylam':30.566034
		 	},
		 	'saatler':[
		 		{
		 			'gunler':'Pazartesi-Cuma',
		 			'acilis':'7.00',
		 			'kapanis':'23.00',
		 			'kapali':false
		 		},
		 		{
		 			'gunler':'Cumartesi',
		 			'acilis':'9.00',
		 			'kapanis':'22.30',
		 			'kapali':false
		 		},
		 		{
		 			'gunler':'Pazar',
		 			'kapali':true
		 		}
		 	],
		 	'yorumlar':[
		 		{
		 			'yorumYapan':'Rıdvan Kabak',
		 			'puan':3,
		 			'tarih':'28.10.2018',
		 			'yorumMetni':'Kahveye 10 lira verilmez.'
		 		}
		 	]
		}
		 
	 });

};
var yorumEkle = function(req,res){
	res.render('yorum-ekle',{'title':'Yorum Ekle'});

};

module.exports={
anaSayfa,
mekanBilgisi,
yorumEkle
};
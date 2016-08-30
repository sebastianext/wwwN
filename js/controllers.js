angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  
   $scope.selectableCiudades =
    ['Abejorral', 'Abrego ', 'Abriaqui ', 'Acacias ', 'Acevedo ', 'Achi ', 'Agrado ', 
    'Agua de Dios ', 'Aguachica ', 'Aguadas ', 'Aguazul ', 'Agustin Codazzi ', 'Aipe ', 
    'Alban ', 'Alban San Jose ', 'Albania ', 'Alcala ', 'Alejandria ', 'Algarrobo ', 'Algeciras ',
    'Almeida ', 'Alpujarra ', 'Altamira ', 'Altos del Rosario ', 'Alvarado ', 'Amaga ', 'Amalfi ',
    'Ambalema ', 'Anapoima ', 'Ancuya ', 'Andalucia ', 'Andes ', 'Angelopolis ', 'Angostura ',
    'Anolaima ', 'Anori ', 'Anserma ', 'Ansermanuevo ', 'Anza ', 'Anzoategui ', 'Apartado ', 
    'Apia ', 'Apulo ', 'Aquitania ', 'Aracataca ', 'Aranzazu ', 'Aratoca ', 'Arauca ', 'Arbelaez ', 
    'Arboledas ', 'Arboletes ', 'Arcabuco ', 'Arenal ', 'Argelia ', 'Ariguani El Dificil ', 'Arjona ',
    'Armenia ', 'Armero Guayabal ', 'Arroyohondo ', 'Astrea ', 'Ataco ', 'Ayapel ', 'Balboa ', 'Baranoa ',
    'Baraya ', 'Barbacoas ', 'Barbosa ', 'Barichara ', 'Barranca de Upia ', 'Barrancabermeja ', 
    'Barrancas ', 'Barranco de Loba ', 'Barranquilla ', 'Becerril ', 'Belalcazar ', 'Belen ',
    'Belen de los Andaquies ', 'Belen de Umbria ', 'Bello ', 'Belmira ', 'Berbeo ', 'Betania ',
    'Beteitiva ', 'Betulia ', 'Bituima ', 'Boavita ', 'Bochalema ', 'Bogota ', 'Bojaca ', 'Bolivar ',
    'Bosconia ', 'Boyaca ', 'Briceño ', 'Bucaramanga ', 'Buenaventura ', 'Buenavista ', 'Buenos Aires ', 
    'Buesaco ', 'Bugalagrande ', 'Buritica ', 'Busbanza ', 'Cabrera ', 'Caceres ', 'Cachipay ', 'Cachira ',
    'Cacota ', 'Caicedo ', 'Caicedonia ', 'Caimito ', 'Cajamarca ', 'Cajibio ', 'Cajica ', 'Calamar ',
    'Calarca ', 'Caldas ', 'Cali ', 'California ', 'Calima Darien ', 'Caloto ', 'Campamento ', 
    'Campo de la Cruz ', 'Campoalegre ', 'Campohermoso ', 'Canalete ', 'Cañasgordas ', 'Candelaria ', 
    'Cantagallo ', 'Caparrapi ', 'Capitanejo ', 'Caqueza ', 'Caracoli ', 'Caramanta ', 'Carcasi ', 'Carepa ',
    'Carmen de Apicala ', 'Carmen de Bolivar ', 'Carmen de Carupa ', 'Carolina ', 'Cartagena ',
    'Cartagena del Chaira ', 'Cartago ', 'Caruru ', 'Casabianca ', 'Castilla la Nueva ', 'Caucasia ', 'Cerete ',
    'Cerinza ', 'Cerrito ', 'Cerro San Antonio ', 'Certegui ', 'Chaguani ', 'Chaparral ', 'Charala ', 'Chia ', 
    'Chibolo ', 'Chigorodo ', 'Chima ', 'Chimichagua ', 'Chinacota ', 'Chinavita ', 'Chinchina ', 'Chinu ', 
    'Chipaque ', 'Chipata ', 'Chiquinquira ', 'Chiriguana ', 'Chiscas ', 'Chita ', 'Chitaga ', 'Chitaraque ', 
    'Chivata ', 'Chivor ', 'Choachi ', 'Choconta ', 'Cicuco ', 'Cienaga ', 'Cienaga de Oro ', 'Cienega ', 'Cimitarra ',
    'Circasia ', 'Cisneros ', 'Ciudad Bolivar ', 'Clemencia ', 'Cocorna ', 'Coello ', 'Cogua ', 'Colombia ', 
    'Colon ', 'Coloso Ricaurte ', 'Combita ', 'Concepcion ', 'Concordia ', 'Condoto ', 'Consaca ', 'Contadero ', 
    'Contratacion ', 'Convencion ', 'Copacabana ', 'Cordoba ', 'Corinto ', 'Coromoro ', 'Corozal ', 'Corrales ', 
    'Cota ', 'Covarachia ', 'Coveñas ', 'Coyaima ', 'Cubarral ', 'Cucaita ', 'Cucunuba ', 'Cucuta ', 'Cucutilla ',
    'Cuitiva ', 'Cumaral ', 'Cumaribo ', 'Cumbal ', 'Cunday ', 'Curillo ', 'Curiti ', 'Curumani ', 'Dabeiba ', 'Dagua ', 'Dibulla ', 'Distraccion ', 'Dolores ', 'Don Matias ', 'Dosquebradas ', 'Duitama ', 'Durania ', 'Ebejico ', 'El aguila ', 'El Bagre ', 'El Banco ', 'El Cairo ', 'El Carmen ', 'El Carmen de Atrato ', 'El Carmen de Chucuri ', 'El Carmen de Viboral ', 'El Cerrito ', 'El Cocuy ', 'El Colegio ', 'El Copey ', 'El Doncello ', 'El Dorado ', 'El Dovio ', 'El Espino ', 'El Guacamayo ', 'El Guamo ', 'El Molino ', 'El Paso ', 'El Paujil ', 'El Peñon ', 'El Piñon ', 'El Playon ', 'El Reten ', 'El Retorno ', 'El Roble ', 'El Rosal ', 'El Rosario ', 'El Santuario ', 'El Tambo ', 'El Zulia ', 'Encino ', 'Enciso ', 'Entrerrios ', 'Envigado ', 'Espinal ', 'Facatativa ', 'Falan ', 'Filadelfia ', 'Filandia ', 'Firavitoba ', 'Flandes ', 'Florencia ', 'Floresta ', 'Florian ', 'Florida ', 'Floridablanca ', 'Fomeque ', 'Fonseca ', 'Fosca ', 'Fredonia ', 'Fresno ', 'Frontino ', 'Fuente de Oro ', 'Fundacion ', 'Funes ', 'Funza ', 'Fuquene ', 'Fusagasuga ', 'Gachala ', 'Gachancipa ', 'Gachantiva ', 'Gacheta ', 'Galan ', 'Galapa ', 'Galeras Nueva Granada ', 'Gama ', 'Gamarra ', 'Gambita ', 'Gameza ', 'Garagoa ', 'Garzon ', 'Genova ', 'Gigante ', 'Ginebra ', 'Giraldo ', 'Girardot ', 'Girardota ', 'Giron ', 'Gomez Plata ', 'Gramalote ', 'Granada ', 'Guaca ', 'Guacamayas ', 'Guacari ', 'Guacheta ', 'Guachucal ', 'Guadalajara de Buga ', 'Guadalupe ', 'Guaduas ', 'Guaitarilla ', 'Gualmatan ', 'Guamal ', 'Guamo ', 'Guapota ', 'Guaranda ', 'Guarne ', 'Guasca ', 'Guatape ', 'Guataqui ', 'Guatavita ', 'Guateque ', 'Guatica ', 'Guavata ', 'Guayabal de Siquima ', 'Guayabetal ', 'Guayata ', 'Guepsa ', 'Guican ', 'Hatillo de Loba ', 'Hato ', 'Hato Corozal ', 'Hatonuevo ', 'Heliconia ', 'Herran ', 'Herveo ', 'Hispania ', 'Hobo ', 'Honda ', 'Ibague ', 'Icononzo ', 'Iles ', 'Imues ', 'Inirida ', 'Inza ', 'Ipiales ', 'iquira ', 'Isnos ', 'Istmina ', 'Itagüi ', 'Ituango ', 'Iza ', 'Jamundi ', 'Jardin ', 'Jenesano ', 'Jerico ', 'Jerusalen ', 'Jesus Maria ', 'Juan de Acosta ', 'Junin ', 'La Apartada ', 'La Argentina ', 'La Belleza ', 'La Calera ', 'La Capilla ', 'La Ceja ', 'La Celia ', 'La Cruz ', 'La Cumbre ', 'La Dorada ', 'La Esperanza ', 'La Estrella ', 'La Florida ', 'La Gloria ', 'La Jagua de Ibirico ', 'La Jagua del Pilar ', 'La Llanada ', 'La Merced ', 'La Mesa ', 'La Palma ', 'La Paz ', 'La Peña ', 'La Pintada ', 'La Plata ', 'La Playa ', 'La Sierra ', 'La Tebaida ', 'La Union ', 'La Uvita ', 'La Vega ', 'La Victoria ', 'La Virginia ', 'Labateca ', 'Landazuri ', 'Lebrija ', 'Leiva ', 'Lejanias ', 'Lenguazaque ', 'Lerida ', 'Leticia ', 'Libano ', 'Liborina ', 'Linares ', 'Lorica ', 'Los Andes ', 'Los Cordobas ', 'Los Palmitos ', 'Los Patios ', 'Los Santos ', 'Lourdes ', 'Luruaco ', 'Macanal ', 'Maceo ', 'Macheta ', 'Madrid ', 'Magangue ', 'Mahates ', 'Maicao ', 'Majagual ', 'Malaga ', 'Malambo ', 'Manati ', 'Manaure ', 'Manaure Balcon Cesar ', 'Mani ', 'Manizales ', 'Manta ', 'Manzanares ', 'Margarita ', 'Maria la Baja ', 'Marinilla ', 'Maripi ', 'Mariquita ', 'Marmato ', 'Marquetalia ', 'Marsella ', 'Marulanda ', 'Matanza ', 'Medellin ', 'Medina ', 'Medio Baudo ', 'Medio San Juan ', 'Melgar ', 'Mercaderes ', 'Mesetas ', 'Milan ', 'Miraflores ', 'Miranda ', 'Mistrato ', 'Mitu ', 'Mocoa ', 'Mogotes ', 'Molagavita ', 'Momil ', 'Mompos ', 'Mongua ', 'Mongui ', 'Moniquira ', 'Moñitos ', 'Montebello ', 'Montelibano ', 'Montenegro ', 'Monteria ', 'Monterrey ', 'Morales ', 'Morelia ', 'Morroa ', 'Mosquera ', 'Motavita ', 'Murillo ', 'Mutata ', 'Mutiscua ', 'Muzo ', 'Nariño ', 'Nataga ', 'Natagaima ', 'Nechi ', 'Necocli ', 'Neira ', 'Neiva ', 'Nemocon ', 'Nilo ', 'Nimaima ', 'Nobsa ', 'Nocaima ', 'Norcasia ', 'Nueva Granada ', 'Nuevo Colon ', 'Nunchia ', 'Obando ', 'Ocamonte ', 'Ocaña ', 'Oiba ', 'Oicata ', 'Olaya ', 'Onzaga ', 'Oporapa ', 'Orito ', 'Orocue ', 'Ortega ', 'Ospina ', 'Otanche ', 'Ovejas ', 'Pachavita ', 'Pacho ', 'Pacora ', 'Paez ', 'Paicol ', 'Pailitas ', 'Paipa ', 'Pajarito ', 'Palermo ', 'Palestina ', 'Palmar ', 'Palmar de Varela ', 'Palmira ', 'Palmito ', 'Palocabildo ', 'Pamplona ', 'Pandi ', 'Panqueba ', 'Paramo ', 'Paratebueno ', 'Pasca ', 'Pasto ', 'Patia ', 'Pauna ', 'Paz de Ariporo ', 'Paz de Rio ', 'Pelaya ', 'Peñol ', 'Pensilvania ', 'Peque ', 'Pereira ', 'Pesca ', 'Piedecuesta ', 'Piedras ', 'Piendamo ', 'Pijao ', 'Pijiño del Carmen ', 'Piojo ', 'Pital ', 'Pitalito ', 'Pivijay ', 'Planeta Rica ', 'Plato ', 'Polonuevo ', 'Ponedera ', 'Popayan ', 'Pore ', 'Potosi ', 'Pradera ', 'Prado ', 'Primavera ', 'Providencia ', 'Pueblo Bello ', 'Pueblo Nuevo ', 'Pueblo Rico ', 'Pueblorrico ', 'Puente Nacional ', 'Puerres ', 'Puerto Asis ', 'Puerto Berrio ', 'Puerto Boyaca ', 'Puerto Caicedo ', 'Puerto Carreño ', 'Puerto Colombia ', 'Puerto Concordia ', 'Puerto Escondido ', 'Puerto Gaitan ', 'Puerto Guzman ', 'Puerto Leguizamo ', 'Puerto Libertador ', 'Puerto Lleras ', 'Puerto Lopez ', 'Puerto Nare ', 'Puerto Parra ', 'Puerto Rico ', 'Puerto Salgar ', 'Puerto Santander ', 'Puerto Tejada ', 'Puerto Triunfo ', 'Puerto Wilches ', 'Puli ', 'Pupiales ', 'Purace ', 'Purificacion ', 'Purisima ', 'Quebradanegra ', 'Quetame ', 'Quibdo ', 'Quimbaya ', 'Quinchia ', 'Quipama ', 'Quipile ', 'Ragonvalia ', 'Ramiriqui ', 'Raquira ', 'Remedios ', 'Remolino ', 'Repelon ', 'Restrepo ', 'Retiro ', 'Ricaurte ', 'Rio de Oro ', 'Rio Viejo ', 'Rioblanco ', 'Riofrio ', 'Riohacha ', 'Rionegro ', 'Riosucio ', 'Risaralda ', 'Rivera ', 'Roldanillo ', 'Rondon ', 'Rosas ', 'Rovira ', 'Sabana de Torres ', 'Sabanagrande ', 'Sabanalarga ', 'Sabanas de San Angel ', 'Sabaneta ', 'Sachica ', 'Sahagun ', 'Saladoblanco ', 'Salamina ', 'Salazar ', 'Saldaña ', 'Salento ', 'Salgar ', 'Samaca ', 'Samana ', 'Samaniego ', 'Sampues ', 'San Agustin ', 'San Alberto ', 'San Andres ', 'San Andres de Cuerquia ', 'San Andres Sotavento ', 'San Antero ', 'San Antonio de Tequendama ', 'San Benito Abad ', 'San Bernardo ', 'San Bernardo del Viento ', 'San Carlos ', 'San Carlos de Guaroa ', 'San Cayetano ', 'San Cristobal ', 'San Diego ', 'San Eduardo ', 'San Estanislao ', 'San Fernando ', 'San Francisco ', 'San Gil ', 'San Jacinto ', 'San Jeronimo ', 'San Joaquin ', 'San Jose ', 'San Jose de la Montaña ', 'San Jose de Miranda ', 'San Jose de Pare ', 'San Jose de Ure ', 'San Jose del Fragua ', 'San Jose del Guaviare ', 'San Jose del Palmar ', 'San Juan de Arama ', 'San Juan de Betulia ', 'San Juan de Rioseco ', 'San Juan de Uraba ', 'San Juan del Cesar ', 'San Juan Nepomuceno ', 'San Luis ', 'San Luis de Gaceno ', 'San Luis de Palenque ', 'San Marcos ', 'San Martin ', 'San Martin Loba ', 'San Mateo ', 'San Miguel ', 'San Miguel de Sema ', 'San Onofre ', 'San Pablo ', 'San Pablo de Borbur ', 'San Pedro ', 'San Pedro de Cartago ', 'San Pedro de los Milagros ', 'San Pedro de Uraba ', 'San Rafael ', 'San Roque ', 'San Sebastian de Buenavista ', 'San Vicente de Chucuri ', 'San Vicente del Caguan ', 'San Vicente Ferrer ', 'San Zenon ', 'Sandona ', 'Santa Ana ', 'Santa Barbara ', 'Santa Barbara Pinto ', 'Santa Cruz ', 'Santa Fe de Antioquia ', 'Santa Isabel ', 'Santa Lucia ', 'Santa Maria ', 'Santa Marta ', 'Santa Rosa ', 'Santa Rosa de Cabal ', 'Santa Rosa de Osos ', 'Santa Rosa de Viterbo ', 'Santa Sofia ', 'Santana ', 'Santander de Quilichao ', 'Santiago ', 'Santiago de Tolu ', 'Santo Domingo ', 'Santo Tomas ', 'Santuario ', 'Sapuyes ', 'Saravena ', 'Sardinata ', 'Sasaima ', 'Sativanorte ', 'Sativasur ', 'Segovia ', 'Sesquile ', 'Sevilla ', 'Siachoque ', 'Sibate ', 'Sibundoy ', 'Silos ', 'Silvania ', 'Silvia ', 'Simacota ', 'Simijaca ', 'Simiti ', 'Since ', 'Sincelejo ', 'Sitionuevo ', 'Soacha ', 'Soata ', 'Socha ', 'Socorro ', 'Socota ', 'Sogamoso ', 'Soledad ', 'Solita ', 'Somondoco ', 'Sonson ', 'Sopetran ', 'Soplaviento ', 'Sopo ', 'Sora ', 'Soraca ', 'Sta Catalina ', 'Sta Rosa Sur ', 'Suaita ', 'Suan ', 'Suarez ', 'Suaza ', 'Subachoque ', 'Sucre ', 'Suesca ', 'Supata ', 'Supia ', 'Surata ', 'Susa ', 'Susacon ', 'Sutamarchan ', 'Sutatausa ', 'Sutatenza ', 'Tabio ', 'Tado ', 'Talaigua Nuevo ', 'Tamalameque ', 'Tamara ', 'Tame ', 'Tamesis ', 'Taminango ', 'Tangua ', 'Taraza ', 'Tarqui ', 'Tarso ', 'Tasco ', 'Tauramena ', 'Tausa ', 'Tello ', 'Tena ', 'Tenerife ', 'Tenjo ', 'Tenza ', 'Teorama ', 'Teruel ', 'Tesalia ', 'Tibana ', 'Tibasosa ', 'Tibirita ', 'Tibu ', 'Tierralta ', 'Timana ', 'Timbio ', 'Tinjaca ', 'Tipacoque ', 'Titiribi ', 'Toca ', 'Tocaima ', 'Tocancipa ', 'Togui ', 'Toledo ', 'Toluviejo ', 'Tona ', 'Topaga ', 'Toro ', 'Tota ', 'Trinidad ', 'Trujillo ', 'Tubara ', 'Tuchin ', 'Tulua ', 'Tumaco ', 'Tunja ', 'Tuquerres ', 'Turbaco ', 'Turbana ', 'Turbo ', 'Turmeque ', 'Tuta ', 'Ubala ', 'Ubaque ', 'Ulloa ', 'Umbita ', 'Une ', 'Union Panamericana ', 'Uramita ', 'Uribia ', 'Urrao ', 'Urumita ', 'Usiacuri ', 'utica ', 'Valdivia ', 'Valencia ', 'Valle de San Jose ', 'Valle de San Juan ', 'Valle del Guamuez(La Hormiga)', 'Valledupar ', 'Valparaiso ', 'Vegachi ', 'Velez ', 'Venadillo ', 'Venecia ', 'Venecia Ospina Perez ', 'Ventaquemada ', 'Vergara ', 'Versalles ', 'Vetas ', 'Viani ', 'Victoria ', 'Vijes ', 'Villa de Leyva ', 'Villa de San Diego de Ubate ', 'Villa Nueva ', 'Villa Pinzon ', 'Villa Rica ', 'Villa Rosario ', 'Villagarzon ', 'Villahermosa ', 'Villamaria ', 'Villanueva ', 'Villarrica ', 'Villavicencio ', 'Villavieja ', 'Villeta ', 'Viota ', 'Viracacha ', 'Vistahermosa ', 'Viterbo ', 'Yacopi ', 'Yacuanquer ', 'Yaguara ', 'Yali ', 'Yarumal ', 'Yolombo ', 'Yondo ', 'Yopal ', 'Yotoco ', 'Yumbo ', 'Zambrano ', 'Zapatoca ', 'Zaragoza ', 'Zarzal ', 'Zetaquira ', 'Zipacon ', 'Zipaquira ', 'Zona Bananera'];

})
.controller('InicioCtrl', function($scope,$ionicHistory,$state,InicioService) {
    $scope.$on('$ionicView.enter', function() {
        $scope.data = {};
        $scope.mostrar=false;
        console.log('INICIO');

        InicioService.consultarMensajes().success(function(data) {
               console.log(data);
               if(data.msj>0){
                    if (data.msj>9) {
                        $scope.data.mensajes="9+";
                    }else{
                        $scope.data.mensajes=data.msj;
                    }
                    $scope.mostrar=true;    
               }
               
            }).error(function(data) {

        });
    });
    

})
.controller('LoginCtrl', function($scope,$localStorage, LoginService, $ionicPopup, $state) {
    $scope.data = {};

    if ($localStorage.idUsuario!=null && $localStorage.idUsuario!=="" ) {
        $state.go('app.inicio');
    }
    $scope.login = function() {
            LoginService.loginUser($scope.data.username, $scope.data.password).success(function(data) {
                $state.go('app.inicio');
            }).error(function(data) {
                var alertPopup = $ionicPopup.alert({
                    title: 'Error!',
                    template: 'Por favor verifique los datos!',
                    cssClass: 'popupNormal',
                    buttons: [{
                                text: '<img class="alineacion-vertical" src="img/cerrarBtn.png" width="100">'
                    }]
                });
            });
    }   
})
.controller('CerrarSesionsCtrl', function($scope,$localStorage, $ionicPopup, $state) {
    $scope.data = {};

      $localStorage.idUsuario="";
      $localStorage.pwUsuario="";
      $localStorage.Usuario="";

      $state.go('login');
    
})
.controller('ComentarioTextoCtrl', function($scope,$stateParams, $ionicLoading,$window,ValidacionComentarioTextoService,$ionicPopup, $state,$localStorage) {
   
    console.log("Entro al controlador COMENTARIO TEXTO");
    $scope.data = {};

    if($localStorage.tipoProceso=='punto de venta'){
        $scope.tipo="3";
      }
      if($localStorage.tipoProceso=='competencia'){
        $scope.tipo="2";
      }
      if($localStorage.tipoProceso=='conversar con el cliente'){
        $scope.tipo="1";
      }
  
   //se guarda en localstorage  el fotmato = text || foto
    $localStorage.formato=$stateParams.parametro;

    $scope.mostrarPositivo    = true;
    $scope.mostrarNegativo    = true;
    $scope.mostrarInformativo = true;

    $scope.opcionPositivo = function() {
        $scope.mostrarPositivo    = false;
        $scope.mostrarInformativo = true;
        $scope.mostrarNegativo    = true;
    }
    $scope.opcionNegativo = function() {
        $scope.mostrarNegativo    =false;
        $scope.mostrarInformativo = true;
        $scope.mostrarPositivo    = true;
    }
    $scope.opcionInformativo = function() {
        $scope.mostrarInformativo=false;
        $scope.mostrarPositivo    = true;
        $scope.mostrarNegativo    = true;
    }

    $scope.enviar = function() {
            $ionicLoading.show({
              content: 'Loading',
              animation: 'fade-in',
              showBackdrop: true,
              maxWidth: 200,
              showDelay: 0
            }); 
            ValidacionComentarioTextoService.validarTexto($scope.data.campocomentario, $scope.data.opcion)
            .success(function(data) {
                //se guarda en localstorage  el resultadoInforme = informativo || negativo || positivo
                // $localStorage.resultadoInforme=$scope.data.opcion;
                // $localStorage.respuesta=$scope.data.campocomentario;
                    $ionicLoading.hide();
                    var alertPopup = $ionicPopup.alert({
                                        title: 'Gracias!',
                                        template: 'Gracias por tu comentario',
                                        cssClass: 'popupNormal',
                                        buttons: [{
                                                    text: '<img class="alineacion-vertical" src="img/cerrarBtn.png" width="100">'
                                        }]
                                      });

                    alertPopup.then(function(res) {
                        $state.go('app.inicio');
                        $window.location.reload();
                   });

                // $state.go('app.datosCliente');
            }).error(function(data) {
                    $ionicLoading.hide();
                    if (data=="ErrorCampo") {
                      var alertPopup = $ionicPopup.alert({
                          title: 'Falta Información!',
                          template: 'Campo de texto vacio',
                          cssClass: 'popupNormal',
                            buttons: [{
                                        text: '<img class="alineacion-vertical" src="img/cerrarBtn.png" width="100">'
                            }]
                      });
                    }else{
                        var alertPopup = $ionicPopup.alert({
                          title: 'Falta Información!',
                          template: 'Seleccione positivo, negativo o informativo',
                          cssClass: 'popupNormal',
                            buttons: [{
                                        text: '<img class="alineacion-vertical" src="img/cerrarBtn.png" width="100">'
                            }]
                      });
                    }
                          
            });

    }
})

.controller('ComentarioAudioCtrl', function($scope, $ionicLoading,$stateParams,CONFIG,$cordovaCapture, $window,$ionicPopup, $state,$localStorage) {
   
    console.log("Entro al controlador COMENTARIO AUDIO");
    $scope.data = {}

    if($localStorage.tipoProceso=='punto de venta'){
        $scope.tipo="3";
      }
      if($localStorage.tipoProceso=='competencia'){
        $scope.tipo="2";
      }
      if($localStorage.tipoProceso=='conversar con el cliente'){
        $scope.tipo="1";
      }
  
   //se guarda en localstorage  el fotmato = text || foto || audio
    $localStorage.formato=$stateParams.parametro;

    $scope.mostrarPositivo    = true;
    $scope.mostrarNegativo    = true;
    $scope.mostrarInformativo = true;

    $scope.opcionPositivo = function() {
        $scope.mostrarPositivo    = false;
        $scope.mostrarInformativo = true;
        $scope.mostrarNegativo    = true;
    }
    $scope.opcionNegativo = function() {
        $scope.mostrarNegativo    =false;
        $scope.mostrarInformativo = true;
        $scope.mostrarPositivo    = true;
    }
    $scope.opcionInformativo = function() {
        $scope.mostrarInformativo=false;
        $scope.mostrarPositivo    = true;
        $scope.mostrarNegativo    = true;
    }


    $scope.grabarAudio = function() {
        
        console.log('entro almetodo');

        var options = { limit: 1 };

        // nombree.replace(/ /g,"_")

        $cordovaCapture.captureAudio(options).then(function(audioData) {
          // Success! Audio data is here
            var obt=audioData;

            if(audioData[0].size > 2097152){
                var alertPopup = $ionicPopup.alert({
                      title: 'Excede Tamaño!',
                      template: 'El archivo excede el tamaño permitido (2MB)',
                      cssClass: 'popupNormal',
                        buttons: [{
                                    text: '<img class="alineacion-vertical" src="img/cerrarBtn.png" width="100">'
                        }]
                    });
                    return 0;
            }
            var i, path, len;
            console.log(''+audioData);
            for (i = 0, len = audioData.length; i < len; i += 1) {
                var path = audioData[i];
                // console.log(''+path);
                $localStorage.audioDataPath=path.fullPath;
                // do something interesting with the file
                $scope.nombreAudio=path.name;
            }
            
            console.log(''+path);
        }, function(err) {
            $scope.nombreAudio=null;
        });
    }

    $scope.enviar=function(){
        if ($scope.nombreAudio==null) {
            var alertPopup = $ionicPopup.alert({
                      title: 'Falta Información!',
                      template: 'Debes realizar una grabación ',
                      cssClass: 'popupNormal',
                        buttons: [{
                                    text: '<img class="alineacion-vertical" src="img/cerrarBtn.png" width="100">'
                        }]
                    });
        }else if ($scope.data.opcion ==null) {
            var alertPopup = $ionicPopup.alert({
                      title: 'Falta Información!',
                      template: 'Seleccione positivo, negativo o informativo',
                      cssClass: 'popupNormal',
                        buttons: [{
                                    text: '<img class="alineacion-vertical" src="img/cerrarBtn.png" width="100">'
                        }]
                  });
        }else{
            $ionicLoading.show({
              content: 'Loading',
              animation: 'fade-in',
              showBackdrop: true,
              maxWidth: 200,
              showDelay: 0
            }); 
          var url_site = CONFIG.urlSiteImg;
          var urlServiceAudio = url_site + "upload.php?v="+CONFIG.version;

          path = $localStorage.audioDataPath;
          console.log('paht: '+ path.substr(path.lastIndexOf('/') + 1));
          var options = new FileUploadOptions();
          options.headers = {
              Connection: "close"
          }
          options.chunkedMode = false;
          options.fileKey = "file";
          options.fileName = path.substr(path.lastIndexOf('/') + 1);
          options.mimeType = "audio/basic";

          if ($localStorage.tipoProceso=="conversar con el cliente") {
              $localStorage.categoriaActividad=null;
          }

          var params = new Object();
          params.id_user                = $localStorage.idUsuario;
          params.tipoNovedad            = $localStorage.tipoProceso;
          params.formato                = $localStorage.formato;
          params.resultadoInforme       = $scope.data.opcion;
          params.parametro              = null;
          params.categoria_actividad    = $localStorage.categoriaActividad;
          params.textoimagen            = $scope.data.campocomentario;
          params.cliente_nuevo          = $localStorage.cliente.nuevoClienteModel;
          params.canal                  = $localStorage.cliente.canalModel;
          params.ciudad                 = $localStorage.cliente.ciudadModel;
          params.nombre_establecimiento = $localStorage.cliente.nombreModel;
          params.contacto               = $localStorage.cliente.contactoModel;
          params.direccion              = $localStorage.cliente.direccionModel;
          params.nit                    = $localStorage.cliente.nitModel;
          params.telefono               = $localStorage.cliente.telefonoModel;
          params.codigo                 = $localStorage.Usuario.cedula;
          params.evento                 = null;
          params.cedula_asesora         = null;
          params.otro_asesora           = null;
          params.fileName = path.substr(path.lastIndexOf('/') + 1);

          options.params = params;
          var ft = new FileTransfer();

          ft.upload(path, urlServiceAudio, 
              function(result) {
                  console.log('Exito: ');
                  $ionicLoading.hide();
                    var alertPopup = $ionicPopup.alert({
                            title: 'Gracias!',
                            template: 'Gracias por tu comentario',
                            cssClass: 'popupNormal',
                            buttons: [{
                                        text: '<img class="alineacion-vertical" src="img/cerrarBtn.png" width="100">'
                            }]
                          });
                   alertPopup.then(function(res) {
                        $state.go('app.inicio');
                        $window.location.reload();
                   });
            },
              function(error) {
                $ionicLoading.hide();
                  console.log('Erorr: '+error);

            }, options);        

        }
    }

})
.controller('ComentarioFotoCtrl', function($scope,$stateParams,$ionicLoading,$cordovaFile,$window, CONFIG,$cordovaFileTransfer,$cordovaCamera, ValidacionComentarioTextoService,$ionicPopup, $state,$localStorage) {
   
    console.log("Entro al controlador COMENTARIO FOTO");
    $scope.data = {};
    $scope.cerrarShow=false;
    $scope.camaraIcono=true;
    
    if($localStorage.tipoProceso=='punto de venta'){
        $scope.tipo="3";
      }
      if($localStorage.tipoProceso=='competencia'){
        $scope.tipo="2";
      }
      if($localStorage.tipoProceso=='conversar con el cliente'){
        $scope.tipo="1";
      }
  
   //se guarda en localstorage  el fotmato = text || foto
    $localStorage.formato=$stateParams.parametro;

    $scope.mostrarPositivo    = true;
    $scope.mostrarNegativo    = true;
    $scope.mostrarInformativo = true;

    $scope.opcionPositivo = function() {
        $scope.mostrarPositivo    = false;
        $scope.mostrarInformativo = true;
        $scope.mostrarNegativo    = true;
    }
    $scope.opcionNegativo = function() {
        $scope.mostrarNegativo    =false;
        $scope.mostrarInformativo = true;
        $scope.mostrarPositivo    = true;
    }
    $scope.opcionInformativo = function() {
        $scope.mostrarInformativo=false;
        $scope.mostrarPositivo    = true;
        $scope.mostrarNegativo    = true;
    }


    $scope.enviar = function() {

        if ($scope.data.campocomentario==null || $scope.data.campocomentario=="") {
            var alertPopup = $ionicPopup.alert({
                      title: 'Falta Información!',
                      template: 'Campo de texto vacio',
                      cssClass: 'popupNormal',
                        buttons: [{
                                    text: '<img class="alineacion-vertical" src="img/cerrarBtn.png" width="100">'
                        }]
                    });
        }else if ($scope.data.opcion ==null) {
            var alertPopup = $ionicPopup.alert({
                      title: 'Falta Información!',
                      template: 'Seleccione positivo, negativo o informativo',
                      cssClass: 'popupNormal',
                        buttons: [{
                                    text: '<img class="alineacion-vertical" src="img/cerrarBtn.png" width="100">'
                        }]
                  });
        }else{
                $ionicLoading.show({
                    content: 'Loading',
                    animation: 'fade-in',
                    showBackdrop: true,
                    maxWidth: 200,
                    showDelay: 0
                    }); 

                  var url_site = CONFIG.urlSiteImg;
                  var urlServiceImage = url_site + "guardarInformeImagen.php?v="+CONFIG.version;

                  path = $localStorage.imageData;
                  console.log('paht: '+ path.substr(path.lastIndexOf('/') + 1));
                  var options = new FileUploadOptions();
                  options.headers = {
                      Connection: "close"
                  }
                  options.chunkedMode = false;
                  options.fileKey = "file";
                  options.fileName = path.substr(path.lastIndexOf('/') + 1);
                  options.mimeType = "image/png";

                  if ($localStorage.tipoProceso=="conversar con el cliente") {
                      $localStorage.categoriaActividad=null;
                  }

                  var params = new Object();
                  params.id_user          = $localStorage.idUsuario;
                  params.tipoNovedad      = $localStorage.tipoProceso;
                  params.formato          = $localStorage.formato;
                  params.resultadoInforme = $scope.data.opcion;
                  params.parametro        = null;
                  params.categoria_actividad = $localStorage.categoriaActividad;
                  params.textoimagen         = $scope.data.campocomentario;
                  params.cliente_nuevo =  $localStorage.cliente.nuevoClienteModel;
                  params.canal         =  $localStorage.cliente.canalModel;
                  params.ciudad        =  $localStorage.cliente.ciudadModel;
                  params.nombre_establecimiento = $localStorage.cliente.nombreModel;
                  params.contacto      =  $localStorage.cliente.contactoModel;
                  params.direccion     =  $localStorage.cliente.direccionModel;
                  params.nit           =  $localStorage.cliente.nitModel;
                  params.telefono      =  $localStorage.cliente.telefonoModel;
                  params.codigo        =  $localStorage.Usuario.cedula;
                  params.evento         = null;
                  params.cedula_asesora = null;
                  params.otro_asesora   = null;

                  options.params = params;
                  var ft = new FileTransfer();

                  ft.upload(path, urlServiceImage, 
                      function(result) {
                          console.log('Exito: ');
                          $ionicLoading.hide();  
                            var alertPopup = $ionicPopup.alert({
                                    title: 'Gracias!',
                                    template: 'Gracias por tu comentario',
                                    cssClass: 'popupNormal',
                                        buttons: [{
                                                    text: '<img class="alineacion-vertical" src="img/cerrarBtn.png" width="100">'
                                        }]
                                  });
                            
                           alertPopup.then(function(res) {
                                $state.go('app.inicio');
                                $window.location.reload();
                           });
                      },
                      function(error) {
                          console.log('Erorr: ');
                          $ionicLoading.hide();  

                      }, options);        

        }
    }

    $scope.foto = function() {
        
       
                  var myPopup = $ionicPopup.show({
                        
                        template:  '<a class="button button-icon icon" ng-click="tomarFoto()" ><img  width="100" src="img/btnTomarFoto.png"></a>'
                                 + '<a class="button button-icon icon" ng-click="cargarFoto()"><img  width="100" src="img/cargar_album.png"></a>',
                        scope: $scope,
                        buttons: [{
                                text: '<img class="alineacion-vertical" src="img/atras.png" width="100">'
                            }]
                   });

                  /**
                   * funcion para la toma de la foto
                  **/
                  $scope.tomarFoto = function() {
                   
                        var options = {
                          quality: 75,
                          destinationType: Camera.DestinationType.FILE_URI,
                          sourceType: Camera.PictureSourceType.CAMERA,
                          allowEdit: false,
                          encodingType: Camera.EncodingType.JPEG,
                          // targetWidth: 120,
                          // targetHeight: 120,
                          popoverOptions: CameraPopoverOptions,
                          saveToPhotoAlbum: true
                        };
         
                          $cordovaCamera.getPicture(options).then(function (imageURI) {
                              $scope.imgURI =  imageURI;
                              // $scope.imgURI = "data:image/jpeg;base64," + imageData;
                              $localStorage.imageData=imageURI;
                              $scope.cerrarShow=true;
                              $scope.camaraIcono=false;
                          }, function (err) {
                              // An error occured. Show a message to the user
                          });
                      
                      // alert("tomar!");
                      myPopup.close();
                      
                  }
                  /**
                   * funcion para el cargue de la foto desde el celular
                  **/
                  $scope.cargarFoto = function() {
                     var options = {
                          quality: 75,
                          destinationType: Camera.DestinationType.FILE_URI,
                          sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
                          allowEdit: false,
                          encodingType: Camera.EncodingType.JPEG,
                          // targetWidth: 120,
                          // targetHeight: 120,
                          popoverOptions: CameraPopoverOptions,
                          saveToPhotoAlbum: false
                      };
      
                    $cordovaCamera.getPicture(options).then(function (imageURI) {
                        $scope.imgURI =  imageURI;
                        // $scope.imgURI = "data:image/jpeg;base64," + imageData;
                        $localStorage.imageData=imageURI;
                        $scope.cerrarShow=true;
                        $scope.camaraIcono=false;
                    }, function (err) {
                        // An error occured. Show a message to the user
                    });
                      // alert("cargar!");
                      myPopup.close();

                  }
    }
    $scope.cerrarFoto = function() {
        
       console.log("src: "+$scope.imgURI);
       $scope.imgURI=null;
       $scope.cerrarShow=false;
       $scope.camaraIcono=true;
       console.log('src: '+$scope.imgURI);
    }
    
})
.controller('MisIdeasCtrl', function($scope,$stateParams,$ionicLoading, EnviarIdeasService ,$ionicPopup, $state,$localStorage) {
  
  console.log("Entro al controlador MIS IDEAS");

  $scope.data = {};
  
   $scope.enviar = function() {
        $ionicLoading.show({
              content: 'Loading',
              animation: 'fade-in',
              showBackdrop: true,
              maxWidth: 200,
              showDelay: 0
            });
        EnviarIdeasService.enviar($scope.data)
        .success(function(data) {
            $ionicLoading.hide();
            var alertPopup = $ionicPopup.alert({
                                cssClass: 'popupNormal',
                                title: 'Gracias!',
                                template: 'Gracias por tu aporte',
                                buttons: [{
                                            text: '<img class="alineacion-vertical" src="img/cerrarBtn.png" width="100">'
                                }]
                              });
            $state.go('app.inicio');
        }).error(function(data) {
        $ionicLoading.hide();
                if (data=="ErrorCampo") {
                     var alertPopup = $ionicPopup.alert({
                                      cssClass: 'popupNormal',
                                      title: 'Nutresa',
                                      template: 'Ingrese los datos solicitados.',
                                      buttons: [{
                                            text: '<img class="alineacion-vertical" src="img/cerrarBtn.png" width="100">'
                                      }]
                                    });
                }else{
                      var alertPopup = $ionicPopup.alert({
                                          cssClass: 'popupNormal',
                                          title: '',
                                          template: 'Hay un problema con la conexión, por favor verifique antes de continuar.',
                                          buttons: [{
                                            text: '<img class="alineacion-vertical" src="img/cerrarBtn.png" width="100">'
                                }]
                                        });
                }    
                      
        });
    }
  
})
.controller('EjecucionImpecableCtrl', function($scope, $stateParams,$localStorage) {
  
  console.log("Entro al controlador EJECUCION IMPECABLE");
  console.log("Parametro: " + $stateParams.parametro);

  $localStorage.tipoProceso=$stateParams.parametro;
 
})
.controller('OpinioClienteCtrl', function($scope, $stateParams,$localStorage) {
  
  console.log("Entro al controlador OPINIO CLIENTES");
  console.log("Parametro: " + $stateParams.parametro);

  $localStorage.tipoProceso=$stateParams.parametro;
 
})
.controller('CompetenciaCtrl', function($scope, $stateParams,$localStorage) {
  
  console.log("Entro al controlador COMPETENCIA");
  console.log("Parametro: " + $stateParams.parametro);

  $localStorage.tipoProceso=$stateParams.parametro;
 
})
.controller('ComentarioCtrl', function($scope, $stateParams,$localStorage) {
 $scope.$on('$ionicView.enter', function() {
      console.log("Entro al controlador Comentario");
      console.log("Parametro: " + $stateParams.parametro);
      $scope.data = {};

      if($localStorage.tipoProceso=='punto de venta'){
        $scope.tipo="3";
      }
      if($localStorage.tipoProceso=='competencia'){
        $scope.tipo="2";
      }
      if($localStorage.tipoProceso=='conversar con el cliente'){
        $scope.tipo="1";
      }
  
  });

  // $scope.$storage = $localStorage.$default({
  //         categoriaActividad: $stateParams.parametro
  // });
  // $localStorage.categoriaActividad=$stateParams.parametro;
  
})
.controller('DatosClientesCtrl', function($stateParams,$cordovaSQLite, $ionicLoading,$scope,$timeout,$window,$stateParams,CONFIG, EnviarTipoTextoService ,$ionicPopup, $state,$localStorage) {

  console.log("Entro al controlador DATOS CLIENTES");
  // console.log("Parametro: " + $stateParams.parametro);
  $scope.data = {};
  // $localStorage.categoriaActividad=$stateParams.parametro;

  if($stateParams.parametro=='conversar con el cliente'){
    $localStorage.tipoProceso=$stateParams.parametro;
  }else{
    $localStorage.categoriaActividad=$stateParams.parametro;
  }
 
  var datos=null;

    $scope.buscarCliente= function(event,opcion) {
     
      if(opcion=='nombre' && 
          ($scope.data.nombreModel=="" || $scope.data.nombreModel==null || 
           $scope.data.ciudadModel=="" || $scope.data.ciudadModel==null )){
        // Se desactiva la acion del boton de la lupa para que no se muestre la venta de nombresPDV
         event.stopImmediatePropagation();
        
        var alertPopup = $ionicPopup.alert({
                                    title: ' ',
                                    template: 'Debes ingresar nombre y ciudad para realizar la búsqueda',
                                    cssClass: 'popupNormal',
                                        buttons: [{
                                                    text: '<img class="alineacion-vertical" src="img/cerrarBtn.png" width="100">'
                                        }]
                                  });
      

        $timeout(function() {
          angular.element(
              document.querySelector('button.button.button-stable.modal-select-close-button.ng-binding')
            ).triggerHandler('click');
        }, 10);
        // Se Activa la acion del boton de la lupa para que se muestre la venta de nombresPDV
        event.defaultPrevented=true;

      }else if(opcion=='nit' && ($scope.data.nitModel=="" || $scope.data.nitModel==null)){
        // Se desactiva la acion del boton de la lupa para que no se muestre la venta de nombresPDV
         event.stopImmediatePropagation();
        var alertPopup = $ionicPopup.alert({
                                    title: ' ',
                                    template: 'Debes ingresar el nit para realizar la búsqueda',
                                    cssClass: 'popupNormal',
                                        buttons: [{
                                                    text: '<img class="alineacion-vertical" src="img/cerrarBtn.png" width="100">'
                                        }]
                                  });
         $timeout(function() {
            angular.element(
              document.querySelector('button.button.button-stable.modal-select-close-button.ng-binding')
            ).triggerHandler('click');
          }, 10);
        // Se Activa la acion del boton de la lupa para que se muestre la venta de nombresPDV
         event.defaultPrevented=true;

      }else if(opcion=='telefono' && ($scope.data.telefonoModel=="" || $scope.data.telefonoModel==null)){
        // Se desactiva la acion del boton de la lupa para que no se muestre la venta de nombresPDV
        event.stopImmediatePropagation();
        var alertPopup = $ionicPopup.alert({
                                    title: ' ',
                                    template: 'Debes ingresar el teléfono para realizar la búsqueda',
                                    cssClass: 'popupNormal',
                                        buttons: [{
                                                    text: '<img class="alineacion-vertical" src="img/cerrarBtn.png" width="100">'
                                        }]
                                  });
        
          $timeout(function() {
              angular.element(
                document.querySelector('button.button.button-stable.modal-select-close-button.ng-binding')
              ).triggerHandler('click');
          }, 10);
          // Se Activa la acion del boton de la lupa para que se muestre la venta de nombresPDV
        event.defaultPrevented=true;
      }else{
       
           EnviarTipoTextoService.consultarCliente($scope.data,opcion)
            .success(function(data) {
                
                var nombresPVD = [];
                datos=data.data;
                $scope.selectableNombres=nombresPVD;

                // if (data.data.length==1) {
                  
                //   $scope.data.contactoModel=data.data[0].Nombre.trim();
                //   $scope.data.nitModel=data.data[0].Nit.trim();
                //   $scope.data.telefonoModel=data.data[0].Telefono.trim();
                //   $scope.data.direccionModel=data.data[0].Direccion.trim();
                //   $scope.data.canalModel=data.data[0].Canal.trim();
                  
                // }else{
               
                  for (var i=0; i<data.data.length; i++) {
                      nombresPVD.push(data.data[i].Razonsocial.trim());
                  }
                  //se llena la lista de los nombresPDV
                  $scope.selectableNombres=nombresPVD;
                // }
            }).error(function(err) {
              console.log("error: "+err);

              var alertPopup = $ionicPopup.alert({
                                    title: '',
                                    template: 'Hay un problema con la conexión, por favor verifique antes de continuar.',
                                    cssClass: 'popupNormal',
                                        buttons: [{
                                                    text: '<img class="alineacion-vertical" src="img/cerrarBtn.png" width="100">'
                                        }]
                                  });
          
            });
      }
    }
    $scope.continuar=function(){

        if($scope.data.nombreModel=="" || $scope.data.nombreModel==null || 
           $scope.data.ciudadModel=="" || $scope.data.ciudadModel==null ||
           $scope.data.telefonoModel=="" || $scope.data.telefonoModel==null ||
           $scope.data.canalModel=="" || $scope.data.canalModel==null  ){

            var alertPopup = $ionicPopup.alert({
                                          title: 'Falta Información!',
                                          template: 'Los campos con * son obligatorios.',
                                          cssClass: 'popupNormal',
                                            buttons: [{
                                                        text: '<img class="alineacion-vertical" src="img/cerrarBtn.png" width="100">'
                                            }]
                                        });
        }else{
            $localStorage.cliente=$scope.data;
            $state.go('app.comentario'); 
        }

        
    }

    

    
    $scope.cargarInfoCliente=function(newValue){
      for (var i=0; i<datos.length; i++) {
          if(datos[i].Razonsocial.trim() ==newValue.trim()){
              console.log('Encontrado');

              $scope.data.contactoModel=datos[i].Nombre.trim();
              $scope.data.nitModel=datos[i].Nit.trim();
              $scope.data.telefonoModel=datos[i].Telefono.trim();
              $scope.data.direccionModel=datos[i].Direccion.trim();
              $scope.data.canalModel=datos[i].Canal.trim();
              $localStorage.nit=datos[i].Nit.trim();
              $localStorage.ciudad=$scope.data.ciudadModel;
              $localStorage.nombresPVD=datos[i].Razonsocial.trim();
              break;
          }
      }
      
    }

    $scope.cargarUltimoCliente=function(newValue){

        var datos= new Object();
        datos.nitModel=$localStorage.nit;
        datos.nombreModel=$localStorage.nombresPVD;
        datos.ciudadModel=$localStorage.ciudad;

       

        if( $localStorage.nit!=null && $localStorage.nit !=="" && 
            $localStorage.nombresPVD!=null && $localStorage.nombresPVD !=="" && 
            $localStorage.ciudad!=null && $localStorage.ciudad !==""){

      
            EnviarTipoTextoService.consultarCliente(datos,'nit')
            .success(function(data) {        
                  
                  $scope.data.ciudadModel=$localStorage.ciudad;
                  $scope.data.nombreModel=data.data[0].Razonsocial.trim();
                  $scope.data.contactoModel=data.data[0].Nombre.trim();
                  $scope.data.nitModel=data.data[0].Nit.trim();
                  $scope.data.telefonoModel=data.data[0].Telefono.trim();
                  $scope.data.direccionModel=data.data[0].Direccion.trim();
                  $scope.data.canalModel=data.data[0].Canal.trim();
                  
                
            }).error(function(err) {
              console.log("error: "+err);

              var alertPopup = $ionicPopup.alert({
                                    title: '',
                                    template: 'Hay un problema con la conexión, por favor verifique antes de continuar.'
                                  });
          
            });


        }else{
            var alertPopup = $ionicPopup.alert({
                                    title: '',
                                    template: 'No se ha guardado un cliente.'
                                  });   
        }
      
    }
    $scope.limpiarCampos=function(){


        // var db = $cordovaSQLite.openDB({name: 'mealsBD.db', location: 'default'});
        // $cordovaSQLite.execute(
        //   db, 
        //   "CREATE TABLE IF NOT EXISTS people (id integer primary key AUTOINCREMENT, ciudad text, nombre text)"
        // );
        


        // // // for opening a background db:
        // // var db = $cordovaSQLite.openDB({ name: "my.db", bgType: 1 });

        
        // var query = "INSERT INTO people (ciudad, nombre) VALUES (?,?)";
        // $cordovaSQLite.execute(db, query, [$scope.data.ciudadModel, $scope.data.nombreModel]).then(function(res) {
        //   console.log("insertId: " + res.insertId);

        //   var query = "SELECT ciudad, nombre FROM people WHERE id = ?";
        //   $cordovaSQLite.execute(db, query, [res.insertId]).then(function(res) {
        //       if(res.rows.length > 0) {
        //           console.log("SELECTED -> " + res.rows.item(0).ciudad + " " + res.rows.item(0).nombre);
        //       } else {
        //           console.log("No results found");
        //       }
        //   }, function (err) {
        //       console.error(err);
        //   });

        // }, function (err) {
        //   console.error(err);
        // });
        

        $scope.data.ciudadModel="";
        $scope.data.nombreModel="";
        $scope.data.contactoModel="";
        $scope.data.nitModel="";
        $scope.data.telefonoModel="";
        $scope.data.direccionModel="";
        $scope.data.canalModel="";


    }

   $scope.enviar = function() {
    $ionicLoading.show({
              content: 'Loading',
              animation: 'fade-in',
              showBackdrop: true,
              maxWidth: 200,
              showDelay: 0
            }); 
        if ($localStorage.formato=="texto") {
            EnviarTipoTextoService.enviar($scope.data)
            .success(function(data) {
               $ionicLoading.hide();
                var alertPopup = $ionicPopup.alert({
                                    title: 'Gracias!',
                                    template: 'Gracias por tu aporte',
                                    cssClass: 'popupNormal',
                                        buttons: [{
                                                    text: '<img class="alineacion-vertical" src="img/cerrarBtn.png" width="100">'
                                        }]
                                  });

                alertPopup.then(function(res) {
                    $state.go('app.inicio');
                    $window.location.reload();
               });
               
            }).error(function(data) {
                $ionicLoading.hide();

                    if (data=="ErrorCampo") {
                      var alertPopup = $ionicPopup.alert({
                                          title: 'Falta Información!',
                                          template: 'Los campos con * son obligatorios.',
                                          cssClass: 'popupNormal',
                                            buttons: [{
                                                        text: '<img class="alineacion-vertical" src="img/cerrarBtn.png" width="100">'
                                            }]
                                        });
                    }else{
                      var alertPopup = $ionicPopup.alert({
                                          title: '',
                                          template: 'Hay un problema con la conexión, por favor verifique antes de continuar.',
                                          cssClass: 'popupNormal',
                                            buttons: [{
                                                        text: '<img class="alineacion-vertical" src="img/cerrarBtn.png" width="100">'
                                            }]
                                        });
                    }           
            });
      }else{

                  var url_site = CONFIG.urlSiteImg;
                  var urlServiceImage = url_site + "guardarInformeImagen.php?v="+CONFIG.version;

                  path = $localStorage.imageData;
                  console.log('paht: '+ path.substr(path.lastIndexOf('/') + 1));
                  var options = new FileUploadOptions();
                  options.headers = {
                      Connection: "close"
                  }
                  options.chunkedMode = false;
                  options.fileKey = "file";
                  options.fileName = path.substr(path.lastIndexOf('/') + 1);
                  options.mimeType = "image/png";

                  if ($localStorage.tipoProceso=="conversar con el cliente") {
                      $localStorage.categoriaActividad=null;
                  }

                  var params = new Object();
                  params.id_user          = $localStorage.idUsuario;
                  params.tipoNovedad      = $localStorage.tipoProceso;
                  params.formato          = $localStorage.formato;
                  params.resultadoInforme = $localStorage.resultadoInforme;
                  params.parametro        = null;
                  params.categoria_actividad = $localStorage.categoriaActividad;
                  params.textoimagen         = $localStorage.respuesta;
                  params.cliente_nuevo =  $scope.data.nuevoClienteModel;
                  params.canal         =  $scope.data.canalModel;
                  params.ciudad        =  $scope.data.ciudadModel;
                  params.nombre_establecimiento = $scope.data.nombreModel;
                  params.contacto      =  $scope.data.contactoModel;
                  params.direccion     =  $scope.data.direccionModel;
                  params.nit           =  $scope.data.nitModel;
                  params.telefono      =  $scope.data.telefonoModel;
                  params.codigo        =  $localStorage.Usuario.cedula;
                  params.referido      =  $scope.data.referidoModel;
                  params.barrio        =  $scope.data.barrioModel;
                  params.evento         = null;
                  params.cedula_asesora = null;
                  params.otro_asesora   = null;

                  options.params = params;
                  var ft = new FileTransfer();

                  ft.upload(path, urlServiceImage, 
                      function(result) {
                          console.log('Exito: ');
                            var alertPopup = $ionicPopup.alert({
                                    title: 'Gracias!',
                                    template: 'Gracias por tu aporte',
                                    cssClass: 'popupNormal',
                                        buttons: [{
                                                    text: '<img class="alineacion-vertical" src="img/cerrarBtn.png" width="100">'
                                        }]
                                  });
                           alertPopup.then(function(res) {
                                $state.go('app.inicio');
                                $window.location.reload();
                           });
                      },
                      function(error) {
                          console.log('Erorr: ');

                      }, options);        
        }
    }
  
})
.controller('IncomvenienteCtrl', function($scope,$ionicLoading,$stateParams,$ionicHistory,$window, IncomvenienteService ,$ionicPopup, $state,$localStorage) {

  console.log("Entro al controlador REPORTAR INCOMVENIENTE");
  
  $scope.data = {};
  
   $scope.enviar = function() {
     $ionicLoading.show({
              content: 'Loading',
              animation: 'fade-in',
              showBackdrop: true,
              maxWidth: 200,
              showDelay: 0
            }); 
        
        IncomvenienteService.enviar($scope.data)
        .success(function(data) {
           $ionicLoading.hide();
            var alertPopup = $ionicPopup.alert({
                                title: 'Gracias!',
                                template: 'Se envio correctamente el soporte',
                                cssClass: 'popupNormal',
                                        buttons: [{
                                                    text: '<img class="alineacion-vertical" src="img/cerrarBtn.png" width="100">'
                                        }]
                              });
            $state.go('app.inicio');
        }).error(function(data) {
        $ionicLoading.hide();
                if (data=="ErrorCampo") {
                     var alertPopup = $ionicPopup.alert({
                                      title: 'Falta Información!',
                                      template: 'Debes ingresar el campo solicitado.',
                                      cssClass: 'popupNormal',
                                        buttons: [{
                                                    text: '<img class="alineacion-vertical" src="img/cerrarBtn.png" width="100">'
                                        }]
                                    });
                }else{
                      var alertPopup = $ionicPopup.alert({
                                          title: '',
                                          template: 'Hay un problema con la conexión, por favor verifique antes de continuar.',
                                          cssClass: 'popupNormal',
                                        buttons: [{
                                                    text: '<img class="alineacion-vertical" src="img/cerrarBtn.png" width="100">'
                                        }]
                                        });
                }          
                      
        });
    }

    
    $scope.atras = function() {
        $ionicHistory.nextViewOptions({
          disableAnimate: true,
          disableBack: true,
          historyRoot: true
        });
      $state.go('app.inicio');
      // $window.location.reload();
    } 
  
})
.controller('GestionImagixCtrl', function($scope,$stateParams,$ionicSlideBoxDelegate,GestionImagixService ,$ionicPopup, $state,$localStorage) {
    $scope.data = {};
    console.log("Entro al controlador GESTION IMAGIX ");

        GestionImagixService.consultarImagix($scope.data)
        .success(function(data) {
           console.log(data);
            $ionicSlideBoxDelegate.update();
            $scope.datos=data.data.informes;

           
        }).error(function(data) {
           
            var alertPopup = $ionicPopup.alert({
                              title: '',
                              template: 'Hay un problema con la conexión, por favor verifique antes de continuar.',
                              cssClass: 'popupNormal',
                                        buttons: [{
                                                    text: '<img class="alineacion-vertical" src="img/cerrarBtn.png" width="100">'
                                        }]
                            });  
        });

        $scope.eliminarGestion= function(){
            var posicion =$ionicSlideBoxDelegate.currentIndex();
            var inputs=angular.element(document.querySelectorAll('.idmodel'));
            var id=inputs[posicion].value;
            GestionImagixService.eliminarGestion(id)
            .success(function(data) {
                GestionImagixService.consultarImagix($scope.data)
                .success(function(data) {
                   console.log(data);
                    $ionicSlideBoxDelegate.update();
                    $scope.datos=data.data.informes;

                   
                }).error(function(data) {
                   
                    var alertPopup = $ionicPopup.alert({
                                      title: '',
                                      template: 'Hay un problema con la conexión, por favor verifique antes de continuar.'
                                    });  
                });
               
            }).error(function(data) {
          
            });
        }

        $scope.nextSlide= function(){
           $ionicSlideBoxDelegate.next();
        }
        $scope.previousSlide= function(){
           $ionicSlideBoxDelegate.previous();
        }
})

.controller('SolucionInconvenientesCtrl', function($scope,$stateParams,$ionicSlideBoxDelegate,SolucionInconvenientesServices ,$ionicPopup, $state,$localStorage) {
$scope.data = {};
  console.log("Entro al controlador Solucion Inconvenientes");

        SolucionInconvenientesServices.consultar($scope.data)
        .success(function(data) {
           console.log(data);
            $ionicSlideBoxDelegate.update();
            $scope.datos=data.data.informes;

           
        }).error(function(data) {
           
            var alertPopup = $ionicPopup.alert({
                              title: '',
                              template: 'Hay un problema con la conexión, por favor verifique antes de continuar.',
                              cssClass: 'popupNormal',
                                        buttons: [{
                                                    text: '<img class="alineacion-vertical" src="img/cerrarBtn.png" width="100">'
                                        }]
                            });  
        });

        $scope.eliminarSolucion= function(){
        
            var posicion =$ionicSlideBoxDelegate.currentIndex();
            var inputs=angular.element(document.querySelectorAll('.idmodel'));
            var id=inputs[posicion].value;
            SolucionInconvenientesServices.eliminarSolucion(id)
            .success(function(data) {
                SolucionInconvenientesServices.consultar($scope.data)
                .success(function(data) {
                   console.log(data);
                    $ionicSlideBoxDelegate.update();
                    $scope.datos=data.data.informes;
                    
                   
                }).error(function(data) {
              
                });
               
            }).error(function(data) {
          
            });
        }

        $scope.nextSlide= function(){
            $ionicSlideBoxDelegate.next();
        }
        $scope.previousSlide= function(){
            $ionicSlideBoxDelegate.previous();
        }
        
})

.controller('CasosCreadosCtrl', function($scope,$stateParams,$ionicSlideBoxDelegate,CONFIG,CasosCreadosService ,$ionicPopup, $state,$localStorage) {
    $scope.data = {};
  console.log("Entro al controlador CASOS CREADOS");

        CasosCreadosService.consultar($scope.data)
        .success(function(data) {
           console.log(data);
            $ionicSlideBoxDelegate.update();
            $scope.datos=data.data.informes;
            $scope.url=CONFIG.urlSiteImg;
           
        }).error(function(data) {
      
        });

        $scope.eliminarReporte= function(){
            
            var posicion =$ionicSlideBoxDelegate.currentIndex();
            var inputs=angular.element(document.querySelectorAll('.idmodel'));
            var id=inputs[posicion].value;
            CasosCreadosService.eliminarCaso(id)
            .success(function(data) {
                CasosCreadosService.consultar($scope.data)
                .success(function(data) {
                   console.log(data);
                    $ionicSlideBoxDelegate.update();
                    $scope.datos=data.data.informes;
                    $scope.url=CONFIG.urlSiteImg;
                   
                }).error(function(data) {
              
                });
               
            }).error(function(data) {
          
            });
        }

        $scope.nextSlide= function(){
           $ionicSlideBoxDelegate.next();
        }
        $scope.previousSlide= function(){
           $ionicSlideBoxDelegate.previous();
        }
})
.controller('ExperienciasCtrl', function($scope,$stateParams,$ionicSlideBoxDelegate,$ionicScrollDelegate,ExperienciasService ,$ionicPopup, $state,$localStorage) {

  console.log("Entro al controlador Experiencias");
  
        $scope.activa=1;
        $scope.mostrar=true;
        $scope.inicio=1;
        $scope.fin=3;

        ExperienciasService.consultar(1)
        .success(function(data) {
           console.log(data);
            
            $scope.datos=data.data.info;
            $scope.getNumber = function() {
                return new Array(data.data.paginas);   
            }
            $scope.pags=data.data.paginas;
            $scope.mostrar=false;
        }).error(function(data) {

                
        });

        $scope.consultarExperiencias= function(pagina) {
            console.log('pagina: '+pagina);

            
            $scope.activa=pagina;

            if (pagina > $scope.fin) {
                $scope.inicio+=3;
                $scope.fin+=3;
            }else{
              if (pagina < $scope.inicio) {
                  $scope.inicio-=3;
                  $scope.fin-=3;
              }
            }
           $ionicScrollDelegate.scrollTop(true);
           ExperienciasService.consultar(pagina)
            .success(function(data) {
               console.log(data);
                
                $scope.datos=data.data.info;
               
            }).error(function(data) {

                    
            });
       }

        $scope.megustaPopup = function(idpublicacion) {
        
          ExperienciasService.usuarioMegusta(idpublicacion)
          .success(function(data) {
             
              var alertPopup = $ionicPopup.alert({
                                  title: 'Usuarios',
                                  cssClass: 'popupNormal',
                                  template: data,
                                  buttons: [{
                                                    text: '<img class="alineacion-vertical" src="img/cerrarBtn.png" width="100">'
                                        }]
                                });
             
          }).error(function(data) {

                  if (data=="ErrorCampo") {
                    var alertPopup = $ionicPopup.alert({
                                        title: 'Falta Información!',
                                        template: 'Campo de texto vacio',
                                        cssClass: 'popupNormal',
                                        buttons: [{
                                                    text: '<img class="alineacion-vertical" src="img/cerrarBtn.png" width="100">'
                                        }]
                                      });
                  }else{
                    var alertPopup = $ionicPopup.alert({
                                        title: 'Falta Información!',
                                        template: 'Error en algun campo',
                                        cssClass: 'popupNormal',
                                        buttons: [{
                                                    text: '<img class="alineacion-vertical" src="img/cerrarBtn.png" width="100">'
                                        }]
                                      });
                  }
                        
        });
      }

       $scope.megustaPublicacion = function(idpublicacion) {
        
          ExperienciasService.meGustaPublicacion(idpublicacion)
          .success(function(data) {
              
                ExperienciasService.consultar($scope.activa)
                .success(function(data) {
                   console.log(data);                    
                    $scope.datos=data.data.info;

                }).error(function(data) {

                        
                });

          }).error(function(data) {

                  if (data=="ErrorCampo") {
                    var alertPopup = $ionicPopup.alert({
                                        title: 'Falta Información!',
                                        template: 'Campo de texto vacio',
                                        cssClass: 'popupNormal',
                                        buttons: [{
                                                    text: '<img class="alineacion-vertical" src="img/cerrarBtn.png" width="100">'
                                        }]
                                      });
                  }else{
                    var alertPopup = $ionicPopup.alert({
                                        title: 'Falta Información!',
                                        template: 'Error en algun campo',
                                        cssClass: 'popupNormal',
                                        buttons: [{
                                                    text: '<img class="alineacion-vertical" src="img/cerrarBtn.png" width="100">'
                                        }]
                                      });
                  }
                        
        });
      }
})
.controller('FotosCtrl', function($scope,$stateParams,$ionicSlideBoxDelegate,$ionicScrollDelegate,FotosService,ExperienciasService ,$ionicPopup, $state,$localStorage) {

  console.log("Entro al controlador Fotos");
  
        $scope.activa=1;
        $scope.mostrar=true;
        $scope.inicio=1;
        $scope.fin=3;

        FotosService.consultar(1)
        .success(function(data) {
          
           // var myEl = angular.element(document.querySelector('#contenedor .scroll'));
           // myEl.append(data.data.cad);   

            $scope.datos=data.data.info;
            $scope.getNumber = function() {
                return new Array(data.data.paginas);   
            }
            $scope.pags=data.data.paginas;
            $scope.mostrar=false;
        }).error(function(data) {
  
        });

    

        $scope.megustaPopupFotos = function(idpublicacion) {
            console.log('ctrl publi: '+idpublicacion);
            FotosService.usuarioMegusta(idpublicacion)
            .success(function(data) {
               
                var alertPopup = $ionicPopup.alert({
                                    title: 'Like usuarios',
                                    template: data,
                                    cssClass: 'popupNormal',
                                        buttons: [{
                                                    text: '<img class="alineacion-vertical" src="img/cerrarBtn.png" width="100">'
                                        }]
                                  });
               
            }).error(function(data) {

            
          });
        }


        $scope.consultarFotos= function(pagina) {
            console.log('pagina: '+pagina);

            $scope.activa=pagina;

            if (pagina > $scope.fin) {
                $scope.inicio+=3;
                $scope.fin+=3;
            }else{
              if (pagina < $scope.inicio) {
                  $scope.inicio-=3;
                  $scope.fin-=3;
              }
            }
            $ionicScrollDelegate.scrollTop(true);
            // $ionicScrollDelegate.scrollBy(0,0,true);
            FotosService.consultar(pagina)
            .success(function(data) {
               console.log(data);
                
                $scope.datos=data.data.info;
               
            }).error(function(data) {

                    
            });
       }

        
       $scope.megustaPublicacion = function(idpublicacion) {
        
          ExperienciasService.meGustaPublicacion(idpublicacion)
          .success(function(data) {
                
                FotosService.consultar($scope.activa)
                .success(function(data) {
                   console.log(data);                    
                    $scope.datos=data.data.info;

                }).error(function(data) {

                        
                });

          }).error(function(data) {

                        
        });
      }
})
.controller('NotificacionesCtrl', function($window,$scope,$timeout,$stateParams,$ionicSlideBoxDelegate,NotificacionService ,$ionicPopup, $state,$localStorage) {

  console.log("Entro al controlador de Notificaciones");
        // Code you want executed every time view is opened
      $scope.$on('$ionicView.enter', function() {
         
           console.log('Opened!')
           $scope.activa=1;
           $scope.inicio=1;
           $scope.fin=3;

         if ($stateParams.parametro==null) {
            $scope.datos=null;
            $scope.mostrar=true;

            NotificacionService.consultar(1)
            .success(function(data) {
               console.log(data);
                
                $scope.datos=data.data.info;
                $scope.getNumber = function() {
                    return new Array(data.data.paginas);   
                }
                $scope.mostrar=false;

            }).error(function(data) {

                    
            });
        }
      })

      $scope.consultarNotificaciones=function(pagina){

            console.log('pagina: '+pagina);

            
            $scope.activa=pagina;

            if (pagina > $scope.fin) {
                $scope.inicio+=3;
                $scope.fin+=3;
            }else{
              if (pagina < $scope.inicio) {
                  $scope.inicio-=3;
                  $scope.fin-=3;
              }
            }
          
           NotificacionService.consultar(pagina)
            .success(function(data) {
               console.log(data);
                
                $scope.datos=data.data.info;
               
            }).error(function(data) {

                    
            });
       
        }
    

     if ($stateParams.parametro!=null) {
       
          console.log('id mensaje: '+$stateParams.parametro);
    
          NotificacionService.verMensaje($stateParams.parametro)
          .success(function(data) {
              $scope.datos=data.data;
                       
          }).error(function(data) {

                  
          });
      }

        $scope.eliminarMensaje=function(idMensaje){
            NotificacionService.eliminarMensaje(idMensaje)
            .success(function(data) {
                  $state.go('app.notificaciones'); 

            }).error(function(data) {

                    
            });
        }

})
.controller('EstadosCtrl', function($window,$scope,$timeout,CONFIG,$stateParams,$ionicSlideBoxDelegate,EstadosService ,$ionicPopup, $state,$localStorage) {

  console.log("Entro al controlador de Notificaciones");
        // Code you want executed every time view is opened
      $scope.$on('$ionicView.enter', function() {
         
           console.log('Opened!')
           $scope.activa=1;
           $scope.inicio=1;
           $scope.fin=3;


         if ($stateParams.parametro==null) {
            $scope.datos=null;
            $scope.mostrar=true;

            EstadosService.consultar(1)
            .success(function(data) {
               console.log(data);
                
                $scope.datos=data.data.info;
                $scope.getNumber = function() {
                    return new Array(data.data.paginas);   
                }
                $scope.mostrar=false;

            }).error(function(data) {

                    
            });
        }
      })

       $scope.consultarReporte=function(pagina){

            console.log('pagina: '+pagina);

            
            $scope.activa=pagina;

            if (pagina > $scope.fin) {
                $scope.inicio+=3;
                $scope.fin+=3;
            }else{
              if (pagina < $scope.inicio) {
                  $scope.inicio-=3;
                  $scope.fin-=3;
              }
            }
          
           EstadosService.consultar(pagina)
            .success(function(data) {
               console.log(data);
                
                $scope.datos=data.data.info;
               
            }).error(function(data) {

                    
            });
       
        }

     if ($stateParams.parametro!=null) {
       
          console.log('id mensaje: '+$stateParams.parametro);
    
          EstadosService.verMensaje($stateParams.parametro)
          .success(function(data) {
              $scope.datos=data.data;
              $scope.url=CONFIG.urlSiteImg;
                       
          }).error(function(data) {

                  
          });
      }

        $scope.eliminarMensaje=function(idMensaje){
            EstadosService.eliminarMensaje(idMensaje)
            .success(function(data) {
                  $state.go('app.estados'); 
            }).error(function(data) {

                    
            });
        }

})
.controller('TermometroCtrl', function($scope,$stateParams,$ionicSlideBoxDelegate,TermometroService,$ionicPopup, $state,$localStorage) {

        $scope.$on('$ionicView.enter', function() {
            
            console.log("Entro al controlador de Termometro");
 
            var porcentajes            = [];
            var porcentajesClientes    = [];
            var porcentajesVentas      = [];
            var porcentajesCompetencia = [];
            $scope.mostrarCargar       = true;
            $scope.mostrarArea         = false;
            $scope.mostrarGeneral      = true;
            $scope.mostrarClientes     = false;
            $scope.mostrarVenta        = false;
            $scope.mostrarCompetencia  = false;
            $scope.mostrarOpinion      = false;
            $scope.mostrarEjecucion    = false;
            $scope.mostrarCompetencia2 = false;

            TermometroService.consultar().success(function(data) {
               // console.log("data: "+data.data);
               var date = new Date();
               var fechaIni = new Date(date.getFullYear(), date.getMonth(), 1);
               $scope.obj = data.data.data;
               $scope.fechainicio=fechaIni;
               $scope.fechaFin=date;

               for (var i = 0; i < data.data.data.length; i++) {
                  for (var porcentaje in data.data.data[i].porcentaje) {
                    var area = new Object();
                    area.nombre = porcentaje;
                    area.valor = data.data.data[i].porcentaje[porcentaje];
                    
                    if(i==0){
                      porcentajesClientes.push(area);
                    }else if(i==1){
                      porcentajesVentas.push(area);
                    }else{
                      porcentajesCompetencia.push(area);
                    }
                    var areaGeneral={nombre: area.nombre,valor: area.valor};
                    if(!existe(areaGeneral)){
                         porcentajes.push(areaGeneral);
                    }
                    // console.log(''+porcentaje);  
                 }
               }
              $scope.porcentajesGeneral=porcentajes;
              $scope.mostrarCargar = false;
              
          
            }).error(function(data) {
           
            });

            $scope.termometroCliente=function(){
                
                $scope.porcentajesClientes=porcentajesClientes;
                $scope.mostrarGeneral=false;
                $scope.mostrarClientes=true;
                $scope.mostrarVenta=false;
                $scope.mostrarCompetencia=false;
                $scope.mostrarOpinion      = true;
                $scope.mostrarEjecucion    = false;
                $scope.mostrarCompetencia2 = false;
            }

            $scope.termometroVenta=function(){
                
                $scope.porcentajesVentas=porcentajesVentas;
                $scope.mostrarGeneral=false;
                $scope.mostrarClientes=false;
                $scope.mostrarVenta=true;
                $scope.mostrarCompetencia=false;
                $scope.mostrarEjecucion    = true;
                $scope.mostrarOpinion      = false;
                $scope.mostrarCompetencia2 = false;

            }

            $scope.termometroCompetencia=function(){
                
                $scope.porcentajesCompetencia=porcentajesCompetencia;
                $scope.mostrarGeneral=false;
                $scope.mostrarClientes=false;
                $scope.mostrarVenta=false;
                $scope.mostrarCompetencia=true;
                $scope.mostrarCompetencia2 = true;
                $scope.mostrarOpinion      = false;
                $scope.mostrarEjecucion    = false;
            }

            $scope.termometroInforme = function(tipo) {

                    porcentajes            = [];
                    porcentajesClientes    = [];
                    porcentajesVentas      = [];
                    porcentajesCompetencia = [];
                    $scope.mostrarCargar       = true;
                    $scope.mostrarGeneral      = true;
                    $scope.mostrarClientes     = false;
                    $scope.mostrarVenta        = false;
                    $scope.mostrarCompetencia  = false;
                    $scope.mostrarOpinion      = false;
                    $scope.mostrarEjecucion    = false;
                    $scope.mostrarCompetencia2 = false;

                    


                  TermometroService.consultar().success(function(data) {
                   // console.log("data: "+data.data);
                   var date = new Date();
                   var fechaIni = new Date(date.getFullYear(), date.getMonth(), 1);
                   $scope.obj = data.data.data;
                   $scope.fechainicio=fechaIni;
                   $scope.fechaFin=date;

                   for (var i = 0; i < data.data.data.length; i++) {
                      for (var porcentaje in data.data.data[i].porcentaje) {
                        var area = new Object();
                        area.nombre = porcentaje;
                        area.valor = data.data.data[i].porcentaje[porcentaje];
                        
                        if(i==0){
                          porcentajesClientes.push(area);
                        }else if(i==1){
                          porcentajesVentas.push(area);
                        }else{
                          porcentajesCompetencia.push(area);
                        }
                        var areaGeneral={nombre: area.nombre,valor: area.valor};
                        if(!existe(areaGeneral)){
                             porcentajes.push(areaGeneral);
                        }
                        // console.log(''+porcentaje);  
                     }
                   }
                  $scope.porcentajesGeneral=porcentajes;
                  $scope.mostrarCargar = false;
                }).error(function(data) {
                });
            }

            function existe(area){
                var area2=area;
                for (var i = 0; i < porcentajes.length; i++) {
                    if( porcentajes[i].nombre==area2.nombre){
                      porcentajes[i].valor+=area2.valor;
                      return true;
                    }
                }
              return false;
            }


            $scope.atras = function() {
              $state.go('app.inicio');
              $window.location.reload();
            } 
      });
})

.controller('PreguntasCtrl', function($scope,$stateParams,$window,$ionicHistory,$ionicSlideBoxDelegate,PreguntasService,$ionicPopup, $state,$localStorage) {

  console.log("Entro al controlador de Preguntas frecuentes");
  

        PreguntasService.consultar().success(function(data) {
           console.log("data: "+data.preguntas);
           $scope.datos = data.data.preguntas;
         
        }).error(function(data) {

                
        });

        $scope.atras = function() {
            $ionicHistory.nextViewOptions({
              disableAnimate: true,
              disableBack: true,
              historyRoot: true
            });
          $state.go('app.inicio');
          // $window.location.reload();
        } 
})
.controller('VideoCtrl', function($scope,$window,$state,$ionicHistory) {
  
    console.log('VideoCtrl');
      $scope.atras = function() {
        $ionicHistory.nextViewOptions({
          disableAnimate: true,
          disableBack: true,
          historyRoot: true
        });
        $state.go('app.inicio');
        // $window.location.reload();
      } 
     $scope.$on('$ionicView.leave', function() {
        var video=angular.element(document.querySelector('#video_nutresa'));
        video[0].pause();
     });
      
  
})

.controller('VicCtrl', function($scope,$window,$state,$ionicPopup,$timeout,$localStorage,$ionicLoading,VicService) {
  
    console.log('VicCtrl');
    $scope.data = {};
    var datos=null;
    $scope.mostrar=false;
     $scope.buscarCliente= function(event,opcion) {
     
      if(opcion=='nombre' && 
          ($scope.data.nombreModel=="" || $scope.data.nombreModel==null || 
           $scope.data.ciudadModel=="" || $scope.data.ciudadModel==null )){
        // Se desactiva la acion del boton de la lupa para que no se muestre la venta de nombresPDV
         event.stopImmediatePropagation();
        
        var alertPopup = $ionicPopup.alert({
                                    title: ' ',
                                    template: 'Debes ingresar nombre y ciudad para realizar la búsqueda',
                                    cssClass: 'popupNormal',
                                        buttons: [{
                                                    text: '<img class="alineacion-vertical" src="img/cerrarBtn.png" width="100">'
                                        }]
                                  });
      

        $timeout(function() {
          angular.element(
              document.querySelector('button.button.button-stable.modal-select-close-button.ng-binding')
            ).triggerHandler('click');
        }, 10);
        // Se Activa la acion del boton de la lupa para que se muestre la venta de nombresPDV
        event.defaultPrevented=true;

      }else if(opcion=='nit' && ($scope.data.nitModel=="" || $scope.data.nitModel==null)){
        // Se desactiva la acion del boton de la lupa para que no se muestre la venta de nombresPDV
         event.stopImmediatePropagation();
        var alertPopup = $ionicPopup.alert({
                                    title: ' ',
                                    template: 'Debes ingresar el nit para realizar la búsqueda',
                                    cssClass: 'popupNormal',
                                        buttons: [{
                                                    text: '<img class="alineacion-vertical" src="img/cerrarBtn.png" width="100">'
                                        }]
                                  });
         $timeout(function() {
            angular.element(
              document.querySelector('button.button.button-stable.modal-select-close-button.ng-binding')
            ).triggerHandler('click');
          }, 10);
        // Se Activa la acion del boton de la lupa para que se muestre la venta de nombresPDV
         event.defaultPrevented=true;

      }else{
       
           VicService.consultarCliente($scope.data,opcion)
            .success(function(data) {
                
                var nombresPVD = [];
                datos=data.data;
                $scope.selectableNombres=nombresPVD;

                // if (data.data.length==1) {
                  
                //   $scope.data.contactoModel=data.data[0].Nombre.trim();
                //   $scope.data.nitModel=data.data[0].Nit.trim();
                //   $scope.data.telefonoModel=data.data[0].Telefono.trim();
                //   $scope.data.direccionModel=data.data[0].Direccion.trim();
                //   $scope.data.canalModel=data.data[0].Canal.trim();
                  
                // }else{
               
                  for (var i=0; i<data.data.length; i++) {
                      nombresPVD.push(data.data[i].NombrePDV.trim());
                  }
                  //se llena la lista de los nombresPDV
                  $scope.selectableNombres=nombresPVD;
                // }
            }).error(function(err) {
              console.log("error: "+err);

              var alertPopup = $ionicPopup.alert({
                                    title: '',
                                    template: 'Hay un problema con la conexión, por favor verifique antes de continuar.',
                                    cssClass: 'popupNormal',
                                        buttons: [{
                                                    text: '<img class="alineacion-vertical" src="img/cerrarBtn.png" width="100">'
                                        }]
                                  });
          
            });
      }
    }  
    $scope.cargarInfoCliente=function(newValue){
      for (var i=0; i<datos.length; i++) {
          if(datos[i].NombrePDV.trim() ==newValue.trim()){
              console.log('Encontrado');

             
              $scope.data.nitModel=datos[i].Nit;
              $scope.data.telefonoModel=datos[i].Telefono;
              $scope.data.direccionModel=datos[i].Direccion;
              $scope.data.canalModel=datos[i].Canal;
              $scope.data.potencialModel=datos[i].SegmentoxPotencial;
              $scope.data.necesidadlModel=datos[i].SegmentoxNecesidad;
              $scope.data.ciudadModel=datos[i].Ciudad;
              $scope.data.codigo=datos[i].Codigo;

              $localStorage.nit=datos[i].Nit.trim();
              $localStorage.ciudad=$scope.data.ciudadModel;
              $localStorage.nombresPVD=datos[i].NombrePDV.trim();
              $scope.mostrar=true;

              break;
          }
      }
      
    }
    $scope.cargarUltimoCliente=function(newValue){

         $ionicLoading.show({
              content: 'Loading',
              animation: 'fade-in',
              showBackdrop: true,
              maxWidth: 200,
              showDelay: 0
            });

        var datos= new Object();    
        datos.nitModel=$localStorage.nit;
        datos.nombreModel=$localStorage.nombresPVD;
        datos.ciudadModel=$localStorage.ciudad;

       

        if( $localStorage.nit!=null && $localStorage.nit !=="" && 
            $localStorage.nombresPVD!=null && $localStorage.nombresPVD !=="" && 
            $localStorage.ciudad!=null && $localStorage.ciudad !==""){

      
            VicService.consultarCliente(datos,'nombre')
            .success(function(data) {        
                
                  $scope.data.nitModel=data.data[0].Nit;
                  $scope.data.nombreModel=data.data[0].NombrePDV;
                  $scope.data.telefonoModel=data.data[0].Telefono;
                  $scope.data.direccionModel=data.data[0].Direccion;
                  $scope.data.canalModel=data.data[0].Canal;
                  $scope.data.potencialModel=data.data[0].SegmentoxPotencial;
                  $scope.data.necesidadlModel=data.data[0].SegmentoxNecesidad;
                  $scope.data.ciudadModel=data.data[0].Ciudad;
                  $scope.data.codigo=data.data[0].Codigo;
                  $scope.mostrar=true;

                  // $scope.data.ciudadModel=$localStorage.ciudad;
                  // $scope.data.nombreModel=data.data[0].Razonsocial;
                  // $scope.data.contactoModel=data.data[0].Nombre;
                  // $scope.data.nitModel=data.data[0].Nit.trim();
                  // $scope.data.telefonoModel=data.data[0].Telefono.trim();
                  // $scope.data.direccionModel=data.data[0].Direccion.trim();
                  // $scope.data.canalModel=data.data[0].Canal.trim();
                  $ionicLoading.hide();
                
            }).error(function(err) {
              console.log("error: "+err);
              $ionicLoading.hide();
              var alertPopup = $ionicPopup.alert({
                                    title: '',
                                    template: 'Hay un problema con la conexión, por favor verifique antes de continuar.'
                                  });          
            });

        }else{
            $ionicLoading.hide();
            var alertPopup = $ionicPopup.alert({
                                    title: '',
                                    template: 'No se ha guardado un cliente.'
                                  });   
        }
      
    }
    $scope.limpiarCampos=function(){

        $scope.data.ciudadModel="";
        $scope.data.nombreModel="";
        $scope.data.nitModel="";
        $scope.data.canalModel="";
        $scope.data.telefonoModel="";
        $scope.data.direccionModel="";
        $scope.data.necesidadlModel="";
        $scope.data.potencialModel="";

        $scope.mostrar=false;
        
    }
})


.controller('VicDetallesCtrl', function($scope,$stateParams,$ionicLoading,$ionicPopup,$localStorage,$window,$state,$ionicPopup,VicService) {
  
    console.log('VideoCtrl');
    $scope.data = {};
    
    console.log(''+$stateParams.parametro);
     $ionicLoading.show({
                    content: 'Loading',
                    animation: 'fade-in',
                    showBackdrop: true,
                    maxWidth: 200,
                    showDelay: 0
                    }); 

    VicService.consultarDetalles($stateParams.parametro)
    .success(function(data) {

        
        $localStorage.vic=data.data;
        $localStorage.vicNombrePVD=$stateParams.parametro2;
        $scope.data.codigo=$stateParams.parametro;
        $scope.data.nombrePVD=$stateParams.parametro2;

        $scope.data.jefe=data.data.Jefe;
        $scope.data.vendedor=data.data.ListaVendedores[0].NombreVendedor;
        $scope.data.NivelServicio=data.data.NivelServicio;
        $scope.data.natural=data.data.EjecucionImpecable.EjeImpecable +' - '+data.data.EjecucionImpecable.EjeNatural;

        var listaQuejas = [];
        var listaSolicitudes = [];
        for(i=0;i<data.data.ListaQuejasSolicitudes.length;i++){
            if(data.data.ListaQuejasSolicitudes[i].TipoQS == 1){
                listaQuejas.push(data.data.ListaQuejasSolicitudes[i]);
            }else{
                listaSolicitudes.push(data.data.ListaQuejasSolicitudes[i]);
            }
        }

        // for(i=0;i<$localStorage.vic.ListaQuejasSolicitudes.length;i++){
        //     if($localStorage.vic.ListaQuejasSolicitudes[i].TipoQS == 1){
        //         listaQuejas.push($localStorage.vic.ListaQuejasSolicitudes[i]);
        //     }else{
        //         listaSolicitudes.push($localStorage.vic.ListaQuejasSolicitudes[i]);
        //     }
        // }

        $scope.data.quejas=listaQuejas.length;
        $scope.data.solicitudes=listaSolicitudes.length;

        $ionicLoading.hide();
    }).error(function(err) {
              console.log("error: "+err);

              var alertPopup = $ionicPopup.alert({
                                    title: '',
                                    template: 'Hay un problema con la conexión, por favor verifique antes de continuar.',
                                    cssClass: 'popupNormal',
                                        buttons: [{
                                                    text: '<img class="alineacion-vertical" src="img/cerrarBtn.png" width="100">'
                                        }]
                                  });
          
    });

    var myPopupReporte=null;
    $scope.reportePopup=function(){
         myPopupReporte = $ionicPopup.show({
                        
                        template:  '<a class="button button-icon icon" ng-click="irCompetencia()"><img  width="100" src="img/conversando.png"></a>'
                                 + '<a class="button button-icon icon" ng-click="irPuntosVenta()"><img  width="100" src="img/nuestro.png"></a>',
                        scope: $scope,
                        cssClass: 'popupNormal',
                        buttons: [{
                                text: '<img class="alineacion-vertical" src="img/CancelarBtn.png" width="100">'
                            }]
                   });
    }

$scope.irCompetencia=function(){
    myPopupReporte.close();
    $state.go('app.competencia',{parametro:'competencia'});
}

$scope.irPuntosVenta=function(){
    myPopupReporte.close();
    $state.go('app.ejecucionImpecable',{parametro:'punto de venta'});
}
    


    
  
})

.controller('VicDetallesQuejasSolicitudesCtrl', function($scope,$window,$stateParams,$state,$ionicHistory,$localStorage) {
  
    $scope.data = {};
    console.log('VicDetallesQuejasSolicitudesCtrl');
    $scope.data.codigo=$localStorage.vic.Codigo;
    $scope.data.nombrePVD=$localStorage.vicNombrePVD;

    $scope.data.tipo=$stateParams.parametro;
    $scope.datos=$localStorage.vic.ListaQuejasSolicitudes;

})
.controller('VicVentasCtrl', function($scope,$window,$ionicLoading,$state,$ionicHistory,$localStorage) {

    $ionicLoading.show({
                    content: 'Loading',
                    animation: 'fade-in',
                    showBackdrop: true,
                    maxWidth: 200,
                    showDelay: 0
                    }); 
  
    $scope.data = {};
    console.log('VicVentasCtrl');
    $scope.data.codigo=$localStorage.vic.Codigo;
    $scope.data.nombrePVD=$localStorage.vicNombrePVD;

    $scope.data.fecha=$localStorage.vic.FechaActualizacion;
    $scope.data.ventasMes=$localStorage.vic.VentaMes;
    $scope.data.ventasAcum=$localStorage.vic.VentaAcumulada;

    $scope.data.EjecMes=$localStorage.vic.EjecucionMes;
    $scope.data.EjecAcum=$localStorage.vic.EjecucionAcumulada;



    $scope.datos=$localStorage.vic.ListaVentas;


   $ionicLoading.hide();

   
  
})

.controller('VicRelacionamientoCtrl', function($scope,$window,$ionicLoading,$state,$ionicHistory,$localStorage) {

    $scope.data = {};
    $ionicLoading.show({
                    content: 'Loading',
                    animation: 'fade-in',
                    showBackdrop: true,
                    maxWidth: 200,
                    showDelay: 0
                    }); 
    console.log('VicClientesCtrl');
    $scope.data.codigo=$localStorage.vic.Codigo;
    $scope.data.nombrePVD=$localStorage.vicNombrePVD;

    $scope.data.socios=$localStorage.vic.ListaParticipacion.length;
    $scope.data.plan=$localStorage.vic.PlanNegocios.PlanNegocio;
    $scope.data.balance=$localStorage.vic.BalanceComercial.FechaBalance;
    $scope.data.escuela=$localStorage.vic.Escuela.EscuelaAno;
    $scope.data.certificacion=$localStorage.vic.Escuela.CertificacionAno;
    if($localStorage.vic.PlanColaboracion.ModeloColabora != '' && $localStorage.vic.PlanColaboracion.ModeloValor != '')
        $scope.data.modelo=$localStorage.vic.PlanColaboracion.ModeloColabora+' - '+$localStorage.vic.PlanColaboracion.ModeloValor+'%';
    $ionicLoading.hide();
  
})
.controller('VicClientesCtrl', function($scope,$window,$ionicLoading,$state,$ionicHistory,$localStorage) {
    $scope.data = {};
    console.log('VicRelacionamientoCtrl');
    $ionicLoading.show({
                    content: 'Loading',
                    animation: 'fade-in',
                    showBackdrop: true,
                    maxWidth: 200,
                    showDelay: 0
                    }); 
    $scope.data.codigo=$localStorage.vic.Codigo;
    $scope.data.nombrePVD=$localStorage.vicNombrePVD;
    
    $scope.data.ActiCciales=$localStorage.vic.ListaActividadesC.length;
    var cantActivos = 0;
    for(i=0;i<$localStorage.vic.ListaActivos.length;i++){
        cantActivos += parseInt($localStorage.vic.ListaActivos[i].ActivosCantidad);
    }
    $scope.data.activos=cantActivos;
    $scope.data.mercaderista=$localStorage.vic.ListaMercaderistas.length;
    $scope.data.desarrollador=$localStorage.vic.Desarrollador;

    $ionicLoading.hide();
})

.controller('VicClientes-ccialesCtrl', function($scope,$window,$state,$ionicHistory,$localStorage) {
    $scope.data = {};
    console.log('VicRelacionamientoCtrl');
    $scope.data.codigo=$localStorage.vic.Codigo;
    $scope.data.nombrePVD=$localStorage.vicNombrePVD;
    
    $scope.datos=$localStorage.vic.ListaActividadesC;
})

.controller('VicClientes-instaladosCtrl', function($scope,$window,$state,$ionicHistory,$localStorage) {
    $scope.data = {};
    console.log('VicRelacionamientoCtrl');
    $scope.data.codigo=$localStorage.vic.Codigo;
    $scope.data.nombrePVD=$localStorage.vicNombrePVD;
    
    $scope.datos=$localStorage.vic.ListaActivos;
})

.controller('VicClientes-mercaderistaCtrl', function($scope,$window,$state,$ionicHistory,$localStorage) {
    $scope.data = {};
    console.log('VicRelacionamientoCtrl');
    $scope.data.codigo=$localStorage.vic.Codigo;
    $scope.data.nombrePVD=$localStorage.vicNombrePVD;
    
    $scope.datos=$localStorage.vic.ListaMercaderistas;
})

.controller('VicRelacionamiento-redencionesCtrl', function($scope,$window,$state,$ionicHistory,$localStorage) {
    $scope.data = {};
    console.log('VicRelacionamientoCtrl');
    $scope.data.codigo=$localStorage.vic.Codigo;
    $scope.data.nombrePVD=$localStorage.vicNombrePVD;
    
    $scope.datos=$localStorage.vic.ListaParticipacion;
})

.controller('PublicacionesCtrl', function($scope,$window,$state,$ionicHistory,$localStorage) {
  
    console.log('PublicacionesCtrl');
      $scope.atras = function() {
        $ionicHistory.nextViewOptions({
              disableAnimate: true,
              disableBack: true,
              historyRoot: true
            });
        $state.go('app.inicio');
        // $window.location.reload();
      } 
})
.controller('CambiarClaveCtrl', function($scope,$localStorage, $ionicHistory,$ionicPopup, $ionicLoading, $window, $state, CambioClave) {
     
     $scope.$on('$ionicView.enter', function() {
     $scope.claves ={};
     $scope.idUsuario = $localStorage.idUsuario;

     $scope.procesoCambioClave = function(){
        // alert($scope.idUsuario+" -- "+$scope.claves.actual+" -- "+$scope.claves.nueva);
         
         CambioClave.cambiaClave($scope.idUsuario, $scope.claves.actual, $scope.claves.nueva).success(function(data) {
                 $ionicLoading.hide();
                 var alertPopup = $ionicPopup.alert({
                    title: 'Cambio Exitoso!',
                    template: 'Cambio de clave exitoso!',
                    cssClass: 'popupNormal',
                    buttons: [{
                                text: '<img class="alineacion-vertical" src="img/cerrarBtn.png" width="100">',
                                onTap: function(){
                                    $ionicHistory.nextViewOptions({
                                      disableAnimate: true,
                                      disableBack: true,
                                      historyRoot: true
                                    });
                                    $state.go('app.inicio');
                                    // $window.location.reload();
                                }
                    }]
                });
                 
            }).error(function(data) {
                $ionicLoading.hide();
                var alertPopup = $ionicPopup.alert({
                    title: 'Error!',
                    template: 'Por favor verifique los datos!',
                    cssClass: 'popupNormal',
                    buttons: [{
                                text: '<img class="alineacion-vertical" src="img/cerrarBtn.png" width="100">',
                                onTap: function(){
                                    $ionicHistory.nextViewOptions({
                                      disableAnimate: true,
                                      disableBack: true,
                                      historyRoot: true
                                    });
                                    $state.go('app.inicio');
                                    // $window.location.reload();
                                }
                    }]
                });
            });
     };

     var myPopup = $ionicPopup.show({
        template: '<input type="password" class="input-clave" placeholder="  Clave Actual" ng-model="claves.actual"><br><input type="password" class="input-clave" placeholder="  Clave Nueva" ng-model="claves.nueva">',
        title: 'Cambio De Clave',
        subTitle: '<span class="subt-clave">Digite la nueva clave</span>',
        scope: $scope,
        cssClass: 'popupNormal',
        buttons: [
        { text: '<img class="alineacion-vertical cambio-btn" src="img/CancelarBtn.png" width="100">', 
        onTap: function(){
            $ionicHistory.nextViewOptions({
              disableAnimate: true,
              disableBack: true,
              historyRoot: true
            });
            $state.go('app.inicio');
            // $window.location.reload();
        } },
        {
           text: '<img class="alineacion-vertical cambio-btn-rgt" src="img/cerrarBtn.png" width="100">',
            type: 'button-positive',
            onTap: function(e) {
            $ionicLoading.show({
              content: 'Loading',
              animation: 'fade-in',
              showBackdrop: true,
              maxWidth: 200,
              showDelay: 0
            }); 
            $scope.procesoCambioClave();
            }
        }
        ]
    });
    });
})
.controller('MensajesCtrl', function($scope,$ionicHistory,$state,MensajesService) {
    $scope.$on('$ionicView.enter', function() {
        $scope.data = {};
        $scope.mostrar1=false;
        $scope.mostrar2=false;
        $scope.mostrar3=false;
        $scope.mostrar4=false;
        console.log('MensajesCtrl');

        MensajesService.consultarMensajes().success(function(data) {
               console.log(data);
               if(data.msj1>0){
                    if (data.msj1>9) {
                        $scope.data.mensajes1="9+";
                    }else{
                        $scope.data.mensajes1=data.msj1;
                    }
                    $scope.mostrar1=true;    
               }
                if(data.msj2>0){
                    if (data.msj2>9) {
                        $scope.data.mensajes2="9+";
                    }else{
                        $scope.data.mensajes2=data.msj2;
                    }
                    $scope.mostrar2=true;    
               }
                if(data.msj3>0){
                   if (data.msj3>9) {
                        $scope.data.mensajes3="9+";
                    }else{
                        $scope.data.mensajes3=data.msj3;
                    }
                    $scope.mostrar3=true;    
               }
                if(data.msj4>0){
                    if (data.msj4>9) {
                        $scope.data.mensajes4="9+";
                    }else{
                        $scope.data.mensajes4=data.msj4;
                    }
                    $scope.mostrar4=true;    
               }

            }).error(function(data) {
                
        });
    });
})

;

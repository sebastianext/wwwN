// Ionic Starter App

angular.module('starter', ['ionic','ngStorage','ngCordova','ionic-modal-select','starter.controllers','starter.services','starter.constants'])

.run(function($ionicPlatform,$cordovaSQLite) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      var isIOS = ionic.Platform.isIOS();
      var isAndroid = ionic.Platform.isAndroid();
      var isWindowsPhone = ionic.Platform.isWindowsPhone();

      if (isIOS || isAndroid) {
          if (window.cordova && window.cordova.plugins.Keyboard) {
              cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
              cordova.plugins.Keyboard.disableScroll(true);

          }
      }

    
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'templates/menu.html',
      controller: 'AppCtrl'
    })
  //----------------------rutas de tab de publicaciones-------------------
     .state('publicaciones', {
      url: '/publicaciones',
      abstract: true,
      templateUrl: 'templates/publicaciones.html',
      controller: 'PublicacionesCtrl'
    })
   
    // .state('publicaciones.experiencias', {
    //     url: '/experiencias',
    //     views: {
    //       'publicaciones-experiencias': {
    //         templateUrl: 'templates/experiencias.html',
    //         controller: 'ExperienciasCtrl'

    //       }
    //     }
    //   })

    .state('publicaciones.experiencias', {
        url: '/experiencias',
        views: {
          'publicaciones-experiencias': {
            templateUrl: 'templates/experienciasYfotos.html',
            controller: 'ExperienciasCtrl'

          }
        }
      })
    

     .state('publicaciones.fotos', {
        url: '/fotos',
        views: {
          'publicaciones-fotos': {
            templateUrl: 'templates/publicacionesFotos.html',
            controller: 'FotosCtrl'
          }
        }
      })

      .state('publicaciones.termometro', {
        url: '/termometro',
        views: {
          'publicaciones-termometro': {
            templateUrl: 'templates/termometro.html',
            controller:'TermometroCtrl'
          }

        }
      })
 //----------------------------------------------------

  .state('app.preguntasFrecuentes', {
    url: '/preguntasFrecuentes',
    views: {
      'menuContent': {
        templateUrl: 'templates/preguntasFrecuentes.html',
        controller: 'PreguntasCtrl'
      }
    }
  })

  .state('app.comentario', {
      url: '/comentario',
      params: { parametro: null, },
      views: {
        'menuContent': {
          templateUrl: 'templates/comentario.html',
          controller:'ComentarioCtrl'
        }
      }
    })

  .state('app.comentarioTexto', {
      url: '/comentarioTexto',
      params: { parametro: null, },
      views: {
        'menuContent': {
          templateUrl: 'templates/comentarioTexto.html',
          controller: 'ComentarioTextoCtrl'
        }
      }
    })

  .state('app.comentarioAudio', {
      url: '/comentarioAudio',
      params: { parametro: null, },
      views: {
        'menuContent': {
          templateUrl: 'templates/comentarioAudio.html',
          controller: 'ComentarioAudioCtrl'
        }
      }
    })
  .state('app.comentarioFoto', {
      url: '/comentarioFoto',
      params: { parametro: null, },
      views: {
        'menuContent': {
          templateUrl: 'templates/comentarioFoto.html',
          controller: 'ComentarioFotoCtrl'
        }
      }
    })


  .state('app.video', {
      url: '/video',
      views: {
        'menuContent': {
          templateUrl: 'templates/video.html',
          controller: 'VideoCtrl'
        }
      }
    })
  
  .state('app.reportarInconvenientes', {
      url: '/reportarInconvenientes',
      views: {
        'menuContent': {
          templateUrl: 'templates/reportarInconvenientes.html',
          controller:'IncomvenienteCtrl'
          
        }
      }
    })

    .state('app.inicio', {
      url: '/inicio',
      views: {
        'menuContent': {
          templateUrl: 'templates/inicio.html',
          controller: 'InicioCtrl'
        }
      }
    })

    .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'LoginCtrl'
    })

  .state('app.opinionCliente', {
    url: '/opinionCliente',
    params: { parametro: null, },
    views: {
      'menuContent': {
        templateUrl: 'templates/opinionCliente.html',
        controller:'OpinioClienteCtrl'
      }
    }
  })
  .state('app.competencia', {
    url: '/competencia',
    params: { parametro: null, },
    views: {
      'menuContent': {
        templateUrl: 'templates/competencia.html',
        controller:'CompetenciaCtrl'
      }
    }
  })

  .state('app.mensaje', {
    url: '/mensaje',
    views: {
      'menuContent': {
        templateUrl: 'templates/mensaje.html',
        controller:'MensajesCtrl'

      }
    }
  })

 .state('app.solucionInconvenientes', {
    url: '/solucionInconvenientes',
    views: {
      'menuContent': {
        templateUrl: 'templates/solucionInconvenientes.html',
        controller:'SolucionInconvenientesCtrl'
      }
    }
  })
  .state('app.gestionImagix', {
    url: '/gestionImagix',
    views: {
      'menuContent': {
        templateUrl: 'templates/gestionImagix.html',
        controller:'GestionImagixCtrl'
      }
    }
  })
  .state('app.casosCreados', {
    url: '/casosCreados',
    views: {
      'menuContent': {
        templateUrl: 'templates/casosCreados.html',
        controller:'CasosCreadosCtrl'
      }
    }
  })
  .state('app.estados', {
    url: '/estados',
    views: {
      'menuContent': {
        templateUrl: 'templates/estados.html',
        controller:'EstadosCtrl'
      }
    }
  })

  .state('app.notificaciones', {
    url: '/notificaciones',
    views: {
      'menuContent': {
        templateUrl: 'templates/notificaciones.html',
        controller:'NotificacionesCtrl'
      }
    }
  })
   .state('app.verMensaje', {
    url: '/verMensaje',
    params: { parametro: null, },
    views: {
      'menuContent': {
        templateUrl: 'templates/verMensaje.html',
        controller:'NotificacionesCtrl'
      }
    }
  })
  .state('app.verMensajeRespuesta', {
    url: '/verMensajeRespuesta',
    params: { parametro: null, },
    views: {
      'menuContent': {
        templateUrl: 'templates/verMensajeRespuesta.html',
        controller:'EstadosCtrl'
      }
    }
  })
  .state('app.misIdeas', {
    url: '/misIdeas',
    views: {
      'menuContent': {
        templateUrl: 'templates/misIdeas.html',
        controller: 'MisIdeasCtrl'

      }
    }
  })

  .state('app.datosCliente', {
    url: '/datosCliente',
    params: { parametro: null, },
    views: {
      'menuContent': {
        templateUrl: 'templates/datosCliente.html',
        controller:'DatosClientesCtrl'
      }
    }
  })
  .state('app.cerrarSesion', {
    url: '/cerrarSesion',
    views: {
      'menuContent': {
        controller:'CerrarSesionsCtrl'
      }
    }
  })

  .state('app.ejecucionImpecable', {
    url: '/ejecucionImpecable',
    params: { parametro: null, },
    views: {
      'menuContent': {
        templateUrl: 'templates/ejecucionImpecable.html',
        controller:'EjecucionImpecableCtrl'
      }
    }
  })
  .state('app.publicacioness', {
    url: '/publicacioness',
    views: {
      'menuContent': {
        templateUrl: 'templates/publicaciones.html'
      }
    }
  })

  .state('app.vic', {
    url: '/vic',
    views: {
      'menuContent': {
        templateUrl: 'templates/vic.html',
        controller: 'VicCtrl'
      }
    }
  })

  .state('app.vicDetalles', {
    url: '/vicDetalles',
    params: { 
      parametro: null,
      parametro2: null 
    },
    views: {
      'menuContent': {
        templateUrl: 'templates/vicDetalles.html',
        controller: 'VicDetallesCtrl'
      }
    }
  })
  .state('app.vicVentas', {
    url: '/vicVentas',
    views: {
      'menuContent': {
        templateUrl: 'templates/vicVentas.html',
        controller: 'VicVentasCtrl'
      }
    }
  })
  .state('app.vicDetallesQuejasSolicitudes', {
    url: '/vicDetallesQuejasSolicitudes',
    params: { parametro: null, },
    views: {
      'menuContent': {
        templateUrl: 'templates/vicDetallesQuejasSolicitudes.html',
        controller: 'VicDetallesQuejasSolicitudesCtrl'
      }
    }
  })
  .state('app.vicRelacionamiento', {
    url: '/vicRelacionamiento',
    views: {
      'menuContent': {
        templateUrl: 'templates/vicRelacionamiento.html',
        controller: 'VicRelacionamientoCtrl'
      }
    }
  })
  .state('app.vicClientes', {
    url: '/vicClientes',
    views: {
      'menuContent': {
        templateUrl: 'templates/vicClientes.html',
        controller: 'VicClientesCtrl'
      }
    }
  })

  .state('app.vicClientes-cciales', {
    url: '/vicClientes-cciales',
    views: {
      'menuContent': {
        templateUrl: 'templates/vicClientes-cciales.html',
        controller: 'VicClientes-ccialesCtrl'
      }
    }
  })

  .state('app.vicClientes-instalados', {
    url: '/vicClientes-instalados',
    views: {
      'menuContent': {
        templateUrl: 'templates/vicClientes-instalados.html',
        controller: 'VicClientes-instaladosCtrl'
      }
    }
  })
  .state('app.vicClientes-mercaderista', {
    url: '/vicClientes-mercaderista',
    views: {
      'menuContent': {
        templateUrl: 'templates/vicClientes-mercaderista.html',
        controller: 'VicClientes-mercaderistaCtrl'
      }
    }
  })

  .state('app.vicRelacionamiento-redenciones', {
    url: '/vicRelacionamiento-redenciones',
    views: {
      'menuContent': {
        templateUrl: 'templates/vicRelacionamiento-redenciones.html',
        controller: 'VicRelacionamiento-redencionesCtrl'
      }
    }
  })
   .state('app.cambiarClave', {
    url: '/cambiarClave',
    views: {
      'menuContent': {
        controller:'CambiarClaveCtrl'
      }
    }
  })

  ;

  
  // if none of the above states are matched, use this as the fallback
  // $urlRouterProvider.otherwise('/app/inicio');
  // $urlRouterProvider.otherwise('/app/datosCliente');
  
   $urlRouterProvider.otherwise('/login');
});

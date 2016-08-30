angular.module('starter.services', [])

.service('InicioService', function($q,$http,CONFIG,$localStorage) {
    return {
        consultarMensajes: function() {
            var deferred = $q.defer();
            var promise = deferred.promise;
            var req = {
                url: CONFIG.url,
                method: 'GET',
                params: { 
                    option: 'obtenerMensajesNoleidos',
                    idusuario:$localStorage.idUsuario
                }
            }

            $http(req).then(function(response){   
                // alert("OK: "+response);
                console.log(response.data);
                if (response.data.res=='OK') {
                    deferred.resolve(response.data);                    
                }else{
                    deferred.reject('Error');
                }
              
             }, function(response){
                 deferred.reject('FAIL : '+response);
             });

 
            promise.success = function(fn) {
                promise.then(fn);
                return promise;
            }
            promise.error = function(fn) {
                promise.then(null, fn);
                return promise;
            }
            return promise;
        }
    }
})
.service('LoginService', function($q,$http,CONFIG,$localStorage) {
    return {
        loginUser: function(name, pw) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            var req = {
                url: CONFIG.url,
                method: 'GET',
                params: { 
                    doc:name,
                    option: 'login',
                    pass:pw
                }
            }

            $http(req).then(function(response){   
                // alert("OK: "+response);
                console.log(response.data);
                if (response.data.res=='OK') {
                    deferred.resolve('Bien');

                    $localStorage.idUsuario=response.data.idusuario;
                    $localStorage.pwUsuario=pw;
                    $localStorage.Usuario=response.data;
                    
                }else{
                    deferred.reject('Error');
                }
              
             }, function(response){
                 deferred.reject('FAIL : '+response);
             });

 
            promise.success = function(fn) {
                promise.then(fn);
                return promise;
            }
            promise.error = function(fn) {
                promise.then(null, fn);
                return promise;
            }
            return promise;
        }
    }
})
.service('ValidacionComentarioTextoService', function($q,$http,$localStorage,CONFIG) {
    return {
        validarTexto: function(campo, opcion) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            console.log("campo "+campo);
            console.log("opcion "+opcion);
            if (campo==null || campo=="") {
                 deferred.reject('ErrorCampo');
            }
            if (opcion!=null ||opcion!="") {
                    if ($localStorage.tipoProceso=="conversar con el cliente") {
                        $localStorage.categoriaActividad=null;
                    }
    
                    var req = {
                        url: CONFIG.url,
                        method: 'GET',
                        params: { 
                            option:             'informe',
                            id_user:             $localStorage.idUsuario,
                            tipoNovedad:         $localStorage.tipoProceso,
                            resultadoInforme:    opcion,
                            formato:             $localStorage.formato,
                            opinion:             campo,
                            parametro:      null,
                            categoria_actividad: $localStorage.categoriaActividad,
                            canal:               $localStorage.cliente.canalModel,
                            ciudad:              $localStorage.cliente.ciudadModel,
                            nombre_establecimiento: $localStorage.cliente.nombreModel,
                            contacto:               $localStorage.cliente.contactoModel,
                            nit:                    $localStorage.cliente.nitModel,
                            telefono:               $localStorage.cliente.telefonoModel,
                            direccion:              $localStorage.cliente.direccionModel,
                            codigo:                 $localStorage.Usuario.cedula,
                            cliente_nuevo:          $localStorage.cliente.nuevoClienteModel,
                            evento:         null,
                            cedula_asesora: null,
                            otro_asesora:   null,
                            v: CONFIG.version
                        }
                    }

                    $http(req).then(function(response){   
                        // alert("OK: "+response);
                        console.log(response.data);
                        if (response.data.res=='OK') {
                            deferred.resolve('Bien');
                        }else{
                            deferred.reject('Error');
                        }
                      
                     }, function(response){
                         deferred.reject('FAIL : '+response);
                     });

                // deferred.resolve('BienOpcion');
            }else{
                deferred.reject('ErrorOpcion');
            }
         
            promise.success = function(fn) {
                promise.then(fn);
                return promise;
            }
            promise.error = function(fn) {
                promise.then(null, fn);
                return promise;
            }
            return promise;
        }
    }
})
.service('EnviarTipoTextoService', function($q,$http,CONFIG,$localStorage) {
    return {
        enviar: function(data) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            
            if ($localStorage.tipoProceso=="conversar con el cliente") {
                $localStorage.categoriaActividad=null;
            }
            if (data.ciudadModel==null || data.ciudadModel==""|| 
                data.nombreModel==null || data.nombreModel==""|| 
                data.canalModel==null || data.canalModel==""|| 
                data.telefonoModel==null || data.telefonoModel=="") {

                 deferred.reject('ErrorCampo');
            }

            var req = {
                url: CONFIG.url,
                method: 'GET',
                params: { 
                    option:             'informe',
                    id_user:             $localStorage.idUsuario,
                    tipoNovedad:         $localStorage.tipoProceso,
                    resultadoInforme:    $localStorage.resultadoInforme,
                    formato:             $localStorage.formato,
                    opinion:             $localStorage.respuesta,
                    parametro:      null,
                    categoria_actividad: $localStorage.categoriaActividad,
                    canal:               data.canalModel,
                    ciudad:              data.ciudadModel,
                    nombre_establecimiento: data.nombreModel,
                    contacto:               data.contactoModel,
                    nit:                    data.nitModel,
                    telefono:               data.telefonoModel,
                    direccion:              data.direccionModel,
                    codigo:                 $localStorage.Usuario.cedula,
                    cliente_nuevo:          data.nuevoClienteModel,
                    referido:       data.referidoModel,
                    barrio:         data.barrioModel,
                    evento:         null,
                    cedula_asesora: null,
                    otro_asesora:   null,
                    v: CONFIG.version
                }
            }

            $http(req).then(function(response){   
                // alert("OK: "+response);
                console.log(response.data);
                if (response.data.res=='OK') {
                    deferred.resolve('Bien');
                }else{
                    deferred.reject('Error');
                }
              
             }, function(response){
                 deferred.reject('FAIL : '+response);
             });

         
            promise.success = function(fn) {
                promise.then(fn);
                return promise;
            }
            promise.error = function(fn) {
                promise.then(null, fn);
                return promise;
            }
            return promise;
        },
        consultarCliente: function(data,opcion) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            var req= null;
                
            if(opcion=="nombre"){
                req = {
                    url: CONFIG.urlClientes,
                    method: 'GET',
                    params: { 
                        nombre: data.nombreModel,
                        ciudad: data.ciudadModel
                    }
                }
            } else if(opcion=="nit"){
                req = {
                    url: CONFIG.urlClientes,
                    method: 'GET',
                    params: {                         
                        nit: data.nitModel
                    }
                }
            }else{
                req = {
                    url: CONFIG.urlClientes,
                    method: 'GET',
                    params: { 
                        telefono: data.telefonoModel
                    }
                }
            }   
            
            

            $http(req).then(function(response){   
                // alert("OK: "+response);
                console.log(response.data);
                if (response.statusText=='OK') {
                    deferred.resolve(response);
                }else{
                    deferred.reject('Error');
                }
              
             }, function(response){
                 deferred.reject('FAIL : '+response);
             });

         
            promise.success = function(fn) {
                promise.then(fn);
                return promise;
            }
            promise.error = function(fn) {
                promise.then(null, fn);
                return promise;
            }
            return promise;
        }
    }
})
.service('EnviarIdeasService', function($q,$http,CONFIG,$localStorage) {
    return {
        enviar: function(data) {
            var deferred = $q.defer();
            var promise = deferred.promise;

            console.log(''+data.foco);
            // console.log(''+data.foco.toString());
            if (data.idea==null || data.idea==""||
                data.foco==null || data.foco=="") {
                 deferred.reject('ErrorCampo');
            }
            else{
                var req = {
                    url: CONFIG.url,
                    method: 'GET',
                    params: { 
                        option: 'imagix',
                        user:    $localStorage.idUsuario,
                        foco:    data.foco.toString(),
                        idea:    data.idea,
                        v:       CONFIG.version
                    }
                }
                 $http(req).then(function(response){   
                    // alert("OK: "+response);
                    console.log(response.data);
                    if (response.data.res=='OK') {
                        deferred.resolve('Bien');
                    }else{
                        deferred.reject('Error');
                    }
                  
                 }, function(response){
                     deferred.reject('FAIL : '+response);
                 });

            }

            

           
         
            promise.success = function(fn) {
                promise.then(fn);
                return promise;
            }
            promise.error = function(fn) {
                promise.then(null, fn);
                return promise;
            }
            return promise;
        }
    }
})
.service('GestionImagixService', function($q,$http,CONFIG,$localStorage) {
    return {
        consultarImagix: function(data) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            
            // console.log(''+data.foco.toString());
            
            var req = {
                url: CONFIG.url,
                method: 'GET',
                params: { 
                    option: 'gestionImagix',
                    idusuario:    $localStorage.idUsuario
                }
            }

            $http(req).then(function(response){   
                // alert("OK: "+response);
                console.log(response.data);
                if (response.data.res=='OK') {
                    deferred.resolve(response);
                }else{
                    deferred.reject('Error');
                }
              
             }, function(response){
                 deferred.reject('FAIL : '+response);
             });

         
            promise.success = function(fn) {
                promise.then(fn);
                return promise;
            }
            promise.error = function(fn) {
                promise.then(null, fn);
                return promise;
            }
            return promise;
        },
         eliminarGestion: function(idMensaje) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            
            // console.log(''+data.foco.toString());
            
            var req = {
                url: CONFIG.url,
                method: 'GET',
                params: { 
                    option: 'eliminarReporteImagix',
                    idmensaje:   idMensaje
                }
            }

            $http(req).then(function(response){   
                // alert("OK: "+response);
                console.log(response.data);
                if (response.data.res=='OK') {
                    deferred.resolve(response);
                }else{
                    deferred.reject('Error');
                }
              
             }, function(response){
                 deferred.reject('FAIL : '+response);
             });

         
            promise.success = function(fn) {
                promise.then(fn);
                return promise;
            }
            promise.error = function(fn) {
                promise.then(null, fn);
                return promise;
            }
            return promise;
        }
    }
})
.service('SolucionInconvenientesServices', function($q,$http,CONFIG,$localStorage) {
    return {
        consultar: function(data) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            
            // console.log(''+data.foco.toString());
            
            var req = {
                url: CONFIG.url,
                method: 'GET',
                params: { 
                    option: 'gestionSoporte',
                    idusuario:    $localStorage.idUsuario
                }
            }

            $http(req).then(function(response){   
                // alert("OK: "+response);
                console.log(response.data);
                if (response.data.res=='OK') {
                    deferred.resolve(response);
                }else{
                    deferred.reject('Error');
                }
              
             }, function(response){
                 deferred.reject('FAIL : '+response);
             });

         
            promise.success = function(fn) {
                promise.then(fn);
                return promise;
            }
            promise.error = function(fn) {
                promise.then(null, fn);
                return promise;
            }
            return promise;
        },
        eliminarSolucion: function(idmodel) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            
            // console.log(''+data.foco.toString());
            
            var req = {
                url: CONFIG.url,
                method: 'GET',
                params: { 
                    option: 'eliminarReporteSoporte',
                    idmensaje: idmodel
                }
            }

            $http(req).then(function(response){   
                // alert("OK: "+response);
                console.log(response.data);
                if (response.data.res=='OK') {
                    deferred.resolve(response);
                }else{
                    deferred.reject('Error');
                }
              
             }, function(response){
                 deferred.reject('FAIL : '+response);
             });

         
            promise.success = function(fn) {
                promise.then(fn);
                return promise;
            }
            promise.error = function(fn) {
                promise.then(null, fn);
                return promise;
            }
            return promise;
        }
    }
})
.service('CasosCreadosService', function($q,$http,CONFIG,$localStorage) {
    return {
        consultar: function(data) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            
            // console.log(''+data.foco.toString());
            
            var req = {
                url: CONFIG.url,
                method: 'GET',
                params: { 
                    option: 'listarTodosInforesUsuario',
                    idusuario:    $localStorage.idUsuario
                }
            }

            $http(req).then(function(response){   
                // alert("OK: "+response);
                console.log(response.data);
                if (response.data.res=='OK') {
                    deferred.resolve(response);
                }else{
                    deferred.reject('Error');
                }
              
             }, function(response){
                 deferred.reject('FAIL : '+response);
             });

         
            promise.success = function(fn) {
                promise.then(fn);
                return promise;
            }
            promise.error = function(fn) {
                promise.then(null, fn);
                return promise;
            }
            return promise;
        },
        eliminarCaso: function(idmodel) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            
            // console.log(''+data.foco.toString());
            
            var req = {
                url: CONFIG.url,
                method: 'GET',
                params: { 
                    option: 'eliminarReporteEnviadoMovil',
                    idmensaje: idmodel
                }
            }

            $http(req).then(function(response){   
                // alert("OK: "+response);
                console.log(response.data);
                if (response.data.res=='OK') {
                    deferred.resolve(response);
                }else{
                    deferred.reject('Error');
                }
              
             }, function(response){
                 deferred.reject('FAIL : '+response);
             });

         
            promise.success = function(fn) {
                promise.then(fn);
                return promise;
            }
            promise.error = function(fn) {
                promise.then(null, fn);
                return promise;
            }
            return promise;
        }
    }
})
.service('IncomvenienteService', function($q,$http,CONFIG,$localStorage) {
    return {
        enviar: function(data) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            
            // console.log(''+data.foco.toString());
            
            if (data.campocomentario==null || data.campocomentario=="") {
                 deferred.reject('ErrorCampo');
            }else{
                var req = {
                    url: CONFIG.url,
                    method: 'GET',
                    params: { 
                        option: 'soporte',
                        usuario: $localStorage.idUsuario,
                        soporte: data.campocomentario ,
                        v:       CONFIG.version
                    }
                }

                $http(req).then(function(response){   
                    // alert("OK: "+response);
                    console.log(response.data);
                    if (response.data.res=='OK') {
                        deferred.resolve(response);
                    }else{
                        deferred.reject('Error');
                    }
                  
                 }, function(response){
                     deferred.reject('FAIL : '+response);
                 });

            }
            
         
            promise.success = function(fn) {
                promise.then(fn);
                return promise;
            }
            promise.error = function(fn) {
                promise.then(null, fn);
                return promise;
            }
            return promise;
        }
    }
})
.service('ExperienciasService', function($q,$http,CONFIG,$localStorage) {
    return {
        consultar: function(pagina) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            
            // console.log(''+data.foco.toString());
            
            // var req = {
            //     url: CONFIG.url,
            //     method: 'GET',
            //     params: { 
            //         option: 'obtenerPublicacionTexto',
            //         idusuario:    $localStorage.idUsuario,
            //         page:pagina
            //     }
            // }

            var req = {
                url: CONFIG.url,
                method: 'GET',
                params: { 
                    option: 'obtenerPublicaciones',
                    idusuario:    $localStorage.idUsuario,
                    page:pagina
                }
            }

            $http(req).then(function(response){   
                // alert("OK: "+response);
                console.log(response.data);
                if (response.data.res=='OK') {
                    deferred.resolve(response);
                }else{
                    deferred.reject('Error');
                }
              
             }, function(response){
                 deferred.reject('FAIL : '+response);
             });

         
            promise.success = function(fn) {
                promise.then(fn);
                return promise;
            }
            promise.error = function(fn) {
                promise.then(null, fn);
                return promise;
            }
            return promise;
        },

        usuarioMegusta: function(idpublicacion) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            
            // console.log(''+data.foco.toString());
            
            var req = {
                url: CONFIG.url,
                method: 'GET',
                params: { 
                    option: 'usuariosMeGusta',
                    idpublicacion: idpublicacion
                }
            }

            $http(req).then(function(response){   
                // alert("OK: "+response);
                console.log(response.data);
                console.log(''+response.data.arrayUsuarios.length);
                if (response.data.res=='OK') {
                    var html="";
                    for (var i=0; i<response.data.arrayUsuarios.length; i++) {
                      html+="<div class='row'>"+
                                "<div class='col col-20'>"+
                                    "<img   src='img/userMegusta.png' width='30'>"+
                                "</div>"+
                                "<div class='col col-80'>"+
                                response.data.arrayUsuarios[i]+
                                "</div>"+
                            "</div>"
                    }

                    deferred.resolve(html);
                    // deferred.resolve(response.data.arrayUsuarios);
                }else{
                    deferred.reject('Error');
                }
              
             }, function(response){
                 deferred.reject('FAIL : '+response);
             });

         
            promise.success = function(fn) {
                promise.then(fn);
                return promise;
            }
            promise.error = function(fn) {
                promise.then(null, fn);
                return promise;
            }
            return promise;
        },

        meGustaPublicacion: function(idpublicacion) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            
            // console.log(''+data.foco.toString());
            
            var req = {
                url: CONFIG.url,
                method: 'GET',
                params: { 
                    option:        'meGustaPublicacion',
                    idusuario:     $localStorage.idUsuario,
                    idpublicacion: idpublicacion
                }
            }

            $http(req).then(function(response){   
                // alert("OK: "+response);
                console.log(response.data);
                if (response.data.res=='OK') {
                   
                    deferred.resolve(response);
                    // deferred.resolve(response.data.arrayUsuarios);
                }else{
                    deferred.reject('Error');
                }
              
             }, function(response){
                 deferred.reject('FAIL : '+response);
             });

         
            promise.success = function(fn) {
                promise.then(fn);
                return promise;
            }
            promise.error = function(fn) {
                promise.then(null, fn);
                return promise;
            }
            return promise;
        }

    }
})
.service('NotificacionService', function($q,$http,CONFIG,$localStorage) {
    return {
        consultar: function(pagina) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            
            // console.log(''+data.foco.toString());
            
            var req = {
                url: CONFIG.url,
                method: 'GET',
                params: { 
                    option:    'obtenerMensajes_masivos',
                    idusuario: $localStorage.idUsuario,
                    page:pagina
                }
            }

            $http(req).then(function(response){   
                // alert("OK: "+response);
                console.log(response.data);
                if (response.data.res=='OK') {
                    deferred.resolve(response);
                }else{
                    deferred.reject('Error');
                }
              
             }, function(response){
                 deferred.reject('FAIL : '+response);
             });

         
            promise.success = function(fn) {
                promise.then(fn);
                return promise;
            }
            promise.error = function(fn) {
                promise.then(null, fn);
                return promise;
            }
            return promise;
        },
        verMensaje:function(idMensaje) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            
            // console.log(''+data.foco.toString());
            
            var req = {
                url: CONFIG.url,
                method: 'GET',
                params: { 
                    option:      'verMensaje_masivo',
                    idrespuesta: idMensaje,
                    user:       $localStorage.Usuario.nombreUsuario,
                    pass:       $localStorage.pwUsuario
                }
            }

            $http(req).then(function(response){   
                // alert("OK: "+response);
                console.log(response.data);
                if (response.data.res=='OK') {
                    deferred.resolve(response);
                }else{
                    deferred.reject('Error');
                }
              
             }, function(response){
                 deferred.reject('FAIL : '+response);
             });

         
            promise.success = function(fn) {
                promise.then(fn);
                return promise;
            }
            promise.error = function(fn) {
                promise.then(null, fn);
                return promise;
            }
            return promise;
        },
           eliminarMensaje:function(idMensaje) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            
            // console.log(''+data.foco.toString());
            
            var req = {
                url: CONFIG.url,
                method: 'GET',
                params: { 
                    option: 'eliminarMensaje',
                    idmensaje: idMensaje
                }
            }

            $http(req).then(function(response){   
                // alert("OK: "+response);
                console.log(response.data);
                if (response.data.res=='OK') {
                    deferred.resolve(response);
                }else{
                    deferred.reject('Error');
                }
              
             }, function(response){
                 deferred.reject('FAIL : '+response);
             });

         
            promise.success = function(fn) {
                promise.then(fn);
                return promise;
            }
            promise.error = function(fn) {
                promise.then(null, fn);
                return promise;
            }
            return promise;
        }
    }
})
.service('EstadosService', function($q,$http,CONFIG,$localStorage) {
    return {
        consultar: function(pagina) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            
            // console.log(''+data.foco.toString());
            
            var req = {
                url: CONFIG.url,
                method: 'GET',
                params: { 
                    option:    'obtenerMensajes',
                    idusuario: $localStorage.idUsuario,
                    page:pagina
                }
            }

            $http(req).then(function(response){   
                // alert("OK: "+response);
                console.log(response.data);
                if (response.data.res=='OK') {
                    deferred.resolve(response);
                }else{
                    deferred.reject('Error');
                }
              
             }, function(response){
                 deferred.reject('FAIL : '+response);
             });

         
            promise.success = function(fn) {
                promise.then(fn);
                return promise;
            }
            promise.error = function(fn) {
                promise.then(null, fn);
                return promise;
            }
            return promise;
        },
        verMensaje:function(idMensaje) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            
            // console.log(''+data.foco.toString());
            
            var req = {
                url: CONFIG.url,
                method: 'GET',
                params: { 
                    option:      'verMensaje',
                    idrespuesta: idMensaje,
                    user:       $localStorage.Usuario.nombreUsuario,
                    pass:       $localStorage.pwUsuario
                }
            }

            $http(req).then(function(response){   
                // alert("OK: "+response);
                console.log(response.data);
                if (response.data.res=='OK') {
                    deferred.resolve(response);
                }else{
                    deferred.reject('Error');
                }
              
             }, function(response){
                 deferred.reject('FAIL : '+response);
             });

         
            promise.success = function(fn) {
                promise.then(fn);
                return promise;
            }
            promise.error = function(fn) {
                promise.then(null, fn);
                return promise;
            }
            return promise;
        },
           eliminarMensaje:function(idMensaje) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            
            // console.log(''+data.foco.toString());
            
            var req = {
                url: CONFIG.url,
                method: 'GET',
                params: { 
                    option: 'eliminarMensaje',
                    idmensaje: idMensaje
                }
            }

            $http(req).then(function(response){   
                // alert("OK: "+response);
                console.log(response.data);
                if (response.data.res=='OK') {
                    deferred.resolve(response);
                }else{
                    deferred.reject('Error');
                }
              
             }, function(response){
                 deferred.reject('FAIL : '+response);
             });

         
            promise.success = function(fn) {
                promise.then(fn);
                return promise;
            }
            promise.error = function(fn) {
                promise.then(null, fn);
                return promise;
            }
            return promise;
        }
    }
})
.service('FotosService', function($q,$http,CONFIG,$localStorage) {
    return {
        consultar: function(pagina) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            
             
            
            var req = {
                url: CONFIG.url,
                method: 'GET',
                params: { 
                    option: 'obtenerPublicacionImg',
                    idusuario:    $localStorage.idUsuario,
                    page:pagina
                }
            }

            $http(req).then(function(response){   
                // alert("OK: "+response);
                console.log(response.data);
                if (response.data.res=='OK') {
                    deferred.resolve(response);
                }else{
                    deferred.reject('Error');
                }
              
             }, function(response){
                 deferred.reject('FAIL : '+response);
             });

         
            promise.success = function(fn) {
                promise.then(fn);
                return promise;
            }
            promise.error = function(fn) {
                promise.then(null, fn);
                return promise;
            }
            return promise;
        },

        usuarioMegusta: function(idpublicacion) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            
            // console.log(''+data.foco.toString());
            console.log('publicacion: '+idpublicacion);
            var req = {
                url: CONFIG.url,
                method: 'GET',
                params: { 
                    option: 'usuariosMeGusta',
                    idpublicacion: idpublicacion
                }
            }

            $http(req).then(function(response){   
                // alert("OK: "+response);
                console.log(response.data);
                console.log(''+response.data.arrayUsuarios.length);
                if (response.data.res=='OK') {
                    var html="";
                    for (var i=0; i<response.data.arrayUsuarios.length; i++) {
                      html+="<div class='row'>"+
                                "<div class='col col-20'>"+
                                    "<img   src='img/userMegusta.png' width='30'>"+
                                "</div>"+
                                "<div class='col col-80'>"+
                                response.data.arrayUsuarios[i]+
                                "</div>"+
                            "</div>"
                    }

                    deferred.resolve(html);
                    // deferred.resolve(response.data.arrayUsuarios);
                }else{
                    deferred.reject('Error');
                }
              
             }, function(response){
                 deferred.reject('FAIL : '+response);
             });

         
            promise.success = function(fn) {
                promise.then(fn);
                return promise;
            }
            promise.error = function(fn) {
                promise.then(null, fn);
                return promise;
            }
            return promise;
        }
    }
})
.service('PreguntasService', function($q,$http,CONFIG,$localStorage) {
    return {
        consultar: function() {
            var deferred = $q.defer();
            var promise = deferred.promise;
            
            // console.log(''+data.foco.toString());
            
            var req = {
                url: CONFIG.url,
                method: 'GET',
                params: { 
                    option: 'preguntasFrecuentes'
                }
            }

            $http(req).then(function(response){   
                // alert("OK: "+response);
                console.log(response.data);
                if (response.data.res=='OK') {
                    deferred.resolve(response);
                }else{
                    deferred.reject('Error');
                }
              
             }, function(response){
                 deferred.reject('FAIL : '+response);
             });

         
            promise.success = function(fn) {
                promise.then(fn);
                return promise;
            }
            promise.error = function(fn) {
                promise.then(null, fn);
                return promise;
            }
            return promise;
        }   
    }
})
.service('VicService', function($q,$http,CONFIG,$localStorage) {
     return {
        consultarCliente: function(data,opcion) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            var req= null;
                
            if(opcion=="nombre"){
                req = {
                    url: CONFIG.urlVicCliente,
                    method: 'GET',
                    params: { 
                        nombre: data.nombreModel,
                        ciudad: data.ciudadModel
                    }
                }
            } else if(opcion=="nit"){
                req = {
                    url: CONFIG.urlVicCliente,
                    method: 'GET',
                    params: {                         
                        nit: data.nitModel
                    }
                }
            } 
            
            

            $http(req).then(function(response){   
                // alert("OK: "+response);
                console.log(response.data);
                if (response.statusText=='OK') {
                    deferred.resolve(response);
                }else{
                    deferred.reject('Error');
                }
              
             }, function(response){
                 deferred.reject('FAIL : '+response);
             });

         
            promise.success = function(fn) {
                promise.then(fn);
                return promise;
            }
            promise.error = function(fn) {
                promise.then(null, fn);
                return promise;
            }
            return promise;
        },
        consultarDetalles: function(codigo) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            
            console.log('fecha actual: '+new Date());
            var date = new Date();
            var req = {
                url:CONFIG.urlVicDetalle,
                method: 'GET',
                params: { 
                    codigo: codigo
                }
            }

            $http(req).then(function(response){   
                // alert("OK: "+response);
                console.log(response.data);
                if (response.statusText=='OK') {
                    deferred.resolve(response);
                }else{
                    deferred.reject('Error');
                }
              
             }, function(response){
                 deferred.reject('FAIL : '+response);
             });

         
            promise.success = function(fn) {
                promise.then(fn);
                return promise;
            }
            promise.error = function(fn) {
                promise.then(null, fn);
                return promise;
            }
            return promise;
        }
    }
})

.service('TermometroService', function($q,$http,CONFIG,$localStorage) {
    return {
        consultar: function() {
            var deferred = $q.defer();
            var promise = deferred.promise;
            
            console.log('fecha actual: '+new Date());
            var date = new Date();
            var req = {
                // url: "https://celuweb.com/nutresaescuchacliente/mobile/services.php",
                url:CONFIG.url,
                method: 'GET',
                params: { 
                    option: 'termometro',
                    fecha:  date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate()
                }
            }

            $http(req).then(function(response){   
                // alert("OK: "+response);
                console.log(response.data);
                if (response.data.res=='OK') {
                    deferred.resolve(response);
                }else{
                    deferred.reject('Error');
                }
              
             }, function(response){
                 deferred.reject('FAIL : '+response);
             });

         
            promise.success = function(fn) {
                promise.then(fn);
                return promise;
            }
            promise.error = function(fn) {
                promise.then(null, fn);
                return promise;
            }
            return promise;
        }
    }
})
.service('CambioClave', function($q,$http,CONFIG,$localStorage) {
    return {
        cambiaClave: function(idUsuario, pwActual, pwNuevo) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            var req = {
                url: CONFIG.url,
                method: 'GET',
                params: { 
                    iduser:idUsuario,
                    actual:pwActual,
                    option: 'actualizarClave',
                    nueva:pwNuevo
                }
            }

            $http(req).then(function(response){   
                 //alert("OK: "+JSON.stringify(response));
                console.log(response.data);
                if (response.data.res=='OK') {
                    deferred.resolve('Bien');

                    $localStorage.idUsuario=response.data.idusuario;
                    $localStorage.pwUsuario=pw;
                    $localStorage.Usuario=response.data;
                    
                }else{
                    deferred.reject('Error');
                }
              
             }, function(response){
                 deferred.reject('FAIL : '+response);
             });

 
            promise.success = function(fn) {
                promise.then(fn);
                return promise;
            }
            promise.error = function(fn) {
                promise.then(null, fn);
                return promise;
            }
            return promise;
        }
    }
})
.service('MensajesService', function($q,$http,CONFIG,$localStorage) {
    return {
        consultarMensajes: function() {
            var deferred = $q.defer();
            var promise = deferred.promise;
            var req = {
                url: CONFIG.url,
                method: 'GET',
                params: { 
                    option: 'obtenerMensajesNoleidosDet',
                    idusuario:$localStorage.idUsuario
                }
            }

            $http(req).then(function(response){   
                // alert("OK: "+response);
                console.log(response.data);
                if (response.data.res=='OK') {
                    deferred.resolve(response.data);                    
                }else{
                    deferred.reject('Error');
                }
              
             }, function(response){
                 deferred.reject('FAIL : '+response);
             });

 
            promise.success = function(fn) {
                promise.then(fn);
                return promise;
            }
            promise.error = function(fn) {
                promise.then(null, fn);
                return promise;
            }
            return promise;
        }
    }
})

;
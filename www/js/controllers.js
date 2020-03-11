angular.module('app.controllers', [])
  
.controller('accueilCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function () {


}])
   
// .controller('rechercheCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// // You can include any angular dependencies as parameters for this function
// // TIP: Access Route Parameters for your page via $stateParams.parameterName
// function () {

// }])

.controller('rechercheCtrl', ['$scope', '$http', function($scope, $http){
    $scope.POS = "";
    $scope.IMM = "";
    $scope.lastvt = {
        cg_adresse: "",
        cg_ani: "",
        cg_commune: "",
        cg_date_carte_violette: "",
        cg_date_vignette: "",
        cg_immatriculation: "",
        cg_mise_en_service: "",
        cg_nbr_assis: null,
        cg_nbr_debout: null,
        cg_nom: "",
        cg_nom_cooperative: "",
        cg_num_carte_violette: "",
        cg_num_vignette: "",
        cg_patente: "",
        cg_prenom: "",
        cg_profession: "",
        cg_puissance_admin: null,
        crs_libelle: "",
        ctr_nom: "",
        mrq_libelle: "",
        nom_verificateur: "",
        prv_nom: "",
        sre_libelle: "",
        usg_libelle: "",
        usr_name: "",
        vhc_charge_utile: null,
        vhc_num_moteur: "",
        vhc_num_serie: "",
        vhc_poids_total_charge: null,
        vhc_poids_vide: null,
        vhc_type: "",
        vst_anomalies: null,
        vst_created: "",
        vst_date_expiration: "",
        vst_is_apte: "",
        vst_is_contre_visite: "",
        vst_num_pv: "",
        ut_libelle: "",
        gr_libelle: ""
    };

    $scope.searchAction = function(){
        console.log($scope.POS);
        if($scope.POS == false){
            var jdvisite1 = 'http://192.168.88.254:2053/index.php/controles_techniques/one_visite/?IMM='+ $scope.IMM;
            var rdvisite1 = $http.get(jdvisite1);
            rdvisite1.success(function(rgtsvt, status, headers, config){
                console.log(rgtsvt);
                $scope.lastvt = rgtsvt[0];
            }).error(function(text, status, headers, config){
                text = "Vehicule sans visite technique."
                console.log(text);
                $scope.text = text;
            })
        }else{
            var jdvisite2 = 'http://154.126.79.185:2053/index.php/controles_techniques/one_visite/?IMM='+ $scope.IMM;
            var rdvisite2 = $http.get(jdvisite2);
            rdvisite2.success(function(rgtsvt, status, headers, config){
                console.log(rgtsvt);
                $scope.lastvt = rgtsvt[0];
            }).error(function(text, status, headers, config){
                text = "Vehicule sans visite technique."
                console.log(text);
                $scope.text = text;
            })
        }
    }

    $scope.effacerAction = function(){
        $scope.vtvide = {
            cg_adresse: "",
            cg_ani: "",
            cg_commune: "",
            cg_date_carte_violette: "",
            cg_date_vignette: "",
            cg_immatriculation: "",
            cg_mise_en_service: "",
            cg_nbr_assis: null,
            cg_nbr_debout: null,
            cg_nom: "",
            cg_nom_cooperative: "",
            cg_num_carte_violette: "",
            cg_num_vignette: "",
            cg_patente: "",
            cg_prenom: "",
            cg_profession: "",
            cg_puissance_admin: null,
            crs_libelle: "",
            ctr_nom: "",
            mrq_libelle: "",
            nom_verificateur: "",
            prv_nom: "",
            sre_libelle: "",
            usg_libelle: "",
            usr_name: "",
            vhc_charge_utile: null,
            vhc_num_moteur: "",
            vhc_num_serie: "",
            vhc_poids_total_charge: null,
            vhc_poids_vide: null,
            vhc_type: "",
            vst_anomalies: null,
            vst_created: "",
            vst_date_expiration: "",
            vst_is_apte: "",
            vst_is_contre_visite: "",
            vst_num_pv: "",
            ut_libelle: "",
            gr_libelle
        }
        $scope.lastvt = $scope.vtvide;
        $scope.IMM = "";
        $scope.POS = false;
    }
}])
   
.controller('aProposCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function () {


}])

.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function () {


}])


.controller('menuQuitteCtrl', ['$scope', 'ionicHistory',
    function($scope, $ionicHistory){
        $scope.exitApp() = function(){
            console.log('exit');
            $ionicHistory.goBack();
        }
    }
])

/* .exitApp(function(){
    console.log('exit');
    this.platform.exitApp();
}); */

/* $scope.exitApp(function(){
    console.log('exit');
    this.platform.exitApp();
}); */
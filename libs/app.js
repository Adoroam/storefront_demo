var app = angular.module("ang", []);

app.controller('MainController', ['$scope', function($scope) {
    $scope.thing = 'the button is white';
    $scope.stuff = "just kidding!";
    $scope.theChanger = false;
    $scope.buttColor = "white";
    $scope.ropemaker = function ($scope) {
        this.thing = this.stuff;
        this.buttColor = "blue";
        this.theChanger = true;
    } 

 
   $scope.page = [
        { entry: "Home", url: "pages/home.html", head: "Home", picture: "", shoppable: false},
        { entry: "Shopping", url: "pages/shopping.html", head: "Shopping", picture: "", shoppable: false},
        { entry: 'Mice', url: "pages/shopitem.html", head: "Shopping > Mice", picture: "img/g502.png", shoppable: true},
        { entry: "Keyboards", url: "pages/shopitem.html", head: "Shopping > Keyboards", picture: "img/blackwid.png", shoppable: true},
        { entry: "Headsets", url: "pages/shopitem.html", head: "Shopping > Headsets", picture: "", shoppable: true},
        { entry: "Monitors", url: "pages/shopitem.html", head: "Shopping > Monitors", picture: "", shoppable: true}
    ];

    $scope.menuShow = false;
    $scope.menuText = false;
    $scope.menuClick = function () {
         if ($scope.menuShow) {
            $scope.menuShow = false;
         }  else {$scope.menuShow = true;}
    };
    $scope.menuSel = function (index) {
        $scope.activePage = $scope.page[index];     
        $scope.menuShow = false;    
    };

    $scope.activePage = $scope.page[0];
    $scope.activeShop = null;
    $scope.shopSel = function (index) {
        $scope.activePage = $scope.page[index+2];
        $scope.activeShop = eval("$scope."+$scope.activePage.entry);
    };
    $scope.Mice = [
        { brand: "razer", model: "naga", picture: "img/naga.png", price: "80"},
        { brand: "razer", model: "deathadder", picture: "img/deathadder.png", price: "60"},
        { brand: "razer", model: "mamba", picture: "img/mamba.png", price: "150"},
        { brand: "logitech", model: "g502 proteus core", picture: "img/g502.png", price: "75"},
        { brand: "logitech", model: "g500s", picture: "img/g500s.png", price: "80"},
        { brand: "mad catz", model: "rat 9", picture: "img/rat9.png", price: "90"}
    ];
    $scope.Keyboards = [
        { brand: "razer", model: "blackwidow", picture: "img/blackwid.png", price: "100"},
        { brand: "razer", model: "blacwidow chroma", picture: "img/blackwidchroma.png", price: "150"},
        { brand: "logitech", model: "g910 orion spark", picture: "img/g910.png", price: "180"},
        { brand: "logitech", model: "g710", picture: "img/g710.png", price: "130"},
        { brand: "daskeyboard", model: "g500s", picture: "img/dasSPro.png", price: "80"}
    ];
}]);


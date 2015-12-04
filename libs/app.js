var app = angular.module("ang", []);

app.controller('MainController', ['$scope', function($scope) {
    $scope.page = [
        {   entry: "Home", url: "pages/home.html", head: "Home", picture: "", shoppable: false },
        {   entry: "Shopping", url: "pages/shopping.html", head: "Shopping", picture: "", shoppable: false },
        {   entry: 'Mice', url: "pages/shopitem.html", head: "Shopping > Mice", picture: "img/g502.png", shoppable: true },
        {   entry: "Keyboards", url: "pages/shopitem.html", head: "Shopping > Keyboards", picture: "img/blackwid.png", shoppable: true },
        {   entry: "Headsets", url: "pages/shopitem.html", head: "Shopping > Headsets", picture: "img/g430.png", shoppable: true }       
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
    $scope.headerClick = function (activePage) {
        if (activePage.shoppable == true) { $scope.activePage = $scope.page[1]; };
    };
    $scope.activePage = $scope.page[0];
    $scope.activeShop = null;
    $scope.shopSel = function (index) {
        $scope.activePage = $scope.page[index+2];
        $scope.activeShop = eval("$scope."+$scope.activePage.entry);
    };
    $scope.Mice = [
        {   brand: "razer", model: "naga", picture: "img/naga.png", price: "80" },
        {   brand: "razer", model: "deathadder", picture: "img/deathadder.png", price: "60" },
        {   brand: "razer", model: "mamba", picture: "img/mamba.png", price: "150" },
        {   brand: "logitech", model: "g502 proteus core", picture: "img/g502.png", price: "75" },
        {   brand: "logitech", model: "g500s", picture: "img/g500s.png", price: "80" },
        {   brand: "mad catz", model: "rat 9", picture: "img/rat9.png", price: "90" }
    ];
    $scope.Keyboards = [
        {   brand: "razer", model: "blackwidow", picture: "img/blackwid.png", price: "100" },
        {   brand: "razer", model: "blacwidow chroma", picture: "img/blackwidchroma.png", price: "150" },
        {   brand: "logitech", model: "g910 orion spark", picture: "img/g910.png", price: "180" },
        {   brand: "logitech", model: "g710", picture: "img/g710.png", price: "130" },
        {   brand: "daskeyboard", model: "g500s", picture: "img/dasSPro.png", price: "80" }
    ];
    $scope.Headsets = [
        {   brand: "tritton", model: "tritton pro+", picture: "img/tritton.png", price: "130" },
        {   brand: "steelseries", model: "siberia v2", picture: "img/sv2.png", price: "60" },
        {   brand: "steelseries", model: "siberia v3", picture: "img/sv3.png", price: "80" },
        {   brand: "logitech", model: "g933", picture: "img/g933.png", price: "200" },
        {   brand: "logitech", model: "g930", picture: "img/g930.png", price: "160" },
        {   brand: "logitech", model: "g430", picture: "img/g430.png", price: "80" },
        {   brand: "logitech", model: "g230", picture: "img/g230.png", price: "60" }
    ];
}]);
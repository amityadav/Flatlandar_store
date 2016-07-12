'use strict';

var app = angular.module('store-products', []);

app.directive('productTitle', function(){
  return {
    restrict: 'E',
    templateUrl: 'product-title.html'
  };
});

app.directive('productSpecs', function(){
  return {
    restrict: 'A',
    templateUrl: 'product-specs.html'
  };
});


app.directive('productPanels', function(){
  return {
    restrict: 'E',
    templateUrl: 'product-panels.html',
    controller: function(){
      this.tab = 1;

      this.selectTab = function(setTab){
        this.tab = setTab;
      };

      this.isSelected = function(checkTab){
        return this.tab === checkTab;
      };
    },
    controllerAs: 'panel'
  };
});

//Directive for product gallery
app.directive('productGallery', function(){
  return {
    restrict: 'E',
    templateUrl: 'product-gallery.html',
    controller: function(){
        this.current = 0;
        
        this.setCurrent = function(imageSet){
          if(imageSet)
            this.current = imageSet;
          else
            this.current = 0;
        };
     },
    controllerAs: 'gallery'
  };
});

app.controller('StoreController', function(){
	this.products = gems;
});


//Directive for product reviews
// app.directive('productReviews', function(){
//   return {
//     restrict: 'E',
//     templateUrl: 'product-reviews.html',
//     controller: function(){
//       this.review = {};
      
//       this.addReview = function(product){
//         this.review.createdOn = Date.now();
//         product.reviews.push(this.review);
//         this.review = {};
//       };
//     },
//     controllerAs: 'review'
//   };
// });
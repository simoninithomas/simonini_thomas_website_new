/************************************************************************************************************************
 ************************************************************************************************************************
 ************************************************************************************************************************
 *
 *                                                         app.js
 * @Author : SIMONINI Thomas, 2016 simonini_thomas@outlook.fr
 ************************************************************************************************************************
 ************************************************************************************************************************
 ************************************************************************************************************************/
angular.module('app', ['ngRoute'])

    .config(function ($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'templates/home.html'
                   
                })
                .when('/aboutme', {
                    templateUrl: 'templates/aboutme.html'
                   
                })
                .otherwise('/')
        }
    )

   $(document).ready(function(){$('body').scrollspy({target:'#page-nav-wrapper',offset:100});$('.scrollto').on('click',function(e){var target=this.hash;e.preventDefault();$('body').scrollTo(target,800,{offset:-60,'axis':'y'});});$(window).on('scroll resize load',function(){$('#page-nav-wrapper').removeClass('fixed');var scrollTop=$(this).scrollTop();var topDistance=$('#page-nav-wrapper').offset().top;if((topDistance)>scrollTop){$('#page-nav-wrapper').removeClass('fixed');$('body').removeClass('sticky-page-nav');}else{$('#page-nav-wrapper').addClass('fixed');$('body').addClass('sticky-page-nav');}});$('.chart').easyPieChart({barColor:'#00BCD4',trackColor:'#e8e8e8',scaleColor:false,lineWidth:5,animate:2000,onStep:function(from,to,percent){$(this.el).find('span').text(Math.round(percent));}});var $container=$('.isotope');$container.imagesLoaded(function(){$('.isotope').isotope({itemSelector:'.item'});});$('#filters').on('click','.type',function(){var filterValue=$(this).attr('data-filter');$container.isotope({filter:filterValue});});$('.filters').each(function(i,typeGroup){var $typeGroup=$(typeGroup);$typeGroup.on('click','.type',function(){$typeGroup.find('.active').removeClass('active');$(this).addClass('active');});});});
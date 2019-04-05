document.addEventListener('init', function(event) {
    var page = event.target;
    //console.log(event.target);
    
    if (page.id === 'menu1') {
    //page 1 loaded
        document.getElementById('menu1-workouts').addEventListener('click', function(){
            console.log('clicked');
            document.querySelector('#myNavigator').pushPage('workoutType.html', {data: {title: 'Page 2'}});
        });

         document.getElementById('menu1-nutrition').addEventListener('click', function(){
            console.log('clicked');
            document.querySelector('#myNavigator').pushPage('nutrition.html', {data: {title: 'Page 3'}});
        });           
    } else if (page.id === 'workoutType') {
    //page 2 loaded
        document.getElementById('menu2-cardio').addEventListener('click', function(){
            console.log('clicked');
            document.querySelector('#myNavigator').pushPage('cardio.html');
        });
        //listener for strength button option - push page to page 5 
        document.getElementById('menu2-strength').addEventListener('click', function(){
            console.log('clicked');
            document.querySelector('#myNavigator').pushPage('strength.html');
        });
        //listener for endurance button choice - push to page 6
        document.getElementById('menu2-endurance').addEventListener('click', function(){
            console.log('clicked');
            document.querySelector('#myNavigator').pushPage('endurance.html');
        });
    } else if (page.id === 'nutrition') {
    //page 3 loaded
        document.getElementById('menu2-foodNutrition').addEventListener('click', function(){
            console.log('clicked');
            document.querySelector('#myNavigator').pushPage('foodNutrition.html');
        });
        //listener for strength button option - push page to page 8 
        document.getElementById('menu2-what').addEventListener('click', function(){
            console.log('clicked');
            document.querySelector('#myNavigator').pushPage('what.html');
        });
        //listener for endurance button choice - push to page 9
        document.getElementById('menu2-macroCalculator').addEventListener('click', function(){
            console.log('clicked');
            document.querySelector('#myNavigator').pushPage('macroCalculator.html');
        });
    } else if (page.id === 'foodNutrition') {
    //Food Nutrition page loaded
        document.getElementById('food1').addEventListener('click', function(){
            console.log('clicked');
            document.querySelector('#myNavigator').pushPage('page10.html');
        });
        //listener for strength button option - push page to page 8 
        document.getElementById('food2').addEventListener('click', function(){
            console.log('clicked');
            document.querySelector('#myNavigator').pushPage('page10.html');
        });
        //listener for endurance button choice - push to page 9
        document.getElementById('food3').addEventListener('click', function(){
            console.log('clicked');
            document.querySelector('#myNavigator').pushPage('page10.html');
        });
        document.getElementById('food4').addEventListener('click', function(){
            console.log('clicked');
            document.querySelector('#myNavigator').pushPage('page10.html');
        });
    }
});


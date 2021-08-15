var whitelist = $.fn.tooltip.Constructor.DEFAULTS.whiteList;
whitelist.button = ['data-role', 'style'];
whitelist.img = ['style'];
whitelist.div = ['style'];

var tour =  new Tour({
    storage: false
});
var realName = '';
tour.addSteps([
    {
        element: "#col-1",
        placement: 'bottom',
        title:'Live Classes',
        content:'Classes are interactive and  happen in real time.' + '<br> <input type="text" id="real-name"/>',
        onNext: function(){
            realName = $('#real-name').val();
        }
    },
    {
        element: "#col-2",
        placement: 'bottom',
        title:'Flexible Schedule',
        // dynamic content
        content: function() {
            return realName + ', Yor can transfer classes in betweem';
        }
    },
    {
        element: "#col-3",
        placement: 'bottom',
        title:'Round the clock support',
        content:'Round the clock support'
    },
    {
       orphan: true,
       title:'Thank you',
       backdrop: true,
       placement:'top',
       content:'Thank you for visiting teh site'
    }
]);

$(document).ready(function() {
    $('#start-tour').on('click', function($event) {
        console.log("inside tour.js button event fired")
        tour.init();
        tour.start();
        $event.preventDefault();
   })
})

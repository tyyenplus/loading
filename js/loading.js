;(function(undefined) {
    var _global;
    var doc = document;

    var MyLoad = {
        threeCircle: function() {
            var div = '<div class="three-circle"></div>';
            console.log(div);
            return div;
        },
        sizeChange: function() {
            var div = '<div class="sizeChange">'
            			+	'<div class="load" id="load_one"></div>'
            			+	'<div class="load" id="load_two"></div>'
            			+	'<div class="load" id="load_three"></div>'
            			+'</div>';
            return div;
        },
        lineChange: function() {
            var div = '<div class="lineChange">'
        			+	'<div class="load"></div>'
        			+	'<div class="load"></div>'
        			+	'<div class="load"></div>'
        			+	'<div class="load"></div>'
        			+	'<div class="load"></div>'
        			+	'<div class="load"></div>'
        			+	'<div class="load"></div>'
        			+	'<div class="load"></div>'
        			+	'<div class="load"></div>'
        			+	'<div class="load"></div>'
        			+ '</div>';
            return div;
        },
        FYloaderA: function() {
            var div = '<div class="fy-loader"></div>';
            return div;
        },
        FYloaderB: function() {
            var div = '<div class="fy-loader fy-circle-before"></div>';
            return div;
        },
        FYloaderC: function() {
            var div = '<div class="fy-loader fy-circle-after"></div>';
            return div;
        },
        FYloaderD: function() {
            var div = '<div class="fy-loader fy-circle"></div>';
            return div;
        },
        Barloader: function() {
            var div = '<div class="bar-loaderbox"><div class="bar-loader"></div></div>';
            return div;
        },
        BallsToLine: function() {
            var div = '<div class="balls-linebox"><div class="balls-line bline1"></div><div class="balls-line bline2"></div><div class="balls-line bline3"></div><div class="balls-line bline4"></div>'
                        +'<div class="balls-line bline5"></div><div class="balls-line bline6"></div><div class="balls-line bline7"></div><div class="balls-line bline8"></div></div>';
            return div;
        },
        ballsAround: function() {
            var div = '<div class="blarounds-box"><div class="blarounds blar1"></div><div class="blarounds blar2"></div><div class="blarounds blar3"></div><div class="blarounds blar4"></div></div>';
            return div;
        },
        TwoBubbleRound: function() {
            var div = '<div class="bubblebox"><div class="bubbleitem c-bubble-1"></div><div class="bubbleitem c-bubble-2"></div></div>';
            return div;
        },
        clockLoader: function() {
            var div = '<div class="clockloading"><div class="spinner"></div><div class="hourHand"></div><div class="dot"></div></div>';
            return div;
        },
        ovalQuarter: function() {
            var div = '<div class="ovalquarter"></div>';
            return div;
        }
    }

    _global = (function(){ return this || (0, eval)('this'); }());
    !('MyLoad' in _global) && (_global.MyLoad = MyLoad);
})();

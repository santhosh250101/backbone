define(['jquery', 'underscore', 'backbone'], function($, _, Backbone) {
    var TextView = Backbone.View.extend({
        el: '#text',
        text: 'opentext',
        index: 0,
        interval: 200, // 0.2 seconds
        isErasing: false,

        initialize: function() {
            this.$el.css('visibility', 'visible');
            this.animateText();
        },

        animateText: function() {
            if (!this.isErasing) {
                if (this.index < this.text.length) {
                    this.$el.append(this.text.charAt(this.index));
                    this.index++;
                    setTimeout(this.animateText.bind(this), this.interval);
                } else {
                    this.isErasing = true;
                    setTimeout(this.animateText.bind(this), this.interval);
                }
            } else {
                if (this.index > 0) {
                    this.$el.html(this.text.substring(0, this.index - 1));
                    this.index--;
                    setTimeout(this.animateText.bind(this), this.interval);
                } else {
                    this.isErasing = false;
                    setTimeout(this.animateText.bind(this), this.interval);
                }
            }
        }
    });

    var initialize = function() {
        var textView = new TextView();
    };

    return {
        initialize: initialize
    };
});

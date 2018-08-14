// Auto submit payment form
odoo.define('cms_form_compassion.payment_form', function (require) {
    'use strict';

    var animation = require('web_editor.snippets.animation');
    var core = require('web.core');
    var _t = core._t;

    animation.registry.modal_form = animation.Class.extend({
        selector: "#payment_compassion",
        start: function () {
            this.$el.find('form').submit();
        },
    });
});
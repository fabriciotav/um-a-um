
// Ember App
var App = Em.Application.create();

// Model

// View
App.ApplicationView = Em.View.extend();

App.ColorPhotosView = Em.View.extend({
    templateName: 'color-photos',
    didInsertElement: function() {
        $('#info').popover({
                placement: 'bottom',
                content: 'É importante salientar que as fotos listadas não estão tratadas. Somente as fotos escolhidas serão tratadas e entregues.'
        });
    }
});

App.SelectedPhotosView = Em.View.extend({
    templateName: 'selected-photos'
});


App.SentView = Em.View.extend({
    templateName: 'sent'
});


// Login
App.LoginView = Em.View.extend({
    templateName: 'login'
});

// Controller
App.ApplicationController = Em.Controller.extend({
    linkColor: true
});

App.ColorPhotosController = Em.ArrayController.extend({
    content: [
{photo_name: 'IMG_4337', src: '/assets/img/amostras/edigar-e-diva/color/IMG_4337.jpg'},
{photo_name: 'IMG_4339', src: '/assets/img/amostras/edigar-e-diva/color/IMG_4339.jpg'},
{photo_name: 'IMG_4340', src: '/assets/img/amostras/edigar-e-diva/color/IMG_4340.jpg'},
{photo_name: 'IMG_4345', src: '/assets/img/amostras/edigar-e-diva/color/IMG_4345.jpg'},
{photo_name: 'IMG_4349', src: '/assets/img/amostras/edigar-e-diva/color/IMG_4349.jpg'},
{photo_name: 'IMG_4401', src: '/assets/img/amostras/edigar-e-diva/color/IMG_4401.jpg'},
{photo_name: 'IMG_4410', src: '/assets/img/amostras/edigar-e-diva/color/IMG_4410.jpg'},
{photo_name: 'IMG_4412', src: '/assets/img/amostras/edigar-e-diva/color/IMG_4412.jpg'},
{photo_name: 'IMG_4417', src: '/assets/img/amostras/edigar-e-diva/color/IMG_4417.jpg'},
{photo_name: 'IMG_4420', src: '/assets/img/amostras/edigar-e-diva/color/IMG_4420.jpg'},
{photo_name: 'IMG_4422', src: '/assets/img/amostras/edigar-e-diva/color/IMG_4422.jpg'},
{photo_name: 'IMG_4429', src: '/assets/img/amostras/edigar-e-diva/color/IMG_4429.jpg'},
{photo_name: 'IMG_4430', src: '/assets/img/amostras/edigar-e-diva/color/IMG_4430.jpg'},
{photo_name: 'IMG_4434', src: '/assets/img/amostras/edigar-e-diva/color/IMG_4434.jpg'},
{photo_name: 'IMG_4437', src: '/assets/img/amostras/edigar-e-diva/color/IMG_4437.jpg'},
{photo_name: 'IMG_4440', src: '/assets/img/amostras/edigar-e-diva/color/IMG_4440.jpg'},
{photo_name: 'IMG_4444', src: '/assets/img/amostras/edigar-e-diva/color/IMG_4444.jpg'},
{photo_name: 'IMG_4445', src: '/assets/img/amostras/edigar-e-diva/color/IMG_4445.jpg'},
{photo_name: 'IMG_4446', src: '/assets/img/amostras/edigar-e-diva/color/IMG_4446.jpg'},
{photo_name: 'IMG_4447', src: '/assets/img/amostras/edigar-e-diva/color/IMG_4447.jpg'},
{photo_name: 'IMG_4448', src: '/assets/img/amostras/edigar-e-diva/color/IMG_4448.jpg'},
{photo_name: 'IMG_4451', src: '/assets/img/amostras/edigar-e-diva/color/IMG_4451.jpg'},
{photo_name: 'IMG_4453', src: '/assets/img/amostras/edigar-e-diva/color/IMG_4453.jpg'},
{photo_name: 'IMG_4456', src: '/assets/img/amostras/edigar-e-diva/color/IMG_4456.jpg'},
{photo_name: 'IMG_4460', src: '/assets/img/amostras/edigar-e-diva/color/IMG_4460.jpg'},
{photo_name: 'IMG_4465', src: '/assets/img/amostras/edigar-e-diva/color/IMG_4465.jpg'},
{photo_name: 'IMG_4475', src: '/assets/img/amostras/edigar-e-diva/color/IMG_4475.jpg'},
{photo_name: 'IMG_4476', src: '/assets/img/amostras/edigar-e-diva/color/IMG_4476.jpg'},
{photo_name: 'IMG_4478', src: '/assets/img/amostras/edigar-e-diva/color/IMG_4478.jpg'},
{photo_name: 'IMG_4479', src: '/assets/img/amostras/edigar-e-diva/color/IMG_4479.jpg'},
{photo_name: 'IMG_4482', src: '/assets/img/amostras/edigar-e-diva/color/IMG_4482.jpg'},
{photo_name: 'IMG_4484', src: '/assets/img/amostras/edigar-e-diva/color/IMG_4484.jpg'},
{photo_name: 'IMG_4485', src: '/assets/img/amostras/edigar-e-diva/color/IMG_4485.jpg'},
{photo_name: 'IMG_4490', src: '/assets/img/amostras/edigar-e-diva/color/IMG_4490.jpg'},
{photo_name: 'IMG_4491', src: '/assets/img/amostras/edigar-e-diva/color/IMG_4491.jpg'},
{photo_name: 'IMG_4493', src: '/assets/img/amostras/edigar-e-diva/color/IMG_4493.jpg'},
{photo_name: 'IMG_4494', src: '/assets/img/amostras/edigar-e-diva/color/IMG_4494.jpg'},
{photo_name: 'IMG_4495', src: '/assets/img/amostras/edigar-e-diva/color/IMG_4495.jpg'},
{photo_name: 'IMG_4499', src: '/assets/img/amostras/edigar-e-diva/color/IMG_4499.jpg'},
{photo_name: 'IMG_4500', src: '/assets/img/amostras/edigar-e-diva/color/IMG_4500.jpg'},
{photo_name: 'IMG_4501', src: '/assets/img/amostras/edigar-e-diva/color/IMG_4501.jpg'},
{photo_name: 'IMG_4502', src: '/assets/img/amostras/edigar-e-diva/color/IMG_4502.jpg'},
{photo_name: 'IMG_4505', src: '/assets/img/amostras/edigar-e-diva/color/IMG_4505.jpg'},
{photo_name: 'IMG_4509', src: '/assets/img/amostras/edigar-e-diva/color/IMG_4509.jpg'},
{photo_name: 'IMG_4512', src: '/assets/img/amostras/edigar-e-diva/color/IMG_4512.jpg'},
{photo_name: 'IMG_4517', src: '/assets/img/amostras/edigar-e-diva/color/IMG_4517.jpg'},
{photo_name: 'IMG_4521', src: '/assets/img/amostras/edigar-e-diva/color/IMG_4521.jpg'},
{photo_name: 'IMG_4528', src: '/assets/img/amostras/edigar-e-diva/color/IMG_4528.jpg'},
{photo_name: 'IMG_4534', src: '/assets/img/amostras/edigar-e-diva/color/IMG_4534.jpg'},
{photo_name: 'IMG_4541', src: '/assets/img/amostras/edigar-e-diva/color/IMG_4541.jpg'},
{photo_name: 'IMG_4542', src: '/assets/img/amostras/edigar-e-diva/color/IMG_4542.jpg'},
{photo_name: 'IMG_4561', src: '/assets/img/amostras/edigar-e-diva/color/IMG_4561.jpg'},
{photo_name: 'IMG_4568', src: '/assets/img/amostras/edigar-e-diva/color/IMG_4568.jpg'},
{photo_name: 'IMG_4569', src: '/assets/img/amostras/edigar-e-diva/color/IMG_4569.jpg'},
{photo_name: 'IMG_4570', src: '/assets/img/amostras/edigar-e-diva/color/IMG_4570.jpg'},
{photo_name: 'IMG_4571', src: '/assets/img/amostras/edigar-e-diva/color/IMG_4571.jpg'},
{photo_name: 'IMG_4572', src: '/assets/img/amostras/edigar-e-diva/color/IMG_4572.jpg'},
{photo_name: 'IMG_4573', src: '/assets/img/amostras/edigar-e-diva/color/IMG_4573.jpg'},
{photo_name: 'IMG_4575', src: '/assets/img/amostras/edigar-e-diva/color/IMG_4575.jpg'},
{photo_name: 'IMG_4578', src: '/assets/img/amostras/edigar-e-diva/color/IMG_4578.jpg'},
{photo_name: 'IMG_4582', src: '/assets/img/amostras/edigar-e-diva/color/IMG_4582.jpg'},
{photo_name: 'IMG_4588', src: '/assets/img/amostras/edigar-e-diva/color/IMG_4588.jpg'},
{photo_name: 'IMG_4590', src: '/assets/img/amostras/edigar-e-diva/color/IMG_4590.jpg'},
{photo_name: 'IMG_4592', src: '/assets/img/amostras/edigar-e-diva/color/IMG_4592.jpg'},
{photo_name: 'IMG_4593', src: '/assets/img/amostras/edigar-e-diva/color/IMG_4593.jpg'},
{photo_name: 'IMG_4595', src: '/assets/img/amostras/edigar-e-diva/color/IMG_4595.jpg'},
{photo_name: 'IMG_4597', src: '/assets/img/amostras/edigar-e-diva/color/IMG_4597.jpg'},
{photo_name: 'IMG_4598', src: '/assets/img/amostras/edigar-e-diva/color/IMG_4598.jpg'},
{photo_name: 'IMG_4601', src: '/assets/img/amostras/edigar-e-diva/color/IMG_4601.jpg'},
{photo_name: 'IMG_4604', src: '/assets/img/amostras/edigar-e-diva/color/IMG_4604.jpg'},
{photo_name: 'IMG_4607', src: '/assets/img/amostras/edigar-e-diva/color/IMG_4607.jpg'},
{photo_name: 'IMG_4609', src: '/assets/img/amostras/edigar-e-diva/color/IMG_4609.jpg'},
{photo_name: 'IMG_4611', src: '/assets/img/amostras/edigar-e-diva/color/IMG_4611.jpg'},
{photo_name: 'IMG_4616', src: '/assets/img/amostras/edigar-e-diva/color/IMG_4616.jpg'},
{photo_name: 'IMG_4618', src: '/assets/img/amostras/edigar-e-diva/color/IMG_4618.jpg'},
{photo_name: 'IMG_4619', src: '/assets/img/amostras/edigar-e-diva/color/IMG_4619.jpg'},
{photo_name: 'IMG_4621', src: '/assets/img/amostras/edigar-e-diva/color/IMG_4621.jpg'},
{photo_name: 'IMG_4622', src: '/assets/img/amostras/edigar-e-diva/color/IMG_4622.jpg'},
{photo_name: 'IMG_4624', src: '/assets/img/amostras/edigar-e-diva/color/IMG_4624.jpg'},
{photo_name: 'IMG_4625', src: '/assets/img/amostras/edigar-e-diva/color/IMG_4625.jpg'},
{photo_name: 'IMG_4627', src: '/assets/img/amostras/edigar-e-diva/color/IMG_4627.jpg'},
{photo_name: 'IMG_4628', src: '/assets/img/amostras/edigar-e-diva/color/IMG_4628.jpg'},
{photo_name: 'IMG_4629', src: '/assets/img/amostras/edigar-e-diva/color/IMG_4629.jpg'},
{photo_name: 'IMG_4630', src: '/assets/img/amostras/edigar-e-diva/color/IMG_4630.jpg'},
{photo_name: 'IMG_4631', src: '/assets/img/amostras/edigar-e-diva/color/IMG_4631.jpg'},
{photo_name: 'IMG_4632', src: '/assets/img/amostras/edigar-e-diva/color/IMG_4632.jpg'},
{photo_name: 'IMG_4633', src: '/assets/img/amostras/edigar-e-diva/color/IMG_4633.jpg'},
{photo_name: 'IMG_4634', src: '/assets/img/amostras/edigar-e-diva/color/IMG_4634.jpg'},
{photo_name: 'IMG_4637', src: '/assets/img/amostras/edigar-e-diva/color/IMG_4637.jpg'},
{photo_name: 'IMG_4641', src: '/assets/img/amostras/edigar-e-diva/color/IMG_4641.jpg'},
{photo_name: 'IMG_4646', src: '/assets/img/amostras/edigar-e-diva/color/IMG_4646.jpg'},
{photo_name: 'IMG_4648', src: '/assets/img/amostras/edigar-e-diva/color/IMG_4648.jpg'},
{photo_name: 'IMG_4650', src: '/assets/img/amostras/edigar-e-diva/color/IMG_4650.jpg'},
{photo_name: 'IMG_4652', src: '/assets/img/amostras/edigar-e-diva/color/IMG_4652.jpg'},
{photo_name: 'IMG_4653', src: '/assets/img/amostras/edigar-e-diva/color/IMG_4653.jpg'},
{photo_name: 'IMG_4662', src: '/assets/img/amostras/edigar-e-diva/color/IMG_4662.jpg'},
{photo_name: 'IMG_4667', src: '/assets/img/amostras/edigar-e-diva/color/IMG_4667.jpg'},
{photo_name: 'IMG_4688', src: '/assets/img/amostras/edigar-e-diva/color/IMG_4688.jpg'},
{photo_name: 'IMG_4691', src: '/assets/img/amostras/edigar-e-diva/color/IMG_4691.jpg'},
{photo_name: 'IMG_4692', src: '/assets/img/amostras/edigar-e-diva/color/IMG_4692.jpg'},
{photo_name: 'IMG_4695', src: '/assets/img/amostras/edigar-e-diva/color/IMG_4695.jpg'},
{photo_name: 'IMG_4696', src: '/assets/img/amostras/edigar-e-diva/color/IMG_4696.jpg'},
{photo_name: 'IMG_4708', src: '/assets/img/amostras/edigar-e-diva/color/IMG_4708.jpg'},
{photo_name: 'IMG_4717', src: '/assets/img/amostras/edigar-e-diva/color/IMG_4717.jpg'},
{photo_name: 'IMG_4725', src: '/assets/img/amostras/edigar-e-diva/color/IMG_4725.jpg'},
{photo_name: 'IMG_4727', src: '/assets/img/amostras/edigar-e-diva/color/IMG_4727.jpg'},
{photo_name: 'IMG_4734', src: '/assets/img/amostras/edigar-e-diva/color/IMG_4734.jpg'},
{photo_name: 'IMG_4736', src: '/assets/img/amostras/edigar-e-diva/color/IMG_4736.jpg'},
{photo_name: 'IMG_4737', src: '/assets/img/amostras/edigar-e-diva/color/IMG_4737.jpg'},
{photo_name: 'IMG_4738', src: '/assets/img/amostras/edigar-e-diva/color/IMG_4738.jpg'},
{photo_name: 'IMG_4740', src: '/assets/img/amostras/edigar-e-diva/color/IMG_4740.jpg'},
{photo_name: 'IMG_4743', src: '/assets/img/amostras/edigar-e-diva/color/IMG_4743.jpg'},
{photo_name: 'IMG_4745', src: '/assets/img/amostras/edigar-e-diva/color/IMG_4745.jpg'},
{photo_name: 'IMG_4751', src: '/assets/img/amostras/edigar-e-diva/color/IMG_4751.jpg'},
{photo_name: 'IMG_4754', src: '/assets/img/amostras/edigar-e-diva/color/IMG_4754.jpg'},
{photo_name: 'IMG_4755', src: '/assets/img/amostras/edigar-e-diva/color/IMG_4755.jpg'},
{photo_name: 'IMG_4756', src: '/assets/img/amostras/edigar-e-diva/color/IMG_4756.jpg'},
{photo_name: 'IMG_4758', src: '/assets/img/amostras/edigar-e-diva/color/IMG_4758.jpg'},
{photo_name: 'IMG_4760', src: '/assets/img/amostras/edigar-e-diva/color/IMG_4760.jpg'},
{photo_name: 'IMG_4770', src: '/assets/img/amostras/edigar-e-diva/color/IMG_4770.jpg'},
{photo_name: 'IMG_4772', src: '/assets/img/amostras/edigar-e-diva/color/IMG_4772.jpg'},
{photo_name: 'IMG_4777', src: '/assets/img/amostras/edigar-e-diva/color/IMG_4777.jpg'},
{photo_name: 'IMG_4781', src: '/assets/img/amostras/edigar-e-diva/color/IMG_4781.jpg'},
{photo_name: 'IMG_4787', src: '/assets/img/amostras/edigar-e-diva/color/IMG_4787.jpg'},
{photo_name: 'IMG_4789', src: '/assets/img/amostras/edigar-e-diva/color/IMG_4789.jpg'},
{photo_name: 'IMG_4791', src: '/assets/img/amostras/edigar-e-diva/color/IMG_4791.jpg'},
{photo_name: 'IMG_4797', src: '/assets/img/amostras/edigar-e-diva/color/IMG_4797.jpg'},
{photo_name: 'IMG_4800', src: '/assets/img/amostras/edigar-e-diva/color/IMG_4800.jpg'},
{photo_name: 'IMG_4802', src: '/assets/img/amostras/edigar-e-diva/color/IMG_4802.jpg'},
{photo_name: 'IMG_4804', src: '/assets/img/amostras/edigar-e-diva/color/IMG_4804.jpg'},
{photo_name: 'IMG_4809', src: '/assets/img/amostras/edigar-e-diva/color/IMG_4809.jpg'},
{photo_name: 'IMG_4813', src: '/assets/img/amostras/edigar-e-diva/color/IMG_4813.jpg'},
{photo_name: 'IMG_4815', src: '/assets/img/amostras/edigar-e-diva/color/IMG_4815.jpg'},
{photo_name: 'IMG_4816', src: '/assets/img/amostras/edigar-e-diva/color/IMG_4816.jpg'},
{photo_name: 'IMG_4819', src: '/assets/img/amostras/edigar-e-diva/color/IMG_4819.jpg'},
{photo_name: 'IMG_4821', src: '/assets/img/amostras/edigar-e-diva/color/IMG_4821.jpg'},
{photo_name: 'IMG_4822', src: '/assets/img/amostras/edigar-e-diva/color/IMG_4822.jpg'},
{photo_name: 'IMG_4825', src: '/assets/img/amostras/edigar-e-diva/color/IMG_4825.jpg'},
{photo_name: 'IMG_4828', src: '/assets/img/amostras/edigar-e-diva/color/IMG_4828.jpg'},
{photo_name: 'IMG_4830', src: '/assets/img/amostras/edigar-e-diva/color/IMG_4830.jpg'},
{photo_name: 'IMG_4831', src: '/assets/img/amostras/edigar-e-diva/color/IMG_4831.jpg'},
{photo_name: 'IMG_4832', src: '/assets/img/amostras/edigar-e-diva/color/IMG_4832.jpg'},
{photo_name: 'IMG_4838', src: '/assets/img/amostras/edigar-e-diva/color/IMG_4838.jpg'},
{photo_name: 'IMG_8479', src: '/assets/img/amostras/edigar-e-diva/color/IMG_8479.jpg'},
{photo_name: 'IMG_8481', src: '/assets/img/amostras/edigar-e-diva/color/IMG_8481.jpg'},
{photo_name: 'IMG_8482', src: '/assets/img/amostras/edigar-e-diva/color/IMG_8482.jpg'},
{photo_name: 'IMG_8486', src: '/assets/img/amostras/edigar-e-diva/color/IMG_8486.jpg'},
{photo_name: 'IMG_8489', src: '/assets/img/amostras/edigar-e-diva/color/IMG_8489.jpg'},
{photo_name: 'IMG_8490', src: '/assets/img/amostras/edigar-e-diva/color/IMG_8490.jpg'},
{photo_name: 'IMG_8492', src: '/assets/img/amostras/edigar-e-diva/color/IMG_8492.jpg'},
{photo_name: 'IMG_8496', src: '/assets/img/amostras/edigar-e-diva/color/IMG_8496.jpg'},
{photo_name: 'IMG_8511', src: '/assets/img/amostras/edigar-e-diva/color/IMG_8511.jpg'},
{photo_name: 'IMG_8516', src: '/assets/img/amostras/edigar-e-diva/color/IMG_8516.jpg'},
{photo_name: 'IMG_8518', src: '/assets/img/amostras/edigar-e-diva/color/IMG_8518.jpg'},
{photo_name: 'IMG_8520', src: '/assets/img/amostras/edigar-e-diva/color/IMG_8520.jpg'},
{photo_name: 'IMG_8524', src: '/assets/img/amostras/edigar-e-diva/color/IMG_8524.jpg'},
{photo_name: 'IMG_8526', src: '/assets/img/amostras/edigar-e-diva/color/IMG_8526.jpg'},
{photo_name: 'IMG_8533', src: '/assets/img/amostras/edigar-e-diva/color/IMG_8533.jpg'},
{photo_name: 'IMG_8535', src: '/assets/img/amostras/edigar-e-diva/color/IMG_8535.jpg'},
{photo_name: 'IMG_8540', src: '/assets/img/amostras/edigar-e-diva/color/IMG_8540.jpg'},
{photo_name: 'IMG_8547', src: '/assets/img/amostras/edigar-e-diva/color/IMG_8547.jpg'},
{photo_name: 'IMG_8549', src: '/assets/img/amostras/edigar-e-diva/color/IMG_8549.jpg'},
{photo_name: 'IMG_8550', src: '/assets/img/amostras/edigar-e-diva/color/IMG_8550.jpg'},
{photo_name: 'IMG_8554', src: '/assets/img/amostras/edigar-e-diva/color/IMG_8554.jpg'},
{photo_name: 'IMG_8555', src: '/assets/img/amostras/edigar-e-diva/color/IMG_8555.jpg'},
{photo_name: 'IMG_8558', src: '/assets/img/amostras/edigar-e-diva/color/IMG_8558.jpg'},
{photo_name: 'IMG_8559', src: '/assets/img/amostras/edigar-e-diva/color/IMG_8559.jpg'},
{photo_name: 'IMG_8562', src: '/assets/img/amostras/edigar-e-diva/color/IMG_8562.jpg'},
{photo_name: 'IMG_8564', src: '/assets/img/amostras/edigar-e-diva/color/IMG_8564.jpg'},
{photo_name: 'IMG_8568', src: '/assets/img/amostras/edigar-e-diva/color/IMG_8568.jpg'},
{photo_name: 'IMG_8570', src: '/assets/img/amostras/edigar-e-diva/color/IMG_8570.jpg'},
{photo_name: 'IMG_8573', src: '/assets/img/amostras/edigar-e-diva/color/IMG_8573.jpg'},
{photo_name: 'IMG_8579', src: '/assets/img/amostras/edigar-e-diva/color/IMG_8579.jpg'},
{photo_name: 'IMG_8580', src: '/assets/img/amostras/edigar-e-diva/color/IMG_8580.jpg'},
{photo_name: 'IMG_8582', src: '/assets/img/amostras/edigar-e-diva/color/IMG_8582.jpg'},
{photo_name: 'IMG_8586', src: '/assets/img/amostras/edigar-e-diva/color/IMG_8586.jpg'},
{photo_name: 'IMG_8589', src: '/assets/img/amostras/edigar-e-diva/color/IMG_8589.jpg'},
{photo_name: 'IMG_8591', src: '/assets/img/amostras/edigar-e-diva/color/IMG_8591.jpg'},
{photo_name: 'IMG_8594', src: '/assets/img/amostras/edigar-e-diva/color/IMG_8594.jpg'},
{photo_name: 'IMG_8597', src: '/assets/img/amostras/edigar-e-diva/color/IMG_8597.jpg'},
{photo_name: 'IMG_8599', src: '/assets/img/amostras/edigar-e-diva/color/IMG_8599.jpg'},
{photo_name: 'IMG_8601', src: '/assets/img/amostras/edigar-e-diva/color/IMG_8601.jpg'}
    ],

    selection: [],
    amount: function() {
        var size = this.get('selection').length;
        return size;
    }.property('selection')
});


App.SelectedPhotosController = Em.ArrayController.extend({
    content: [],
    amount: function() {
        var size = this.get('content').length;
        return size;
    }.property('amount')
});

// Login
App.LoginController = Em.Controller.extend({
    username: null,
    password: null
});

// Router
App.Router = Em.Router.extend({
    enableLogging: true,
    root: Em.Route.extend({
        gotoLogin: Em.Route.transitionTo('root.login'),
        gotoColor: Em.Route.transitionTo('root.color'),
        gotoSelection: Em.Route.transitionTo('root.selection'),

        showInfo: function(router, event) {
            console.log("show info");
            
        },
        clickColor: function(router, event) {
            router.get('applicationController').set('linkColor', true);
            router.get('applicationController').set('linkSelection', false);

            router.send('gotoColor');
        },
        clickSelection: function(router, event) {
            router.get('applicationController').set('linkColor', false);
            router.get('applicationController').set('linkSelection', true);

            router.send('gotoSelection');
        },        

        selectPhoto: function(router, event) {
            
            // var src = $(event.currentTarget).attr('src');

            var photo_name = event.context;
            console.log("IDDDD", photo_name);
            
            // Verifica se a foto já foi selecionada:

            var selectedPhoto = router.colorPhotosController.selection
                .findProperty('photo_name', photo_name);

            if (selectedPhoto) {
                // Remover a foto da seleção:
                router.get('colorPhotosController')
                    .get('selection')
                    .removeObject(selectedPhoto);
            } else {
                // Adicionar a foto à seleção:
                router.get('colorPhotosController')
                    .get('selection')
                    .addObject({photo_name: photo_name});
            }
    


            var selecionada = $(event.currentTarget).hasClass('photo-selected');            
            if (selecionada) {
                console.log("remover");
                $(event.currentTarget).removeClass('photo-selected');
            } else {
                console.log("adicionar");
                $(event.currentTarget).addClass('photo-selected');
            }

            router.colorPhotosController.set('amount');

            // var selecionada = $(event.currentTarget).hasClass('photo-selected');
            // if (selecionada) {
            //     console.log("remover");
            //     $(event.currentTarget).removeClass('photo-selected');
            // } else {
            //     console.log("adicionar");
            //     $(event.currentTarget).addClass('photo-selected');
            // }
            
            // // router.get('bwPhotosController').get('content').removeObject(selectedPhoto);

            

        },

        removeSelectedPhoto: function(router, event) {
            
            var src = $(event.currentTarget).attr('src');
            console.log(src);
        },

        // Enviar seleção de fotos
        sendSelection: function(router, event) {
            console.log("enviando seleção");
            $('.block').show();

            var selection = router.get('colorPhotosController').get('selection');
            
            var obj = [];

            selection.forEach(function(element, index){
                console.log(element);
                obj.pushObject(element.photo_name);
            });

            var data = $.param({
                fotos: obj.toString()
            });

            $.ajax('/api/selecoes', {
                type: 'POST',
                data: data,
                success: function(data) {
                    console.log(data);

                    $('.photo-selected').removeClass('photo-selected');
                    
                    // Scroll up totalmente
                    window.scrollTo(0, 0);

                    router.get('colorPhotosController')
                        .set('selection', []);

                },
                complete: function() {
                    $('.block').hide();
                    router.get('colorPhotosController')
                        .connectOutlet('sent', 'sent');

                }
            });



            // setTimeout(function(){
            //     $('.block').hide();
            // }, 1000);
        },

        index: Em.Route.extend({
            route: '/',
            connectOutlets: function(router) {
                router.send('gotoColor');
            }
        }),

        login: Em.Route.extend({
            route: '/login',
            connectOutlets: function(router) {
                router.get('applicationController')
                    .connectOutlet('login', 'login');
            }
        }),

        color: Em.Route.extend({
            route: '/amostras',
            connectOutlets: function(router) {
                router.get('applicationController')
                    .connectOutlet('photos', 'colorPhotos');
            }
        }),

        sent: Em.Route.extend({
            route: '/selecao-de-fotos-enviada',
            connectOutlets: function(router) {
                router.get('applicationController')
                    .connectOutlet('photos', 'sent');
            }
        }) 
    })
});

App.initialize();
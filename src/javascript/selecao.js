
// Ember App
var Uau = Em.Application.create();

// Model

// View
Uau.ApplicationView = Em.View.extend({
    templateName: 'application',
    observeWindowChange: function() {
        if ($(window).scrollTop() > 0) {
            this.set('showScroll', true);
        }
    }.observes('window'),
    showScroll: true,

    didInsertElement: function() {
        $('#trash').tooltip({
            placement: 'left',
            trigger: 'hover',
            delay: '1000'
        });
    }
});

Uau.ColorPhotosView = Em.View.extend({
    templateName: 'color-photos',
    didInsertElement: function() {
        $('#info').popover({
                placement: 'bottom',
                content: 'É importante salientar que as fotos listadas não estão tratadas. Somente as fotos escolhidas serão tratadas e entregues.'
        });
    }
});

Uau.SelectedPhotosView = Em.View.extend({
    templateName: 'selected-photos'
});


Uau.SentView = Em.View.extend({
    templateName: 'sent'
});


// Login
Uau.LoginView = Em.View.extend({
    templateName: 'login'
});

// Controller
Uau.ApplicationController = Em.Controller.extend({
    linkColor: true
});

Uau.ColorPhotosController = Em.ArrayController.extend({
    content: [
{photo_name: 'IMG_4337', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_4337.jpg'},
{photo_name: 'IMG_4339', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_4339.jpg'},
{photo_name: 'IMG_4340', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_4340.jpg'},
{photo_name: 'IMG_4345', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_4345.jpg'},
{photo_name: 'IMG_4349', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_4349.jpg'},
{photo_name: 'IMG_4401', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_4401.jpg'},
{photo_name: 'IMG_4410', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_4410.jpg'},
{photo_name: 'IMG_4412', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_4412.jpg'},
{photo_name: 'IMG_4417', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_4417.jpg'},
{photo_name: 'IMG_4420', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_4420.jpg'},
{photo_name: 'IMG_4422', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_4422.jpg'},
{photo_name: 'IMG_4429', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_4429.jpg'},
{photo_name: 'IMG_4430', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_4430.jpg'},
{photo_name: 'IMG_4434', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_4434.jpg'},
{photo_name: 'IMG_4437', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_4437.jpg'},
{photo_name: 'IMG_4440', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_4440.jpg'},
{photo_name: 'IMG_4444', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_4444.jpg'},
{photo_name: 'IMG_4445', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_4445.jpg'},
{photo_name: 'IMG_4446', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_4446.jpg'},
{photo_name: 'IMG_4447', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_4447.jpg'},
{photo_name: 'IMG_4448', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_4448.jpg'},
{photo_name: 'IMG_4451', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_4451.jpg'},
{photo_name: 'IMG_4453', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_4453.jpg'},
{photo_name: 'IMG_4456', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_4456.jpg'},
{photo_name: 'IMG_4460', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_4460.jpg'},
{photo_name: 'IMG_4465', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_4465.jpg'},
{photo_name: 'IMG_4475', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_4475.jpg'},
{photo_name: 'IMG_4476', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_4476.jpg'},
{photo_name: 'IMG_4478', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_4478.jpg'},
{photo_name: 'IMG_4479', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_4479.jpg'},
{photo_name: 'IMG_4482', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_4482.jpg'},
{photo_name: 'IMG_4484', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_4484.jpg'},
{photo_name: 'IMG_4485', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_4485.jpg'},
{photo_name: 'IMG_4490', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_4490.jpg'},
{photo_name: 'IMG_4491', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_4491.jpg'},
{photo_name: 'IMG_4493', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_4493.jpg'},
{photo_name: 'IMG_4494', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_4494.jpg'},
{photo_name: 'IMG_4495', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_4495.jpg'},
{photo_name: 'IMG_4499', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_4499.jpg'},
{photo_name: 'IMG_4500', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_4500.jpg'},
{photo_name: 'IMG_4501', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_4501.jpg'},
{photo_name: 'IMG_4502', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_4502.jpg'},
{photo_name: 'IMG_4505', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_4505.jpg'},
{photo_name: 'IMG_4509', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_4509.jpg'},
{photo_name: 'IMG_4512', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_4512.jpg'},
{photo_name: 'IMG_4517', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_4517.jpg'},
{photo_name: 'IMG_4521', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_4521.jpg'},
{photo_name: 'IMG_4528', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_4528.jpg'},
{photo_name: 'IMG_4534', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_4534.jpg'},
{photo_name: 'IMG_4541', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_4541.jpg'},
{photo_name: 'IMG_4542', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_4542.jpg'},
{photo_name: 'IMG_4561', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_4561.jpg'},
{photo_name: 'IMG_4568', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_4568.jpg'},
{photo_name: 'IMG_4569', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_4569.jpg'},
{photo_name: 'IMG_4570', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_4570.jpg'},
{photo_name: 'IMG_4571', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_4571.jpg'},
{photo_name: 'IMG_4572', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_4572.jpg'},
{photo_name: 'IMG_4573', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_4573.jpg'},
{photo_name: 'IMG_4575', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_4575.jpg'},
{photo_name: 'IMG_4578', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_4578.jpg'},
{photo_name: 'IMG_4582', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_4582.jpg'},
{photo_name: 'IMG_4588', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_4588.jpg'},
{photo_name: 'IMG_4590', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_4590.jpg'},
{photo_name: 'IMG_4592', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_4592.jpg'},
{photo_name: 'IMG_4593', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_4593.jpg'},
{photo_name: 'IMG_4595', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_4595.jpg'},
{photo_name: 'IMG_4597', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_4597.jpg'},
{photo_name: 'IMG_4598', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_4598.jpg'},
{photo_name: 'IMG_4601', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_4601.jpg'},
{photo_name: 'IMG_4604', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_4604.jpg'},
{photo_name: 'IMG_4607', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_4607.jpg'},
{photo_name: 'IMG_4609', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_4609.jpg'},
{photo_name: 'IMG_4611', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_4611.jpg'},
{photo_name: 'IMG_4616', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_4616.jpg'},
{photo_name: 'IMG_4618', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_4618.jpg'},
{photo_name: 'IMG_4619', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_4619.jpg'},
{photo_name: 'IMG_4621', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_4621.jpg'},
{photo_name: 'IMG_4622', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_4622.jpg'},
{photo_name: 'IMG_4624', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_4624.jpg'},
{photo_name: 'IMG_4625', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_4625.jpg'},
{photo_name: 'IMG_4627', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_4627.jpg'},
{photo_name: 'IMG_4628', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_4628.jpg'},
{photo_name: 'IMG_4629', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_4629.jpg'},
{photo_name: 'IMG_4630', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_4630.jpg'},
{photo_name: 'IMG_4631', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_4631.jpg'},
{photo_name: 'IMG_4632', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_4632.jpg'},
{photo_name: 'IMG_4633', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_4633.jpg'},
{photo_name: 'IMG_4634', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_4634.jpg'},
{photo_name: 'IMG_4637', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_4637.jpg'},
{photo_name: 'IMG_4641', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_4641.jpg'},
{photo_name: 'IMG_4646', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_4646.jpg'},
{photo_name: 'IMG_4648', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_4648.jpg'},
{photo_name: 'IMG_4650', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_4650.jpg'},
{photo_name: 'IMG_4652', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_4652.jpg'},
{photo_name: 'IMG_4653', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_4653.jpg'},
{photo_name: 'IMG_4662', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_4662.jpg'},
{photo_name: 'IMG_4667', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_4667.jpg'},
{photo_name: 'IMG_4688', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_4688.jpg'},
{photo_name: 'IMG_4691', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_4691.jpg'},
{photo_name: 'IMG_4692', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_4692.jpg'},
{photo_name: 'IMG_4695', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_4695.jpg'},
{photo_name: 'IMG_4696', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_4696.jpg'},
{photo_name: 'IMG_4708', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_4708.jpg'},
{photo_name: 'IMG_4717', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_4717.jpg'},
{photo_name: 'IMG_4725', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_4725.jpg'},
{photo_name: 'IMG_4727', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_4727.jpg'},
{photo_name: 'IMG_4734', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_4734.jpg'},
{photo_name: 'IMG_4736', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_4736.jpg'},
{photo_name: 'IMG_4737', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_4737.jpg'},
{photo_name: 'IMG_4738', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_4738.jpg'},
{photo_name: 'IMG_4740', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_4740.jpg'},
{photo_name: 'IMG_4743', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_4743.jpg'},
{photo_name: 'IMG_4745', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_4745.jpg'},
{photo_name: 'IMG_4751', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_4751.jpg'},
{photo_name: 'IMG_4754', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_4754.jpg'},
{photo_name: 'IMG_4755', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_4755.jpg'},
{photo_name: 'IMG_4756', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_4756.jpg'},
{photo_name: 'IMG_4758', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_4758.jpg'},
{photo_name: 'IMG_4760', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_4760.jpg'},
{photo_name: 'IMG_4770', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_4770.jpg'},
{photo_name: 'IMG_4772', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_4772.jpg'},
{photo_name: 'IMG_4777', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_4777.jpg'},
{photo_name: 'IMG_4781', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_4781.jpg'},
{photo_name: 'IMG_4787', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_4787.jpg'},
{photo_name: 'IMG_4789', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_4789.jpg'},
{photo_name: 'IMG_4791', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_4791.jpg'},
{photo_name: 'IMG_4797', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_4797.jpg'},
{photo_name: 'IMG_4800', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_4800.jpg'},
{photo_name: 'IMG_4802', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_4802.jpg'},
{photo_name: 'IMG_4804', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_4804.jpg'},
{photo_name: 'IMG_4809', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_4809.jpg'},
{photo_name: 'IMG_4813', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_4813.jpg'},
{photo_name: 'IMG_4815', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_4815.jpg'},
{photo_name: 'IMG_4816', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_4816.jpg'},
{photo_name: 'IMG_4819', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_4819.jpg'},
{photo_name: 'IMG_4821', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_4821.jpg'},
{photo_name: 'IMG_4822', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_4822.jpg'},
{photo_name: 'IMG_4825', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_4825.jpg'},
{photo_name: 'IMG_4828', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_4828.jpg'},
{photo_name: 'IMG_4830', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_4830.jpg'},
{photo_name: 'IMG_4831', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_4831.jpg'},
{photo_name: 'IMG_4832', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_4832.jpg'},
{photo_name: 'IMG_4838', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_4838.jpg'},
{photo_name: 'IMG_8479', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_8479.jpg'},
{photo_name: 'IMG_8481', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_8481.jpg'},
{photo_name: 'IMG_8482', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_8482.jpg'},
{photo_name: 'IMG_8486', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_8486.jpg'},
{photo_name: 'IMG_8489', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_8489.jpg'},
{photo_name: 'IMG_8490', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_8490.jpg'},
{photo_name: 'IMG_8492', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_8492.jpg'},
{photo_name: 'IMG_8496', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_8496.jpg'},
{photo_name: 'IMG_8511', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_8511.jpg'},
{photo_name: 'IMG_8516', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_8516.jpg'},
{photo_name: 'IMG_8518', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_8518.jpg'},
{photo_name: 'IMG_8520', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_8520.jpg'},
{photo_name: 'IMG_8524', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_8524.jpg'},
{photo_name: 'IMG_8526', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_8526.jpg'},
{photo_name: 'IMG_8533', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_8533.jpg'},
{photo_name: 'IMG_8535', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_8535.jpg'},
{photo_name: 'IMG_8540', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_8540.jpg'},
{photo_name: 'IMG_8547', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_8547.jpg'},
{photo_name: 'IMG_8549', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_8549.jpg'},
{photo_name: 'IMG_8550', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_8550.jpg'},
{photo_name: 'IMG_8554', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_8554.jpg'},
{photo_name: 'IMG_8555', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_8555.jpg'},
{photo_name: 'IMG_8558', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_8558.jpg'},
{photo_name: 'IMG_8559', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_8559.jpg'},
{photo_name: 'IMG_8562', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_8562.jpg'},
{photo_name: 'IMG_8564', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_8564.jpg'},
{photo_name: 'IMG_8568', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_8568.jpg'},
{photo_name: 'IMG_8570', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_8570.jpg'},
{photo_name: 'IMG_8573', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_8573.jpg'},
{photo_name: 'IMG_8579', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_8579.jpg'},
{photo_name: 'IMG_8580', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_8580.jpg'},
{photo_name: 'IMG_8582', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_8582.jpg'},
{photo_name: 'IMG_8586', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_8586.jpg'},
{photo_name: 'IMG_8589', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_8589.jpg'},
{photo_name: 'IMG_8591', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_8591.jpg'},
{photo_name: 'IMG_8594', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_8594.jpg'},
{photo_name: 'IMG_8597', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_8597.jpg'},
{photo_name: 'IMG_8599', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_8599.jpg'},
{photo_name: 'IMG_8601', src: 'http://s3.amazonaws.com/um-a-um/edigar-e-diva/amostras/IMG_8601.jpg'}
    ],

    selection: [],
    amount: function() {
        var size = this.get('selection').length;
        return size;
    }.property('selection')
});


Uau.SelectedPhotosController = Em.ArrayController.extend({
    content: [],
    amount: function() {
        var size = this.get('content').length;
        return size;
    }.property('amount')
});

// Login
Uau.LoginController = Em.Controller.extend({
    username: null,
    password: null
});

// Router
Uau.Router = Em.Router.extend({
    enableLogging: false,
    root: Em.Route.extend({
        gotoLogin: Em.Route.transitionTo('root.login'),
        gotoColor: Em.Route.transitionTo('root.color'),
        gotoSelection: Em.Route.transitionTo('root.selection'),

        showInfo: function(router, event) {
            
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
                $(event.currentTarget).removeClass('photo-selected');
            } else {
                $(event.currentTarget).addClass('photo-selected');
            }

            router.colorPhotosController.set('amount');

            // var selecionada = $(event.currentTarget).hasClass('photo-selected');
            // if (selecionada) {
            //     $(event.currentTarget).removeClass('photo-selected');
            // } else {
            //     $(event.currentTarget).addClass('photo-selected');
            // }
            
            // // router.get('bwPhotosController').get('content').removeObject(selectedPhoto);

            

        },

        removeSelectedPhoto: function(router, event) {
            
            var src = $(event.currentTarget).attr('src');
        },

        // Enviar seleção de fotos
        sendSelection: function(router, event) {
            $('.block').show();

            var selection = router.get('colorPhotosController').get('selection');
            
            var obj = [];

            selection.forEach(function(element, index){
                obj.pushObject(element.photo_name);
            });

            var data = $.param({
                fotos: obj.toString()
            });

            $.ajax('/api/selecoes', {
                type: 'POST',
                data: data,
                success: function(data) {

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

        // Usability actions
        scrollUp: function(router, event) {
            window.scrollTo(0, 0);
        },

        clearSelection: function(router, event) {
            $('.photo-selected').removeClass('photo-selected');
            router.get('colorPhotosController')
                        .set('selection', []);
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

Uau.initialize();

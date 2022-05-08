$(document).ready(function(){
    // Actions
    var insertCard = $('#actions #card');

    $('#screen > article').not(':first-child').hide();
    // $('#initial-screen > .screen-wrapper').hide();

    insertCard.on('click', function(){
        $('#actions #card').addClass('insert');
        $('#actions #card').find('p').hide();

        $('#initial-screen').show().siblings().hide();
        $('#initial-screen > .screen-wrapper').show();
    });

    $('#cash-withdrawal-button').on('click', function() {
        $('#cash-withdrawal-screen').show().siblings().hide();
        $('#cash-withdrawal-screen .account-option-screen').show().siblings().hide();

        $('.savings-button').on('click', function() {
            $('#cash-withdrawal-screen .enter-amount').show().siblings().hide();
        });

        $('.enter-amount .enter').on('click', function(e) {
            e.preventDefault();

            $('#universal-screen').show().siblings().hide();
            $('#universal-screen .enter-pin').show().siblings().hide();
        });

        $('.enter-pin .enter').on('click', function(e) {
            e.preventDefault();

            $('#cash-withdrawal-screen').show().siblings().hide();
            $('#cash-withdrawal-screen .disclaimer').show().siblings().hide();
        });

        $('.disclaimer .yes').on('click', function() {
            var cash = $('#amount').val();
            var pinCode = $('#pin').val();

            if ((cash <= 4985) && (pinCode == 4321)) {
                console.log('sufficient funds');
                console.log('correct pin');

                $('#message-screen .h2').html('Processing your transactions…');

                $('#message-screen').show().siblings().hide();
                $('#message-screen .transaction-processing').show().siblings().hide();

                setTimeout(function() {
                    $('#universal-screen').show().siblings().hide();
                    $('#universal-screen .receipt').show().siblings().hide();
                }, 3000);

            } else if ((cash >= 4985) && (pinCode == 4321)) {
                console.log('insufficient funds');
                console.log('correct pin');

                $('#message-screen .h2').html('Your balance is insufficient');

                $('#message-screen').show().siblings().hide();
                $('#message-screen .transaction-processing').show().siblings().hide();

                setTimeout(function() {
                    $('#universal-screen').show().siblings().hide();
                    $('#universal-screen .transaction-option').show().siblings().hide();
                }, 3000);
            } else if (pinCode !== 4321) {
                console.log('sufficient funds');
                console.log('wrong pin');

                $('#message-screen .h2').html('Your PIN Code is incorrect');

                $('#message-screen').show().siblings().hide();
                $('#message-screen .transaction-processing').show().siblings().hide();

                setTimeout(function() {
                    $('#universal-screen').show().siblings().hide();
                    $('#universal-screen .transaction-option').show().siblings().hide();
                }, 3000);
            }
        });
    });
});
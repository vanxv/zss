/**
 * Created by LBI on 2017/3/21.
 */

 $(function () {
            $('select,input,textarea').focus(function () {
                if ($(this).next().hasClass('field-validation-error')) {
                    $(this).next().remove();
                    $(this).removeClass('input-validation-error')
                }
            });
        });
        $('select,input,textarea').each(function () {
            if ($(this).next().hasClass('field-validation-error')) {
                $(this).addClass('input-validation-error');
            }
        });
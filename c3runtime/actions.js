"use strict";
{
    globalThis.C3.Plugins.c3IDE_GHTA_iziToast.Acts = {
        ShowMessage(title, position, msg, timeout, theme)
        {
            //implementation
            iziToast.show(
            {
                title: title,
                message: msg,
                position: position,
                timeout: timeout,
                drag: false,
                theme: theme
            });
        },

        ShowInfoMessage(title, position, msg, timeout)
        {
            //implementation
            iziToast.info(
            {
                title: title,
                message: msg,
                position: position,
                drag: false,
                timeout: timeout
            });
        },

        ShowSuccessMessage(title, position, msg, timeout)
        {
            //implementation
            iziToast.success(
            {
                title: title,
                message: msg,
                position: position,
                drag: false,
                timeout: timeout
            });
        },

        ShowWarningMessage(title, position, msg, timeout)
        {
            //implementation
            iziToast.warning(
            {
                title: title,
                message: msg,
                position: position,
                drag: false,
                timeout: timeout
            });
        },

        ShowErrorMessage(title, position, msg, timeout)
        {
            //implementation
            iziToast.error(
            {
                title: title,
                message: msg,
                position: position,
                drag: false,
                timeout: timeout
            });
        },

        DeleteMessage()
        {
            //implementation
            iziToast.destroy();
        }
    };
}
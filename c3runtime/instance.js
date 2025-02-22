"use strict";
{
    const C3 = globalThis.C3;

    C3.Plugins.c3IDE_GHTA_iziToast.Instance = class GHTA_iziToastInstance extends globalThis.ISDKInstanceBase {
        constructor() {
            super();

            const properties = this._getInitProperties();


            if (properties) { }
        }

        _release() {
            super._release();
        }

        _saveToJson() {
            return {
                // data to be saved for savegames
            };
        }

        _loadFromJson(o) {
            // load state for savegames
        }


    };
}
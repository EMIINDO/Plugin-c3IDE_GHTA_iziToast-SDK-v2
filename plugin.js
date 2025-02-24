"use strict";
// Porting BY EMI INDO with c3addon-ide-plus
{
    const SDK = globalThis.SDK;

    const PLUGIN_ID = "c3IDE_GHTA_iziToast";
    // callMap Deprecated const PLUGIN_VERSION = "1.5.0.0";
    const PLUGIN_CATEGORY = "general";

    const PLUGIN_CLASS = SDK.Plugins.c3IDE_GHTA_iziToast = class GHTA_iziToastPlugin extends SDK.IPluginBase {
        constructor() {
            super(PLUGIN_ID);

            SDK.Lang.PushContext("plugins." + PLUGIN_ID.toLowerCase());

            this._info.SetName(globalThis.lang(".name"));
            this._info.SetDescription(globalThis.lang(".description"));
            // callMap Deprecated this._info.SetVersion(PLUGIN_VERSION);
            this._info.SetCategory(PLUGIN_CATEGORY);
            this._info.SetAuthor("c3IDE");
            this._info.SetHelpUrl(globalThis.lang(".help-url"));
            this._info.SetRuntimeModuleMainScript("c3runtime/main.js");
            this._info.SetIsSingleGlobal(true);
            this._info.SetCanBeBundled(true);

            this._info.SetSupportedRuntimes(["c3"]);

            SDK.Lang.PushContext(".properties");

            this._info.SetProperties([

            ]);
            //iziToast
            this._info.AddFileDependency(
                {
                    filename: "iziToast.css",
                    type: "external-css"
                });
            this._info.AddFileDependency(
                {
                    filename: "iziToast.js",
                    type: "external-runtime-script"
                });

            SDK.Lang.PopContext(); //.properties
            SDK.Lang.PopContext();
        }
    };

    PLUGIN_CLASS.Register(PLUGIN_ID, PLUGIN_CLASS);
}
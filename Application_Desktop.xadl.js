(function(){return function(){this.on_loadAppVariables=function(){var _a=null;_a=null;};this.on_initApplication=function(){this.set_id("Application_Desktop");this.set_screenid("Desktop_screen");if(this._is_attach_childframe){return;}var _a=this.createMainFrame("mainframe","0","0","1280","720",null,null,this);_a.set_showtitlebar("true");_a.set_showstatusbar("true");_a.set_titletext("FullFrame");_a.on_createBodyFrame=this.mainframe_createBodyFrame;};this.loadPreloadList=function(){};this.mainframe_createBodyFrame=function(){var _a=new ChildFrame("WorkFrame",null,null,null,null,null,null,"FrameBase::Form_Work.xfdl",this);_a.set_showtitlebar("false");_a.set_showstatusbar("false");this.addChild(_a.name,_a);_a.set_formurl("FrameBase::Form_Work.xfdl");this.frame=_a;};this.on_initEvent=function(){};this.checkLicense("");this.loadPreloadList();this.loadIncludeScript("Application_Desktop.xadl");};})();
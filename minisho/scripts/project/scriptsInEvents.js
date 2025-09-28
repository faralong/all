function InitExternEval() 
    {
		console.log("InitExternEval");
       
    }
	
	function TakeReward()
	{
		
	}
	
	function RewardErrorHandled()
	{
		
	}
	

		
		function ExternEval() 
		{
			console.log("ExternEval");
		}
		
		function PreloadRewarded() 
		{
			
		}
		
		function ShowRewarded() 
		{
			
		}
		
		function isMobile() { return ('ontouchstart' in document.documentElement); }
		
		function OpenLink()
		{
			try
			{
				if (isMobile() == false)
				{
					document.onmouseup = function()
					{
						window.open("https://www.julgames.com");
						document.onmouseup = null;
					}
				}
			}
			catch(e){  }
		}
	
		window.adRunning = 0;
		window.adReward = 0;
		window.rewardError = 0;
		window.canReward = 0;
		
		window.callTime = 0;
		window.adPlatform = 5;
		
	


const scriptsInEvents = {

	async Ads_Event1_Act1(runtime, localVars)
	{
		runtime.globalVars.adActive = window.adRunning;
	},

	async Ads_Event2_Act3(runtime, localVars)
	{
		console.log("Ad active");
	},

	async Ads_Event3_Act2(runtime, localVars)
	{
		console.log("Ad close");
	},

	async Ads_Event4_Act2(runtime, localVars)
	{
		console.log("Sound resume");
	},

	async Ads_Event6_Act1(runtime, localVars)
	{
		console.log("Pressed K");
		window.adRunning = 1;
	},

	async Ads_Event7_Act1(runtime, localVars)
	{
		console.log("Pressed L");
		window.adRunning = 0;
	},

	async Menu_Event1_Act1(runtime, localVars)
	{
		InitExternEval();
	},

	async Levelsselection_Event1_Act1(runtime, localVars)
	{
		ExternEval();
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;


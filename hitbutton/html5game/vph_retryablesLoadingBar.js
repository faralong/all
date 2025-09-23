function loadingFunction(vGraphics, vWidth, vHeight, vTotal, vCurrent, vLoadingScreen) {
	var barWidth 	= (vWidth / vTotal) * vCurrent;
	var barHeight 	= 20;
	var barX 		= 0;
	var barY		= vHeight / 2 + 90;	
	var textX 		= vWidth / 2;
	var textY 		= vHeight / 2;
	var loadScreen	= vLoadingScreen;
	vGraphics.fillStyle = "#302C2E";
	vGraphics.fillRect(0, 0, vWidth, vHeight);
	vGraphics.font 		= "60px Arial";
	vGraphics.fillStyle = "#DFF6F5";
	vGraphics.textAlign = "center";
	vGraphics.fillText("[ Just Hit The Button ]", textX, textY - 180);
	vGraphics.fillText("[ by Retryables ]", textX, textY - 90);
	vGraphics.fillText("[ Loading... ]", textX, textY);	
	vGraphics.fillStyle = "#DFF6F5";
	vGraphics.barheight = 20;
	vGraphics.fillRect(barX, barY, barWidth, barHeight);	
}
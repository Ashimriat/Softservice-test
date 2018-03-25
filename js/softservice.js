function ValueController(valueStep, timeStep) {

	var animationValueStep = valueStep;
	var animationTimeStep = timeStep;

	var currentValue = 0;
	var targetValue;

	this.animateSliderMoveProgress = function() {
		$(".slider-value").html('$' + event.target.value);
		let newLeft = 139 * Math.round(event.target.value / targetValue * 100) / 100;
		let newValue = '' + newLeft + 'px';
		$(".slider-value").css('left', newValue);
	}

	function animateValueChangeProgress(startValue, endValue) {
		let newWidth = Math.round(endValue / targetValue * 100);
		let animationTime = Math.abs(endValue - startValue) / animationValueStep * animationTimeStep;
		let amountLeftToTarget = Math.round((targetValue - endValue) * 100) / 100;
		let newValue = '' + newWidth + '%';
		$(".progress").animate({width: newValue}, animationTime);
		$(".progress-slider").animate({value: endValue}, animationTime);
		setTimeout(function(){
			if (startValue == 0) {
				$(".progress-left").removeClass('completed-text');
			}
			if (startValue == targetValue) {
			$(".target-block").removeClass('completed-block');
			$(".progress-left").removeClass('completed-text');
			}
			if (endValue == targetValue) {
				$(".target-block").addClass('completed-block');
				$(".progress-left").addClass('completed-text');
			}
			$(".amount-left").html("$" + amountLeftToTarget);
		}, animationTime);
	}

	function setCurrentValue(newValue) {
		let value = newValue;
		animateValueChangeProgress(currentValue, value);
		currentValue = value;
	}

	this.setCurrentValue = function(newValue) {
		setCurrentValue(newValue);
	}
	
	this.setTargetValue = function(newTargetValue) {
		targetValue = newTargetValue;
	}

	this.updateCurrentValue = function(event) {
		let newValue = event.target.value;
		setCurrentValue(newValue); 
	}

}


$(document).ready(function(){
	var response;
	
	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'http://alex.devel.softservice.org/testapi/', false);
	xhr.send();
	if (xhr.status != 200) {
		alert("Информация не получена");
		valueController.setCurrentValue(0);
	} else {
		response = JSON.parse(xhr.responseText);
	}

	let valueController = new ValueController(0.2, 20);
	$(".progress-slider").change(valueController.updateCurrentValue);
	$(".progress-slider").mousemove(valueController.animateSliderMoveProgress);
	valueController.setTargetValue(15);
	valueController.setCurrentValue(response.balance_usd);
	$(".progress-slider").value = response.balance_usd;
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzb2Z0c2VydmljZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBWYWx1ZUNvbnRyb2xsZXIodmFsdWVTdGVwLCB0aW1lU3RlcCkge1xyXG5cclxuXHR2YXIgYW5pbWF0aW9uVmFsdWVTdGVwID0gdmFsdWVTdGVwO1xyXG5cdHZhciBhbmltYXRpb25UaW1lU3RlcCA9IHRpbWVTdGVwO1xyXG5cclxuXHR2YXIgY3VycmVudFZhbHVlID0gMDtcclxuXHR2YXIgdGFyZ2V0VmFsdWU7XHJcblxyXG5cdHRoaXMuYW5pbWF0ZVNsaWRlck1vdmVQcm9ncmVzcyA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0JChcIi5zbGlkZXItdmFsdWVcIikuaHRtbCgnJCcgKyBldmVudC50YXJnZXQudmFsdWUpO1xyXG5cdFx0bGV0IG5ld0xlZnQgPSAxMzkgKiBNYXRoLnJvdW5kKGV2ZW50LnRhcmdldC52YWx1ZSAvIHRhcmdldFZhbHVlICogMTAwKSAvIDEwMDtcclxuXHRcdGxldCBuZXdWYWx1ZSA9ICcnICsgbmV3TGVmdCArICdweCc7XHJcblx0XHQkKFwiLnNsaWRlci12YWx1ZVwiKS5jc3MoJ2xlZnQnLCBuZXdWYWx1ZSk7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBhbmltYXRlVmFsdWVDaGFuZ2VQcm9ncmVzcyhzdGFydFZhbHVlLCBlbmRWYWx1ZSkge1xyXG5cdFx0bGV0IG5ld1dpZHRoID0gTWF0aC5yb3VuZChlbmRWYWx1ZSAvIHRhcmdldFZhbHVlICogMTAwKTtcclxuXHRcdGxldCBhbmltYXRpb25UaW1lID0gTWF0aC5hYnMoZW5kVmFsdWUgLSBzdGFydFZhbHVlKSAvIGFuaW1hdGlvblZhbHVlU3RlcCAqIGFuaW1hdGlvblRpbWVTdGVwO1xyXG5cdFx0bGV0IGFtb3VudExlZnRUb1RhcmdldCA9IE1hdGgucm91bmQoKHRhcmdldFZhbHVlIC0gZW5kVmFsdWUpICogMTAwKSAvIDEwMDtcclxuXHRcdGxldCBuZXdWYWx1ZSA9ICcnICsgbmV3V2lkdGggKyAnJSc7XHJcblx0XHQkKFwiLnByb2dyZXNzXCIpLmFuaW1hdGUoe3dpZHRoOiBuZXdWYWx1ZX0sIGFuaW1hdGlvblRpbWUpO1xyXG5cdFx0JChcIi5wcm9ncmVzcy1zbGlkZXJcIikuYW5pbWF0ZSh7dmFsdWU6IGVuZFZhbHVlfSwgYW5pbWF0aW9uVGltZSk7XHJcblx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcblx0XHRcdGlmIChzdGFydFZhbHVlID09IDApIHtcclxuXHRcdFx0XHQkKFwiLnByb2dyZXNzLWxlZnRcIikucmVtb3ZlQ2xhc3MoJ2NvbXBsZXRlZC10ZXh0Jyk7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKHN0YXJ0VmFsdWUgPT0gdGFyZ2V0VmFsdWUpIHtcclxuXHRcdFx0JChcIi50YXJnZXQtYmxvY2tcIikucmVtb3ZlQ2xhc3MoJ2NvbXBsZXRlZC1ibG9jaycpO1xyXG5cdFx0XHQkKFwiLnByb2dyZXNzLWxlZnRcIikucmVtb3ZlQ2xhc3MoJ2NvbXBsZXRlZC10ZXh0Jyk7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKGVuZFZhbHVlID09IHRhcmdldFZhbHVlKSB7XHJcblx0XHRcdFx0JChcIi50YXJnZXQtYmxvY2tcIikuYWRkQ2xhc3MoJ2NvbXBsZXRlZC1ibG9jaycpO1xyXG5cdFx0XHRcdCQoXCIucHJvZ3Jlc3MtbGVmdFwiKS5hZGRDbGFzcygnY29tcGxldGVkLXRleHQnKTtcclxuXHRcdFx0fVxyXG5cdFx0XHQkKFwiLmFtb3VudC1sZWZ0XCIpLmh0bWwoXCIkXCIgKyBhbW91bnRMZWZ0VG9UYXJnZXQpO1xyXG5cdFx0fSwgYW5pbWF0aW9uVGltZSk7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBzZXRDdXJyZW50VmFsdWUobmV3VmFsdWUpIHtcclxuXHRcdGxldCB2YWx1ZSA9IG5ld1ZhbHVlO1xyXG5cdFx0YW5pbWF0ZVZhbHVlQ2hhbmdlUHJvZ3Jlc3MoY3VycmVudFZhbHVlLCB2YWx1ZSk7XHJcblx0XHRjdXJyZW50VmFsdWUgPSB2YWx1ZTtcclxuXHR9XHJcblxyXG5cdHRoaXMuc2V0Q3VycmVudFZhbHVlID0gZnVuY3Rpb24obmV3VmFsdWUpIHtcclxuXHRcdHNldEN1cnJlbnRWYWx1ZShuZXdWYWx1ZSk7XHJcblx0fVxyXG5cdFxyXG5cdHRoaXMuc2V0VGFyZ2V0VmFsdWUgPSBmdW5jdGlvbihuZXdUYXJnZXRWYWx1ZSkge1xyXG5cdFx0dGFyZ2V0VmFsdWUgPSBuZXdUYXJnZXRWYWx1ZTtcclxuXHR9XHJcblxyXG5cdHRoaXMudXBkYXRlQ3VycmVudFZhbHVlID0gZnVuY3Rpb24oZXZlbnQpIHtcclxuXHRcdGxldCBuZXdWYWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuXHRcdHNldEN1cnJlbnRWYWx1ZShuZXdWYWx1ZSk7IFxyXG5cdH1cclxuXHJcbn1cclxuXHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xyXG5cdHZhciByZXNwb25zZTtcclxuXHRcclxuXHR2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcblx0eGhyLm9wZW4oJ0dFVCcsICdodHRwOi8vYWxleC5kZXZlbC5zb2Z0c2VydmljZS5vcmcvdGVzdGFwaS8nLCBmYWxzZSk7XHJcblx0eGhyLnNlbmQoKTtcclxuXHRpZiAoeGhyLnN0YXR1cyAhPSAyMDApIHtcclxuXHRcdGFsZXJ0KFwi0JjQvdGE0L7RgNC80LDRhtC40Y8g0L3QtSDQv9C+0LvRg9GH0LXQvdCwXCIpO1xyXG5cdFx0dmFsdWVDb250cm9sbGVyLnNldEN1cnJlbnRWYWx1ZSgwKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0cmVzcG9uc2UgPSBKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpO1xyXG5cdH1cclxuXHJcblx0bGV0IHZhbHVlQ29udHJvbGxlciA9IG5ldyBWYWx1ZUNvbnRyb2xsZXIoMC4yLCAyMCk7XHJcblx0JChcIi5wcm9ncmVzcy1zbGlkZXJcIikuY2hhbmdlKHZhbHVlQ29udHJvbGxlci51cGRhdGVDdXJyZW50VmFsdWUpO1xyXG5cdCQoXCIucHJvZ3Jlc3Mtc2xpZGVyXCIpLm1vdXNlbW92ZSh2YWx1ZUNvbnRyb2xsZXIuYW5pbWF0ZVNsaWRlck1vdmVQcm9ncmVzcyk7XHJcblx0dmFsdWVDb250cm9sbGVyLnNldFRhcmdldFZhbHVlKDE1KTtcclxuXHR2YWx1ZUNvbnRyb2xsZXIuc2V0Q3VycmVudFZhbHVlKHJlc3BvbnNlLmJhbGFuY2VfdXNkKTtcclxuXHQkKFwiLnByb2dyZXNzLXNsaWRlclwiKS52YWx1ZSA9IHJlc3BvbnNlLmJhbGFuY2VfdXNkO1xyXG59KTsiXSwiZmlsZSI6InNvZnRzZXJ2aWNlLmpzIn0=

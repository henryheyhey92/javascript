document.querySelector('#btnCalculate')
        .addEventListener('click', function(){
            let weightInput = document.querySelector('#weight');
            //console.log(weightInput.value);
            let weight = parseFloat(weightInput.value);

            let heightInput = document.querySelector('#height');
            let height = parseFloat(heightInput.value);
            let bmi = 0;

            let unitOfMeasurement = document.querySelector('[name = "measurement"]:checked');

            if(unitOfMeasurement == 'metric')
            {
                 bmi = weight / height ** 2;
            }else{
                 bmi = weight / height ** 2 * 703;
            }

            
            //alert("Your bmi is"+ bmi);

            document.querySelector('#result').innerText = "Your bmi is "+bmi.toFixed(2);
        })
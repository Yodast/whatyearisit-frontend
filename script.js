fetch('https://whatyearisit-backend-psi-six.vercel.app/year')
	.then(response => response.json())
	.then(data => {
        console.log(data);
        document.querySelector('#year').textContent = data.year

		
	});
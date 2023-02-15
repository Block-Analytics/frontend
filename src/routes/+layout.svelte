<script>
	import '../app.css';
</script>

<slot />

<style lang="postcss">
	@font-face {
		font-family: 'Montserrat';
		font-weight: 400;
		src: local('Montserrat-Regular'),
			url('/fonts/Montserrat-Medium.ttf') format('truetype');
	}

	@font-face {
		font-family: 'Montserrat';
		font-weight: 300;
		src: local('Montserrat-Light'),
			url('/fonts/Montserrat-Light.ttf') format('truetype');
	}

	@font-face {
		font-family: 'Montserrat';
		font-weight: 200;
		src: local('Montserrat-Thin'),
			url('/fonts/Montserrat-Thin.ttf') format('truetype');
	}

	@font-face {
		font-family: 'Montserrat';
		font-weight: 500;
		src: local('Montserrat-Medium'),
			url('/fonts/Montserrat-Medium.ttf') format('truetype');
	}

	@font-face {
		font-family: 'Montserrat';
		font-weight: 600;
		src: local('Montserrat-SemiBold'),
			url('/fonts/Montserrat-SemiBold.ttf') format('truetype');
	}

	@font-face {
		font-family: 'Montserrat';
		font-weight: 800;
		src: local('Montserrat-Bold'),
			url('/fonts/Montserrat-Bold.ttf') format('truetype');
	}
	:global(body) {
        font-family: 'Montserrat', sans-serif;
	}
</style>

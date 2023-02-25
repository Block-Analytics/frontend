<script>
	import { onMount } from 'svelte';

	onMount(() => {
		const createSVG = (width, height, radius) => {
			const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

			const rectangle = document.createElementNS('http://www.w3.org/2000/svg', 'rect');

			svg.setAttributeNS('http://www.w3.org/2000/svg', 'viewBox', `0 0 ${width} ${height}`);

			rectangle.setAttribute('x', '0');
			rectangle.setAttribute('y', '0');
			rectangle.setAttribute('width', '100%');
			rectangle.setAttribute('height', '100%');
			rectangle.setAttribute('rx', `${radius}`);
			rectangle.setAttribute('ry', `${radius}`);
			rectangle.setAttribute('pathLength', '10');

			svg.appendChild(rectangle);

			return svg;
		};
		document.querySelectorAll('.sketch-button').forEach((button) => {
			const style = getComputedStyle(button);

			const lines = document.createElement('div');

			lines.classList.add('lines');

			const groupTop = document.createElement('div');
			const groupBottom = document.createElement('div');

			const svg = createSVG(
				button.offsetWidth,
				button.offsetHeight,
				parseInt(style.borderRadius, 10)
			);

			groupTop.appendChild(svg);
			groupTop.appendChild(svg.cloneNode(true));
			groupTop.appendChild(svg.cloneNode(true));
			groupTop.appendChild(svg.cloneNode(true));

			groupBottom.appendChild(svg.cloneNode(true));
			groupBottom.appendChild(svg.cloneNode(true));
			groupBottom.appendChild(svg.cloneNode(true));
			groupBottom.appendChild(svg.cloneNode(true));

			lines.appendChild(groupTop);
			lines.appendChild(groupBottom);

			button.appendChild(lines);

			button.addEventListener('pointerenter', () => {
				button.classList.add('start');
			});

			svg.addEventListener('animationend', () => {
				button.classList.remove('start');
			});
		});
	});
</script>

<div
	class="sketch-button font-semibold bg-[#38D900] text-sm text-black uppercase px-24 py-2 rounded-[30px] mt-6"
>
	<slot />
</div>
<div>
	<!-- style in div to bypass purging -->
	<style>
		.sketch-button {
			-webkit-tap-highlight-color: transparent;
			cursor: pointer;
			background-color: #38d900;
			position: relative;
			line-height: 24px;
			box-shadow: 0 1px 2px rgba(0, 0, 0), 0 4px 16px rgba(0, 0, 0), 0 4px 24px rgba(0, 0, 0);
		}
		.sketch-button.start svg {
			animation: stroke 1s linear;
		}
		.sketch-button .lines {
			position: absolute;
			inset: 0;
			mix-blend-mode: hard-light;
			pointer-events: none;
			z-index: 1;
		}
		.sketch-button .lines > div {
			position: absolute;
			inset: 0;
		}
		.sketch-button .lines > div:last-child {
			transform: rotate(180deg);
		}
		.sketch-button .lines > div svg {
			display: block;
			position: absolute;
			inset: 0;
			overflow: visible;
			fill: none;
			stroke-width: 1;
			stroke: #38d900;
			width: 100%;
			height: 100%;
			stroke-dasharray: 2 10;
			stroke-dashoffset: 14;
			opacity: 0;
		}
		.sketch-button .lines > div svg:nth-child(1) {
			stroke: #fff;
		}
		.sketch-button .lines > div svg:nth-child(2) {
			stroke-width: 6px;
			filter: blur(20px);
		}
		.sketch-button .lines > div svg:nth-child(3) {
			stroke-width: 5px;
			filter: blur(6px);
		}
		.sketch-button .lines > div svg:nth-child(4) {
			stroke-width: 10px;
			filter: blur(56px);
		}
		@keyframes stroke {
			30%,
			55% {
				opacity: 1;
			}
			100% {
				stroke-dashoffset: 4;
				opacity: 0;
			}
		}
	</style>
</div>

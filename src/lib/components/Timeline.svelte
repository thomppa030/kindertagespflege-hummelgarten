<script context="module" lang="ts">
	export function hexToRgb(hex: string): string {
		// Remove the hash at the start if it's there
		hex = hex.replace(/^#/, '');

		// Parse the hex color
		const bigint = parseInt(hex, 16);
		const r = (bigint >> 16) & 255;
		const g = (bigint >> 8) & 255;
		const b = bigint & 255;

		return `${r}, ${g}, ${b}`;
	}
</script>

<script lang="ts">
	export let scheduleItems: Array<{
		time: string;
		title: string;
		description: string;
		icon: string;
		color?: string;
	}> = [];

	let activeIndex = 0;

	const handleCircleClick = (index: number) => {
		activeIndex = index;
	};

	const handleKeyDown = (event: KeyboardEvent) => {
		if (event.key === 'ArrowDown' && activeIndex < scheduleItems.length - 1) {
			activeIndex++;
		} else if (event.key === 'ArrowUp' && activeIndex > 0) {
			activeIndex--;
		}
	};
</script>

<svelte:window on:keydown={handleKeyDown} />

<div class="timeline-wrapper">
	<div class="timeline-container">
		<div class="timeline-nav">
			<div class="timeline-line"></div>
			{#each scheduleItems as item, index}
				<button
					class="timeline-circle"
					class:active={activeIndex === index}
					on:click={() => handleCircleClick(index)}
					aria-label={`${item.time} - ${item.title}`}
					style="--circle-color: {item.color || '#3498db'}"
				>
					<span class="time-label">{item.time}</span>
				</button>
			{/each}
		</div>

		<div class="timeline-content">
			{#each scheduleItems as item, index}
				<div
					class="content-item"
					class:active={activeIndex === index}
					style="--item-color: {item.color || '#3498db'}"
				>
					<div class="content-header">
						<div
							class="icon-container"
							style="background-color: rgba({hexToRgb(item.color || '#3498db')}, 0.1)"
						>
							<span class="icon">{item.icon}</span>
						</div>
						<div class="header-text">
							<h3>{item.title}</h3>
							<span class="time-mobile">{item.time}</span>
						</div>
					</div>
					<p>{item.description}</p>
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
	.timeline-wrapper {
		background-color: #f9fafb;
		padding: 2rem 1rem;
		border-radius: 1rem;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
	}

	.timeline-container {
		display: grid;
		grid-template-columns: 160px 1fr;
		gap: 4rem;
		max-width: 1200px;
		margin: 0 auto;
		min-height: 700px;
	}

	.timeline-nav {
		position: relative;
		padding: 2rem 0;
	}

	.timeline-line {
		position: absolute;
		left: 20px;
		top: 2rem;
		bottom: 2rem;
		width: 4px;
		background: linear-gradient(to bottom, #e1e8ed, #e1e8ed);
		border-radius: 2px;
	}

	.timeline-circle {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 48px;
		height: 48px;
		margin: 0 0 2.5rem 0;
		background: white;
		border: 3px solid #e1e8ed;
		border-radius: 50%;
		cursor: pointer;
		transition: all 0.3s ease;
		z-index: 1;
	}

	.timeline-circle:last-child {
		margin-bottom: 0;
	}

	.timeline-circle:hover {
		transform: scale(1.1);
		border-color: var(--circle-color);
		box-shadow: 0 0 0 5px rgba(52, 152, 219, 0.1);
	}

	.timeline-circle.active {
		background: var(--circle-color);
		border-color: var(--circle-color);
		transform: scale(1.15);
		box-shadow: 0 0 0 8px rgba(52, 152, 219, 0.15);
	}

	.time-label {
		position: absolute;
		left: calc(100% + 1.5rem);
		white-space: nowrap;
		font-size: 0.95rem;
		font-weight: 500;
		color: #5a6c7d;
		transition: color 0.3s ease;
	}

	.timeline-circle.active .time-label {
		color: var(--circle-color);
		font-weight: 600;
	}

	.timeline-content {
		position: relative;
		padding: 2rem 0;
	}

	.content-item {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		opacity: 0;
		transform: translateY(20px);
		transition: all 0.4s ease;
		pointer-events: none;
	}

	.content-item.active {
		opacity: 1;
		transform: translateY(0);
		pointer-events: auto;
	}

	.content-header {
		display: flex;
		align-items: center;
		gap: 1.5rem;
		margin-bottom: 1.5rem;
	}

	.icon-container {
		display: flex;
		align-items: center;
		justify-content: center;
		min-width: 4.5rem;
		height: 4.5rem;
		border-radius: 1.25rem;
		padding: 0.75rem;
	}

	.icon {
		font-size: 3rem;
		line-height: 1;
		color: var(--item-color);
	}

	.header-text {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	h3 {
		font-size: 2.25rem;
		color: #2c3e50;
		font-weight: 500;
		margin: 0;
		line-height: 1.3;
	}

	.time-mobile {
		display: none;
	}

	p {
		font-size: 1.25rem;
		line-height: 1.8;
		color: #5a6c7d;
		margin: 0;
		max-width: 800px;
		padding-left: 5.5rem;
	}

	@media (max-width: 768px) {
		.timeline-container {
			grid-template-columns: 100px 1fr;
			gap: 2rem;
		}

		.timeline-circle {
			width: 36px;
			height: 36px;
		}

		.time-label {
			font-size: 0.8rem;
			left: calc(100% + 0.75rem);
		}

		h3 {
			font-size: 1.75rem;
		}

		p {
			font-size: 1.125rem;
			padding-left: 4rem;
		}

		.icon {
			font-size: 2.5rem;
		}
	}

	@media (max-width: 480px) {
		.timeline-container {
			display: block;
		}

		.timeline-nav {
			display: none;
		}

		.content-item {
			position: static;
			opacity: 1;
			transform: none;
			margin-bottom: 2rem;
			padding: 1.5rem;
			background: white;
			border-radius: 1rem;
			box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
		}

		.content-item:not(:last-child) {
			border-bottom: 1px solid #e1e8ed;
		}

		.content-header {
			position: relative;
			align-items: flex-start;
		}

		.time-mobile {
			display: block;
			position: absolute;
			top: 0;
			right: 0;
			background: var(--item-color);
			color: white;
			padding: 0.25rem 0.75rem;
			border-radius: 1rem;
			font-size: 0.75rem;
			font-weight: 500;
		}

		.icon-container {
			min-width: 3.5rem;
			height: 3.5rem;
			border-radius: 1rem;
		}

		.icon {
			font-size: 2.25rem;
		}

		p {
			padding-left: 0;
			font-size: 1rem;
		}
	}
</style>


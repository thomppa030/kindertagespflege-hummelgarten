<script>
	import { page } from '$app/stores';

	let mobileMenuOpen = false;

	const toggleMobileMenu = () => {
		mobileMenuOpen = !mobileMenuOpen;
	};

	const menuItems = [
		{ href: '/', label: 'Start' },
		{ href: '/konzept', label: 'Konzept' },
		{ href: '/ueber-mich', label: 'Über mich' },
		{ href: '/kontakt', label: 'Kontakt' }
	];
</script>

<header class="header">
	<div class="container">
		<nav class="nav">
			<a href="/" class="logo">
				<img src="/Hummel.svg" alt="Hummelgarten Logo" class="logo__icon" />
				<div class="logo__text">
					<span class="logo__name">Kindertagespflege</span>
					<span class="logo__subname">Hummelgarten</span>
				</div>
			</a>

			<button
				class="mobile-menu-toggle"
				on:click={toggleMobileMenu}
				aria-label="Menü öffnen"
				aria-expanded={mobileMenuOpen}
			>
				<span class="hamburger"></span>
				<span class="hamburger"></span>
				<span class="hamburger"></span>
			</button>

			<ul class="nav__list" class:nav__list--open={mobileMenuOpen}>
				{#each menuItems as item}
					<li class="nav__item">
						<a
							href={item.href}
							class="nav__link"
							class:nav__link--active={$page.url.pathname === item.href}
							on:click={() => (mobileMenuOpen = false)}
						>
							{item.label}
						</a>
					</li>
				{/each}
			</ul>
		</nav>
	</div>
</header>

<style>
	.header {
		background-color: var(--color-warm-white);
		box-shadow: var(--shadow-sm);
		position: sticky;
		top: 0;
		z-index: 100;
		transition: all var(--transition-base);
	}

	.nav {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: var(--space-lg) 0;
	}

	.logo {
		display: flex;
		align-items: center;
		gap: var(--space-sm);
		text-decoration: none;
		color: var(--color-text-primary);
		transition: transform var(--transition-base);
	}

	.logo:hover {
		transform: translateY(-1px);
		text-decoration: none;
	}

	.logo__icon {
		width: 8.5rem;
		height: 8.5rem;
		object-fit: contain;
	}

	.logo__text {
		display: flex;
		flex-direction: column;
		line-height: 1.2;
	}

	.logo__name {
		font-family: var(--font-primary);
		font-size: var(--text-base);
		font-weight: 600;
		color: var(--color-text-primary);
	}

	.logo__subname {
		font-family: var(--font-primary);
		font-size: var(--text-lg);
		font-weight: 400;
		color: var(--color-accent);
	}

	.mobile-menu-toggle {
		display: none;
		flex-direction: column;
		gap: 4px;
		background: none;
		border: none;
		cursor: pointer;
		padding: var(--space-xs);
		margin-right: calc(-1 * var(--space-xs));
	}

	.hamburger {
		display: block;
		width: 24px;
		height: 2px;
		background-color: var(--color-text-primary);
		transition: all var(--transition-fast);
		transform-origin: center;
	}

	.mobile-menu-toggle[aria-expanded='true'] .hamburger:nth-child(1) {
		transform: translateY(6px) rotate(45deg);
	}

	.mobile-menu-toggle[aria-expanded='true'] .hamburger:nth-child(2) {
		opacity: 0;
	}

	.mobile-menu-toggle[aria-expanded='true'] .hamburger:nth-child(3) {
		transform: translateY(-6px) rotate(-45deg);
	}

	.nav__list {
		display: flex;
		gap: var(--space-xl);
		list-style: none;
		margin: 0;
		padding: 0;
	}

	.nav__link {
		font-family: var(--font-secondary);
		font-size: var(--text-base);
		font-weight: 500;
		color: var(--color-text-secondary);
		text-decoration: none;
		padding: var(--space-xs) 0;
		position: relative;
		transition: color var(--transition-fast);
	}

	.nav__link::after {
		content: '';
		position: absolute;
		bottom: -2px;
		left: 0;
		right: 0;
		height: 2px;
		background-color: var(--color-accent);
		transform: scaleX(0);
		transition: transform var(--transition-base);
	}

	.nav__link:hover,
	.nav__link--active {
		color: var(--color-text-primary);
		text-decoration: none;
	}

	.nav__link:hover::after,
	.nav__link--active::after {
		transform: scaleX(1);
	}

	@media (max-width: 768px) {
		.mobile-menu-toggle {
			display: flex;
		}

		.nav__list {
			position: fixed;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			background-color: var(--color-warm-white);
			flex-direction: column;
			align-items: center;
			justify-content: center;
			gap: var(--space-2xl);
			transform: translateX(100%);
			transition: transform var(--transition-base);
			z-index: 99;
		}

		.nav__list--open {
			transform: translateX(0);
		}

		.nav__link {
			font-size: var(--text-xl);
		}
	}
</style>

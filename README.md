PXG-drawer
===========

PXG-drawer provides Facebook like side menu. PXG-drawer is like an independent component and post-attachable to your web page

PXG-drawer は Facebook のようなサイドメニューを実現できます。独立したコンポーネントになっているため、後付けであなたの Web ページに追加することもできます。

## Supported

- IE9 (no animation)
- IE10
- Chrome
- Firefox
- Safari
- iOS Safari
- Android Browser 4.3

Not tested on Android 4.2 and below but supposed to work, hopefully...

## Examples

- [Plane](http://yomotsu.github.io/PXG-drawer/examples/plane.html)
- [Fixed Header Combo](http://yomotsu.github.io/PXG-drawer/examples/header.html)

## Usage

Just include css and js file.

```html
<link rel="stylesheet" href="PXG-drawer.css">
<script src="PXG-drawer.js"></script>
```

Then, put the menu in the `body` element

```html
<body>

<div class="PXG-drawer">
	<div class="PXG-drawer__panel">
		<div class="PXG-drawer__panelViewport">
			<div class="PXG-drawer__panelBody">
				You can change bellow...
				<ul>
					<li>nav item1</li>
					<li>nav item2</li>
					<li>nav item3</li>
				</ul>
			</div>
		</div>
	</div>
	<div class="PXG-drawer__bg"></div>
</div>

your contents...
```

Then, add controls to show / hide the menu, with `data-sidebar-show` and `data-sidebar-hide` attributes.

It supposed to be like this.

```html
<body>

<div class="PXG-drawer">
	<div class="PXG-drawer__panel">
		<div class="PXG-drawer__panelViewport">
			<div class="PXG-drawer__panelBody">
		    <button data-sidebar-hide>hide</button>
				<ul>
					<li>nav item1</li>
					<li>nav item2</li>
					<li>nav item3</li>
				</ul>
			</div>
		</div>
	</div>
	<div class="PXG-drawer__bg"></div>
</div>

<button data-sidebar-show>show</button>
your contents...
```

Thats it!

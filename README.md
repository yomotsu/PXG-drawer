PXG-sidePanel
===========

PXG-sidePanel is probide Facebook like side menu

## Examples

- [Plane](http://yomotsu.github.io/PXG-sidePanel/examples/plane.html)

## Usage

Just include css and js file.

```html
<link rel="stylesheet" href="PXG-sidePanel.css">
<script src="PXG-sidePanel.js"></script>
```

Then, put the menu in the `body` element

```html
<body>

<div class="PXG-sidePanel">
	<div class="PXG-sidePanel__inner">
		<ul>
			<li>nav item1</li>
			<li>nav item2</li>
			<li>nav item3</li>
		</ul>
	</div>
</div>

your contents...
```

Then, add controls to show / hide the menu, with `data-sidebar-show` and `data-sidebar-hide` attributes.

It supposed to be like this.

```html
<body>

<div class="PXG-sidePanel">
	<div class="PXG-sidePanel__inner">
    <button data-sidebar-hide>hide</button>
		<ul>
			<li>nav item1</li>
			<li>nav item2</li>
			<li>nav item3</li>
		</ul>
	</div>
</div>

<button data-sidebar-show>show</button>
your contents...
```

Thats it!

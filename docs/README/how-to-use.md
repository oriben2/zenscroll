## How to use


### 1. Smooth scroll within your page

If Zenscroll is included in your page it will automatically animate the scrolling to anchors on the same page. 

However, automatic smooth scrolling is not enabled in these two cases:

1. If you set `window.noZensmooth` to a non-falsy value (see [above](#disablingautomaticsmoothingonlocallinks)).
2. If the `scroll-behavior` CSS property is set to `smooth` on the `body` (see [above](#enablingnativesmooth-scrollinginthebrowser)).

If you want only some of the links to be excluded from the automatic smoothing then start with the path of the page. E.g., instead of writing `<a href="#about">` use `<a href="/#about">`.

Automatic smooth scrolling works with content you dynamically load via AJAX, as Zenscroll uses a generic click handler. Internal links are intentionally not added to the history to save the users from having to hit the Back button too many times afterwards. Since the automatic smooth-scrolling is implemented a progressive enhancement, all internal links still work even in old browsers.


### 2. Scroll to the top of an element

````js
var about = document.getElementById("about")
zenscroll.to(about)
````

Note that Zenscroll intentionally leaves a few pixels (by default 9px) from the edges of the screen or scolling container. If you have a fixed navigation bar or footer bar then you probably need more than that. Or you may want to set it to zero. You can globally override the default value by calling `zenscroll.setup()` (see below) or with the `edgeOffset` parameter of the constructor when you create a scroller for a DIV.


### 3. Scroll to a specific vertical position

````js
zenscroll.toY(50)
````


### 4. Scroll an element into view 

If the element is already fully visible then no scroll is performed. Otherwise Zenscroll will try to make both top & bottom of element visible, if possible. If the element is higher than the visible viewport then it will simply scroll to the top of the element. 

````js
zenscroll.intoView(image1)
````

Tip: If you resize an element with a transition of 500ms, you can postpone calling zenscroll with that amount of time:

````js
image.classList.remove("is-small")
setTimeout(function () { 
    zenscroll.intoView(image2) 
}, 500)
````


### 5. Scrolls the element to the center of the screen

````js
zenscroll.center(image2)
````

If you want you can also define an offset. The top of the element will be upwards from the center of the screen by this amount of pixels. (By default offset is the half of the element’s height.)

````js
var duration = 500 // miliseconds
var offset = 200 // pixels
zenscroll.center(image2, duration, offset)
````

Note that a zero value for offset is ignored. You can work around this by using `zenscroll.toY()`.


### 6. Set the duration of the scroll

The default duration is 999 which is ~1 second. The duration is automatically reduced for elements that are very close. You can specifically set the duration for each scroll function via an optional second parameter. (Note that a value of zero for duration is ignored.)

Examples:

````js
zenscroll.toY(50, 100) // 100ms == 0.1 second
````

````js
zenscroll.to(about, 500) // 500ms == half a second
````

````js
zenscroll.center(image2, 2000) // 2 seconds
````


### 7. Scroll inside a scrollable DIV

Anything you can do within the document you can also do inside a scrollable element. You just need to instantiate a new scoller for that element. It also falls back by default to the native browser smooth-scrolling if available (which can be overridden via `setup()`).

Example:

````html
<div id="container">
  <div id="item1">ITEM 1</div>
  <div id="item2">ITEM 2</div>
  <div id="item3">ITEM 3</div>
  <div id="item4">ITEM 4</div>
  <div id="item5">ITEM 5</div>
  <div id="item6">ITEM 6</div>
  <div id="item7">ITEM 7</div>
</div>

<script>
  var defaultDuration = 500
  var edgeOffset = 4
  var myDiv = document.getElementById("container")
  var myScroller = zenscroll.createScroller(myDiv, defaultDuration, edgeOffset)
  var target = document.getElementById("item4")
  myScroller.center(target)
</script>
````

Obviously you can use all other scroll functions and parameters with the scrollable container. Two more examples:

````js
myScroller.toY(35)
````

````js
myScroller.intoView(target, 750)
````


### 8. Change settings

It’s easy to change the basic parameters of scrolling:

- You can set the default value for duration. This will be valid for internal scrolls and all your direct scroll calls where you don’t specify a duration.
- Change the edge offset (the spacing between the element and the screen edge). If you have a fixed navigation bar or footer bar then set the offset to their height.

````js
var defaultDuration = 777 // ms
var edgeOffset = 42 // px
zenscroll.setup(defaultDuration, edgeOffset)
````

You can change custom scrollers similarly:

````js
myScroller.setup(500, 10)
````

If you don’t want to change a value just omit the parameter or pass `null`. For example, the line below sets the default duration, while leaving other settings unchanged:

````js
zenscroll.setup(777)
````

Sets the the spacing between the edge of the screen (or a DIV) and the target element you are scrolling to, while leaving the default duration unchanged:

````js
zenscroll.setup(null, 42)
````


### 9. Controlling the smooth operation

To check whether a scoll is being performed right now:

````js
var isScrolling = zenscroll.moving()
````

To stop the current scrolling:

````js
zenscroll.stop()
````
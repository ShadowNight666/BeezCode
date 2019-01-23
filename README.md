
![](https://github.com/ShadowNight666/BeezCode/images/banner.png)
# Overview

BeezCode is a simple tool that allows you to put syntax highlighting to your codes on your sites. This is internally configurable if you want to have more syntax or change something.

# Installation

Import BeezCode into your html such as:
```html
<script  src="./BeezCode.js"></script>
```

To use BeezCode, add your code in a ``<pre>`` tag with the class ``beez``, like:
```html
<pre class="beez">
class regex:
	def __init__(self, obj, regex):
	  self.obj = obj
	  self.regex = regex
  
	def __call__(self, *args):
	  def regex_method(text=None):
		return [x.strip() for x in self.regex.findall(text or self.obj.text)]
	  return regex_method
</pre>
```

# Configuration

BeezCode has 2 parts: the configuration part and the syntax part.
To create a new syntax, simply add in the variable ``syntaxes``:

```json
your_group_name: {

	// Liste of your patterns as regex
	patterns: [
		"my",
		"patterns",
		"as",
		"regex",
		"here"
	],
	
	// All css. You can add what you want as style. Think to replace "-" in your style name with "_"
	css: {
		color:  "#246fe2"
	}
}
```
You can create a "dynamic" pattern, like:
```json
{"your pattern": {
	get: [1]
}}
```
The "get" method will return matched group (in the example above, it will return the matched group ``1`` as pattern). You can return a lot of group because it's an array.
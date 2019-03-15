
![](https://raw.githubusercontent.com/ShadowNight666/BeezCode/master/images/banner.png)

# Summary

 * [Overview](#overview)
 * [Installation](#installation)
 * [Configuration](#configuration)
 * [Screenshots](#screenshots)
 * [Help us!](#help_us)

# Overview

BeezCode is a simple tool that allows you to put syntax highlighting to your codes on your sites. This is internally configurable if you want to have more syntax or change something.

# Why BeezCode?

 - [x] Simple to use
 - [x] Documented and explained
 - [x] Easy to configure
 - [x] Fast
 - [x] Let your imagination run free and create easily your own syntax highlighting

# Installation

Import BeezCode into your html such as:
```html
<script  src="https://gitcdn.link/repo/ShadowNight666/BeezCode/master/src/BeezCode.js"></script>
```
If the link doesn't work/is dead, create a new one using [GitCDN](https://gitcdn.link) and this link:
```
https://raw.githubusercontent.com/ShadowNight666/BeezCode/master/src/BeezCode.js
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

```js
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
```js
{"your pattern": {
	get: [1]
}}
```
The "get" method will return matched group (in the example above, it will return the matched group ``1`` as pattern). You can return a lot of group because it's an array.

# Screenshots:

### Python example:
![](https://raw.githubusercontent.com/ShadowNight666/BeezCode/master/images/python_example.PNG)

### Java example:
![](https://raw.githubusercontent.com/ShadowNight666/BeezCode/master/images/java_example.PNG)

# Help us

For the moment, I'm alone on this project. Your participation would help me to improve it and make it better. I'm not perfect in my code and I still have a lot to learn. Feel free to make [Pull Requests](https://github.com/ShadowNight666/BeezCode/pulls) when you want to make your patterns and syntax highlighting public. Don't forget to make an [Issue](https://github.com/ShadowNight666/BeezCode/issues) in case of a problem, or even just to suggest a new idea or improvement.

Thank you very much to the people who are involved in my project.

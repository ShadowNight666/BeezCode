const config = {
	css: {
		background_color: "#161719",
		font_size: "15px",
		color: "white"
	}
	
}

const syntaxes = {
	declarations: {
		patterns: [
			// Javascript
			"const|var|let",

			// Java
			"(public|private|protected)",
			"private",
			"protected",
			"static",
			"synchronized",
			"void",

			// All
			"this",
			"self",
			"new",
			"super"
		],
		css: {
			color: "#246fe2"
		}
	},
	functions: {
		patterns: [
			// Functionnal languages
			"function",

			// Elixir language
			"defp?",

			// All languages
			{
				"([a-zA-Z0-9]+)\\(": {
					get: [1]
				}
			}
		],
		css: {
			color: "#d10ac7"
		}
	},
	loops: {
		patterns: [
			"for",
			"forEach"
		],
		css: {
			color: "#246fe2"
		}
	},
	imports: {
		patterns: [
			"require",
			"import",
			"class",
			"package",
			"include"
		],
		css: {
			color: "#fbff23",
			font_weight: "bold"
		}
	},
	inheritance: {
		patterns: [
			// Java
			"implements",
			"extends"
		],
		css: {
			color: "#f23e3e"
		}
	},
	errors: {
		patterns: [
			"try|catch"
		],
		css: {
			color: "#f23e3e"
		}
	},
	returns: {
		patterns: [
			"return"
		],
		css: {
			color: "#6497e5"
		}
	},
	comments: {
		patterns: [
			"\/\/.*",
			"\%.*"
		],
		css: {
			color: "#5e7f43"
		}
	},
	strings: {
		patterns: [
			"\".*\""
		],
		css: {
			color: "#f9ad2a"
		}
	}
}

document.addEventListener('DOMContentLoaded', () => {
	let codes = document.getElementsByClassName("beez")
	for (i = 0; i < codes.length; i++) {
		for (setting in config.css) {
			codes[i].style[setting.replace(/\_/gm, "-")] = config.css[setting];
		}

		let code = codes[i].innerHTML;

		for (group in syntaxes) {

			let css = 'style=&quot;';

			for (attribut in syntaxes[group].css) {	
				css = css + attribut.replace(/\_/gm, "-") + ': ' + syntaxes[group].css[attribut] + ';';
			}

			css = css + '&quot;';

			syntaxes[group].patterns.forEach(pattern => {
					
				if (typeof pattern === "object") {
					for (pattern in syntaxes[group].patterns.find(o => typeof o === "object")) {
						syntaxes[group].patterns.find(o => typeof o === "object")[pattern].get.forEach(match => {
							let matcher = new RegExp(pattern, "gm").exec(code);
							if (matcher != null) {
								code = code.replace(
									matcher[match],
									'<span ' + css + '>' + matcher[match] + '</span>'
								);
							}
								
						});
					}
					
				} else {
					code = code.replace(
						new RegExp(pattern, "gm"),
						'<span ' + css + '>$&</span>'
					);
				}
		
			});
		}

		code = code.replace(/\&quot\;/gm, '"');
		codes[i].innerHTML = code;
	}
})
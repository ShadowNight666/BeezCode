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
			"const",
			"var",
			"let",
			"public",
			"private",
			"protected",
			"this",
			"self"
		],
		css: {
			color: "#246fe2"
		}
	},
	functions: {
		patterns: [
			"function",
			"defp?"
		],
		css: {
			color: "#d10ac7"
		}
	},
	imports: {
		patterns: [
			"require",
			"import",
			
			{
				"class (\\w+)": {
					get: [1]
				}
			}
		],
		css: {
			color: "#fbff23",
			font_weight: "bold"
		}
	},
	returns: {
		patterns: [
			"return"
		],
		css: {
			color: "#6497e5"
		}
	}
}

window.onload = function() {
	let codes = document.getElementsByClassName("beez")
	for (i = 0; i < codes.length; i++) {
		for (setting in config.css) {
			codes[i].style[setting.replace(/\_/gm, "-")] = config.css[setting]
		}

		let code = codes[i].innerHTML

		for (group in syntaxes) {

			syntaxes[group].patterns.forEach(pattern => {
				for (attribut in syntaxes[group].css) {
					if (typeof pattern === "object") {
						for (pattern in syntaxes[group].patterns.find(o => typeof o === "object")) {
							syntaxes[group].patterns.find(o => typeof o === "object")[pattern].get.forEach(match => {
								if (code.match(pattern)) {
									let matcher = code.match(pattern)[0]
									matcher = matcher.replace(
										code.match(pattern)[match],
										'<span style="' + attribut.replace(/\_/gm, "-") + ': ' + syntaxes[group].css[attribut] + '">' + code.match(pattern)[match] + '</span>'
									)

									code = code.replace(
										new RegExp("\\b" + code.match(pattern)[0] + "\\b", "gm"),
										matcher
									)
								}
								
							})
						}
					} else {
						code = code.replace(
							new RegExp("\\b" + pattern + "\\b", "gm"),
							'<span style="' + attribut.replace(/\_/gm, "-") + ': ' + syntaxes[group].css[attribut] + '">$&</span>'
						)
					}
					
				}
		
			});
		}

		codes[i].innerHTML = code
	}
}
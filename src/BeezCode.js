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
			"class"
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
	},
	comments: {
		patterns: [
			{
				"^\/\/(.+)": {
					get: [0]
				}
			}
		],
		css: {
			color: "#5e7f43"
		}
	}
}

document.addEventListener('DOMContentLoaded', () => {
	let codes = document.getElementsByClassName("beez")
	for (i = 0; i < codes.length; i++) {
		for (setting in config.css) {
			codes[i].style[setting.replace(/\_/gm, "-")] = config.css[setting]
		}

		let code = codes[i].innerHTML

		for (group in syntaxes) {

			let css = 'style="';

			for (attribut in syntaxes[group].css) {	
				css = css + attribut.replace(/\_/gm, "-") + ': ' + syntaxes[group].css[attribut] + ';';
			}

			css = css + '"';

			syntaxes[group].patterns.forEach(pattern => {
					
				if (typeof pattern === "object") {
					for (pattern in syntaxes[group].patterns.find(o => typeof o === "object")) {
						syntaxes[group].patterns.find(o => typeof o === "object")[pattern].get.forEach(match => {
							let matcher = new RegExp(pattern, "gm").exec(code);
							if (matcher != null) {
								code = code.replace(
									matcher[match],
									'<span ' + css + '>' + matcher[match] + '</span>'
								)
							}
								
						})
					}
					
				} else {
					code = code.replace(
						new RegExp(pattern, "gm"),
						'<span ' + css + '>$&</span>'
					)
				}
		
			});
		}

		codes[i].innerHTML = code
	}
})
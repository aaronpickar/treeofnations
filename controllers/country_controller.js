import Country from '../models/country.js'

class CountryController {
	constructor(){
		this.showCountry = this.showCountry.bind(this);
	}

	showCountry(req,res){
		//pull URL parameter and extract country_htmlref (from app.js)
		var country_htmlref = req.params.country_htmlref;
		// execute a query on Country class (countries table) to extract an instance based on the URL parameter grabbed above.  '.then' is a promise where 'country' variable must be filled before executing the next nested steps
		Country.findByHtmlRef(country_htmlref).then(function(country){
			//if URL is not set correctly then return 404 error
			if(country == null) {
				res.send(404);
			}
			console.log(country);

			country.pageContent().then(function(page_content){
			
				country.pageDescription().then(function(page_description){
					console.log(page_description);

					//creates empty array
					var sections = {};
					page_content.forEach(function(content) {
						//puts section column of country_pages_content table into a variable
						var section = content.get('section');
						//if the section has been created, then add to it
						if (sections[section] != null){
							//adds the json key (section) if the section already exists
							sections[section]['content'].push(content.attributes)
						} else {
							// if the json key (section) doesn't exist, then create a new object/section
							sections[section] = {section: section, content: [content.attributes]};
						}
					});

					 console.log(sections);

					res.render('country', {
						title: country.get('name'),
						// sends the name from the countries table of the current instance
						name: country.get('name'),

						description: page_description.get('description'),
						//send the 'sections' array to handlebars of the current instance
						page_content: sections
					});
				});
			});
		});
	}
}
//export for us in app.js
module.exports = CountryController;
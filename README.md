# SearchData for SEO Extension AppScript

SearchData for SEO is a Google Sheets extension developed with Google Apps Script. The extension interacts with Google Search Console API to pull in SEO data for your specific properties. You can select your property, specify the date range, and apply various filters to refine the queries or pages data you wish to obtain.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

With this extension, you can:

- Pull data from Google Search Console API directly into Google Sheets.
- Select specific properties to focus on.
- Specify a date range for the data you want to retrieve.
- Apply filters to refine the queries or pages data.

## Installation

To use this extension:

1. Clone or download this repository to your local machine.
2. Open your Google Sheets document.
3. Click on `Extensions` > `Apps Script`.
4. Delete any code in the script editor and replace it with the contents of the files from this repository.
5. Click `File` > `Save` to save the AppScript.

## Usage

After installation, use the custom formulas provided by this extension to pull data from Google Search Console:

- `SEARCHDATA_PROPERTY("your-property")`: Replace "your-property" with your property name to select a specific property.
- `SEARCHDATA_DATE("yyyy-mm-dd", "yyyy-mm-dd")`: Replace "yyyy-mm-dd" with the start and end dates to specify a date range.
- `SEARCHDATA_FILTER("filter")`: Replace "filter" with your filter condition to refine the queries or pages data.

You can also do it inside `Code.js` file in getGSCData function or getGSCDataCheck funtion.

## Contributing

Contributions to this project are welcome. If you find a bug or have a suggestion for improvement, please open an issue to discuss it or submit a pull request with your changes.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

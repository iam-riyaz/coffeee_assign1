
# Teach stack and packages

* ReactJS
* Redux
* Redux Persist
* Tailwind CSS
* Formik




## Installation

Install project with npm

```bash
  npm install 
  npm run dev
```
    
## Documentation

### Application Flow

- there is a create *create company* form which as the *formik* ans *yup* form validation

- after successful creation of company the company details will be shown below in the page (overview).

- only after having atleast one company user can create office corresponding to the office, which can be choosen from compeny's drop-down.

- office will only be created after all details is filled in the form.

- on clicking the office detail card the new office page will open where your can see all compeny data as well as all related office data based on cards.

- on clicking the cross icon in company card and office card the card can be deleted from the redux Store as we are not using any databases here.

- in this app we are using Redux persist which save the redux state in local system to prevent rerendering and save data incase of refresh the browser.


## Data model

```bash
  {compay:
{companies:[
{
name: company name,
address:address,
revenue: number
phoneNumber: number,
offices:[
              Name: office name,
              Latitude: number,
              Longitude: number,
               date: date ,
                Company: company ID
               ]
}
]
}
}
```






## Demo

https://coffeee-assign.vercel.app/


export const apiUrl = 'http://127.0.0.1:3001/api'
export const apiUrlPeople = apiUrl + '/employees'

export const addEmployeesFormFields = [
  {
    name: 'First Name',
    camelCase: 'firstName',
    type: 'text',
    required: true,
    def: 'Oliver'
  },
  {
    name: 'Family Name',
    camelCase: 'familyName',
    type: 'text',
    required: true,
    def: 'Plummer'
  },
  {
    name: 'Gender',
    camelCase: 'gender',
    type: 'selection',
    required: true,
    selections: [
      { name: 'Male', camelCase: 'male' },
      { name: 'Female', camelCase: 'female' },
      { name: 'Other', camelCase: 'other' }
    ]
  },
  {
    name: 'Date of Birth',
    camelCase: 'dob',
    type: 'date',
    required: true,
    def: {
      year: 2000,
      month: 3,
      day: 22
    }
  },
  {
    name: 'Phone Number',
    camelCase: 'mobileNumber',
    type: 'mobileNumber',
    required: true
  },
  {
    name: 'Email',
    camelCase: 'email',
    type: 'email',
    required: true,
    def: 'oliver.plummer@outlook.com'
  },
  {
    name: 'State/Territory',
    camelCase: 'state',
    type: 'selection',
    required: true,
    def: 2,
    selections: [
      { name: 'Australian Capital Territory', camelCase: 'act' },
      { name: 'Jervis Bay Territory', camelCase: 'jby' },
      { name: 'New South Wales', camelCase: 'nsw' },
      { name: 'Northern Territory', camelCase: 'nt' },
      { name: 'Queensland', camelCase: 'qld' },
      { name: 'South Australia', camelCase: 'sa' },
      { name: 'Tasmania', camelCase: 'tas' },
      { name: 'Victoria', camelCase: 'vic' },
      { name: 'Western Australia', camelCase: 'wa' },
    ]
  },
  {
    name: 'Would you like to recieve emails from us?',
    camelCase: 'emailUpdates',
    type: 'boolean',
    required: true,
    booleanText: 'Yes/No',
    def: false
  }
]
